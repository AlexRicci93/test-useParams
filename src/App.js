
import { Route, Routes } from 'react-router-dom';
import { Details } from './Details';
import { List } from './List';


function App() {
  return (
    
    <Routes>
       <Route path="/" element={<List/>}></Route>
       <Route path="details/:id" element={<Details/>}></Route>
      </Routes>
    
  );
}

export default App;
