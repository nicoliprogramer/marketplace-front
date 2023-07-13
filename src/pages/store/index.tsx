import { Container, Grid } from "@mui/material";
import { HeaderComponent } from "../../components";
import { useState, useEffect, FC} from "react";
import { TypeDoll } from "../../pages/store/interface/doll.interface";
import storeItems from "../../data/items.json"
import { CardComponent } from "../../components/CardStore";


export const StorePage: FC = () => {
    const [allDoll, setAllDoll]= useState<TypeDoll[]>([])
    
    useEffect(()=> {
         setAllDoll(storeItems) 
    })

    return (
                <>
                    <HeaderComponent title="Store" description="Buy a present"
                    />
                    <Container maxWidth="xl">
                        <div>
                            {
                                allDoll?.length !== 0 ? (
                                    <Grid sx={{my: 2}}container spacing={2} direction="row">
                                        {allDoll?.map((doll) => (
                                            <Grid item xs={2}>
                                                <CardComponent id={doll.id} price={doll.price} image={doll.image} name={doll.name}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                ) : ""
                            }
                        </div>
                    </Container>
                </>    
    )

}