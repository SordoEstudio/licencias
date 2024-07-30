import React from 'react'
import DialogComponent from '../components/DialogComponent'
import UserForm from '../components/Personal/UserForm'
import { Button } from '@mui/material'
import NewLicenceForm from '../components/Licencias/NewLicenceForm_DEPRECATED'
import DatePickerInput from '../components/DatePickerInput'
import NewLicenceFormNDP from '../components/Licencias/NewLicenceFormNDP'


import data from "../assets/licencias.json";

const Test = () => {

const changeDate=(date)=>{
console.log(date)
}
const handleSave=(d)=>{
  console.log("save:",d)
}
const handleCancel=()=>{
  console.log("cancel")
}


return (<>
    <div>Test</div>
        <NewLicenceFormNDP  toSave={handleSave} toCancel={handleCancel}/>
{/*<DatePickerInput   label={"prueba"} changeDate={changeDate} name={"prueba"} />*/}
  </>
  )
}
export default Test