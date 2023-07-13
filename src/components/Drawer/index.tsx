import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem/ListItem';
import {Box, Grid ,Typography, Divider,Stack} from '@mui/material'
import { useShoppingCart } from '../../context/shoppingCart.context';
import { CartItem } from '../CardStoreItems';
import storeItems from "../../data/items.json"

export default function ShoppingDrawer() {
  
  const { cartItems} = useShoppingCart()

  return (
        <Box sx={{width: 250}}>
          <List>
            <Grid alignItems="center" justifyContent="center">
              <Grid>
              <ListItem>
                <Typography variant='h6'>Shopping Cart</Typography>
              </ListItem>
              </Grid>
              <Divider/>
              <Stack sx={{mt: 3}}>
                  {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                    ))}
              </Stack>
              <Grid>
                Total: {cartItems.reduce((total, cartItem)=> {
                const item = storeItems.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                }
              </Grid>
          </Grid>
          <Divider/>
          </List>
        </Box>
  );
}