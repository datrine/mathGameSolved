import React,{useState} from 'react'
import Level from './Components/Level';

//first I removed the prop level from the parameters of App function/component
function App() {
  //second I lift the state level up to parent component App
  const [level, setLevel] = useState(9);
  console.log(level)
  return (
    <div className="App">
        {
         (() => {

            if (level <=10 ){
              //third pass the level state as a prop to the Level component
              return <Level level={level} hookSetLevel={setLevel} />
            }
            
            else return <p> Congratulations you are a genius</p>
 

          })()   
           
        }

    </div>
  )
}
export default App