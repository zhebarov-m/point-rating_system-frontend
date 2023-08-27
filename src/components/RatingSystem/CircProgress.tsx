import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function getColor(value: any) {
  if (value <= 45) {
    return "#EF5350";
  } else if (value <= 69) {
    return "#FFCC00";
  } else if (value <= 85) {
    return "#42A5F5";
  } else {
    return "#66BB6A";
  }
}

const CircularProgressWithLabel = React.memo(
  (props: CircularProgressProps & { value: number }) => {
    const color = getColor(props.value);

    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          thickness={5}
          {...props}
          sx={{
            color: color,
          }}
        />
        <Box
          sx={{
            top: 2,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{
              fontSize: 14,
              color: color,
            }}
          >
            {Math.round(props.value)}
          </Typography>
        </Box>
      </Box>
    );
  }
);

export default function CircularWithValueLabel(props: any) {
  return <CircularProgressWithLabel value={props.progressValue} />;
}