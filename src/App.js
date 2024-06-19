import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './component/Header';
import Footer from './component/Footer';

import {
  Routes,
  Route
} from "react-router-dom";
import Home from './container/Home';
import ContactUs from './container/ContactUs';
function App() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    setLanguages(data);
  }, []);
  return (
    <>
      <Header/>
      <Routes>
      <Route
              path="/"
              element={<Home languages={languages} routename="home"/>}
            ></Route>
            <Route exact
              path="/home"
              element={<Home languages={languages} routename="home"/>}
            ></Route>
            <Route exact
              path="/contactUs"
              element={<ContactUs routename="contactUs"/>}
            ></Route>
          </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
