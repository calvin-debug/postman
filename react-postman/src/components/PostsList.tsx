import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostsList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        setFilteredPosts(posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase())));
    }, [posts, searchQuery]);

    const refreshPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    };


    return (
        <div>
            <h1>Here goes the posts list</h1>
            <button onClick={refreshPosts}>Refresh posts</button>
            <input type="text" placeholder="Search posts" onChange={(e) => setSearchQuery(e.target.value)} />
            {filteredPosts.map((post: Post, index: number) => {
                const isLast = index === filteredPosts.length - 1;
                const isEven = index % 2 === 0;

                const backgroundColor = isLast ? "lightgray" : isEven ? "lightblue" : "lightgreen";

                return (
                    <div 
                        style={{
                            cursor: 'pointer', 
                            border: "1px solid black", 
                            margin: "10px",
                            padding: "10px",
                            borderRadius: "10px",
                            backgroundColor
                        }} key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    );
}