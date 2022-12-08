import React from "react";

const ExperimentModuleCollapse = () => {
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
