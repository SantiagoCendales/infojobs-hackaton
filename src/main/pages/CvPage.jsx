import { useState } from "react"
import getUserInfo from "../../services/getInfoJobsUser"
import Container from "../../components/ui/Container"
import { UserDetailCard } from "../components/UserDetailCard"
import { UserInfoCard } from "../components/UserInfoCard"
import { UserAditionalActions } from "../components/UserAditionalActions"
import getPdfText from "../../services/getPdfText"
import { fileUpload } from "../../services/fileUpload"
import getProfileInfo from "../../services/extractData"

const experienceInfo = [
  {
    id: 1,
    title: 'Fullstack developer',
    center: 'Fitpal',
    time: 'Abril 2022 - Marzo 2023'
  },
  {
    id: 2,
    title: 'Frontend developer',
    center: 'Tres Pi Medios',
    time: 'Abril 2022 - Marzo 2023'
  }
]

const education = [
  {
    id: 1,
    title: 'Ingeniero de sonido',
    center: 'Universidad de San Buenaventura',
    time: 'enero 2012 - Junio 2018'
  }
]

export const CvPage = () => {

  return (
    <div className="py-8">
      <Container>
        <main>
          <div className="mb-4">
            <h2 className="text-3xl">Santiago</h2>
            <p className="text-neutral-500">CV principal</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">

              <UserInfoCard
                name={'Santiago Cendales Gomez'}
                bornDate={'29/06/1994'}
                email={'srcendales94@gmail.com'}
                location={'Residente (Bogotá)'}
                phone={'+573204526639'}
              />

              <UserDetailCard
                title={'Experiencia laboral'}
                buttonLabel={'AÑADIR EXPERIENCIA'}
                infoArr={experienceInfo}
                notFoundLabel="No tengo experiencia"
              />

              <UserDetailCard
                title={'Estudios'}
                buttonLabel={'AÑADIR ESTUDIO'}
                infoArr={education}
                notFoundLabel="No tengo estudios"
              />

              <div className="bg-white rounded-xl">
                <div className="flex justify-between items-center p-5">
                  <h2 className="text-lg">Idiomas</h2>
                  <button>AÑADIR IDIOMA</button>
                </div>
                <hr />
                <div>
                  <div className="grid grid-cols-10 p-5 gap-4">
                    <div className="col-span-9 flex flex-col gap-2">
                      <p>Inglés: <span className="text-neutral-500">Básico</span></p>
                      <p>Español: <span className="text-neutral-500">Nativo</span></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <UserAditionalActions/>
            </div>
          </div>
        </main>
      </Container>
    </div>
  )
}
