import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

export default function PersonalDataTable({ data }) {
  const HeaderData = [
    { align: "center", title: "Legajo" },
    { align: "center", title: "Nombre" },
    { align: "center", title: "Apellido" },
    { align: "center", title: "Dni" },
    { align: "right", title: "Dias" },
    { align: "right", title: "Accion" },
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "whitesmoke" }}>
            <TableRow>
              {HeaderData.map((item) => (
                <TableCell align={item.align} key={item.title}>
                  {item.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((person) => (
              <TableRow key={person.id}>
                <TableCell align="center" sx={{ borderRightColor: "black" }}>
                  {person.id}
                </TableCell>
                <TableCell align="center">{person.firstName}</TableCell>
                <TableCell align="center">{person.lastName}</TableCell>
                <TableCell align="center">{person.dni}</TableCell>
                <TableCell align="right">{person.dias}</TableCell>
                <TableCell align="right">
                  <Link to={person.id}>
                    <Button endIcon={<ArrowForwardIosIcon />}>Ver</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
