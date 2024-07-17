import React, { useState } from 'react'
import { Container, FormControl, Grid, TextField } from '@mui/material'
import { SaveCancelComponent } from '../SaveCancelComponent'

const UserForm = ({setOpen}) => {
  const initialForm={
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    dni:"",
  }
  const handleCancel=()=>{
    setForm(initialForm)
    setOpen(false)
  }
  const handleSave=()=>{
    console.log("send:", form)
    setForm(initialForm)
    setOpen(false)
  }
  const [form,setForm]=useState(initialForm)
  const handleChange=(e)=>{
    setForm({...form,
      [e.target.name]:e.target.value
      
    })

  }


  return (<>
    <Container >
    <FormControl sx={{display:"grid",direction:"column",gap:1}}>
    <TextField size="small" placeholder="Nombre" name="firstName" value={form.firstName} onChange={handleChange} />
    <TextField size="small" placeholder="Apellido" name="lastName" value={form.lastName} onChange={handleChange} />
    <TextField size="small" placeholder="Dni" name="dni" value={form.dni} onChange={handleChange} />
    <TextField size="small" placeholder="Teléfono" name="phone" value={form.phone} onChange={handleChange} />
    <TextField size="small" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
    <SaveCancelComponent toCancel={handleCancel}toSave={handleSave} />
    </FormControl>
    </Container>
  </>
  )
}

export default UserForm