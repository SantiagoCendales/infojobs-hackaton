import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi
} from 'openai'

const prompt = "Del el texto que te voy a pasar quiero que listes la información de experiencia laboral y que lo organizes en un array de objetos JSON como el siguiente. { 'experiencia_laboral': [ { 'puesto': ', 'empresa': ', 'fecha': 'Marzo de 2020 - Mayo de 2021' } ] }"
const openaiToken = import.meta.env.VITE_OPENAI_TOKEN ?? ''

const conf = new Configuration({ apiKey: openaiToken})
const openai = new OpenAIApi(conf)

const getProfileInfo = async () => {
  // const completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   temperature: 0.7,
  //   messages: [
  //     {"role": ChatCompletionRequestMessageRoleEnum.System, "content": prompt},
  //     {"role": "user", "content": "EXPERIENCIA LABORAL Desarrollador Fullstack - Fitpal Mayo 2021 - Diciembre 2022 • Colaboré en el desarrollo de nuevas funcionalidades. • Colaboré en el rebranding de la aplicación. • Encargado del despliegue a producción de la aplicación en IOS."}
  //   ],
  // })
  // const data = completion.data.choices[0].message?.content ?? ''
  // console.log(data);
}

export default getProfileInfo