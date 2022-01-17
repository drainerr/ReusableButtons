import React from 'react';
import Button from './UI/Button';
import './App.css';
function App() {
  return (
    <div className="App">
      <header>Reusable Buttons</header>
      <div className="buttons">
        <div className="first_column">
          <div>
            <Button>Reusable Button </Button> : Default
          </div>
          <div>
            <Button variant="outline"> Reusable Button </Button> :
            variant="outline"
          </div>
          <div>
            <Button variant="text">Reusable Button </Button> : variant="text"
          </div>
          <div>
            <Button disableShadow>Reusable Button</Button> : disableShadow
          </div>
          <div>
            <Button disabled>Reusable Button</Button> : disabled
          </div>
        </div>
        <div className="second_column">
          <div>
            <Button color="primary" size="md" startIcon="local_grocery_store">
              Reusable Button
            </Button>
            : startIcon="local_grocery_store"
          </div>
          <div>
            <Button color="primary" size="md" endIcon="local_grocery_store">
              Reusable Button
            </Button>
            : endIcon="local_grocery_store"
          </div>
          <div>
            <Button color="secondary" size="lg">
              Reusable Button
            </Button>
            : color="secondary" size="lg"
          </div>
          <div>
            <Button color="default" size="md">
              Reusable Button
            </Button>
            : color="default"; size="md"
          </div>
          <div>
            <Button color="primary" size="sm">
              Reusable Button
            </Button>
            : color="primary" size="sm"
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
