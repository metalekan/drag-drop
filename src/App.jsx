import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router'
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core';

// import {
//   arrayMove,
//   SortableContext,
//   horizontalListSortingStrategy,
//   verticalListSortingStrategy
// } from '@dnd-kit/sortable';

import { shopItemsData } from './myData';
import { arrayMove } from '@dnd-kit/sortable';
// import Sortable from './components/Sortable';

export const ProjectContext = createContext();

const App = () => {
  const dataArray = [...shopItemsData];
  console.log(dataArray);
  const [gallery, setGallery] = useState(dataArray);
  // const [tools, setTools] = useState(["abuja", "benue", "calabar", "delta"])
  // const [images, setImages] = useState(["abuja", "benue", "calabar", "delta"])

  // console.log(gallery);
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ProjectContext.Provider value={{ gallery, setGallery }}>
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
          {/* <SortableContext items={tools} strategy={verticalListSortingStrategy}>
            <div className="w-[100px] h-[100px] border">
              {
                tools.map(tool => <Sortable key={tool} id={tool} />)
              }
            </div>

          </SortableContext > */}
          <Outlet />
        </div>

      </ProjectContext.Provider>

    </DndContext>
  )

  function handleDragEnd(event) {
    console.log("Drag end called")
    const { active, over } = event;
    console.log(`Active: ${active.id}`);
    console.log(`Over: ${over.id}`);

    if (active.id !== over.id) {
      // setTools((items) => {
      //   const activeIndex = items.indexOf(active.id);
      //   const overIndex = items.indexOf(over.id);

      //   return arrayMove(items, activeIndex, overIndex);
      // })
      // console.log(tools);
      setGallery((items) => {
        // const activeIndex = items.indexOf(active.id);
        // const overIndex = items.indexOf(over.id);
        const activeIndex = active.id;
        const overIndex = over.id;
        
        console.log(activeIndex);
        console.log(overIndex);
        // console.log(items);
        return arrayMove(items, overIndex, activeIndex);
      })
      // console.log(gallery);
    }
  }


}


export default App