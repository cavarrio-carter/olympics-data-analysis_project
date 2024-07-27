import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TotalViewers() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          396.4 million
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Combined Viewership from Rio Games in the United States from
          August 5, 2016 (Opening Ceremony) - August 20, 2016 (Closing Ceremony)
          <br></br>
          <br></br>
 
        </Typography>
            <h6 align="left">Note: Viewership trend from Aug. 5 (Opening Ceremony) 
              - Aug. 20 represented above
          </h6>
      </CardContent>
    </Card>
  );
}