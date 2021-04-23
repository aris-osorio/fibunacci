import React, { useEffect } from 'react';
import Axios from 'axios';
import { ClipLoader } from 'react-spinners';


export default function Fibonacci(props) {
    let numero_entrada = null;
    let formData = new FormData();
    
    useEffect(() => {
        document.getElementById("exampleFormControlTextarea1").readOnly = true
    });
    const obtenerFibonacci =()=> {
        let textarea = document.getElementById("exampleFormControlTextarea1")
        let label = document.getElementById("numero-entrada-help")
        let txt = document.getElementById("numero-entrada").value
        let spiner = document.getElementById("spiner")
        let dat = txt.includes(".")

        if(txt.length !== 0 && txt >= 0 && dat === false)
        {
            label.classList.remove("red")
            label.classList.add("text-muted")
            spiner.classList.remove("invisible")

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
                textarea.value = res.data["secuencia"]
                spiner.classList.add("invisible")
            }).catch((error) => {
                textarea.value = error
                spiner.classList.add("invisible")
            });
        }
        else
        {
            label.classList.remove("text-muted")
            label.classList.add("red")
            textarea.value = ""
        }  
       
    }
    document.title = 'Fibonacci';
    return (
        <div className="vh-100 bg-fibonacci bg-dark d-flex justify-content-center d-flex align-items-center">
          <div className="bg-white p-4 rounded shadow">
            <div className="form-group">
              <p className="display-4">Serie de Fibonacci</p>
              <label htmlFor="numero-entrada">Numero de entrada</label>
              <input type="number" className="form-control" id="numero-entrada" min="0" step="1" ref={txt => numero_entrada = txt}/>
              <small id="numero-entrada-help" className="form-text text-muted">Solo numeros enteros y positivos</small>
            </div>
            <button type="submit" className="btn btn-dark mb-2 btn-block" onClick={obtenerFibonacci}>Enviar</button>
            <div className="form-group">
              <div className="d-flex">
                <label htmlFor="exampleFormControlTextarea1">Secuencia&nbsp;</label>
                <div className="invisible" id="spiner">
                    <ClipLoader  color="#0A0A0A" size="12"/>
                </div>
              </div>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
          </div>
      </div>
    );
} 