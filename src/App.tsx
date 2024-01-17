import './App.css';
import {useAppDispatch,useAppSelector} from './hooks'
import Todos from './components/Todos';
/* import {changeCount} from './redux/mainReducer' */


function App() {
const dispatch = useAppDispatch();
/* const count = useAppSelector((store)=>store.data.count) */

  return (
    <div className="content">
      <Todos/>

  
  {/*   {count}
    <button onClick={()=>dispatch(changeCount(count+1))}>+1</button> */}
    </div>
  );
}

export default App;
