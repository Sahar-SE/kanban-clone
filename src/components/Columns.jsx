import React from 'react'
import '../App.css'
import {Droppable} from "react-beautiful-dnd"
// import Cards from './Cards'



export default function Columns({task, id}) {
  return (
    <div>
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div className='kanban to-do' 
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          >
          
            {provided.placeholder}

            
         
        </div>
      )
     }
     
    </Droppable>
    </div>
  )
}
