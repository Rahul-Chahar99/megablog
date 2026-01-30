import React from 'react'

function Button({
    children,
    type='button',
    bgColor = 'bg-black',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 ${className} ${bgColor} ${textColor}`} {...props}
    >
        {children}
    </button>
  )
}

export default Button
