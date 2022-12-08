import { InputBase, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const IterationAdd = ({ index, handleTitle, iterationTitle }) => {
  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: "#000000",
          color: "white",
          py: 3,
          paddingLeft: 2,
          paddingRight: 2,
          marginTop: 1,
          borderRadius: 3,
        }}
        elevation={3}
        //   onClick={mainButtonHandler}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{ color: "#757575", width: { xs: "20%", sm: "10%" } }}
          >
            EM-{index}
          </Typography>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Adding iteration..."
            value={iterationTitle}
            onChange={handleTitle}
          />
        </Box>
      </Paper>
      <Paper
        sx={{
          backgroundColor: "#000000",
          color: "white",
          py: 3,
          paddingLeft: 2,
          paddingRight: 2,
          marginTop: 4,
          borderRadius: 3,
        }}
        elevation={3}
        //   onClick={mainButtonHandler}
      >
        <Typography sx={{ color: "#757575", width: "10%" }} display="inline">
          To add a new iteration, start typing a prompt, or{" "}
        </Typography>
        <Typography
          sx={{ color: "#757575", width: "10%", textDecoration: "underline" }}
          display="inline"
        >
          generate
        </Typography>
        <Typography sx={{ color: "#757575", width: "10%" }} display="inline">
          {" "}
          one.
        </Typography>
      </Paper>
    </Box>
  );
};

export default IterationAdd;
