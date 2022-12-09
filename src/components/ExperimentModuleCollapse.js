import { Box, Button, Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import IterationAdd from "./IterationAdd";
import IterationTile from "./IterationTile";
import AddIcon from "@mui/icons-material/Add";

const ExperimentModuleCollapse = ({
  iterationData,
  setIterationData,
  lockButtonHandler,
}) => {
  const [addIterationState, setAddIterationState] = useState(false);
  const [iterationTitle, setIterationTitle] = useState("");
  const handleTitle = (e) => {
    if (e.target.value.length > 35) return;
    setIterationTitle(e.target.value);
  };
  const resetIteration = () => {
    setIterationData([]);
  };
  const addIterationStateHandler = () => {
    setAddIterationState(!addIterationState);
  };
  const addIteration = () => {
    if (iterationTitle.length === 0) {
      return;
    }
    const iteration = {
      title: iterationTitle,
    };
    setIterationData([...iterationData, iteration]);
    setIterationTitle("");
    setAddIterationState(false);
  };
  const cancelIteration = () => {
    if (iterationData.length === 0) return;
    setIterationTitle("");
    setAddIterationState(false);
  };
  const modifyIterationTitle = (index, newTitle) => {
    if (newTitle.length === 0) {
      iterationData.splice(index, 1);
    } else {
      iterationData.splice(index, 1, {
        title: newTitle,
      });
    }
    setIterationData([...iterationData]);
  };

  useEffect(() => {
    if (iterationData.length === 0) setAddIterationState(true);
  }, [iterationData]);
  return (
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
  );
};

export default ExperimentModuleCollapse;
