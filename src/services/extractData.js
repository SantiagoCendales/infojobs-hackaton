import {
  Configuration,
  ChatCompletionRequestMessageRoleEnum,
  OpenAIApi
} from 'openai'

const prompt = "Del el texto que te voy a pasar quiero que listes la información de educación, experiencia laboral, perfil profesional, habilidades, idiomas (asignale un nivel) y un campo mejorando la redacción del perfil profesional y que lo organizes en un array de objetos JSON como el siguiente. { 'educacion': [ { 'id': ,'titulo': '', 'fecha': '', 'institucion': '' } ], 'experiencia_laboral': [ { 'id': , 'puesto': '', 'empresa': '', 'fecha': 'Marzo de 2020 - Mayo de 2021' } ], 'habilidades': [ 'HTML', 'CSS', 'Angular' ], 'idiomas' : [{'idioma': 'ingles', 'nivel': 'basico'}], 'perfil_profesional': '', 'perfil_profesional_mejorado': '' }. Asegúrate de no retornar un array" 
const openaiToken = import.meta.env.VITE_OPENAI_TOKEN ?? ''

const conf = new Configuration({ apiKey: openaiToken})
const openai = new OpenAIApi(conf)

const getProfileInfo = async ({userCvInfo = ''}) => {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    messages: [
      {"role": ChatCompletionRequestMessageRoleEnum.System, "content": prompt},
      {"role": "user", "content": userCvInfo}
    ],
  })
  const data = completion.data.choices[0].message?.content ?? ''
  return JSON.parse(data)
}

export default getProfileInfo