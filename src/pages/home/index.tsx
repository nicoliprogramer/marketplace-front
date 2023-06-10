import React from "react";
import { Container, Button } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
    
    React.useEffect(() => {
            characters.getById({id: 1}).then((r)=> {
                console.log(r.data);
                
            }).catch((e)=> {
                console.error(e)
            })
        },[])

    return (
        <Container maxWidth="xl">
            <HeaderComponent title="Hola mundillo" description="Estas en un buen lugar" element={<Button fullWidth variant="contained">PRESS</Button>}/>
        </Container>
    )
}