import { atom, selector } from 'recoil'


interface IToDoState
{
  [key: string] : string[]
}

export const toDoState = atom<IToDoState>(
  {
    key:'toDo',
    default :
    {
     할일 : ['😀','😁'],
     하는중 : ['😂','🤣','😃'],
     완료 : ['😄'],
    }
  })