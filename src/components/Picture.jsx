import React from 'react'

const Picture = ({ item }) => {
    return (
        <div
            className={`flex flex-col`}
        >
            <img
                className='w-[200px] h-[200px] rounded-xl object-cover object-center'
                src={item.images[0]}
                alt={item.title}
                loading='lazy'
            />
            <span className='self-end mt-2 bg-cyan bg-opacity-70 rounded w-full p-1 text-white'>{item.category}</span>
        </div>
    )
}

export default Picture