import React, { useState } from "react";
import { useParams } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import Esqueleto from "../layouts/Esqueleto";
import HeaderBack from "../components/HeaderBack";
import AddFloatButton from "../components/AddFloatbutton";
import DialogComponent from "../components/DialogComponent";
import LicenciaDataTable from "../components/Licencias/LicenciaDataTable";

import "dayjs/locale/es-mx";

import personalUser from "../assets/personal.user.json"
import data from "../assets/licencias.json";
import NewLicenceFormNDP from "../components/Licencias/NewLicenceFormNDP";
import dayjs from "dayjs";
import UserForm from "../components/Personal/UserForm";

const actions = [
  { icon: <AddIcon />, name: "Nuevo"},
  { icon: <SaveIcon />, name: "Guardar"},
  { icon: <PrintIcon />, name: "Imprimir"},
  { icon: <ShareIcon />, name: "Compartir"}
];
const hoy = dayjs().format("YYYY-MM-DD");

const initialForm = {
  fecha: hoy,
  dias: 0,
  desde: hoy,
  hasta: hoy,
  año: dayjs().year(),
  corresponde_año: dayjs().year(),
  autorizo: "Current User",
  adjunto: false,
  isNew:true
}
export const Licencias = () => {
  //  current data es todo
const[currentData,setCurrentData] =useState(data) 
//data to edit es forrm
const[dataToEdit,setDataToEdit]=useState()
const [dataPersonal,setDataPersonal]=useState()

let { Id } = useParams();
const [open,setOpen]=useState(false)
const [openPersonal,setOpenPersonal]=useState(false)

const sendUpdateData=(data)=>{
  fetch('https://api.mockfly.dev/mocks/8b67775e-7dd5-465c-81a3-c75b83b6444f/Licencias', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => {
    console.log("envio update ok",json)

  })
}
const sendCreateData=(data)=>{
  fetch('https://api.mockfly.dev/mocks/8b67775e-7dd5-465c-81a3-c75b83b6444f/Licencias',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(json => {
    console.log("envio create ok",json)

  })
}

const handleSave=(a)=>{
  let updData;
  if(a.isNew){
    updData = [...currentData, a]
    sendCreateData(updData)
  }else{
    updData = currentData.map((item)=>{
      if(item.id!==a.id) {
        return item}
        else {
          return a}
        }
    )
    sendUpdateData(updData)
  }
  setOpen(false)
}
const handleEdit=(item)=>{
  setDataToEdit(item)
  setOpen(true)
}
const handleDelete=(id)=>{
  //antes iria un confirm
  console.log("delete Item id:",id)
/*  fetch('https://api.mockfly.dev/mocks/8b67775e-7dd5-465c-81a3-c75b83b6444f/Licencias/'+id, {
    method: 'DELETE',
  })
 .then(response => response.json())
 */
}
  const handleAction=(a)=>{
switch (a) {
  case "Nuevo":

    setDataToEdit(initialForm)
  setOpen(true)

  break;
case "Cancel":
  setDataToEdit(initialForm)
  setOpen(false)
  break;
}
  }
  const handleEditPersonal =(id)=>{
    /*
    fetch('https://api.mockfly.dev/mocks/8b67775e-7dd5-465c-81a3-c75b83b6444f/Licencias'+id, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
      setDataPersonal(json)
    })
    */
   setDataPersonal(personalUser);
   setOpenPersonal(true)
  }

  return (
    <>
      <Esqueleto>
        <>
          <HeaderBack userId={Id} handleEdit={handleEditPersonal}/>
          <LicenciaDataTable toEdit={handleEdit} data={currentData} toDelete={handleDelete} />
          <DialogComponent open={open}setOpen={setOpen}>
           <NewLicenceFormNDP toSave={handleSave} toCancel={()=>handleAction("Cancel")} data={dataToEdit}/>
{/*           <NewLicenceFormNDP setOpen={setOpen} toSave={handleSave} toCancel={()=>handleAction("Cancel")}datosToEdit={datosToEdit}/>
 */}          
 </DialogComponent >
 <DialogComponent open={openPersonal}><UserForm setOpen={setOpenPersonal}personalData={dataPersonal}/></DialogComponent>
          <AddFloatButton
            actions={actions} handleAction={handleAction}
          />
        </>
      </Esqueleto>
    </>
  );
};
