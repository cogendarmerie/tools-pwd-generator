import './assets/css/main.css';
import Header from "./components/blocks/Header";
import Card from "./components/blocks/Card";
import CardHeader from "./components/blocks/CardHeader";
import CardBody from "./components/blocks/CardBody";
import {useState, useEffect} from "react";

//Générer un mot de passe aléatoire
function randomPassword(length = 16, numbers = true, lowercase = true, uppercase = true, symbols = true) {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) chars += '0123456789';
    if (symbols) chars += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function App() {
    const [password, setPassword] = useState('');
    const [params, setParams] = useState({
        length: 16,
        numbers: true,
        lowercase: true,
        uppercase: true,
        symbols: true
    });
    //UseEffect pour générer le mot de passe
    useEffect(() => {
        setPassword(randomPassword(params.length, params.numbers, params.lowercase, params.uppercase, params.symbols));
    }, [])
    return (
        <div className="App">
            <Header title="Tools Generator" description="Bonjour tout le monde">
                <div className="links-container">
                    <a href="/demo" className="btn btn-primary">Get started</a>
                    <a href="/github" className="btn btn-outline">Github</a>
                </div>
            </Header>
            <section className="p-16">
                <Card>
                    <CardHeader className="mb-8" title="Générateur de mot de passe" subtitle="Générer un mot de passe robuste et sécuriser." />
                    <CardBody>
                        <div className={"mb-4"}>
                            <input type="text" className="form-control" placeholder="Mot de passe" value={password}/>
                        </div>
                        <div>
                            <button className={"btn btn-primary"}>Copier</button>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </div>
    );
}

export default App;
