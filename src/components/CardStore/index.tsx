import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Grid, TextField, ButtonGroup, Container, Divider} from "@mui/material";
import {FC} from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useShoppingCart } from "../../context/shoppingCart.context";
import { formatCurrency } from "../../utils/formatCurrency";


type CardProps = {
    id: number
    image: string,
    name: string,
    price: number
}

export const CardComponent: FC<CardProps> = ({image, name, price, id}) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id)


    return(
        
    <Card sx={{ maxWidth: 345, mb: 1 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="item for sale"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary" mt={1} mb={-1}>
            ${formatCurrency(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {quantity === 0 ? (
            <Container>
            <Grid display="flex" alignItems="center" justifyContent="center" sx={{mb: 4}}>
            <Button size="small" color="success" variant="contained" onClick={() => {increaseCartQuantity(id);}}>   
            Take to cart
            </Button>
        </Grid>
        </Container>
        ) : (<Grid display="flex" alignItems="center" direction="row" style={{gap: ".5rem "}}>
                <Grid display="flex" alignItems="center" justifyContent="center" style={{gap: ".5rem "}}>
            <Container sx={{mb: 3}}>
                <ButtonGroup>
                <Button
                  onClick={() => {decreaseCartQuantity(id);}}
                  disabled={quantity === 1}
                >
               <RemoveIcon fontSize="small" />
                </Button>
                <TextField size="small"  value={quantity} />
                <Button onClick={() => {increaseCartQuantity(id);}}>
                  <AddIcon fontSize="small" />
                </Button>
                </ButtonGroup>
                <Grid sx={{mt: 2}} display="flex" alignItems="center" justifyContent="center">
                <Button size="small" color="error" variant="contained" onClick={() => {removeFromCart(id)}}>
                    Eliminate
                </Button>
                </Grid>
            </Container>
                </Grid>
                
            </Grid>)}

      </CardActions>
    </Card>
    )
}