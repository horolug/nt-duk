import React, { Component } from 'react';
import Form from './Components/Form/form';
import Disqus from 'disqus-react';

class App extends Component {
  render() {
    const disqusShortname = 'paskaiciuok';

    return (
      <div className="App">
        <header className="mb-4 pb-2 pt-2">
          <div className="container">
            <h1 className="d-block text-center"> Paskaičiuok </h1>
            <p className="lead text-center">Įrankis skirtas GPM skaičiavimui parduodant nekilnojamą turtą</p>
          </div>
        </header>
        <div className="container">
          <Form />

          <div className="border p-2 rounded-sm mt-4">
            <Disqus.DiscussionEmbed shortname={disqusShortname} />

          </div>
        </div>
        <footer className="mt-4 pt-4 pb-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Visi skaičiavimai yra tik informacinio pobūdžio. 
                  Skaičiuoklės kūrėjai neprisiima jokios atsakomybės už galimus nuostolius. 
                  Jeigu kyla papildomų klausimų dėl mokėsčių mokėjimo rekomenduojame kreiptis pas mokėsčių apskaitos profesionalus.</p>
              </div>

              <div className="col text-right">
                <p>Autorius Aleksandr Gulbickij</p>
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
