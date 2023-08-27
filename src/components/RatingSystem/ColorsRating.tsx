import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FcIdea } from "react-icons/fc";

interface ColorsRatingProps {
  onClick?: () => void;
}

export default function ColorsRating(props: ColorsRatingProps) {
  return (
    <>
      <Box>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography style={{display: 'flex'}} gutterBottom variant="h4" component="div">
              <FcIdea
                style={{ marginBottom: "-4px", fontSize: "30px"}}
              />
              Подсказка
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          В зависимости от того, сколько вы наберёте баллов, будет меняться цвет
          Круга, который находится в ячейке с итогами.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Какой цвет что значит:
        </Typography>
        <Stack width={500} direction="row" flexWrap="wrap" gap={1}>
          <Chip
            sx={{
              bgcolor: "#EF5350",
              fontWeight: 700,
              borderRadius: "5px",
              height: 50,
              width: 200,
              display: "flex",
              flexWrap: "wrap",
            }}
            color="primary"
            label="Недопуск (менее 45 баллов)"
          />
          <Chip
            sx={{
              bgcolor: "#FFCC00",
              fontWeight: 700,
              borderRadius: "5px",
              height: 50,
              width: 200,
              display: "flex",
              flexWrap: "wrap",
            }}
            color="primary"
            label="Допуск (от 46 до 69 баллов)"
          />
          <Chip
            sx={{
              bgcolor: "#42A5F5",
              fontWeight: 700,
              borderRadius: "5px",
              height: 50,
              width: 200,
              display: "flex",
              flexWrap: "wrap",
            }}
            color="primary"
            label="Оценка 4 (от 70 до 85 баллов)"
          />
          <Chip
            sx={{
              bgcolor: "#66BB6A",
              fontWeight: 700,
              borderRadius: "5px",
              height: 50,
              width: 200,
              display: "flex",
              flexWrap: "wrap",
            }}
            color="primary"
            label="Оценка 5 (от 86 и больше)"
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button onClick={props.onClick}>Понял</Button>
      </Box>
    </>
  );
}
