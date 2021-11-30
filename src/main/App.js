import React from 'react';

import '../custom.css'
import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'

import 'toastr/build/toastr.min.js'

import Navbar from '../components/navbar';
import Routes from './routes';

class App extends React.Component {
  
  render(){
    return (
      <>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </>
    );
  }

}

export default App;
