import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneOnIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from  './styles'

const PlaceDetails = ({ place}) => {
    const classes = useStyles();

    console.log(place);
    return(
        <Card elevation={6}>
            <CardMedia
            style={{ height:350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.dogengine.com/wp-content/uploads/2023/02/IMG_2204.jpg'}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;