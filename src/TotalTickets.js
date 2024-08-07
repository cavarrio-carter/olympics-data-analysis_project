import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

{/*add grid here*/}

export default function TotalTickets() {
  return (
    <Card elevation={0} sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          6.2 million
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Ticket Sales for Rio Games
        </Typography>
        <h6 align="left">Note: Represented above is the total number
          of available tickets (6.8m) compared to total tickets sold (6.2m)
          </h6>
      </CardContent>
    </Card>
  );
}
