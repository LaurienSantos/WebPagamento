import './App.css'
import banana from '../src/assets/banana.png'

function App() {

  function submit() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            window.location=xhr.response;
        }
    }
    xhr.open('post', 'http://localhost:8080/checkout', true);
    xhr.setRequestHeader('Content-Type', 'application/json;');
    xhr.send();
  }

  return (
    <>
      <div>
        <div className="left-column">
          <img src={banana} />
        </div>
        <div className='container'>
          <div className='description'>
            <h2>Ice Cream Banana</h2>
            <p>$00,00</p>
          </div>
          <div className="pay">
            <button className="cart-btn" onClick={submit}>
              Pagamento
            </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
