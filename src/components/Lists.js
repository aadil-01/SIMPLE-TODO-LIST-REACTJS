export const Lists=({val,crossItem,delItem})=>{
    return(
        <p>
            {val.map(data => {
                return(
                <div className="tasks" key={data.id} onClick={item => crossItem(item)} onDoubleClick={item => delItem(data.id)}>
                    {data.value}
                </div>
                );
            })}
        </p>
    )
}