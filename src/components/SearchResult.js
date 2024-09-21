import React, { useEffect, useState } from 'react';

async function fetchPosts() {
    try {
        const response = await fetch('https://www.abap34.com/posts.json');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

function getSearchQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('q');
}

function searchPosts(posts, query) {
    if (!query) {
        return posts;
    }
    return posts.filter((post) => {
        return post.content.includes(query) || post.title.includes(query);
    });
}

export function Post({ post, query }) {
    const index = post.content.indexOf(query);
    const start = Math.max(0, index - 10);
    const end = Math.min(post.content.length, index + query.length + 100);
    const before = post.content.slice(start, index);
    const match = post.content.slice(index, index + query.length);
    const after = post.content.slice(index + query.length, end);

    return (
        <a key={index} href={post.url} target="_blank" rel="noreferrer" className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition duration-300">
            <img src={post.thumbnail_url} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.post_date}</p>
            <p className="text-sm text-gray-600 mb-2 truncate dark:text-gray-400">
                {before}
                <span className="bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-gray-100">{match}</span>
                {after}
                <span className="text-gray-100 dark:text-gray-600 ml-1">...</span>
            </p>

        </a>

    );
}



export default function SearchResult() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);


    const query = getSearchQuery();
    const searchedPosts = searchPosts(posts, query);

    return (
        <main className="container mx-auto px-4 py-8 space-y-8">
            <h1 className="text-4xl font-bold">Search Result</h1>
            <p className="text-gray-600">Search results for "{query}"</p>
            <div className="text-gray-600">Found {searchedPosts.length} results</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                {searchedPosts.map((post) => (
                    <Post key={post.url} post={post} query={query} />
                ))}
            </div>
        </main>
    );
}

