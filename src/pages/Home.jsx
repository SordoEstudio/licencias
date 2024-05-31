import React, { useState } from 'react'
import Esqueleto from '../layouts/Esqueleto'
import { Container } from '@mui/material'
import SearchHeader from '../components/SearchHeader'
import PersonalDataTable from '../components/PersonalDataTable'

import personalData from "../assets/personal.json"


export const Home = () => {
  const [searchItem, setSearchItem] = useState('')
  const [searchItemName, setSearchItemName] = useState('')
  const [searchItemDni, setSearchItemDni] = useState('')
  const [filteredData, setFilteredData] = useState(personalData)

/*
  const handleChangeId = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemId(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.id.includes(searchTerm)
    );
    setFilteredData(filteredItems);
  }

  const handleChangeName = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemName(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  }

  const handleChangeDni = (e) => { 
    const searchTerm = e.target.value;
    setSearchItemDni(searchTerm)
    const filteredItems = personalData.filter((person) =>
    person.dni.includes(searchTerm)
    );
    setFilteredData(filteredItems);
  }
  handleDni={handleChangeDni}handleId={handleChangeId}handleName={handleChangeName}
  */
  const handleData = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
    const filteredItems = personalData.filter((person) =>
      person.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.id.includes(searchTerm)    );
    setFilteredData(filteredItems);
}
  return (
    <><Esqueleto>
    <Container>
    <SearchHeader handleData={handleData}/>
    <PersonalDataTable data={filteredData} />
    </Container>
    </Esqueleto></>
  )
}