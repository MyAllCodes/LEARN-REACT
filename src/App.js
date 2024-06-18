import './App.css';
import { useEffect, useState } from 'react';
import data from './data.json';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './component/Header';
import CardDemo from './component/CardDemo';
import Footer from './component/Footer';
import Breadcrum from './component/Breadcrum';



function App() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    setLanguages(data);
  }, []);
  return (
    <>
      <Header />
      <Breadcrum/>
      <CardDemo languages={languages}></CardDemo>
      <Footer/>
    </>
  );
}

export default App;
