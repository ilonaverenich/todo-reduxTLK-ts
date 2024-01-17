import { createAction, createReducer } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  value: string;
  isEdit: boolean;
  isComplited: boolean
};

type InitialValueType = {
  todo: Todo[];
};

const initialValue: InitialValueType = {
  todo: [],
};

export const addValueTask = createAction<string>('ADD_VALUE_TASK'); 
export const deleteValueTask = createAction<number>('DELETE_VALUE_TASK');
export const saveNewTask = createAction<{ id: number; newValue: string }>('SAVE_NEW_TASK');
export const editTask = createAction<{ id: number; isEdit: boolean }>('EDIT_TASK');
export const isComplitedTask = createAction<{ id: number; isComplited: boolean }>('IS_COMPLITED_TASK');

export const mainReducer = createReducer(initialValue, (builder) => {
  builder
  .addCase(addValueTask, (state, action) => {
    const newTodo: Todo = {
      id: Date.now(), // предполагается, что id - уникальный идентификатор
      value: action.payload,
      isComplited:false,
      isEdit: false
    };

    state.todo.push(newTodo);
  })
  .addCase(deleteValueTask,(state, action)=>{
    const updateTODO = state.todo.filter(item=>item.id!==action.payload)
    state.todo = updateTODO;
  })
  .addCase(saveNewTask, (state, action) => {
    state.todo = state.todo.map((item) =>
      item.id === action.payload.id ? { ...item, value: action.payload.newValue } : item
    );
  })
  .addCase(editTask, (state, action) => {
    state.todo = state.todo.map((item) =>
      item.id === action.payload.id ? { ...item, isEdit: action.payload.isEdit } : item
    );
  })
  .addCase(isComplitedTask, (state, action) => {
    state.todo = state.todo.map((item) =>
      item.id === action.payload.id? { ...item, isComplited: !action.payload.isComplited } : item
    );
  });

});