import React from 'react';
import Button from './UI/Button';
import ButtonWrapper from './UI/ButtonWrapper';
import './App.css';
function App() {
  return (
    <div className="App">
      <header>Reusable Buttons</header>
      <div className="buttons">
        <div className="first_column">
          <ButtonWrapper>
            <Button>Reusable Button </Button> : Default
          </ButtonWrapper>
          <ButtonWrapper>
            <Button variant="outline"> Reusable Button </Button> :
            variant="outline"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button variant="text">Reusable Button </Button> : variant="text"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button disableShadow>Reusable Button</Button> : disableShadow
          </ButtonWrapper>
          <ButtonWrapper>
            <Button disabled>Reusable Button</Button> : disabled
          </ButtonWrapper>
        </div>
        <div className="second_column">
          <ButtonWrapper>
            <Button color="primary" size="md" startIcon="local_grocery_store">
              Reusable Button
            </Button>
            : startIcon="local_grocery_store"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button color="primary" size="md" endIcon="local_grocery_store">
              Reusable Button
            </Button>
            : endIcon="local_grocery_store"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button color="secondary" size="lg">
              Reusable Button
            </Button>
            : color="secondary" size="lg"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button color="default" size="md" endIcon="local_grocery_store">
              Reusable Button
            </Button>
            : color="default"; size="md"
          </ButtonWrapper>
          <ButtonWrapper>
            <Button color="primary" size="sm">
              Reusable Button
            </Button>
            : color="primary" size="sm"
          </ButtonWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
