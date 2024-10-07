import { Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid2, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
      <form>
          <Grid2 container>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
                <TextField
                  label="Nombre Completo"
                  type="text" 
                  placeholder="John Doe"
                  fullWidth
                />
            </Grid2>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email" 
                placeholder="john@doe.com"
                fullWidth
              />
            </Grid2>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Contrasena"
                type="password" 
                placeholder="Contrasena"
                fullWidth
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{xs:12}}>
              <Button variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid2>
            
          </Grid2>
          <Grid2 container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>
              Ya tienes una cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid2>
        </form>
    </AuthLayout>
  )
}
