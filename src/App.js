import React from 'react';
//import logo from './logo.svg';
import './App.css';
import First from './kist/first';
import Second from './kist/second';
import Third from './kist/third';
import AddNumber from './kist/addNumber';
import Calculate from './kist/calculate';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Shreedhar
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  
  render(){
    return(
      <div>
        {/* <First/>
        <Second/>
        <Third/>
        <AddNumber/> */}
        
      {/* <Calculate/> */}
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      


      </div>
    )
  }
}

export default App;
