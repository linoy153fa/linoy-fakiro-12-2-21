import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export function CardUI({ imgId, txt}) {
  const handleIconId = (iconId) => {
    iconId = iconId.toString();
    if (iconId.length === 1) {
      iconId = "0" + iconId;
    }
    const imgUrl = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`;
    return imgUrl;
  };

  return (
    <Card sx={{ maxWidth: 200 }} >
      <CardMedia
        component="img"
        height="140"
        image={handleIconId(imgId)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="black"
        >
          {txt.txt1}
        </Typography>
        <Typography variant="subtitle2" color= "black">
          {txt.txt2}
        </Typography>
        <Typography variant="subtitle2" color= "black">
          {txt.txt3}
        </Typography>
      </CardContent>
    </Card>
  );
}
