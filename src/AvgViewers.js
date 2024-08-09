import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

{/*add grid here*/}

export default function TotalViewers() {
  return (
    <Card elevation={0} sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          27.5 million
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Average Daily Viewership in the United States for Rio Games
        </Typography>
        <h6 align="left">Note: Above chart is representative of highest
          day viewer count in the United States compared to lowest day viewer count
        <br></br>
        {/*create ordered list to use as legend -- add labels to chart*/}
          <ul>
            <li>Orange (outer-most) -- Represents highest daily viewer count: 33.63 million</li>
            <li>Light Blue (second in order) -- Represent average daily viewer count: 27.5 million</li>
            <li>Royal Blue (inner-most) -- Represents lowest daily viewer count: 16.85 million</li>
          </ul>
        </h6>
      </CardContent>
    </Card>
  );
}
