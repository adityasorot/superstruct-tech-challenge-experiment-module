import { Box, Collapse, IconButton, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ExperimentModuleCollapse from "./ExperimentModuleCollapse";
const ExperimentModule = () => {
  const [iterationData, setIterationData] = useState([]);
  const [moduleLockState, setModuleLockState] = useState(false);
  const [moduleOpenState, setModuleOpenState] = useState(true);

  const lockButtonHandler = (e) => {
    setModuleLockState(!moduleLockState);
    setModuleOpenState(false);
    e.stopPropagation();
  };
  const mainButtonHandler = () => {
    if (!moduleLockState) setModuleOpenState(!moduleOpenState);
  };

  return (
    <Paper
      sx={{
        backgroundColor: "#222222",
        color: "white",
        py: 4,
        px: 2,
        m: 3,
        borderRadius: 3,
      }}
      elevation={3}
    >
      <Box
        sx={{ display: "flex", flexDirection: "row", paddingBottom: 3 }}
        onClick={mainButtonHandler}
      >
        <Typography
          variant="h4"
          sx={{ flexGrow: 1, color: moduleLockState ? "#757575" : "white" }}
        >
          Experiment Module
        </Typography>
        {iterationData.length > 0 ? (
          <IconButton onClick={lockButtonHandler}>
            {moduleLockState ? (
              <LockIcon sx={{ color: "#757575" }} />
            ) : (
              <LockOpenIcon sx={{ color: "#757575" }} />
            )}
          </IconButton>
        ) : (
          <></>
        )}
      </Box>
      <Collapse in={moduleOpenState} unmountOnExit>
        <ExperimentModuleCollapse
          iterationData={iterationData}
          setIterationData={setIterationData}
          lockButtonHandler={lockButtonHandler}
        />
      </Collapse>
    </Paper>
  );
};

export default ExperimentModule;
