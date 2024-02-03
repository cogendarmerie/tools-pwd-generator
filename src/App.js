import './assets/css/main.css';
import Header from "./components/blocks/Header";
import Card from "./components/blocks/Card";
import CardHeader from "./components/blocks/CardHeader";
import CardBody from "./components/blocks/CardBody";
import {useState, useEffect} from "react";
import Checkbox from "./components/blocks/form/checkbox";
import {ClipboardIcon, ArrowPathIcon} from "@heroicons/react/24/outline";
import Footer from "./components/blocks/Footer";
import {CopyToClipboard} from "react-copy-to-clipboard";

//Générer un mot de passe aléatoire
function randomPassword(length = 16, numbers = true, uppercase = true, symbols = true) {
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
    const [params, setParams] = useState({
        length: 16,
        numbers: true,
        uppercase: true,
        symbols: true
    });
    //Function changeParams
    const changeParams = (key, value) => {
        setParams({
            ...params,
            [key]: value
        });
    }
    const [password, setPassword] = useState(randomPassword(params.length, params.numbers, params.uppercase, params.symbols));

    //UseEffect pour générer le mot de passe
    useEffect(() => {
        setPassword(randomPassword(params.length, params.numbers, params.uppercase, params.symbols));
    }, []);

    return (
        <div className="App">
            <div className="pt-16 pb-8">
                <Header title="Password Generator" description="Bonjour tout le monde">
                </Header>
            </div>
            <section className="p-16 flex flex-row justify-center">
                <Card className={"min-w-96"}>
                    <CardHeader className="mb-8" title="Générateur de mot de passe"
                                subtitle="Générer un mot de passe robuste et sécuriser."/>
                    <CardBody>
                        <div className={"mb-8"}>
                            <input type="text" className="form-control" placeholder="Mot de passe" value={password}/>
                        </div>
                        <div className={"mb-8 flex flex-col gap-2"}>
                            <Checkbox checked={params.numbers}
                                      onChange={(e) => changeParams('numbers', e.target.checked)} label={"Nombres"}
                                      id="numbers"/>
                            <Checkbox checked={params.symbols}
                                      onChange={(e) => changeParams('symbols', e.target.checked)} label={"Symboles"}
                                      id="symbols"/>
                            <Checkbox checked={params.uppercase}
                                      onChange={(e) => changeParams('uppercase', e.target.checked)}
                                      label={"Majuscules"} id="uppercase"/>
                        </div>
                        <div className={"flex flex-row gap-2"}>
                            <button className={"btn btn-primary"}
                                    onClick={() => setPassword(randomPassword(params.length, params.numbers, params.uppercase, params.symbols))}>
                                <ArrowPathIcon/> Actualiser
                            </button>
                            <CopyToClipboard text={password} onCopy={() => alert("Mot de passe copie !")}>
                                <button className={"btn btn-secondary"}>
                                    <ClipboardIcon/>
                                    Copier
                                </button>
                            </CopyToClipboard>
                        </div>
                    </CardBody>
                </Card>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
