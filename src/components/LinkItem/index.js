import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi';

function LinkItem({content, closeModal}){

    function copyLink(){
        navigator.clipboard.writeText(content.link);
        alert('URL copiada com sucesso!');
    }

    return(
        <div className='modal-container'>
            <div className="modal-header">
                <h2>Link Encurtado:</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#1a1a1a"/>
                </button>
            </div>

            <span>{content.long_url}</span>

            <button onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="#fff"/>
            </button>
        </div>
    )
}

export default LinkItem;