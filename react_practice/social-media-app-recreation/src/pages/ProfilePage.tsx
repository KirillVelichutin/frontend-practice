
import { useParams } from 'react-router'
import { useUserProfile } from '../hooks/useUserProfile'

export default function ProfilePage() {
    const { username } = useParams()
    const { data: profile, isPending, isError } = useUserProfile(username)

    if (!username) return <p>Missing username in URL</p>
    if (isPending) return <p>Loading profile...</p>
    if (isError) return <p>Failed to load profile</p>
    if (!profile) return <p>Profile "{username}" not found</p>

    return (
        <div className="profile-page">
            <div className="user-info-panel">
                <div className="avatar-conteiner">
                    <img className="avatar" src={profile.avatarUrl} alt={profile.username} />
                </div>
                <div className="user-info">
                    <p className="username">{profile.username}</p>
                    <div className="user-stats">
                        <p>{profile.numPosts} posts</p>
                        <p>{profile.numFollowers} followers</p>
                        <p>{profile.numFollowings} followings</p>
                    </div>
                    <p className="profile-caption">{profile.caption}</p>
                </div>
            </div>
        </div>
    )
}
