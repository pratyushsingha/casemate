import React from 'react'
import logo from '/favicon.ico'

const Navbar = (props) => {
  return (
    <>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex justify-center flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img className='bg-yellow-500 text-yellow-500' src={logo} alt="Logo" />
      <span className="ml-3 text-xl">{props.title}</span>
    </a>
   
  </div>
</header>
    </>
  )
}

export default Navbar
