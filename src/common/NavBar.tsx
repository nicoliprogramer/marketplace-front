import { FC} from "react";
import { AppBar, Box, Toolbar,Container, Grid, Typography, Button, Stack } from "@mui/material";
import {useNavigate} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBar: FC<{}> = () => {
   const navigate = useNavigate()

    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                            <Typography>Coderr</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" onClick={()=>{navigate("/cart")}}><ShoppingCartIcon/></Button>
                                    <Button variant="contained" onClick={()=>{navigate("/login")}}>Login</Button>
                                    <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}