import { useMemo, useState } from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Grid2, TextField, Typography, Button, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

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

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo(()=> status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  
   
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));

    console.log(formState);
    
  }

  return (
    <AuthLayout title='Crear Cuenta'>
      <h1>FormValid { isFormValid ? 'Valido': 'Incorrecto'}</h1>
      <form onSubmit={onSubmit} className= 'animate__animated animate__fadeIn animate__faster'> 
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
                  error= {!!displayNameValid && formSubmitted }
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
                error= {!!emailValid && formSubmitted }
                helperText={ emailValid }
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
                error= {!!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{xs:12}} display={ !!errorMessage ? '': 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid2>
            <Grid2 size={{xs:12}}>
              <Button disabled={ isCheckingAuthentication} type='submit' variant='contained' fullWidth>
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
