import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {TabContent,TabPane,Nav,NavItem,NavLink} from 'reactstrap';
import { AddNavBar } from './components';


function App() {
  return (
    <div className="App">
      <AddNavBar/>
    </div>
  );
}

export default App;
