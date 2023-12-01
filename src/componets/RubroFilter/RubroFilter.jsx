import React from 'react'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

export const RubroFilter = () => {
  const {rubro} = useParams()
  return (
   <ItemListContainer filter={rubro}/>
  )
}
