import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from './PostsList';

export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface PostWithComments extends Post {
    comments: Comment[];
}
export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<PostWithComments | null>(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            const [postResponse, commentsResponse] = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            ]);
            const [postData, commentsData] = await Promise.all([
                postResponse.json(),
                commentsResponse.json()
            ]);
            setPost({...postData, comments: commentsData});
        };
        fetchPostDetails();
    }, [id]);
    
    return (
        <div>
            <h1>Post Detail</h1>
            <p>Post ID: {id}</p>
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <h3>Comments</h3>
                    <ul>
                        {post.comments.map((comment, index) => {
                            const isEven = index % 2 === 0;
                            const isFirst = index === 0;
                            const backgroundColor = isEven ? "lightblue" : "lightgray";
                            const borderStyle = isFirst ? "3px solid orange" : "none";
                            return (
                                <li key={comment.id} style={{backgroundColor, border: borderStyle}}>
                                    <strong>{comment.name}</strong> - {comment.email}
                                    <p>{comment.body}</p>
                                </li>
                            )
                            })}
                    </ul>
                </div>
            )}
        </div>
    );
}