import React,{useState} from 'react';
import styles from './styles/form.module.css';
import {BsTextLeft} from 'react-icons/bs';


const Form = ({ dispatch }) => {
    
    const [data, setdata] = useState('');

    function submit(e){
        e.preventDefault();
        dispatch({type: 'adding', payload: { data: data }})
        setdata('');
    }

    return (

        <div className={styles.form_container}>
            <form onSubmit={submit}>
                <div className={styles.input_container}>
                   <span className={styles.icon}> <BsTextLeft color="#C4C4C4" size="1.4rem" fontWeight="light"/></span>
                    <input type="text" placeholder="Add a task..." onChange={(e) => setdata(e.target.value)} value={data}/>
                </div>
            </form>
        </div>
    )
}

export default Form
