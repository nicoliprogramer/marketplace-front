import {FC} from "react"
import { useParams } from "react-router-dom"
import{useEffect,useState} from "react"
import { characters } from "../../api/characters"
import { ICharacter } from "./interface/character.interface"
import { Box, Container, Grid,CircularProgress, Typography, Divider, Chip} from "@mui/material";

export const CharacterPage: FC = () => {

    const {id} = useParams()
    const [page] = useState(0)

    const [character, setCharacter] = useState<ICharacter | null>(null)
    const [loading, setLoading]= useState<boolean>(true)


    useEffect(() => {
        setLoading(true)
        characters.getById({id}).then((r) => {
            setCharacter(r.data);
            
            setTimeout(() => setLoading(false), 1000)             
                        
        }).catch((e) => {
            console.error(e)
        })
    },[page])
    
    return <>
        {loading ? 
                (<Box sx={{display: "flex", justifyContent: "center", mt: 4}}>
                    <CircularProgress/>
                </Box>
            ) :
        <Box sx={{width: "100%"}}>
            <Container maxWidth="xl">
                <Grid sx={{mt:2}}container columnSpacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h1">{character?.name}</Typography>
                        <Divider/>
                        <Typography variant="h6">{character?.gender}</Typography>
                        <Box sx={{mt: 2}}>
                            <Chip color="success" variant="outlined" label={character?.status} />   
                        </Box>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <img src={character?.image} style={{width:"100%",borderRadius:"0.5"}}/>
                    </Grid>
                </Grid>
                
                
            </Container>
        </Box>
        }
    </>
}
