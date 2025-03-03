import React from 'react'

export default function CardDashbord({ color, price, dec }) {
    return (
        <div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl h-fit w-fit ">
            <div className={`p-3  rounded-xl ${color}`}>
                <img src="/fi-sr-file.svg" alt="file icon" className='w-4 object-cover'/>
            </div>
            <div>
                <p className="text-md font-semibold">{price}</p>
                <p className="text-gray-400 text-sm">{dec}</p>
            </div>
        </div>

    )
}
