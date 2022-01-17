import {Droppable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import DragabbleCard from './DragabbleCard'



const Wrapper = styled.div
`
width: 300px;
padding: 20px 10px;
padding-top: 10px;
border-radius: 8px;
min-height: 300px;
box-shadow: -10px -10px 30px #fff, 10px 10px 30px #aeaec040;
background-color: ${(props) => props.theme.bgColor}
`

const Title = styled.div
`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: 18px;
`

interface IBoardProps
{
    toDos: string[]
    boardId: string
}

function Board({toDos, boardId}:IBoardProps)
{
    return(
        <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
          {(magic) => (
            <div ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => (
                <DragabbleCard key={toDo} index={index} toDo={toDo} />
              ))}
              {magic.placeholder}
            </div>
          )}
        </Droppable>
      </Wrapper>
    )
}

export default Board