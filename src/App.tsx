import React from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { toDoState } from './atoms'
import DragabbleCard from './Components/DragabbleCard'

const Wrapper = styled.div
`
display: flex;
max-width: 480px;
width: 100%;
margin: 0 auto;
justify-content: center;
align-items: center;
height: 100vh;
`

const Boards = styled.div
`
display: grid;
width: 100%;
grid-template-columns: repeat(1, 6fr);

`

const Board = styled.div
`
padding: 20px 10px;
padding-top: 30px;
border-radius: 8px;
min-height: 200px;
box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec040;
background-color: ${(props) => props.theme.bgColor}
`



function App() 

{ 
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = ({draggableId, destination , source}:DropResult) =>
  {
    if(!destination) return
    setToDos((oldToDos) =>
    {
      const toDosCopy = [...oldToDos]
      toDosCopy.splice(source.index, 1)
      toDosCopy.splice(destination?.index, 0, draggableId)
      return toDosCopy
    })
  }
  return (
  <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
      <Droppable  droppableId='one'>
        {(magic) => (
        <Board ref={magic.innerRef}{...magic.droppableProps}>
          {toDos.map((toDo, index) =>
          (
            <DragabbleCard key={toDo} index={index} toDo={toDo} />
          ))}
          {magic.placeholder}
        </Board>
        )}
        </Droppable>
        </Boards>
    </Wrapper>
  </DragDropContext>
  )
}

export default App