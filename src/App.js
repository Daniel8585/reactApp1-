import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
    
  }
  plus = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  minus = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }
  render() {
    return ( 

  <div className="App">
  <header className="App-header">
    <div className='add'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Feather-core-minus-circle.svg/1024px-Feather-core-minus-circle.svg.png' width='70px' height='70px'onClick={this.minus}/>
            <div className='count'> {this.state.count} </div>
            <img src='https://image.flaticon.com/icons/png/512/16/16909.png' width='70px' height='70px'onClick={this.plus}/>
         
        </div> 
        <h1>React App 1</h1>
   </header>
 </div>
      
    )
  }
}
export default App;





