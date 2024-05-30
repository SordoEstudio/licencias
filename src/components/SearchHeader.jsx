import React from 'react'
import { Box, Container, IconButton, Paper, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const SearchHeader = ({handleDni,handleName,handleId}) => {

  return (
    <Container sx={{pt:2,pb:2}} >  
       <Paper elevation={2} sx={{bgcolor:'whitesmoke'}}>
        <Toolbar position="static" sx={{justifyContent:"space-between"}}>
            <Box sx={{display:"flex",gap:1, alignItems:"center"}}>
<PersonSearchIcon color="primary"/>
<TextField label="Legajo" size="small"onChange={(e)=>handleId(e)}></TextField>
<TextField label="Apellido" size="small"onChange={(e)=>handleName(e)}></TextField>
<TextField label="Dni" size="small" onChange={(e)=>handleDni(e)}></TextField>
            </Box>
      <Box>
        <IconButton size="large"><PersonAddIcon/></IconButton>
      </Box>
      </Toolbar>
            </Paper>        
  </Container>
  )
}

export default SearchHeader