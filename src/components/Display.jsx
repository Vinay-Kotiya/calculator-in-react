import styles from './Display.module.css';
const Display=({displayValue})=>{
    return<><input type="text" value={displayValue} className={styles.display}  readOnly></input></>;
    // className={displayValue.length>=9?styles.length10p:styles.display}
}
export default Display;