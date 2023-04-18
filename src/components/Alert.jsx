import React from 'react'

const Alert = (props) => {
    return (
        
            props.alert && <div className="p-1 text-xs md:text-sm flex justify-center items-center " role="alert">
                <span className="font-medium text-green-800 rounded-lg bg-green-50"><strong>{props.alert.msg}</strong></span>.
            </div>
    )
}

export default Alert
