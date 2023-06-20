

const TodosCard = ({title, completed}) => {
    const cardStyle = {
        backgroundColor: completed ? 'green' : 'red',
        width: '300px',
        height: '150px',
    };
    return (
        <div className="card mx-auto text-white" style={cardStyle}>
            <h3 className="text-center pt-8">{title}</h3>
            {
                completed === true ? <button className="btn w-1/2 mx-auto mt-3">Done</button> : <button className="btn w-1/2 mx-auto mt-3">Pending</button>
            }     
        </div>
    );
};

export default TodosCard;