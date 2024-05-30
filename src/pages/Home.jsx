import React from 'react'
import Esqueleto from '../layouts/Esqueleto'
import { Container } from '@mui/material'
import SearchHeader from '../components/SearchHeader'
import PersonalDataTable from '../components/PersonalDataTable'

export const Home = () => {

  return (
    <><Esqueleto>
    <Container>
    <SearchHeader />
    <PersonalDataTable />
    </Container>
    </Esqueleto></>
  )
}
