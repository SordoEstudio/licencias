import React, { useState } from 'react'
import { Container, FormControl, Grid, TextField } from '@mui/material'
import { SaveCancelComponent } from '../SaveCancelComponent'

const UserForm = ({setOpen,personalData}) => {
  const initialForm={
    legajo:"",
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    dni:"",
    isNew:true
  }
  const [form,setForm]=useState(personalData||initialForm)

  const handleCancel=()=>{
    setForm(initialForm)
    setOpen(false)
  }
  const handleSave=()=>{
    console.log("send:", form)
    setForm(initialForm)
    setOpen(false)
  }
  const handleChange=(e)=>{
    setForm({...form,
      [e.target.name]:e.target.value
      
    })

  }

  return (<>
    <Container >
    <FormControl sx={{display:"grid",direction:"column",gap:1,paddingTop:"0.5rem"}}>

    <TextField size="small" label="Legajo" placeholder="Legajo" name="legajo" value={form.legajo} onChange={handleChange} />
    <TextField size="small" label="Nombre"placeholder="Nombre" name="firstName" value={form.firstName} onChange={handleChange} />
    <TextField size="small" label="Apellido"placeholder="Apellido" name="lastName" value={form.lastName} onChange={handleChange} />
    <TextField size="small" label="Dni"placeholder="Dni" name="dni" value={form.dni} onChange={handleChange} />
    <TextField size="small" label="Teléfono"placeholder="Teléfono" name="phone" value={form.phone} onChange={handleChange} />
    <TextField size="small" label="Email"placeholder="Email" name="email" value={form.email} onChange={handleChange} />
    <SaveCancelComponent toCancel={handleCancel}toSave={handleSave} />
    </FormControl>
    </Container>
  </>
  )
}

export default UserForm