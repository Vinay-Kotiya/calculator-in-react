import { useState } from 'react'
import styles from './components/app.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [calVal, setCalval]=useState("");

  function onClickHendler(buttonText){
    console.log(buttonText+" Button has clicked");
    if(buttonText==='C')
    {
      setCalval("");
    }
    else if(buttonText==='=')
    {
      if(calVal==null)
      {
        console.log("enter value");
        setCalval("Enter Value");
      }
      else{
        const result=eval(calVal);
        setCalval(result);
      }
      // const result=eval(calVal);
      //   setCalval(result);
      
    }
    else{
      const newvalu=calVal+buttonText;
      setCalval(newvalu);
    } 
  }
  return (
    <><center>
      
      <div className={styles.calculator}>
      {/* <h1>This is a Calculator</h1> */}
       <Display displayValue={calVal}></Display>
        <ButtonContainer onClickHendler={onClickHendler}></ButtonContainer>
      </div>
      
      </center>
      <footer className={styles.footer}>Made by Vinay Kotiya</footer>

    </>
  )
}
export default App
