import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextEdit from './components/TextEdit'

function App(props) {
  return (
    <>
     <Navbar title="ConvertCase" />
     <TextEdit title = "Text" placeholder="Enter ur text here..." upperCase="UpperCase Converter" lowerCase="LowerCase Converter" titleCase="TitleCase Converter"/>
    </>
  )
}

export default App
