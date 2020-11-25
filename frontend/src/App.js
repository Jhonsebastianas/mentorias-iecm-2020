import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
    // Validamos si el registro con google trae información
    if (response.profileObj) {
      // Creamos un objeto igual al que usamos para registrar un usuario en nuestro proyecto.
      // con los mismos atributos, y se le añaden los valores que nos trae google
      const googleUser = {
        nombres: response.profileObj.givenName,
        apellidos: response.profileObj.familyName,
        correo: response.profileObj.email,
      };
      // axios.post('URL_BACKEND', parametros)
      //      .then(función que realizara algo al todo salir bien)
      axios.post('http://localhost:3000/usuarios/registrarUsuario', googleUser)
        .then(function (response) {
          // Se ejecuta siempre que el servidor ejecute todo correctamente
          console.log(response);
          console.log('Usuario registrado con exito');
        })
        .catch(function (error) {
          // Se ejecuta siempre que ocurra algún error
          console.log(error);
          console.log('El usuario no pudo ser registrado con exito');
        });
    }// FIN IF
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GoogleLogin
          clientId='Clave del API DE GOOGLE'
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
