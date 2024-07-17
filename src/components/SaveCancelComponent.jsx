import React from 'react'
import { Box, Button } from '@mui/material'

export const SaveCancelComponent = ({toSave,toCancel}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", gap: 1 }}>
    <Button variant="outlined" onClick={()=>toCancel()}>
      cancelar
    </Button>
    <Button variant="contained" color="primary" onClick={()=>toSave()}>
      guardar
    </Button>
  </Box>
      )
}