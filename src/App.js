import React, { Component } from 'react';
import Form from './Components/Form/form'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="mb-4">
          <div className="container">
            <h1 className="d-block text-center"> header </h1>
            <p className="lead text-center">Įrankis skirtas GPM skaičiavimui parduodant nekilnojamą turtą</p>
          </div>
        </header>
        <div className="container">
          <Form />
        </div>
        <footer className="mt-4 pt-4 pb-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Visi skaičiavimai yra informacinio pobūdžio. Jeigu kyla papildomų klausimų dėl mokėsčių mokėjimo rekomenduojame kreiptis pas mokėsčių apskaitos profesionalus</p>
              </div>

              <div className="col text-right">
                <p>Pastebėjote klaidą ar turite minčių kaip pagerinti skaičiuoklę?</p>
                <p> Rašykite <span className="badge badge-info">info@paskaiciuok.lt</span></p>
                <p>Pagaminta MB "Loginės Operacijos"</p>
                <p>Visos teisės saugomos</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
