import React from 'react'
import DialogComponent from '../components/DialogComponent'
import UserForm from '../components/Personal/UserForm'
import { Button } from '@mui/material'
import NewLicenceForm from '../components/Licencias/NewLicenceForm'

const Test = () => {
  const [open, setOpen] = React.useState(false);
function handleOpenDialog(){
  setOpen(true)
}
const handleSave=(d)=>{
  console.log(d)
}

return (<>
    <div>Test</div>
    <Button onClick={handleOpenDialog}>Abrir</Button>
    <DialogComponent setOpen={setOpen} open={open} title="Crear nuevo usuario">
        <NewLicenceForm setOpen={setOpen}toSave={handleSave}/>
    </DialogComponent>
        <NewLicenceForm toSave={handleSave}/>

  </>
  )

}

export default Test