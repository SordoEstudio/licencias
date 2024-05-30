import React from 'react'
import { Box, Button, Container, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { useNavigate } from 'react-router-dom';

const HeaderBack = ({userId}) => {

  const navigate = useNavigate();

  return (
    <Container sx={{pt:2,pb:2}} >  
       <Paper elevation={2} sx={{bgcolor:'whitesmoke'}}>
        <Toolbar position="static" sx={{justifyContent:"space-between"}}>

            <Box sx={{display:"flex",gap:1, alignItems:"center"}}>
        <IconButton size="large" onClick={() => navigate(-1)}><ArrowBackIosIcon/></IconButton>
<TextField id="legajoid" variant="standard"  
label="Legajo" defaultValue={userId}
InputProps={{readOnly: true}}
sx={{width:80, pr:"2rem"}}/>
<TextField id="nombreid" variant="standard"  
label="Empleado" defaultValue="ALBERA, Pablo"
InputProps={{readOnly: true}}
/>
<TextField id="diasid" variant="standard"  
label="Restan" size="small" defaultValue="6" 
InputProps={{
  endAdornment: <InputAdornment position="end">dias</InputAdornment>,readOnly:true
}}
sx={{width:80}}/>
            </Box>
<Box>
<Button size="large" ENDIcon={<EditIcon/>}>editar perfil</Button>
</Box>
      </Toolbar>
            </Paper>        
  </Container>
  )
}

export default HeaderBack