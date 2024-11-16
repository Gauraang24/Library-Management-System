import React from 'react'

const Button = ({ className, onClick, title }) => {
    return (
        <button className={`${className} text-white rounded-md px-4 py-2 bg-[#636ae8]`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
