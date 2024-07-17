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
        <IconButton>
          <EditIcon onClick={yesAction}/>
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={noAction}/>
        </IconButton>
      </Box>
    );
  };

  export default ActionButtons