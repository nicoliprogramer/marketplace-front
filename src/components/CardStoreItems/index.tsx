import { useShoppingCart } from "../../context/shoppingCart.context"
import storeItems from "../../data/items.json"
import {Grid, Stack, Typography} from '@mui/material';

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item === null) return null

    return (
        <Stack display="flex" direction="row" gap={2}>
            <img src={item!.image} style={{width: "80px", height: "75px", objectFit: "cover"}}
            />
            <Grid >
                <Grid>
                    <Typography >{item!.name}</Typography>
                    <Typography variant="subtitle2">{item!.price}</Typography>
                </Grid>
                <Grid sx={{fontSize: ".75rem"}}>
                    {quantity > 1 && (
                        <Typography variant="caption">{"   "}x{quantity}</Typography>
                    )}
                </Grid>
            </Grid>
        </Stack>
        
    )
}