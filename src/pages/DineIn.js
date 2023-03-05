import { Navigate } from "react-router";


function DineIn() {
    

    return ( 
        <>
        <button class="chatbot-mic" onClick={()=> {Navigate('/login')}}><i class="fa-solid fa-microphone"></i></button>
        </>
     );
}

export default DineIn;