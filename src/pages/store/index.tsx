import { Container, Grid } from "@mui/material";
import { HeaderComponent } from "../../components";
import { useState, useEffect, FC} from "react";
import { TypeDoll } from "../../pages/store/interface/doll.interface";
import { CardComponent } from "../../components/CardStore";
import { products } from "../../api/productsStock";

export const StorePage: FC = () => {
    const [allDoll, setAllDoll]= useState<TypeDoll[]>([])
    
    useEffect(()=> {
        products.getAll().then((r)=> {
        setAllDoll(r.data) 
    })
    })

    return (
                <>
                    <Grid sx={{mt: 4, mb:10}}>
                        <HeaderComponent title="Store" description="Buy a present"/>
                    </Grid>
                    <Container maxWidth="xl">
                        <div>
                            {
                                allDoll?.length !== 0 ? (
                                    <Grid sx={{my: 2}}container spacing={2} direction="row">
                                        {allDoll?.map((doll) => (
                                            <Grid item xs={2}>
                                                <CardComponent id={doll.id} price={doll.price.d[0]} image={doll.image} name={doll.name}/>
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