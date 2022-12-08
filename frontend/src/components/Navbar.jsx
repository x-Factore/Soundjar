export default function Navbar(){
    return (
        <nav className="nav">
            <a href='/' class='site-title'>Soundjar</a>
            <ul>
                <li>
                    <a href='/account'>Account</a>
                </li>
                <li>
                    <a href='/newpost'>New Post</a>
                </li>
            </ul>
        </nav>
    )
}