import React, { useState } from 'react'
import hi from '/hi.gif';


const TextEdit = (props) => {
  // for uppercase converter
  const handleUpClick = (event) => {
    // console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    document.title = "UPPERCASE CONVERTER";
  }

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  }

  // for lower case generator
  const handleLowerClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    document.title = "lowercase converter";
  }

  // sentence case generator
  const handleSentenceClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
    setText(newText)
    document.title = "Sentencecase converter";

  }

  // sentence case generator
  const handleTitleClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase().split(' ');
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
    document.title = "Titlecase Converter";
  }

  // copy
  const handleCopyClick = (event) => {
    if (text.length > 0) {
      navigator.clipboard.writeText(preview.value);
      props.displayAlert("Text copied to clipboard")
    }
    else {
      props.displayAlert("Nothing to copy")
    }
  }

  // extraSpace remover
  const handleSpaceClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    document.title = "Extra Space Remover";
  }

  // reverse text generator
  const handleReverseClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.split('').reverse().join('');
    setText(newText);
    document.title = "Reverse Text Generator";
  }
  // downloaded text
  function handleDownload(event) {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'myFile.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="message ">
        <div className='flex justify-center items-center'>
          <img className='w-16 h-16 rounded-2xl' src={hi} alt="" />
        </div>
        <div className='flex justify-between'>
          <label htmlFor="message" className="hidden md:block mb-2 text-sm font-medium text-gray-900 dark:text-white mx-5 md:text-xl my-2">{props.title}</label>
          <button type="button" className="block md:hidden focus:outline-none text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2 mx-3" onClick={handleDownload}>{props.download}</button>
          <button type="button" className="block md:hidden focus:outline-none text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mb-2 mx-3" onClick={handleCopyClick}>{props.copy}</button>
        </div>
        <div className="flex space-x-4 justify-center items-center mx-5">
          {/* for pc */}
          <textarea id="message" rows="8" onChange={handleOnChange} className="md:block hidden p-2.5 w-full text-sm md:text-xl text-gray-900 bg-gray-50 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 border-2 md:border-4" placeholder={props.placeholder}></textarea>

          <textarea id="preview" rows="8" value={text} className="md:block hidden  p-2.5 w-full text-sm md:text-xl text-gray-900 bg-gray-50 rounded-lg border-blue-500 border-2 md:border-4 focus:ring-blue-500 focus:border-blue-500" placeholder={props.preview}></textarea>
        </div>
        <div className='flex justify-center items-center mx-3'>
          {/* for mobile */}
          <textarea id="message" rows="8" onChange={handleOnChange} value={text} className="md:hidden block p-2.5 w-full text-sm md:text-xl text-gray-900 bg-gray-50 rounded-lg border-blue-500 focus:ring-blue-500 focus:border-blue-500 border-2 md:border-4" placeholder={props.placeholder}></textarea>
        </div>
      </div>
      {/* analyze data */}
      <div className="summary flex justify-center items-center space-x-3 mt-2">
        <div className='text-xs md:text-lg'>Character count:{text.length}</div>
        <div className='text-xs md:text-lg'>Word count:{text.trim().split(/\s+/).length}</div>
        <div className='text-xs md:text-lg'>Line count:{text.split(/\r\n|\r|\n/).length}</div>
      </div>
      {/*  */}

      <div className="buttonMiddle flex justify-center items-center">
        <div className="flex justify-center items-center mt-3">
          {/* for pc */}
          <button type="button" className="hidden md:block focus:outline-none text-xs  md:text-lg  text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleUpClick}>{props.upperCase}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs md:text-lg  px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleLowerClick}>{props.lowerCase}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSentenceClick}>{props.sentenceCase}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleTitleClick}>{props.titleCase}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSpaceClick}>{props.space}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleReverseClick}>{props.reverse}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleDownload}>{props.download}</button>

          <button type="button" className="hidden md:block focus:outline-none text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleCopyClick}>{props.copy}</button>
        </div>
      </div>

      {/* for phone */}
      <div className="flex justify-center items-center">
        <button type="button" className="block md:hidden focus:outline-none text-xs  md:text-lg  text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleUpClick}>{props.upperCase}</button>

        <button type="button" className="block md:hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs md:text-lg  px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleLowerClick}>{props.lowerCase}</button>

        <button type="button" className="block md:hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSentenceClick}>{props.sentenceCase}</button>
      </div>

      <div className="flex justify-center items-center">
        <button type="button" className="block md:hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleTitleClick}>{props.titleCase}</button>

        <button type="button" className="block md:hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSpaceClick}>{props.space}</button>

        <button type="button" className="block md:hidden focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleReverseClick}>{props.reverse}</button>
      </div>
    </>
  )
}

export default TextEdit