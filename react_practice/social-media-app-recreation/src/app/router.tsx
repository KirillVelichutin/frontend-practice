import { Routes, Route, Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import FeedPage from '../pages/FeedPage'
import ProfilePage from '../pages/ProfilePage'
import SavedPage from '../pages/SavedPage'
import CreatePostPage from '../pages/CreatePostPage'

function AppLayout() {
    return (
        <div className='app-layout'>
            <aside className='app-sidebar'><NavBar /></aside>
            <main className='app-main'>
                <div className='app-content'><Outlet /></div>
            </main>
        </div>
    )
}

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<FeedPage />} />
                <Route path="/profile/:username" element={<ProfilePage />} />
                <Route path="/saved" element={<SavedPage />} />
                <Route path="/create" element={<CreatePostPage />} />
            </Route>
        </Routes>
    )
}