import style from "./Table.module.css"

const Table = () => {
    return ( 
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.title}></div>
                <div className={style.table}></div>
            </div>
        </div>
     );
}
 
export default Table;