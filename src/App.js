import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './component/Header';
import Footer from './component/Footer';
import Breadcrum from './component/Breadcrum';

import {
  Routes,
  Route
} from "react-router-dom";
import Home from './container/Home';
function App() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    setLanguages(data);
  }, []);
  return (
    <>
      <Header />
      <Breadcrum/>
      <Routes>
            <Route exact
              path="/home"
              element={<Home languages={languages}/>}
            ></Route>
          </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
