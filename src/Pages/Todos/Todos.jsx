import { useEffect, useState } from "react";
import TodosCard from "../TodosCard/TodosCard";


const Todos = () => {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    return (
        <div className="pt-32 grid grid-cols-2 mx-auto justify-center items-center gap-5">
            {
                todos.map(item => <TodosCard 
                    key={item.id}
                    title={item.title}
                    completed={item.completed}
                ></TodosCard>)
            }
        </div>
    );
};

export default Todos;