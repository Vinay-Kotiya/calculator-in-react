import styles from './ButtonContainer.module.css'
// const ButtonContainer=({onClickHendler})=>{
    const buttonitems=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]
    function ButtonContainer({onClickHendler}){
    return (
        <div className={styles.btncon} >
        {buttonitems.map(item=><button key={item} onClick={()=>onClickHendler(item)} >{item}</button>)}
        </div>
    )
};
export default ButtonContainer;