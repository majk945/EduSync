import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../styles/Home.css'

export default function Home() {
    const [isSigned, setIsSigned] = useState(0);
    const navigate = useNavigate();


    useEffect(() => {
        const storedSigned = localStorage.getItem("isSigned");
        if (storedSigned === "1") {
            setIsSigned(1);
        }
    }, []);

    function handleLogin() {
        setIsSigned(1);
        localStorage.setItem("isSigned", "1");
        navigate('/');
    }

    return (
        <>
            {isSigned === 0 ? (
    <>
        <Header/>
        <div className="container main-elemnet">
            <h2 className="text-center">Vitaj!</h2>
            <h3>Prosím, prihlás sa</h3>
            <button onClick={handleLogin}>
                Prihlásiť sa
            </button>
        </div>
    </>
) : (
    <>
        <Header 
            isSigned={isSigned} 
            handleLogout={() => {
                setIsSigned(0);
                localStorage.removeItem("isSigned");
            }} 
        />
        <h2>Si prihlásený, vitaj</h2>
    </>
)}
        </>
    );
}
