import { Paper } from "@mui/material";
import React, { useState } from "react";
import IterationTileEdit from "./IterationTileEdit";
import IterationTileRead from "./IterationTileRead";

const IterationTile = ({ iteration, index, modifyIterationTitle }) => {
  const [iterationTileEdit, setIterationTileEdit] = useState(false);

  const iterationTitleHandler = () => {
    setIterationTileEdit(!iterationTileEdit);
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
        <IterationTileEdit
          index={index}
          iteration={iteration}
          modifyIterationTitle={modifyIterationTitle}
          setIterationTileEdit={setIterationTileEdit}
        />
      ) : (
        <IterationTileRead
          iterationTitleHandler={iterationTitleHandler}
          iteration={iteration}
          index={index}
        />
      )}
    </Paper>
  );
};

export default IterationTile;
