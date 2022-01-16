import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'


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
grid-template-columns: repeat(1, 1fr);

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

const Card = styled.div
`
margin-bottom: 10px;
border-radius: 5px;
padding: 10px 10px;
background: #f0f0f3;
    box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec040, inset -10px -10px 10px #aeaec025, inset 10px 10px 10px #fff;
    &:active
    {
    box-shadow: inset -10px -10px 10px #ffffff70, inset 10px 10px 10px #aeaec020;
    }
`

function App() 

{ 
  const toDos =['😀','😁','😂','🤣','😃','😄']
  const onDragEnd = () =>
  {

  }
  return (
  <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
      <Droppable droppableId='one'>
        {(magic) => (
        <Board ref={magic.innerRef}{...magic.droppableProps}>
          {toDos.map((toDo, index) =>(<Draggable draggableId={toDo} index={index}>
          {(magic)=> 
          <Card ref={magic.innerRef}{...magic.draggableProps}{...magic.dragHandleProps}>{toDo}</Card>}
          </Draggable>))}
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