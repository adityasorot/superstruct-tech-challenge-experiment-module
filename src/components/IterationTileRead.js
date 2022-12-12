import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, Typography } from "@mui/material";
import React from "react";

const IterationTileRead = ({ iterationTitleHandler, iteration, index }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row" }}
      onClick={iterationTitleHandler}
    >
      <Typography sx={{ color: "#757575", width: { xs: 70, md: 100 } }}>
        EM-{index}
      </Typography>
      <Typography
        sx={{
          color: "#757575",
          wordWrap: "break-word",
          flexGrow: { xs: 0, md: 1 },
          width: { xs: 100, md: 100 },
        }}
      >
        {iteration.title}
      </Typography>
      <Typography
        sx={{
          color: "#757575",
          px: 1,
          width: { xs: 70, md: 70 },
        }}
      >
        Selection
      </Typography>
      <FiberManualRecordIcon sx={{ color: "#03a53c", width: 18 }} />
    </Box>
  );
};

export default IterationTileRead;
