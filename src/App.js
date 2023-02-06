import './App.css';
import NavBar from './Components/NavBar';
import logo from './Components/Assets/Logo/logo.png';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
      </main>
    </div>
  );
}

export default App;
