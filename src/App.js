import './App.css';
import Axios from 'axios'
import Loading from './components/loading'
import Fibonacci from './components/fibonacci'
import Fail from './components/fail'
import React, { useState, useEffect } from 'react';

document.title = 'Fibonacci';
function App() {
  
  let formData = new FormData();
  formData.append('email', "aris.osorio@alumnos.udg.mx")
  formData.append('password', "Monkeydluffy26")
  const [window, setWindow] = useState(["loading"]);
  let page = '';

  useEffect(() => {
    if(window[0]=== "loading")
    {
      Axios.post(
        `https://fibonacci-aris.herokuapp.com/usuarios/login/`,
        formData,
          {
            headers: {
              //"Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
              "Content-type": "multipart/form-data",
            },                    
          }
      ).then(res => {
          setWindow(["fibonacci", res["data"]])
          console.log(res);
        }).catch((error) => {
          setWindow(["fail"])
            console.log(error)
        });
    }
  });

  if(window[0] === "loading")
  {
    page = <Loading /> 
  }
  if(window[0] === "fibonacci")
  {
    page = <Fibonacci token={window[1]} /> 
  }
  if(window[0] === "fail")
  {
    page = <Fail />
  }
  return (
      page
  );
}

export default App;
