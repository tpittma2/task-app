import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPen } from '@fortawesome/free-solid-svg-icons'


const Overview = (props) => {
    const {tasks, handleRemove, handleEdit } = props;

    return (
        <ul>
            { tasks.map((task, i) => <li key={task.id}>{i+1}: { task.text } <FontAwesomeIcon icon={faPen} onClick={()=> handleEdit(task.id)}/> <FontAwesomeIcon icon={faMinusCircle}  onClick={ () => handleRemove(task.id)}/></li>) }
        </ul>
    )
};

export default Overview;