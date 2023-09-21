import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router'
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core';
import { shopItemsData } from './myData';
import { arrayMove } from '@dnd-kit/sortable';

export const ProjectContext = createContext();

const App = () => {
  const dataArray = [...shopItemsData];
  const [gallery, setGallery] = useState(dataArray);
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ProjectContext.Provider value={{ gallery, setGallery }}>
        <div className='min-h-screen flex items-center justify-center bg-gray-300'>
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
      setGallery((items) => {
        // const activeIndex = items.indexOf(active.id);
        // const overIndex = items.indexOf(over.id);
        const activeIndex = active.id;
        const overIndex = over.id;
        
        console.log(activeIndex);
        console.log(overIndex);
        // console.log(items);
        return arrayMove(items, activeIndex, overIndex);
      })
    }
  }


}


export default App