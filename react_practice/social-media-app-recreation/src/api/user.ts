export type UserProfile = {
    username: string
    avatarUrl: string
    numPosts: number
    numFollowers: number
    numFollowings: number
    caption: string
}

export const mockProfiles: UserProfile[] = [
    {
        username: 'Kir',
        avatarUrl: '/images/avatar.jpg',
        numPosts: 5,
        numFollowers: 123,
        numFollowings: 200,
        caption: "I'm just living that life"
    },
    {
        username: 'user-user',
        avatarUrl: '/images/avatar.jpg',
        numPosts: 0,
        numFollowers: 2,
        numFollowings: 5,
        caption: "Hello, World!"
    }
]

export async function getUserProfileByUsername(username: string): Promise<UserProfile | null> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return (
        mockProfiles.find(
            (profile) => profile.username.toLowerCase() === username.toLowerCase()
        ) ?? null
    )
};