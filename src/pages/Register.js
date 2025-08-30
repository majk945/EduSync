import Header from "../components/Header";
import '../styles/register.css'
export default function RegisterForm(){
    return(
        <>
        <Header/>
         <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '2px',
                                background: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>
        </>
    )
}