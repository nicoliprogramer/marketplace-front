import {FC} from "react"
import { Box, Container, Grid, Typography, Divider, CardMedia} from "@mui/material";

export const HomePage: FC = () => {
    return( <>
        
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Grid sx={{mt:8}} container columnSpacing={1} display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h2">Welcome to Rick and Morty</Typography>
                        <Divider sx={{mb:6}}/>

                        
                        <CardMedia 
                            component="img"
                            height="194"
                            image={"https://pbs.twimg.com/media/DfMLQ80U8AAzQPd.jpg"}
                            alt="Paella dish"
                        />
                        <Typography variant="h5" sx={{mt:1}}>Father, am I bad? you are worse You're smart.</Typography>
                        
                    </Grid>
                    
                </Grid>
                
                
            </Container>
        </Box>
        
    </>)
}
