import './App.css'
import Header from './components/header/Header'
import toast,  { Toaster } from 'react-hot-toast';
import { fileUpload } from './services/fileUpload';
import { useState } from 'react';
import getPdfText from './services/getPdfText';
import getProfileInfo from './services/extractData';

function App() {
  const [text, setText] = useState('')

  const handleFileChange = async ({ target }) => {
    if(target.files.length === 0) return; 
    const file = target.files['0']
    const pdfPath = await fileUpload(file)
    toast.success("¡Carga exitosa!")
    getPdfText({pdfPath}).then(text => {
      setText(text)
    })
    // LLamado al api de openAi
    // getProfileInfo()
  }

  return (
    <>
      <Toaster />
      <Header />
      <main>
        <input
          type="file"
          accept=".pdf"
          onChange={ handleFileChange }
        />
        <p>{text}</p>
      </main>
    </>
  )
}

export default App
