import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Counter from './Count';
import DataFetcher from "./DataFetcher"
import About from './About';
import ListComp from './ListComp'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/count' element={<Counter/>}></Route>
        <Route path='/dataFetcher' element={<DataFetcher/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/list_comp' element={<ListComp/>}></Route>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
