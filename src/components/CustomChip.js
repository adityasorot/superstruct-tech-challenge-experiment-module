import { Chip } from "@mui/material";
import React from "react";

const CustomChip = (props) => {
  return (
    <Chip
      sx={{
        color: props.activeColor ? "#03a53c" : "#757575",
        my: { xs: 1, sm: 2 },
        mx: 1,
        borderColor: props.activeColor ? "#03a53c" : "#757575",
        borderRadius: 2,
      }}
      {...props}
    />
  );
};

export default CustomChip;
