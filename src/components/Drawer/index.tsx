import {useState, KeyboardEvent, MouseEvent, Fragment} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem/ListItem';
import {Typography} from '@mui/material'


export default function ShoppingDrawer() {
  
  return (
        <Box sx={{width: 250}}>
          <List>
          <ListItem>
            <Typography>Shopping Cart</Typography>
          </ListItem>
          </List>
        </Box>
  );
}