import React, { useContext, useState } from 'react'

import {
  SortableContext,
  rectSwappingStrategy,
} from '@dnd-kit/sortable';

import { ProjectContext } from '../App';

import Pictures from './Pictures';


const Gallery = () => {
  const [filter, setFilter] = useState('')
  const {gallery} = useContext(ProjectContext);

  return (
    <main className='mt-2 mb-8 mx-2 p-2 md:p-4 bg-gray-200 bg-opacity-60 rounded shadow-2xl  min-h-[40vh] animate__animated animate__zoomIn'>
      <h1 className='text-white font-bold text-xl mb-3'>Gallery</h1>
      <input
        onChange={(e) => { setFilter(e.target.value) }}
        className='sticky top-0 p-2 ps-2 mt- mb-3 outline-0 border border-gray-200 rounded text-[14px] w-full' placeholder='filter by categories...'
        type="text"
      />
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-2 mx-auto">
        <SortableContext
          items={gallery}
          strategy={rectSwappingStrategy}
        >
          {
            gallery.filter((items) => {
              if (filter == "") {
                return items
              } else if (items.category.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                return items
              }
            }).map((value, index) => {
              return (
                <Pictures key={value.id} item={value} id={index} />
              )
            })
          }
        </SortableContext>
      </div>
    </main>
  )

}

export default Gallery