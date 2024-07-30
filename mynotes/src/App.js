
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import NotesListPage from './pages/NotesListPage';
import Nopage from './pages/Nopage';
import NotePage from './pages/NotePage';


function App() {
  return (
    <HashRouter>
    <div className="container dark">
      <div className="app">
        <Routes>
          <Route  index element={<NotesListPage/>}></Route>
          <Route path='/note' element={<NotePage/>} />
          <Route path='/note/:id' element={<NotePage/>} />
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
