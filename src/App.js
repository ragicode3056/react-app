import './App.css';
import Backdrop from './component/Backdrop';
import Modal from './component/Modal';
import {TODO} from'./component/TODO';

function App() {
  return (
    <div>
      <h1>My TODO's</h1>
      <TODO  text="React"></TODO>  
      <TODO text="JS"></TODO>
      <TODO text="CSS"></TODO>
      {/* <Modal></Modal>
      <Backdrop></Backdrop> */}
    </div>
  
    );
}

export default App;
