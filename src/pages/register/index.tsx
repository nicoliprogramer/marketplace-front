import { Container, Button, Grid, Paper, Box, Typography, TextField, Stack, Divider, Link, FormControlLabel, FormGroup, FormHelperText } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState, FC, useEffect} from "react";
import { literal, object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import Checkbox from '@mui/material/Checkbox';
import { useAppDispatch } from "../../redux/hooks";
import { signUp } from "../../redux/slices/auth.slice";

const registerSchema = object({
  username: string()
    .nonempty('Name is required')
    .max(32, 'Name must be less than 32 characters'),
  email: string().nonempty('Email is required').email('Email is invalid'),
  password: string()
    .nonempty('Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().nonempty('Please confirm your password'),
  terms: literal(true, {
    invalid_type_error: 'Accept Terms is required',
  }),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

type RegisterInput = TypeOf<typeof registerSchema>;

type RegisterType = { 
    username: string,
    email: string,
    password: string
}

export const RegisterPage: FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()
  const [registerData, setRegisterData] = useState<RegisterType>({
        username: "",
        email: "",
        password: ""
    })


    const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const dataRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterData({...registerData, [e.target.name]: e.target.value})
    }


  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
    dispatch(signUp(registerData))

  };
  
    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{minHeight: "100vh"}}>
                <Grid item>
                    <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                        <Typography sx={{mt:1, mb:1}} variant="h4">Sign Up</Typography>
                        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
                            <Stack spacing={4}>
                                <TextField margin="normal" type="text" fullWidth label="Username" sx={{mt:2, mb:0}} required error={!!errors['username']} helperText={errors['username'] ? errors['username'].message : ''} {...register('username')} onChange={dataRegister}/>
                                <TextField margin="normal" type="email" fullWidth label="Email" sx={{mt:2, mb:1.5}} required error={!!errors['email']} helperText={errors['email'] ? errors['email'].message : ''} {...register('email')} onChange={dataRegister}/>
                                <TextField margin="normal" type="password" fullWidth label="Password"sx={{mt:1.5, mb:1.5}} required error={!!errors['password']} helperText={errors['password'] ? errors['password'].message : ''} {...register('password')} onChange={dataRegister}/>
                                <TextField margin="normal" type="password" fullWidth label="Confirm password"sx={{mt:1.5, mb:1.5}} required error={!!errors['passwordConfirm']} helperText={errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''} {...register('passwordConfirm')}/>
                                <FormGroup>
                                    <FormControlLabel
                                         control={<Checkbox required />}
                                         {...register('terms')}
                                                 label={
                                                <Typography color={errors['terms'] ? 'error' : 'inherit'}>
                                                 Accept Terms and Conditions
                                                </Typography>
                                                         }
                                                         />
                                                <FormHelperText error={!!errors['terms']}>
                                                     {errors['terms'] ? errors['terms'].message : ''}
                                            </FormHelperText>
                                    </FormGroup>
                            </Stack>
                            <Divider sx={{mb:2}}/>
                            <Typography sx={{mt:1, mb:1}} fontSize="12px" variant="body2"><Link href="/login">Do you already have an account? Enter here.</Link></Typography>
                            <LoadingButton
                                variant='contained'
                                fullWidth
                                type='submit'
                                loading={loading}
                                sx={{ py: '0.8rem', mt: '1rem' }}>
                                Register
                            </LoadingButton>
                        </Box>
                    </Paper>
                </Grid> 
            </Grid>
        </Container>
    )
}