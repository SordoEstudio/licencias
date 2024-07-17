import React, { useState } from 'react'
import { Container } from '@mui/material'

import AddFloatButton from '../components/AddFloatbutton'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from "@mui/icons-material/Share";

import Esqueleto from '../layouts/Esqueleto'
import SearchHeader from '../components/SearchHeader'
import DialogComponent from '../components/DialogComponent';
import UserForm from '../components/Personal/UserForm';

import personalData from "../assets/personal.json"
import PersonalDataTable from '../components/Personal/PersonalDataTable';

const actions = [
  { icon: <AddIcon />, name: 'Nuevo'},
    { icon: <EditIcon />, name: 'Editar Perfil'},
    { icon: <ShareIcon />, name: 'Compartir'},
  ];

export const Personal = () => {
  const [searchItem, setSearchItem] = useState('')
  const [filteredData, setFilteredData] = useState(personalData)
  const [open, setOpen] = React.useState(false);
function handleOpenDialog(){
  setOpen(true)
}
  const handleData = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = personalData.filter((person) =>
      person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.id.includes(searchTerm)    );
    setFilteredData(filteredItems);
}
const handleAction=(a)=>{
  switch (a) {
    case "Nuevo":
  console.log("nuevo")
      break;
    default:
      break;
  }
    }
  return (
    <><Esqueleto>
    <Container>
    <SearchHeader handleData={handleData} handleNew={handleOpenDialog}/>
    <PersonalDataTable data={filteredData} />
    <AddFloatButton actions={actions} handleAction={handleAction}/>
        <DialogComponent setOpen={setOpen} open={open} title="Crear nuevo usuario">
        <UserForm setOpen={setOpen}/>
    </DialogComponent>
    </Container>
    </Esqueleto></>
  )
}