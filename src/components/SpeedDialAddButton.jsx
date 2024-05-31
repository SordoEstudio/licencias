import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';



export default function SpeedDialAddButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const actions = [
      { icon: <AddIcon />, name: 'Nuevo' ,to:"newLicence"},
    { icon: <SaveIcon />, name: 'Guardar' ,to:""},
    { icon: <PrintIcon />, name: 'Imprimir',to:"" },
    { icon: <ShareIcon />, name: 'Compartir',to:"" },
  ];

  const handleAction=(key)=>{
    switch (key) {
      case "Nuevo":

        break;
      default:
        break;
    }
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>

      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: '', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        >
        {actions.map((action) => (
          <Link to={action.to}            
          key={action.name}
            onClick={()=>handleAction(action.name)}
          >
          <SpeedDialAction
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            />
            </Link>
        ))}
      </SpeedDial>
        </Box>
  );
}
