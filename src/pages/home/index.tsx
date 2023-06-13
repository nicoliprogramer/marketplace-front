import { Container, Button, Grid,Box, CircularProgress, Pagination } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";
import { useState, useEffect, FC} from "react";


export const HomePage: FC = () => {
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const [allCharacters, setAllCharacters]= useState<TypeCharacter[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
            setLoading(true)
            characters.getAll({page}).then((r)=> {
                setCount(r.data.info.pages);
                setAllCharacters(r.data.results);
                setTimeout(() => setLoading(false), 1000)     
            }).catch((e)=> {
                console.error(e)
            })
        },[page])

        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
            console.log("value", value);
            setPage(value)
        }

    return (
        <Container maxWidth="xl">
            <HeaderComponent title="Hola mundillo" description="Estas en un buen lugar" element={<Button fullWidth variant="contained">PRESS</Button>}
            />
            {loading ? (
                <Box sx={{display: "flex", justifyContent: "left", mt: 4}}>
                    <CircularProgress/>
                </Box>
            ) :
            <>
            <div>
                {
                    allCharacters?.length !== 0 ? (
                        <Grid sx={{my: 2}}container spacing={2} direction="row">
                            {allCharacters?.map((character) => (
                                <Grid item xs={2}>
                                    <CardComponent id={character.id} key={character.id} image={character.image} name={character.name} status={character.status} species={character.species}/>
                                </Grid>
                            ))}
                        </Grid>
                    ) : ""
                }
            </div>
            <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Pagination variant="outlined" color="primary" count={count} page={page} onChange={handleChange} sx={{mb: 3}} size="large"/>
            </Box>
            </>
               
            } 
        </Container>
    )
}