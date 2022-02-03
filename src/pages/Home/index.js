import { FiLink } from "react-icons/fi";
import "./home.css";
import Menu from '../../components/Menu';

function Home() {
    return (
        <>
            <header>
                <Menu/>
            </header> 

            <section className="container-home">
                <div className="logo">
                    <img src="/logo.png" alt="Sujeito Link Logo" />
                    <h1>SujeitoLink</h1>
                    <span>Cole seu link para encurtar</span>
                </div>

                <div className="area-input">
                    <div>
                        <FiLink size={24} color="#fff" />
                        <input type="text" placeholder="Cole seu link aqui..." />
                    </div>

                    <button>Gerar link</button>
                </div>

            </section>
        </>
                
    );
}

export default Home;
