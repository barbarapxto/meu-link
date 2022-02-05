import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinksSaved, deleteLink } from '../../services/store-links';
import LinkItem from '../../components/LinkItem';

function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [emptyList, setEmptyList] = useState(false);

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSaved('linksEncurtados');

            if (result.length === 0) {
                setEmptyList(true);
            }

            setMyLinks(result);
        }

        getLinks();
    }, []);

    function handleOpenLink(link) {
        setData(link);
        setShowModal(true);
    }

    function handleDelete(id){
        const links = deleteLink(myLinks, id);

        if(links.length === 0) {
            setEmptyList(true); 
        }

        setMyLinks(links);
    }

    return (
        <div className='links-container'>
            <div className='links-header'>
                <Link to='/'>
                    <FiArrowLeft size={38} color='#fff' />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div className='empty-message'>
                    Sua lista está vazia...
                </div>
            )}

            {myLinks.map((link) => (
                <div key={link.id} className='links-item'>
                    <button
                        onClick={() => handleOpenLink(link)}
                        className='link'
                    >
                        <FiLink size={18} color='#fff' />
                        {link.long_url}
                    </button>
                    <button className='link-delete' onClick={() => {handleDelete(link.id)}}>
                        <FiTrash size={24} color='#FF5454'/>
                    </button>
                </div>
            ))}

            {showModal && (
                <LinkItem
                    content={data}
                    closeModal={() => {
                        setShowModal(false);
                    }}
                />
            )}
        </div>
    );
}

export default Links;
