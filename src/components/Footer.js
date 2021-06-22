import React,{useEffect, useState} from 'react'
import styles from './styles/footer.module.css';

const Footer = ({ todo, dispatch }) => {

    const [filteredTodo, setFilteredTodo] = useState([]);
    
    useEffect(()=>{
       setFilteredTodo(todo.filter(todo => todo.status === false));
    },[todo])

    return (
        <div className={styles.footer_container}>
           {todo.length === 0 ?  <p>No Task....</p> : <p>You have {filteredTodo.length} pending task</p>}
           {todo.length === 0 ? '' : <button onClick={()=> dispatch({type: 'clear'}) }><p>Clear All</p></button> } 
        </div>
    )
}

export default Footer
