import * as React from "react";
import {
  Box,
  IconButton
} from "@mui/material/";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ActionButtons = ({yesAction,noAction}) => {

    return (
      <Box>
        <IconButton onClick={yesAction}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={noAction}>
          <DeleteIcon />
        </IconButton>
      </Box>
    );
  };

  export default ActionButtons