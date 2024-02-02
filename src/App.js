import './assets/css/main.css';
import Header from "./components/blocks/Header";

function App() {
  return (
    <div className="App">
      <Header title="Tools Generator" description="Bonjour tout le monde">
        <div className="links-container">
            <a href="/demo" className="btn btn-primary">Get started</a>
            <a href="/github" className="btn btn-outline">Github</a>
        </div>
      </Header>

    </div>
  );
}

export default App;
