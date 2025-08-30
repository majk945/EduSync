import '../styles/header.css'

export default function Header() {
    return (
        <div className='divNav'>
            <ul>
                <li><a href='/'>Domov</a></li>
                <li><a href='/Tasks'>Úlohy</a></li>
                <li><a href='/Table'>Rozvrh</a></li>
            
            </ul>
        </div>
    );
}
