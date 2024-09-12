import styles from './Display.module.css';
const Display=({displayValue})=>{
    return<><input type="text" value={displayValue} className={displayValue.length>=9?styles.length10p:styles.display}  readOnly></input></>
}
export default Display;