import './App.css';
import Axios from 'axios'

document.title = 'Fibonacci';
function App() {
  let numero_entrada = 0

  const fibonacci = () => {
    Axios.post(`http://127.0.0.1:8000/resultados`,
        {
            numero_entrada: numero_entrada.value,
        }).then(res => {
            console.log(res);
            //toast.info('Welcome to Simple Task')
        }).catch((error) => {
            console.log(error)
            //toast.error('Failed to login')
        });
  }

  return (
      <div className="vh-100 bg-fibonacci bg-dark d-flex justify-content-center d-flex align-items-center">
          <div className="bg-white p-4 rounded shadow">
            <div className="form-group">
              <label htmlFor="numero-entrada">Numero de entrada</label>
              <input type="text" className="form-control" id="numero-entrada" min="0" step="1" ref={txt => numero_entrada = txt}/>
              <small id="numero-entrada-help" className="form-text text-muted">Solo numeros enteros y positivos</small>
            </div>
            <button type="submit" className="btn btn-primary mb-2 btn-block" onClick={fibonacci}>Enviar</button>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Secuencia</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
          </div>
      </div>
  );
}

export default App;
