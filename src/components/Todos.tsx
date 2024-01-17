import React,{FC, useState} from 'react'
import {Button, Input} from 'antd';
import {addValueTask,deleteValueTask,saveNewTask,isComplitedTask, editTask} from '../redux/mainReducer';
import {useAppDispatch, useAppSelector} from '../hooks'

const  Todos:React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [newValue, setNewValue] = useState<string>('')
  const [change, setChange] = useState<boolean>(false)
  const [isComplited, setIsComlited] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const todo = useAppSelector(store => store.data.todo)
  const addNewTask = () => {
    dispatch(addValueTask(value))
    setValue('')
  }
  const saveData = (id:number)=>{
      dispatch(saveNewTask({ id: id, newValue }))
      dispatch(editTask({ id: id, isEdit:false }))
  }
  const changeData = (id:number)=>{
    setChange(true);
    dispatch(editTask({ id: id, isEdit:true }))
   
    setNewValue('')
}
  const complitedTask = (id:number) =>{
    setIsComlited(prev=>!prev)
    dispatch(isComplitedTask({id: id, isComplited }))
  }
  return (
    <div className='main-todo'>
      <h1>TODO LIST</h1>
      <div>
        <Input value={value} className='input' onChange={(event) => setValue(event.target.value)} />
        <Button  onClick={addNewTask}>Отправить</Button>
        {todo.map((list,i) => (
          <div key={list.id} >
            {list.isEdit ? (
              <div className='edit-block'>
                <Input value={newValue} onChange={(event) => setNewValue(event.target.value)} />
                <Button className='btn' onClick={()=>saveData(list.id)}>Сохранить</Button>
                
              </div>
            ) : (
              <div className='list'>
                <div className={list.isComplited? 'complited-task task ':'task'} onClick={()=>complitedTask(list.id)}>{i+1}. {list.value} </div>
                <Button className='btn' onClick={() => dispatch(deleteValueTask(list.id))}>X</Button>
                <Button className='btn' onClick={() =>changeData(list.id)}>edit</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos