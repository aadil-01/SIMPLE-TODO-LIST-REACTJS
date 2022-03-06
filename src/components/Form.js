export const Form=({addItem,str,setstr,delAll})=>{
    return(
        <div>
        <div id="formm">
            <form onSubmit={addItem}>
                <input id="inp" type="text" onChange={item => setstr(item.target.value)} value={str} />
                <input id="btn" type="submit" value="OK"/>
            </form>
        </div>
        <button onClick={delAll}>CLEAR ALL</button>
        </div>
    )
}