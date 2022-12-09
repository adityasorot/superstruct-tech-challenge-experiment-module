import { Button, Divider, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CustomChip from "./CustomChip";

const IterationTileEdit = ({
  index,
  iteration,
  modifyIterationTitle,
  setIterationTileEdit,
}) => {
  const [iterationTitle, setIterationTitle] = useState(iteration.title);
  const [chipActive, setChipActive] = useState([false, false, false]);
  useEffect(() => {
    if (iterationTitle.length === 0) {
      setChipActive([false, false, false]);
    } else if (iterationTitle.length > 0 && iterationTitle.length < 15) {
      setChipActive([true, false, false]);
    } else if (iterationTitle.length >= 15 && iterationTitle.length < 25) {
      setChipActive([false, true, false]);
    } else {
      setChipActive([false, false, true]);
    }
  }, [iterationTitle]);

  const handleTitle = (e) => {
    if (e.target.value.length > 35) return;
    setIterationTitle(e.target.value);
  };
  const removeIteration = () => {
    setIterationTileEdit(false);
    modifyIterationTitle(index - 1, "");
  };
  const changeIterationTitle = () => {
    if (iterationTitle.length === 0) {
      return;
    }
    modifyIterationTitle(index - 1, iterationTitle);
    setIterationTileEdit(false);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: 2 }}>
        <Typography
          sx={{ color: "#757575", width: { xs: "20%", sm: "10%", md: 100 } }}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: { xs: "20%", sm: "10%", md: 12 },
        }}
      >
        <CustomChip
          activeColor={chipActive[0]}
          label="SHORT"
          variant="outlined"
        />
        <CustomChip
          activeColor={chipActive[1]}
          label="MEDIUM LENGTH"
          variant="outlined"
        />
        <CustomChip
          activeColor={chipActive[2]}
          label="VERY VERY VERY LONG (UP TO 35 CHAR)"
          variant="outlined"
        />
      </Box>
      <Divider
        sx={{
          marginLeft: { xs: "20%", sm: "10%", md: 12 },
          borderColor: "#757575",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          paddingTop: 1,
        }}
      >
        <Button onClick={changeIterationTitle} sx={{ color: "white" }}>
          Done
        </Button>
        <Button onClick={removeIteration}>Remove</Button>
      </Box>
    </Box>
  );
};

export default IterationTileEdit;
