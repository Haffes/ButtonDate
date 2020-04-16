import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (

    <div>
      <p>O botão foi clicado?</p>

      <Button label="Success" className="p-button-success" />

      <Calendar dateFormat="dd/mm/yy" value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>


    </div>

    );
  }
}

render(<App />, document.getElementById('root'));
