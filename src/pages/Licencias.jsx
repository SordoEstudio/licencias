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

const actions = [
  { icon: <AddIcon />, name: "Nuevo"},
  { icon: <SaveIcon />, name: "Guardar"},
  { icon: <PrintIcon />, name: "Imprimir"},
  { icon: <ShareIcon />, name: "Compartir"}
];
const initialState={

}
export const Licencias = () => {
const[currentData,setCurrentData] =useState(initialState) 
let { Id } = useParams();

const [open,setOpen]=useState(false)

const handleSave=(data)=>{
console.log(data)
setOpen(false)
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
          <LicenciaDataTable />
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
