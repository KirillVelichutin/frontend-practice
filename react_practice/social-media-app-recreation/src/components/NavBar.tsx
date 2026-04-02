import { NavLink } from 'react-router'


export default function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink to="/" className='nav-item'>
                <svg aria-label="Home" className="nav-svg" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Home</title><path d="m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z"></path></svg>
                <span>Feed</span>
            </NavLink>
            <NavLink to="/profile/kir" className='nav-item'>
                <div className="navbar-avatar-conteiner">
                    <img src="/images/avatar.jpg" className="navbar-avatar" />
                </div>
                <span>Profile</span>
            </NavLink>
            <NavLink to="/saved" className='nav-item'>
                <svg aria-label="Messages" className="nav-svg" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messages</title><path d="M22.513 3.576C21.826 2.552 20.617 2 19.384 2H4.621c-1.474 0-2.878.818-3.46 2.173-.6 1.398-.297 2.935.784 3.997l3.359 3.295a1 1 0 0 0 1.195.156l8.522-4.849a1 1 0 1 1 .988 1.738l-8.526 4.851a1 1 0 0 0-.477 1.104l1.218 5.038c.343 1.418 1.487 2.534 2.927 2.766.208.034.412.051.616.051 1.26 0 2.401-.644 3.066-1.763l7.796-13.118a3.572 3.572 0 0 0-.116-3.863Z"></path></svg>
                <span>Messages</span>
            </NavLink>
            <NavLink to="/create" className='nav-item'>
                <svg aria-label="New post" className="nav-svg" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>New post</title><path d="M21 11h-8V3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2Z"></path></svg>
                <span>Create</span>
            </NavLink>
        </nav>
    )
}