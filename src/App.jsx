import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextEdit from './components/TextEdit'
import Alert from './components/Alert'

function App() {
  const [alert, setAlert] = useState(null);

  const displayAlert = (message) => {
    setAlert(
      {
        msg: message
      }
      )
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  return (
    <>
      <Navbar title="TextConverter" />
      <TextEdit title="Text" placeholder="Enter ur text here..." preview="Preview Text" upperCase="UPPER CASE" lowerCase="lower case" sentenceCase="Sentence case" titleCase="Title Case" copy="Copy" space="Remove Spaces" displayAlert={displayAlert} reverse="Reverse Text" />
      <Alert alert={alert} />

    </>
  )
}

export default App
