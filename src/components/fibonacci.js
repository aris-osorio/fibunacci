import React from 'react';
import Axios from 'axios';

export default function Fibonacci(props) {
    let numero_entrada = '';
    let formData = new FormData();
    
    const obtenerFibonacci =()=> {
        formData.append("numero_entrada", numero_entrada.value)
        let token = "Token "+ props.token
        Axios.post(
            `https://fibonacci-aris.herokuapp.com/resultados/`,
            formData,
              {
                headers: {
                  "Authorization": token,
                  "Content-type": "multipart/form-data",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "POST",
                  "Access-Control-Allow-Headers": "Content-Type, Authorization",
                  "Access-Control-Allow-Credentials": "true",
                },                    
              }
          ).then(res => {
              
              console.log(res);
            }).catch((error) => {
              
                console.log(error)
            });
    }
    document.title = 'Fibonacci';
    return (
        <div className="vh-100 bg-fibonacci bg-dark d-flex justify-content-center d-flex align-items-center">
          <div className="bg-white p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="numero-entrada">Numero de entrada</label>
              <input type="text" className="form-control" id="numero-entrada" min="0" step="1" ref={txt => numero_entrada = txt}/>
              <small id="numero-entrada-help" className="form-text text-muted">Solo numeros enteros y positivos</small>
            </div>
            <button type="submit" className="btn btn-primary mb-2 btn-block" onClick={obtenerFibonacci}>Enviar</button>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Secuencia</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
          </div>
      </div>
    );
} 