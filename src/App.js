import React, { useReducer,useEffect } from 'react';
import './App.css';
import Head from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import { currentDay, currentMonth, currentDate, currentYear, currentTime} from './components/Get Date/Date';

function reducer(todos, action){
  switch(action.type){
      case 'adding':
        return [...todos, {id: Date.now(), data: action.payload.data, status: false, date: `${currentDay} - ${currentMonth} ${currentDate}, ${currentYear}`, time: currentTime }];

      case 'delete':
          if(todos.length === 1){
            localStorage.removeItem('localData');
            return [];
          }else{
            return todos.filter(todo => todo.id !== action.payload.id);
          }

      case 'status': 
        return todos.map(todo => {
          if(todo.id === action.payload.id){
            return {...todo, status: !todo.status };
          }
            return todo;
        });
        
      case 'clear':
        localStorage.removeItem('localData');
        return [];
      
      case 'setlocal':
        if(action.payload.mainData === null){
          return [];
        }else{
          return action.payload.mainData;
        }

      default:
        return todos;
  }
}

export default function App() {

  const [todos, dispatch] = useReducer(reducer, []);
  
  useEffect(()=>{
    const localdata = localStorage.getItem('localData');
    const data = JSON.parse(localdata);
    dispatch({type: 'setlocal', payload: {mainData: data }});
  },[]);

  return (
    <div className="main-container">
      <div className="head">
        <Head  />
      </div>
      <div className="form">
        <Form dispatch={dispatch}/>
      </div>
      <div className="todo-list">
        { todos.map(todo => (
            <Todolist key={todo.id} todo={todo} todos={todos} dispatch={dispatch}/>
        ))}
      </div>
      <div className="footer">
          <Footer todo={todos} dispatch={dispatch} />
      </div>
      <div className="developer">
        <p>Developed By: <a href="https://www.facebook.com/limnixon03292001/">Nixon A. Lim</a></p>
      </div>
    </div>
  
  );
}

 
