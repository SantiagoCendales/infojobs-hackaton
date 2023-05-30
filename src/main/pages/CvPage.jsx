import Container from "../../components/ui/Container"
import { UserDetailCard } from "../components/UserDetailCard"
import { UserInfoCard } from "../components/UserInfoCard"
import { UserAdditionalActions } from "../components/UserAdditionalActions"
import { useUserInfo } from "../../store/AppStore"
import { Button } from "../../components/ui/Button"

export const CvPage = () => {

  const {
    userExperience,
    userEducation,
    userSkills,
    userLenguaje,
    aboutUser,
    aboutUserImprove,
    updateAboutUser,
    updateAboutUserImprove
  } = useUserInfo(state => state)

  const setImproveAboutUser = (improve) => {
    if(improve) {
      updateAboutUser(aboutUserImprove)
      updateAboutUserImprove('')
    } else {
      updateAboutUser(aboutUser)
      updateAboutUserImprove('')
    }
  }

  return (
    <div className="py-8">
      <Container>
        <main>
          <div className="mb-4">
            <h2 className="text-3xl">John Doe</h2>
            <p className="text-neutral-500">CV principal</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">

              <UserInfoCard
                name={'John Doe'}
                bornDate={'29/06/1994'}
                email={'srcendales94@gmail.com'}
                location={'Residente (Bogotá)'}
                phone={'+573204526639'}
              />

              <div className="bg-white rounded-xl">
                <div className="flex justify-between items-center p-5">
                  <h2 className="text-lg">Acerca de mi</h2>
                  {/* <button>AÑADIR IDIOMA</button> */}
                </div>
                <hr />
                <div>
                  <div className="grid grid-cols-10 p-5 gap-4">
                    <div className="col-span-9 flex flex-col gap-2">
                      <p>
                        {aboutUser ? aboutUser : "Sin información"}
                      </p>
                      <br />
                      {
                        aboutUserImprove && (
                          <div className="rounded-lg bg-green-200 w-fit py-3 px-4">
                          
                            <h6 className="font-semibold">Sugerencia para mejorar perfil</h6>
                            <p>
                              {aboutUserImprove}
                            </p>
                            <br />
                            <div className="flex justify-end mb-3">
                              <div className="mr-2">
                                <Button action={() => setImproveAboutUser(false)} label={"Descartar"} />
                              </div>
                              <Button action={() => setImproveAboutUser(true)} label={"Usar mejora"} />
                            </div>
                          </div>
                        )
                      }

                    </div>
                  </div>
                </div>
              </div>

              <UserDetailCard
                title={'Experiencia laboral'}
                buttonLabel={'AÑADIR EXPERIENCIA'}
                infoArr={userExperience}
                notFoundLabel="No tengo experiencia"
              />

              <UserDetailCard
                title={'Estudios'}
                buttonLabel={'AÑADIR ESTUDIO'}
                infoArr={userEducation}
                notFoundLabel="No tengo estudios"
              />

              <div className="bg-white rounded-xl">
                <div className="flex justify-between items-center p-5">
                  <h2 className="text-lg">Idiomas</h2>
                  {/* <button>AÑADIR IDIOMA</button> */}
                </div>
                <hr />
                <div>
                  <div className="grid grid-cols-10 p-5 gap-4">
                    <div className="col-span-9 flex flex-col gap-2">
                      {
                        userLenguaje.map(data => (
                          <p key={data.idioma}>{data.idioma}: <span className="text-neutral-500">{data.nivel}</span></p>
                        )
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl">
                <div className="flex justify-between items-center p-5">
                  <h2 className="text-lg">Habilidades</h2>
                  {/* <button>AÑADIR HABILIDAD</button> */}
                </div>
                <hr />
                <div>
                  <div className="grid grid-cols-10 p-5 gap-4">
                    <div className="col-span-9 flex flex-wrap gap-2">
                      {
                        userSkills?.map((data) => (
                          <div key={data} className="border border-neutral-900 px-3 rounded-full">
                            <p>{data}</p>
                          </div>
                        ))
                      }

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <UserAdditionalActions />
            </div>
          </div>
        </main>
      </Container>
    </div>
  )
}
