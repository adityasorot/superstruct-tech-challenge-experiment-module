import {
  Box,
  Button,
  Chip,
  Divider,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CustomChip from "./CustomChip";

const IterationTile = ({ iteration, index, modifyIterationTitle }) => {
  const [iterationTileEdit, setIterationTileEdit] = useState(false);
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
  const iterationTitleHandler = () => {
    setIterationTileEdit(!iterationTileEdit);
  };
  const cancelChange = () => {
    setIterationTileEdit(false);
    setIterationTitle(iteration.title);
  };
  const changeIterationTitle = () => {
    modifyIterationTitle(index - 1, iterationTitle);
    setIterationTileEdit(false);
  };
  return (
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
    >
      {iterationTileEdit ? (
        <Box>
          <Box sx={{ display: "flex", flexDirection: "row", paddingBottom: 2 }}>
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginLeft: { xs: "20%", sm: "10%" },
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
              marginLeft: { xs: "20%", sm: "10%" },
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
            <Button onClick={cancelChange}>Cancel</Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{ display: "flex", flexDirection: "row" }}
          onClick={iterationTitleHandler}
        >
          <Typography
            sx={{ color: "#757575", width: { xs: "20%", sm: "10%" } }}
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
      )}
    </Paper>
  );
};

export default IterationTile;
