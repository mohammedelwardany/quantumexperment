
import "./style.css"



import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ArrowRightOutlined } from "@ant-design/icons";


const ServiceComponent = ({onClickEvent,imagePtn,ptnName,ptnDiscription}) => {
    return (
             
        <Card   className="hoverable card" >
        <CardActionArea sx={{padding:"2rem"}} onClick={onClickEvent}>
          <CardMedia
            component="img"
            height="140"
            image={imagePtn}
            alt="green iguana"
            style={{objectFit:"scale-down"}}
          />
          <CardContent sx={{color:"white",textAlign:"center"}}>
            <Typography gutterBottom variant="h5" component="div" className="fontCard font-gilroy">
              {ptnName}
            </Typography>
            <Typography variant="body2" className="text-limit font-gilroy">
{ptnDiscription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    
    )
}

export default ServiceComponent;