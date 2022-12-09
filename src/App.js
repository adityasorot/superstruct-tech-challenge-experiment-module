// import logo from "./logo.svg";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ExperimentModule from "./components/ExperimentModule";

function App() {
  const [experimentModules, setExperimentModules] = useState([]);
  const addModules = () => {
    setExperimentModules([...experimentModules, 1]);
  };
  const resetModules = () => {
    setExperimentModules([]);
  };
  return (
    <Box>
      {experimentModules.map(() => (
        <ExperimentModule />
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          m: 3,
        }}
      >
        <Button onClick={addModules} sx={{ color: "white" }}>
          Add Modules
        </Button>
        <Button onClick={resetModules}>Reset</Button>
      </Box>
    </Box>
  );
}

export default App;
