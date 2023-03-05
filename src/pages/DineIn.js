import { Link, useNavigate } from 'react-router-dom';


function DineIn() {
    const navigate = useNavigate();
    const handleMicClick = (e) => {
        navigate('/login');
    }

    return ( 
        <>
        <button class="chatbot-mic" onClick={handleMicClick}><i class="fa-solid fa-microphone"></i></button>
        </>
     );
}

export default DineIn;