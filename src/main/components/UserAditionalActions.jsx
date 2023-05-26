import React, { useRef, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { fileUpload } from '../../services/fileUpload'
import getPdfText from '../../services/getPdfText'
import getProfileInfo from '../../services/extractData'

export const UserAditionalActions = () => {

  const [text, setText] = useState('')
  const [userDetail, setUserDetail] = useState()

  const fileInputRef = useRef();

  const handleFileChange = async ({ target }) => {
    if(target.files.length === 0) return; 
    const file = target.files['0']
    const pdfPath = await fileUpload(file)
    // toast.success("¡Carga exitosa!")
    getPdfText({pdfPath}).then(text => {
      setText(text)
      // LLamado al api de openAi
      getProfileInfo({userCvInfo: text}).then((data) => {
        const convertData = JSON.parse(data)
        console.log(convertData)
        setUserDetail(convertData)
      })
    })
    // getUserInfo()
  }

  const uploadFile = () => {
    fileInputRef.current.click()
  }

  return (
    <div className='w-[250px] bg-white rounded-md p-4'>
      <h3>Completa tu CV</h3>
      <hr />
      <h3>Mis CVs</h3>
      <h4>CV Adjunto</h4>
      <div className="my-2">
        <Button label={"Cargar CV"}/>
      </div>
      <div>
        <Button action={uploadFile} label={"Sincronizar desde CV"}/>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={ handleFileChange }
        style={{ display: 'none' }}
      />
      {/* <p>{userDetail}</p> */}
      {
        userDetail?.experiencia_laboral?.map((data) => (
          <div key={data.puesto}>
            <p>Puesto: {data.puesto}</p>
            <p>Empresa: {data.empresa}</p>
            <p>Duración: {data.fecha}</p>
          </div>
        ))
      }
    </div>
  )
}
