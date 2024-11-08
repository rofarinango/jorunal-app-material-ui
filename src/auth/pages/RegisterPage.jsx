import { Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid2, TextField, Typography, Button, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'fernando@google.com',
  password: '123456',
  displayName: 'Fernando Herrera'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres'],
  displayName: [(value) => value.length >=1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  console.log(displayNameValid);
  
   
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
    
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <form onSubmit={onSubmit}>
          <Grid2 container>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
                <TextField
                  label="Nombre Completo"
                  type="text" 
                  placeholder="John Doe"
                  fullWidth
                  name='displayName'
                  value={displayName}
                  onChange={ onInputChange }
                  error= {!displayNameValid }
                  helperText={ displayNameValid }
                />
            </Grid2>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email" 
                placeholder="john@doe.com"
                fullWidth
                name='email'
                value={email}
                onChange={ onInputChange }
              />
            </Grid2>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Contrasena"
                type="password" 
                placeholder="Contrasena"
                fullWidth
                name='password'
                value={password}
                onChange={ onInputChange }
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{xs:12}}>
              <Button type='submit' variant='contained' fullWidth>
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
