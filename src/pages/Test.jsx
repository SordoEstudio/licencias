import React from 'react'
import DialogComponent from '../components/DialogComponent'
import UserForm from '../components/Personal/UserForm'
import { Button } from '@mui/material'
import NewLicenceForm from '../components/Licencias/NewLicenceForm'
import DatePickerInput from '../components/DatePickerInput'

const Test = () => {


const handleSave=(d)=>{
  console.log(d)
}

return (<>
    <div>Test</div>
        <NewLicenceFormNDP toSave={handleSave} toCancel={toCancel}/>
<DatePickerInput />
  </>
  )

}

export default Test