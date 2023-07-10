import { FC, useState} from "react";
import { AppBar, Box, Toolbar,Container, Grid, Typography, Button, Stack, Drawer } from "@mui/material";
import {useNavigate} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingDrawer from "../components/Drawer";



export const NavBar: FC<{}> = () => {
   const navigate = useNavigate()
   const [open, setOpen] = useState(false)

    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                            <Typography>Rick and Morty</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" onClick={()=>{navigate("/characters")}}>characters</Button>
                                    <Button variant="contained" onClick={()=>{navigate("/episodes")}}>episodes</Button>
                                    <Button variant="contained" onClick={()=>{navigate("/store")}}>Store</Button>
                                    <Button variant="contained" onClick={()=>{setOpen(true)}}><ShoppingCartIcon/></Button><Drawer open={open} anchor="right" onClose={()=> setOpen(false)}><ShoppingDrawer/></Drawer>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}