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
import NewLicenceForm from "../components/Licencias/NewLicenceForm";

import data from "../assets/licencias.json";

const actions = [
  { icon: <AddIcon />, name: "Nuevo"},
  { icon: <SaveIcon />, name: "Guardar"},
  { icon: <PrintIcon />, name: "Imprimir"},
  { icon: <ShareIcon />, name: "Compartir"}
];

export const Licencias = () => {
const[currentData,setCurrentData] =useState(data) 
let { Id } = useParams();

const [open,setOpen]=useState(false)
function formatDate(data){
  return `${data.pedido.$D}/${data.pedido.$M}/${data.pedido.$y}`
}
// POST : 
const handleSave=(data)=>{
  setCurrentData
setOpen(false)
}
const handleEdit=(item)=>{
  setOpen(true)
  console.log(item)
}
  const handleAction=(a)=>{
switch (a) {
  case "Nuevo":
  setOpen(true)    
  break;
case "Cancel":
  setOpen(false)
  break;
}
  }

  return (
    <>
      <Esqueleto>
        <>
          <HeaderBack userId={Id} />
          <LicenciaDataTable toEdit={handleEdit} data={currentData} />
          <DialogComponent open={open}setOpen={setOpen}>
            <NewLicenceForm setOpen={setOpen} toSave={handleSave} toCancel={()=>handleAction("Cancel")}/>
          </DialogComponent >
          <AddFloatButton
            actions={actions} handleAction={handleAction}
          />
        </>
      </Esqueleto>
    </>
  );
};
