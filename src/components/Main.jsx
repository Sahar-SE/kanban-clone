import React, { useState } from 'react'
import '../App.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import {v4 as uuid } from "uuid";
import edit from '../img/edit.png'
import link from '../img/link.png'
import plus from '../img/plus.png'
import user1 from '../img/Ellipse 12.png'
import user2 from '../img/Ellipse 14.png'
import user3 from '../img/Ellipse 13.png'
import user4 from '../img/Ellipse 15.png'
import filter from '../img/filter.png'
import calender from '../img/calendar.png'
import share from '../img/profile-2user.png'
import pause from '../img/pause.png'
import menu from '../img/menu.png'


const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "To do",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export default function Main() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div>
      <h1 className='header'>Mobile App</h1>

      <div className='rectangle rec-edit'>
        <img src={edit} alt='edit' className='absolute left-1 top-1 right-1 bottom-1'/>
      </div>

      <div className='rectangle rec-link'>
      <img src={link} alt='link' className='absolute left-1 top-1 right-1 bottom-1'/>
      </div>

      <img src={plus} alt='plus' className='plus'/>
      <p className='invite'>Invite</p>

      <img src={user1} alt='user' className='users user1'/>
      <img src={user2} alt='user' className='users user2'/>
      <img src={user3} alt='user' className='users user3'/>
      <img src={user4} alt='user' className='users user4'/>

      <div className='more'>
        <p className='absolute left-1 top-1 '>+2</p>
      </div>

      <button className='h-btns f-btn'>
        <img src={filter} alt='filter' className='absolute left-6 bottom-2'/>
        <p className='absolute left-12 bottom-2'>Filter</p>
      </button>

      <button className='h-btns t-btn'>
        <img src={calender} alt='calender' className='absolute left-6 bottom-2'/>
        <p className='absolute left-12 bottom-2'>Today</p>
      </button>

      <button className='h-btns share-btn'>
        <img src={share} alt='share' className='absolute left-6 bottom-2 w-4 h-4'/>
        <p className='absolute left-12 bottom-2'>Share</p>
      </button>

      <div className='pause'>
        <img src={pause} alt='pause' className='absolute left-2 top-2 w-6 h-6'/>
      </div>
      <img src={menu} alt='menu' className='absolute right-16 top-48 w-8 h-8'/>

      <div className='flex kanban'>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
                
              >
                
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#F5F5F5"
                              :"#F5F5F5",
                              width: 330,
                              height: 625,
                              borderRadius: "16px 16px 0px 0px",
                              padding: 4,
                              minHeight: 500
                              }}
                          
                        >
                          <h2>{column.name}</h2>
                          {column.items.map((item, index) => {
                            return (<div>
                              
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              > 
                                {(provided, snapshot) => {
                                  return (
                                    
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      // style={{
                                      //   userSelect: "none",
                                      //   padding: 56,
                                      //   margin: "0 0 8px 0",
                                      //   minHeight: "50px",
                                      //   backgroundColor: snapshot.isDragging
                                      //     ? "black"
                                      //     : "green",
                                      //   color: "blue",
                                      //   ...provided.draggableProps.style
                                      // }}
                                      className='cards'
                                    >
                                      
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            </div>);
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
    </div>
    </div>
  )
}
