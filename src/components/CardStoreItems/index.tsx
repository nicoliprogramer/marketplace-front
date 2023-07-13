import { useShoppingCart } from "../../context/shoppingCart.context"
import storeItems from "../../data/items.json"
import {Grid, Stack, Typography, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(item === null) return null

    return (
        <Stack display="flex" direction="row" alignItems="center" mb={3}>
            <Grid mr={1}>
                <img src={item!.image} style={{width: "80px", height: "75px", objectFit: "cover"}}
                />
            </Grid>
            <Grid>
                <Grid mb={3}>
                    <Typography >{item!.name}</Typography>
                    <Typography sx={{ fontWeight: 'light' }} fontSize={12}>${item!.price}</Typography>
                </Grid>
                <Grid sx={{fontSize: ".75rem"}}>
                    {quantity > 1 && (
                        <Typography variant="caption">x{quantity}</Typography>
                    )}
                </Grid>
            </Grid>
            <Grid>
                <Typography sx={{ fontWeight: 'bold' }} fontSize={12}>${item!.price * quantity}</Typography>
            </Grid>
            <Grid  mr={2}>
                <IconButton aria-label="delete" size="small" onClick={() => removeFromCart(item!.id)}>
                    <CloseIcon/>
                </IconButton>
            </Grid>
        </Stack>
        
    )
}   