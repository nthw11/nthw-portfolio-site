import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes/routes';

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Routes />

      <Footer />
    </Fragment>
  );
};

export default App;
