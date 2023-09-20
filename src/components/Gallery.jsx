import React, { useState } from 'react'
import { shopItemsData } from '../myData'

import Picture from './Picture'

const Gallery = () => {
  const [filter, setFilter] = useState('')

  return (
    <main className='my-8 mx-2 p-4 bg-gray-200 rounded shadow-2xl min-h-[40vh]'>
      <input
        onChange={(e) => { setFilter(e.target.value) }}
        className='p-2 ps-2 mb-3 outline-0 border rounded text-[14px] w-full' placeholder='filter by categories...'
        type="text"
      />
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-2 mx-auto">
        {
          shopItemsData.filter((items) => {
            if (filter == "") {
              return items
            } else if (items.category.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
              return items
            }
          }).map((item) => {
            return (
              <Picture item={item} key={item.id} />
            )
          })
        }
      </div>
    </main>
  )
}

export default Gallery