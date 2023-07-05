import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Grid, TextField, ButtonGroup, Container} from "@mui/material";
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
    const [count, setCount] = useState(1)
     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Math.max(Number(event.target.value), 1));
    };
    let navigate = useNavigate()

    return(
        
        <Card sx={{ maxWidth: 1000 }}>
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
          <Typography variant="body2" color="text.secondary">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {count === 0 ? (
            <Button size="small" color="success" variant="contained">
          Take to cart
        </Button>
        ) : <Grid display="flex" alignItems="center" direction="row" style={{gap: ".5rem "}}>
                <Grid display="flex" alignItems="center" justifyContent="center" style={{gap: ".5rem "}}>
            <Container>
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
            </Container>
                </Grid>
                BI
            </Grid>}

      </CardActions>
    </Card>
    )
}