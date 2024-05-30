import React from 'react'
import Esqueleto from '../layouts/Esqueleto'
import { Container } from '@mui/material'
import LicenciaDataTable from '../components/LicenciaDataTable'
import HeaderBack from '../components/HeaderBack'
import { useParams } from 'react-router-dom'
import SpeedDialAddButton from '../components/SpeedDialAddButton'

export const Licencias = () => {
  let {Id} = useParams()
return (
    <><Esqueleto>
    <Container>
    <HeaderBack userId={Id}/>
    <LicenciaDataTable />
    </Container>
    </Esqueleto>
    <SpeedDialAddButton />
</>
  )
}
