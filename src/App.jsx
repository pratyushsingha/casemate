import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextEdit from './components/TextEdit'

function App(props) {
  return (
    <>
     <Navbar title="ConvertCase" />
     <TextEdit title = "Text" placeholder="Enter ur text here..." upperCase="UPPER CASE" lowerCase="lower case" sentenceCase="Sentence case" titleCase="Title Case" copy="Copy" space="Remove Extra Spaces"/>
    </>
  )
}

export default App
