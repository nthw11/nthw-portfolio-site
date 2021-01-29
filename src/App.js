import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes/routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
