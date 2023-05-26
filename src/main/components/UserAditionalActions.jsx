import React from 'react'
import { Button } from '../../components/ui/Button'

export const UserAditionalActions = () => {
  return (
    <div className='w-[250px] bg-white rounded-md p-4'>
      <h3>Completa tu CV</h3>
      <hr />
      <h3>Mis CVs</h3>
      <h4>CV Adjunto</h4>
      <Button label={"Cargar CV"}/>
      <Button label={"Sincronizar desde CV"}/>
    </div>
  )
}
