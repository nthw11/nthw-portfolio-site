import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Routes from './routes/routes';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;
