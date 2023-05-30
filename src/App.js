import './App.css';


const onClick = () => {
  document.getElementById('btn').style.display='none';
  document.getElementById('button').style.display='block';
  document.getElementById('naz').style.display='block';

}

const refreshPage = () => {
  window.location.reload();
}



function App() {
  return (
    <div className="App">
     <div className="Logo">
      <h1>LOGO</h1>
     </div>



     <div className="main">

      <button className='stati' onClick={onClick}>Статьи</button>
      <div id='btn'>
      <button className='game'>Игра</button>
      <button className='tests'>Тесты</button>
      </div>
      <div id='button'>

      <button >111</button>
      <button >222</button>
      <button >333</button>
      </div>

      <button id='naz' onClick={refreshPage}>Назад</button>

     </div>



     <div className="BANNER">
      <h1>BANNER</h1>
     </div>
    </div>
  );
}

export default App;
