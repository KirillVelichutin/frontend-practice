import { usePosts  } from "../hooks/usePosts";


export default function FeedPage() {
    const { data, isPending, isError} = usePosts()

    if (isPending) return <p>Loading...</p>
    if (isError) return <p>Failed to load the feed</p>

    return (
        <div className="feed-conteiner">
            {data?.map((post) => (
                <article key={post.id} className="feed-post">
                    <h3>{post.username}</h3>
                    <img className="feed-post-image" src={post.imageUrl} alt={post.caption} />
                    <div className="feed-post-body">
                        <p>{post.caption}</p>
                        <span>{post.likes} Likes</span>
                    </div>
                </article>
            ))}
        </div>
    )
}
