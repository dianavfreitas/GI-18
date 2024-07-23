import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetail = ({ tasks, setTasks }) => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [editTask, setEditTask] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const foundTask = tasks.find(task => task.id === parseInt(id));
        if (foundTask) {
            setTask(foundTask);
            setEditTask(foundTask.name);
        }
    }, [id, tasks]);

    const saveTask = () => {
        setTasks(tasks.map(task => 
            task.id === parseInt(id) ? { ...task, name: editTask } : task
        ));
        navigate('/');
    };

    return (
        <div>
            {task ? (
                <div>
                    <h1>Edit Task</h1>
                    <input 
                        type="text" 
                        value={editTask} 
                        onChange={(e) => setEditTask(e.target.value)} 
                    />
                    <button onClick={saveTask}>Save</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TaskDetail;
