import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import React from 'react'

const Pictures = ({item, id}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`flex flex-col`}
        >
            <img
                className='w-[200px] h-[200px] rounded-xl object-cover object-center'
                src={item.images[0]}
                alt={item.title}
                loading='lazy'
            />
            <span className='self-end mt-2 bg-cyan bg-opacity-70 rounded w-full p-1 text-white text-sm'>{item.category}</span>
        </div>
    )

}

export default Pictures