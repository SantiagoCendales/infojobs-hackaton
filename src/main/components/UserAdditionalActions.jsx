import React, { useRef, useState } from 'react'
import { Button } from '../../components/ui/Button'
import { fileUpload } from '../../services/fileUpload'
import getPdfText from '../../services/getPdfText'
import getProfileInfo from '../../services/extractData'
import { useUserInfo } from '../../store/AppStore'
import { toast } from 'react-hot-toast'

export const UserAdditionalActions = () => {

  const [isLoadingInfo, setIsLoadingInfo] = useState(false)
  const [isLoadingPdf, setIsLoadingPdf] = useState(false)

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
    setIsLoadingPdf(true)
    if(target.files.length === 0) return; 
    const file = target.files['0']
    const pdfPath = await fileUpload(file)
    localStorage.setItem('pdf_url', pdfPath)
    updateUserCvPdfUrl(pdfPath)
    setIsLoadingPdf(false)
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
      }).finally(() => {
        setIsLoadingInfo(false)
      })
    })
  }

  const setTestPdf = () => {
    localStorage.setItem('pdf_url', 'https://res.cloudinary.com/dnzesrac8/image/upload/v1685487600/journal/izmfxbuoox2kt5hdgerh.pdf')
    updateUserCvPdfUrl('https://res.cloudinary.com/dnzesrac8/image/upload/v1685487600/journal/izmfxbuoox2kt5hdgerh.pdf')
  }

  return (
    <div className='w-[250px] bg-white rounded-md p-4'>
      <h3 className='mb-2'>Completa tu CV</h3>
      <hr />
      <h3 className='mt-2'>Mis CVs</h3>
      {
        userCvPdfUrl 
        && <a className='text-blue-600' href={userCvPdfUrl} target='_blank' rel='noreferrer'>cv.pdf</a>
      }
      <div className="mt-2">
        <Button isLoading={isLoadingPdf} action={uploadFile} label={userCvPdfUrl? "Cargar nuevo CV": "Cargar CV"}/>
      </div>
      <div className='text-neutral-500 text-xs mb-4 mt-1'>
        <button onClick={setTestPdf}>Usar CV de prueba</button>
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
