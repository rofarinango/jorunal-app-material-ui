import { useMemo } from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid2, TextField, Typography,Button, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'


export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'fernando@google.com',
    password: '123456'
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginWithEmailPassword({email, password}) );
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
    
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={ onSubmit } className= 'animate__animated animate__fadeIn animate__faster'>
          <Grid2 container>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name='email'
                value={ email }
                onChange={onInputChange}
              />
            </Grid2>
            <Grid2 size={{xs: 12}} sx={{mt: 2}}>
              <TextField
                label="Contrasena"
                type="password" 
                placeholder="Contrasena"
                fullWidth
                name='password'
                value={ password }
                onChange={onInputChange}
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{xs:12}} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{xs:12, sm: 6}}>
              <Button 
                disabled={ isAuthenticating }
                type="submit" 
                variant='contained' 
                fullWidth>
                Login
              </Button>
            </Grid2>
            <Grid2 size={{xs:12, sm: 6}}>
              <Button
                disabled={ isAuthenticating }
                variant='contained' 
                fullWidth
                onClick={onGoogleSignIn}>
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container direction='row' justifyContent='end'>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid2>
        </form>
    </AuthLayout>
  )
}
