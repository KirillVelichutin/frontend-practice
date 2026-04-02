export type Post = {
    id: number
    username: string
    imageUrl: string
    caption: string
    likes: number
};

const mockPosts: Post[] = [
    {
        id: 1,
        username: 'Jane Doe',
        imageUrl: '/images/post-1.jpg',
        caption: 'I love this place!',
        likes: 123,
    },
    {
        id: 2,
        username: 'Max',
        imageUrl: '/images/post-2.jpeg',
        caption: 'Lovely place',
        likes: 20,
    },
    {
        id: 3,
        username: 'Will Doe',
        imageUrl: '/images/post-3.jpg',
        caption: 'Cool place!',
        likes: 13,
    },
    {
        id: 4,
        username: 'Bob Wood',
        imageUrl: '/images/post-4.jpg',
        caption: 'Best place!',
        likes: 13,
    },
];

export async function getPosts(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockPosts
};