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

const HeaderTable = [
  { align: "center", title: "Fecha" },
  { align: "center", title: "Dias" },
  { align: "center", title: "Desde" },
  { align: "center", title: "Hasta" },
  { align: "center", title: "de/año" },
  { align: "center", title: "Autorizo" },
  { align: "center", title: "Adjunto" },
  { align: "center", title: "Accion" },
];

export default function LicenciaDataTable({ newItem }) {
  const ActionsButtons = () => {
    return (
      <Box>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "whitesmoke" }}>
            <TableRow>
              {HeaderTable.map((item) => (
                <TableCell align={item.align} key={item.title}>
                  {item.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newItem && (
                <NewLicence />
            )}
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.fecha}</TableCell>
                <TableCell align="center">{item.dias}</TableCell>
                <TableCell align="center">{item.desde}</TableCell>
                <TableCell align="center">{item.hasta}</TableCell>
                <TableCell align="right">{item.corresponde_año}</TableCell>
                <TableCell align="right">{item.autorizo}</TableCell>
                <TableCell align="right">{item.adjunto}</TableCell>
                <TableCell align="right">{<ActionsButtons />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
