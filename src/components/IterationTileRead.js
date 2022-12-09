import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Typography } from "@mui/material";
import React from "react";

const IterationTileRead = ({ iterationTitleHandler, iteration, index }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row" }}
      onClick={iterationTitleHandler}
    >
      <Typography
        sx={{ color: "#757575", width: { xs: "20%", sm: "10%", md: 100 } }}
      >
        EM-{index}
      </Typography>
      <Typography
        sx={{
          color: "#757575",
          width: { xs: "50%", sm: "80%" },
          wordWrap: "break-word",
        }}
      >
        {iteration.title}
      </Typography>
      <Typography
        sx={{
          color: "#757575",
          paddingRight: 1,
          width: { xs: "22%", sm: "8%" },
        }}
      >
        Selection
      </Typography>
      <FiberManualRecordIcon sx={{ color: "#03a53c" }} />
    </Box>
  );
};

export default IterationTileRead;
