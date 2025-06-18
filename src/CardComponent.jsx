import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardComponent({ subTitle, description }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: "50vh",
        textAlign: "center",
        my: 3,
      }}
    >
      <CardContent>
        <Typography
          sx={{ my: 1, color: "#1769aa" }}
          variant="h4"
          component="div"
        >
          {subTitle}
        </Typography>
        <Typography sx={{ color: "text.secondary", my: 1.5 }}></Typography>
        <Typography variant="h5" sx={{ letterSpacing: 2, lineHeight: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
