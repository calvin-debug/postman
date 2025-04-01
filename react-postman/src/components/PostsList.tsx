import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export default function PostsList() {
    useEffect(() => {
    }, []);

    return (
        <div>
            <h1>Here goes the posts list</h1>
        </div>
    );
}