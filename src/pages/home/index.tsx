import React from "react";
import { Container, Button } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
    
    return (
        <Container maxWidth="xl">
            <HeaderComponent title="Hola mundillo" description="Estas en un buen lugar" element={<Button fullWidth variant="contained">PRESS</Button>}/>
        </Container>
    )
}