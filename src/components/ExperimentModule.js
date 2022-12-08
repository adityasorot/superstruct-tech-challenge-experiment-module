import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IterationTile from "./IterationTile";
import AddIcon from "@mui/icons-material/Add";
import IterationAdd from "./IterationAdd";
const ExperimentModule = () => {
  const [iterationData, setIterationData] = useState([]);
  const [moduleLockState, setModuleLockState] = useState(false);
  const [moduleOpenState, setModuleOpenState] = useState(true);
  const [addIterationState, setAddIterationState] = useState(true);
  const [iterationTitle, setIterationTitle] = useState("");
  const handleTitle = (e) => {
    if (e.target.value.length > 35) return;
    setIterationTitle(e.target.value);
  };
  const lockButtonHandler = (e) => {
    setModuleLockState(!moduleLockState);
    setModuleOpenState(false);
    e.stopPropagation();
  };
  const mainButtonHandler = () => {
    if (!moduleLockState) setModuleOpenState(!moduleOpenState);
  };
  const resetIteration = () => {
    setIterationData([]);
  };
  const addIterationStateHandler = () => {
    setAddIterationState(!addIterationState);
  };
  const addIteration = () => {
    const iteration = {
      title: iterationTitle,
    };
    setIterationData([...iterationData, iteration]);
    setIterationTitle("");
    setAddIterationState(false);
  };
  const cancelIteration = () => {
    if (iterationData.length == 0) return;
    setIterationTitle("");
    setAddIterationState(false);
  };
  const modifyIterationTitle = (index, newTitle) => {
    iterationData[index] = {
      title: newTitle,
    };
    setIterationData([...iterationData]);
  };
  useEffect(() => {
    if (iterationData.length == 0) setAddIterationState(true);
  }, [iterationData]);
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
        <>
          {iterationData.map((iteration, index) => (
            <IterationTile
              iteration={iteration}
              index={index + 1}
              modifyIterationTitle={modifyIterationTitle}
            />
          ))}
          <Collapse in={addIterationState} unmountOnExit>
            <IterationAdd
              index={iterationData.length + 1}
              iterationTitle={iterationTitle}
              handleTitle={handleTitle}
            />
          </Collapse>
          <Collapse in={!addIterationState} unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                paddingTop: 1,
              }}
            >
              <Button
                sx={{ color: "white" }}
                startIcon={<AddIcon />}
                onClick={addIterationStateHandler}
              >
                Add Iteration
              </Button>
              <Button onClick={resetIteration}>Reset</Button>
              <Button onClick={lockButtonHandler}>Lock</Button>
            </Box>
          </Collapse>
          <Collapse in={addIterationState} unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                paddingTop: 1,
              }}
            >
              <Button onClick={addIteration} sx={{ color: "white" }}>
                Done
              </Button>
              <Button onClick={cancelIteration}>Cancel</Button>
            </Box>
          </Collapse>
        </>
      </Collapse>
    </Paper>
  );
};

export default ExperimentModule;
