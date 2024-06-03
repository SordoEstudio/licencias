import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import Esqueleto from "../layouts/Esqueleto";
import LicenciaDataTable from "../components/LicenciaDataTable";
import HeaderBack from "../components/HeaderBack";
import AddFloatButton from "../components/AddFloatbutton";

const actions = [
  { icon: <AddIcon />, name: "Nuevo"},
  { icon: <SaveIcon />, name: "Guardar"},
  { icon: <PrintIcon />, name: "Imprimir"},
  { icon: <ShareIcon />, name: "Compartir"}
];
export const Licencias = () => {
  const [newItem, setNewItem] = React.useState(false);
  let { Id } = useParams();


  const handleAction=(a)=>{
switch (a) {
  case "Nuevo":
setNewItem(true)
    break;

  default:
    break;
}
  }
  return (
    <>
      <Esqueleto>
        <>
          <HeaderBack userId={Id} />
          <LicenciaDataTable newItem={newItem}/>
          <AddFloatButton
            actions={actions} handleAction={handleAction}
          />
        </>
      </Esqueleto>
    </>
  );
};
