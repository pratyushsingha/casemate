import React, { useState } from 'react'
import hi from '/hi.gif';

const TextEdit = (props) => {
  // for uppercase converter
  const handleUpClick = (event) => {
    // console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
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
  }

  // sentence case generator
  const handleSentenceClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
    setText(newText)
  }

  // sentence case generator
  const handleTitleClick = (event) => {
    // console.log("lowercase was clicked")
    let newText = text.toLowerCase().split(' ');
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    setText(newText.join(" "));
  }

// copy
  const handleCopyClick = (event) => {
  var newText = document.getElementById("preview")
  newText.select();
  navigator.clipboard.writeText(newText.value);
  props.displayAlert("Text copied to clipboard")
  }

  // extraSpace remover
  const handleSpaceClick = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }



  const [text, setText] = useState("preview text");
  return (
    <>
      <div className="message md:mx-96">
        <div className='flex justify-center items-center'>
          <img className='w-16 h-16 rounded-2xl' src={hi} alt="" />
        </div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.title}</label>
        <div className="flex space-x-4">
          <textarea id="message" rows="8" onChange={handleOnChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={props.placeholder}></textarea>

          <textarea id="preview" rows="8" value={text} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={props.placeholder}></textarea>
        </div>
      </div>
      {/* analyze dataa */}
      <div className="summary flex justify-center items-center space-x-3 mt-2">
        <div className='text-xs md:text-lg'>Character count:{text.length}</div>
        <div className='text-xs md:text-lg'>Word count:{text.split(" ").length}</div>
        <div className='text-xs md:text-lg'>Line count:{text.split(/\r\n|\r|\n/).length}</div>
      </div>
      {/*  */}
      <div className="buttonMiddle flex justify-center items-center">
        <div className="flex justify-center items-center">
          <button type="button" className="focus:outline-none text-xs  md:text-lg  text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleUpClick}>{props.upperCase}</button>


          <div className="my-3">
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs md:text-lg  px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-700" onClick={handleLowerClick}>{props.lowerCase}</button>
          </div>

          <div className="my-3">
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSentenceClick}>{props.sentenceCase}</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleTitleClick}>{props.titleCase}</button>

        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-900 focus:ring-4 focus:ring-purple-600 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleSpaceClick}>{props.space}</button>

        <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-red-500 font-medium rounded-lg text-xs  md:text-lg px-5 py-2.5 mr-2 mb-2" onClick={handleCopyClick}>{props.copy}</button>

      </div>


    </>
  )
}

export default TextEdit
