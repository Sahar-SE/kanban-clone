import React from 'react'
import '../App.css'
import {Droppable} from "react-beautiful-dnd"
<<<<<<< HEAD
// import Cards from './Cards'
=======
import Cards from './Cards'
>>>>>>> efe90f65a9e5839a88ac920618b2246a18d1a353



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
<<<<<<< HEAD
          
=======
          <Cards task={incompleted} index={1}/>
>>>>>>> efe90f65a9e5839a88ac920618b2246a18d1a353
            {provided.placeholder}

            
         
        </div>
      )
     }
     
    </Droppable>
    </div>
  )
}
