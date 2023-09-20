import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

const Sortable = (item) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: item.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }
    return (
        <ul ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <li className='text-white'>{item.id}</li>  
        </ul>
    )
}

export default Sortable