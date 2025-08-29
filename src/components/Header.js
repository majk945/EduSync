import '../styles/header.css'

export default function Header({ isSigned, handleLogout }) {
    return (
        <>
            <div className='divNav'>
                <ul>
                    <li><a href='/'>Domov</a></li>
                    <li><a href='/Tasks'>Úlohy</a></li>
                    <li><a href='/Table'>Rozvrh</a></li>
                    {/* Zobrazí sa iba keď je užívateľ prihlásený */}
                    {isSigned === 1 && (
                        <li>
                            <button onClick={handleLogout} className="logout-button">
                                Odhlásiť sa
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
