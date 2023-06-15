import {Card, CardActions, CardContent, CardMedia, Divider,Grid, IconButton, Typography} from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import {FC} from "react";

interface CardHorizontalComponentProps {
    image: string,
    name: string,
    info: string
}

export const HorizontalCardComponent: FC<CardHorizontalComponentProps> = ({
    image, 
    name,
    info,
}) => {
    return(
    <Card sx={{display: 'flex', my: 2}}>
        <CardMedia component="img" sx={{width: 151}} image={image} alt="Rick and Morty">
            <Grid item xs={9}>
                <CardContent>
                    <Typography variant="h4">{name}</Typography>
                    <Divider/>
                    <Typography variant="h6">{info}</Typography>
                </CardContent>
            </Grid>
            <Grid item xs={2}>
                <CardActions>
                    <IconButton>
                        <CloseRoundedIcon/>
                    </IconButton>
                </CardActions>
            </Grid>
        </CardMedia>
    </Card>
    )
}