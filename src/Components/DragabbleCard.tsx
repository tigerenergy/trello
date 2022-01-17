import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'


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


interface IDragabbleCardProps {
    toDo: string
    index: number
  }
  
  function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
    console.log(toDo, 'has been rendered')
    return (
      <Draggable key={toDo} draggableId={toDo} index={index}>
        {(magic) => (
          <Card
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {toDo}
          </Card>
        )}
      </Draggable>
    );
  }
  
  export default React.memo(DragabbleCard)