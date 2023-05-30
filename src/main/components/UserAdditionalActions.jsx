import React, { useRef, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { fileUpload } from '../../services/fileUpload'
import getPdfText from '../../services/getPdfText'
import getProfileInfo from '../../services/extractData'
import { useUserInfo } from '../../store/AppStore'
import { toast } from 'react-hot-toast'

export const UserAdditionalActions = () => {

  const [isLoadingInfo, setIsLoadingInfo] = useState(false)

  const {
    updateUserExperience,
    userCvPdfUrl,
    updateUserCvPdfUrl,
    updateUserEducation,
    updateUserSkills,
    updateUserLenguaje,
    updateAboutUser,
    updateAboutUserImprove,

   } = useUserInfo(state => state)

  const fileInputRef = useRef();

  const handleFileChange = async ({ target }) => {
    if(target.files.length === 0) return; 
    const file = target.files['0']
    const pdfPath = await fileUpload(file)
    localStorage.setItem('pdf_url', pdfPath)
    updateUserCvPdfUrl(pdfPath)
    toast.success("¡Carga exitosa!")

    // getUserInfo()
  }

  const uploadFile = () => {
    fileInputRef.current.click()
  }

  const syncUserData = async () => {
    setIsLoadingInfo(true)
    getPdfText({pdfPath: userCvPdfUrl}).then(text => {
      // LLamado al api de openAi
      getProfileInfo({userCvInfo: text}).then((data) => {
        updateUserEducation(data.educacion)
        updateUserExperience(data.experiencia_laboral)
        updateUserSkills(data.habilidades)
        updateUserLenguaje(data.idiomas)
        updateAboutUser(data.perfil_profesional)
        updateAboutUserImprove(data.perfil_profesional_mejorado)
        toast.success("¡Perfil actualizado!")
        setIsLoadingInfo(false)
      })
    })
  }

  return (
    <div className='w-[250px] bg-white rounded-md p-4'>
      <h3>Completa tu CV</h3>
      <hr />
      <h3>Mis CVs</h3>
      {
        userCvPdfUrl 
        && <a className='text-blue-600' href={userCvPdfUrl} target='_blank' rel='noreferrer'>cv.pdf</a>
      }
      <h4>CV Adjunto</h4>
      <div className="my-2">
        <Button action={uploadFile} label={userCvPdfUrl? "Cargar nuevo CV": "Cargar CV"}/>
      </div>
      <div>
        <Button isLoading={isLoadingInfo} action={syncUserData} label={"Sincronizar perfil desde CV"} disabled={!userCvPdfUrl} />
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={ handleFileChange }
        style={{ display: 'none' }}
      />
    </div>
  )
}
