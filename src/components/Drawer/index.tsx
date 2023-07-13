import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem/ListItem';
import {Box, Grid ,Typography, Divider} from '@mui/material'
import { useShoppingCart } from '../../context/shoppingCart.context';
import { CartItem } from '../CardStoreItems';

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
              <Grid sx={{mt: 3}}>
                  {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                    ))}
              </Grid>
          </Grid>
          <Divider/>
          </List>
        </Box>
  );
}