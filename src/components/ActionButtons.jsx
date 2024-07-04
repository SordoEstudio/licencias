import * as React from "react";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import data from "../assets/licencias.json";
import NewLicence from "./NewLicence";

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