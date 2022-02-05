import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import { useState } from 'react';
import api from '../../services/api';
import { saveLink } from '../../services/store-links';

function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', { long_url: link });         
            setData(response.data);
            saveLink('linksEncurtados', response.data);
            setShowModal(true);  
        } catch {
            alert('Ops! Parece que algo deu errado!');
        }

        setLink('');
    }

    return (
        <>
            <header>
                <Menu />
            </header>

            <section className='container-home'>
                <div className='logo'>
                    <img src='/logo.png' alt='Sujeito Link Logo' />
                    <h1>SujeitoLink</h1>
                    <span>Cole seu link para encurtar</span>
                </div>

                <div className='area-input'>
                    <div>
                        <FiLink size={24} color='#fff' />
                        <input
                            type='text'
                            placeholder='Cole seu link aqui...'
                            value={link}
                            onChange={(e) => {
                                setLink(e.target.value);
                            }}
                        />
                    </div>

                    <button onClick={handleShortLink}>Encurtar link</button>
                </div>
            </section>

            {showModal && <LinkItem content={data}  closeModal={() => setShowModal(false)} />}
        </>
    );
}

export default Home;
