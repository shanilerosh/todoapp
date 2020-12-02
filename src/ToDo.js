
const toDo = ({listOfDo,deleteItem}) => {
    const data=listOfDo.length ? ( listOfDo.map(item => {
        return <p key={item.id} className="collection-item" onClick={()=>{deleteItem(item.id)}} >{item.content}</p>
    })) : (<p className="collection-item center">No Items in the list</p>);


    return (
        <div className="collection">
            {data}
        </div>
    )


}

export default toDo;
