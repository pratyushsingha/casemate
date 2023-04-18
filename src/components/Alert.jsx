import React from 'react'

const Alert = (props) => {
    return (
        
            props.alert && <div className="p-3 mb-4 text-sm flex justify-center items-center text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                <span className="font-medium"><strong>{props.alert.msg}</strong></span>.
            </div>
    )
}

export default Alert
