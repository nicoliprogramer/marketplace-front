import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Grid, TextField, ButtonGroup, Container, Divider} from "@mui/material";
import React, {FC, useState} from "react";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type CardProps = {
    id: number
    image: string,
    name: string,
    price: number
}

export const CardComponent: FC<CardProps> = ({image, name, price, id}) => {
    const [count, setCount] = useState(0)
     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Math.max(Number(event.target.value), 1));
    };
    let navigate = useNavigate()

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
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {count === 0 ? (
            <Container>
            <Grid display="flex" alignItems="center" justifyContent="center">
            <Button size="small" color="success" variant="contained" onClick={() => setCount((prev) => prev + 1)}>   
            Take to cart
            </Button>
        </Grid>
        </Container>
        ) : (<Grid display="flex" alignItems="center" direction="row" style={{gap: ".5rem "}}>
                <Grid display="flex" alignItems="center" justifyContent="center" style={{gap: ".5rem "}}>
            <Container sx={{mb: 3}}>
                <ButtonGroup>
                <Button
                  onClick={() => setCount((prev) => prev - 1)}
                  disabled={count === 1}
                >
               <RemoveIcon fontSize="small" />
                </Button>
                <TextField size="small" onChange={handleChange} value={count} />
                <Button onClick={() => setCount((prev) => prev + 1)}>
                  <AddIcon fontSize="small" />
                </Button>
                </ButtonGroup>
                <Grid sx={{mt: 2}} display="flex" alignItems="center" justifyContent="center">
                <Button size="small" color="error" variant="contained" onClick={() => setCount(0)}>
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