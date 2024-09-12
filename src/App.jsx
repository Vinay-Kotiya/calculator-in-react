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
      const result=eval(calVal);
      setCalval(result);
    }
    else{
      const newvalu=calVal+buttonText;
      setCalval(newvalu);
    } 
  }
  return (
    <><center>
      <h1>This is a Calculator</h1>
      <div className={styles.calculator}>
       <Display displayValue={calVal}></Display>
        <ButtonContainer onClickHendler={onClickHendler}></ButtonContainer>
      </div>
      </center>
    </>
  )
}
export default App
