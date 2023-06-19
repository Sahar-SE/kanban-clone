import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function dragCard(props) {
    return props.isDraggaing?
    "lightgreen":
    props.isDraggable?
    props.isBacklog?
    "#F2D7D5":
    "#DCDCDC":
    props.isBacklog?
    "#F2D7D5":
    "#fffada";
    
}

export default function Cards({task, index}) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div className='cards card1' 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDragging}>
            {/* //card contents */}
            {provided.placeholder}
          </div>
        )}
      
    </Draggable>
  )
}
