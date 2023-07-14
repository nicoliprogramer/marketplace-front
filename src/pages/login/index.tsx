import  React from "react";
import { useState, FC} from "react";
import { Container, Button, Grid, Paper, Box, Typography, TextField, Stack, Link} from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import {useNavigate} from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks";
import { login } from "../../redux/slices/auth.slice";
import Swal from 'sweetalert2'

type LoginType = { 
    username: string,
    password: string
}

export const LoginPage: FC<{}> = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const {getError} = useNotification()


    const [loginData, setLoginData] = useState<LoginType>({
        username: "",
        password: ""
    })

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        LoginValidate.validate(loginData).then(() => {
            dispatch(login(loginData))
        }).catch(error => {
             Swal.fire({
                title: 'Error!',
                text: 'fill in the required fields',
                icon: 'error',
                confirmButtonText: 'Understand!'
              })
            getError(error.message)}
        )
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{minHeight: "100vh"}}>
                <Grid item>
                    <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                        <Typography sx={{mt:1, mb:1}} variant="h4">Log in</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField name="username" margin="normal" type="text" fullWidth label="email" sx={{mt:2, mb:1.5}} onChange={dataLogin}/>
                                <TextField name="password" margin="normal" type="password" fullWidth label="password"sx={{mt:1.5, mb:1.5}} onChange={dataLogin}/>
                            </Stack>
                            <Typography sx={{mt:2.5, mb:1}} fontSize="12px" variant="body2"><Link href="/register">Haven't created an account? Enter here.</Link></Typography>
                            <Button fullWidth type="submit" variant="contained" sx={{mt:1.5, mb:3}}>enter</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}