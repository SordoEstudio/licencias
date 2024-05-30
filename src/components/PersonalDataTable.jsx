import { useState} from 'react';
import {Button, Paper ,Container, Table,TableBody,TableCell,TableContainer,TableHead, TableRow, TextField} from '@mui/material/';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

import personalData from "../assets/personal.json"

export default function PersonalDataTable() {
  const [searchItemId, setSearchItemId] = useState('')
  const [searchItemName, setSearchItemName] = useState('')
  const [searchItemDni, setSearchItemDni] = useState('')
  const [filteredData, setFilteredData] = useState(personalData)


  const handleChangeId = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemId(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.id.includes(searchTerm)
    );
    setFilteredData(filteredItems);
  }

  const handleChangeName = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemName(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  }

  const handleChangeDni = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemDni(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.dni.includes(searchTerm)
    );
    setFilteredData(filteredItems);
  }

  return (<>
  <Container>
<TextField onChange={(e)=>handleChangeId(e)} value={searchItemId}/>
<TextField onChange={(e)=>handleChangeName(e)} value={searchItemName}/>
<TextField onChange={(e)=>handleChangeDni(e)} value={searchItemDni}/>
  </Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:"whitesmoke"}}>
          <TableRow >
            <TableCell align="center">Legajo</TableCell>
            <TableCell align="center">Nombre</TableCell>
            <TableCell align="center">Apellido</TableCell>
            <TableCell align="center">Dni</TableCell>
            <TableCell align="right">Dias</TableCell>
            <TableCell align="right">Ver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((person) => (
            <TableRow
              key={person.id}
            >
              <TableCell align="center" sx={{borderRightColor:"black"}}>{person.id}</TableCell>
              <TableCell align="center">{person.firstName}</TableCell>
              <TableCell align="center">{person.lastName}</TableCell>
              <TableCell align="center">{person.dni}</TableCell>
              <TableCell align="right">{person.dias}</TableCell>
              <TableCell align="right">
                <Link to={person.id}>
                <Button 
              endIcon={<ArrowForwardIosIcon/>}>Ver</Button>
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