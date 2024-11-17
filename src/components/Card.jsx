import React from 'react'
import Button from './button'

const Card = ({ link, title, desc, onClick, buttonClass }) => {
    return (
        <>

            <div className=' w-full aspect-[9/12]  '>

                <img src={link} alt="Book Image" className='w-full h-full rounded-xl' />
            </div>
            <div className='py-4'>
                <p className='text-xl font-medium'>{title}</p>
                <p className='text-lg font-normal h-14'>{desc.slice(0, 60)}{desc.length > 60 ? "..." : ""}</p>
                <div className='mt-4'>

                    <Button className={`w-full ${buttonClass}`} title={"View Detail"} onClick={onClick} />
                </div>
            </div>
        </>
    )
}

export default Card
