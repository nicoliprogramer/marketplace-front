import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem/ListItem';
import {Box, Grid ,Typography, Divider} from '@mui/material'
import { useAppSelector } from "../../redux/hooks";
import { items } from '../../redux/slices/cart.slice';
import { useSelector } from 'react-redux';

export default function ShoppingDrawer() {
  
  const cart = useAppSelector((state:any)=> state.cart)

  return (
        <Box sx={{width: 250}}>
          <List>
            <Grid display="flex" alignItems="center" justifyContent="center">
              <Grid>
              <ListItem>
                <Typography variant='h6'>Shopping Cart</Typography>
              </ListItem>
              </Grid>
              <Grid>
                <div>
                {cart.items}
                </div>
              </Grid>
          </Grid>
          <Divider/>
          </List>
        </Box>
  );
}