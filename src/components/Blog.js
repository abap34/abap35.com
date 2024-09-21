import React, { useEffect, useState } from 'react';
import { FaRss, FaSearch } from 'react-icons/fa';
import swal from 'sweetalert2';

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

function copyRSS() {
    navigator.clipboard.writeText('https://www.abap34.com/rss.xml');
    swal.fire({
        title: 'Copied RSS URL',
        text: 'The RSS URL has been copied to the clipboard.',
        icon: 'success',
        timer: 2000,
        confirmButtonText: 'OK'
    });
}

function eachPost(post, index) {
    return (
        <a key={index} href={post.url} target="_blank" rel="noreferrer" className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition duration-300">
            <img src={post.thumbnail_url} alt={post.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.post_date}</p>
            <p className="text-sm text-gray-600">{post.content.slice(0, 50)}...</p>
        </a>
    );
}



export default function About() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);


    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">
                        <span className="text-blue-600">abap34</span>'s Blog
                    </h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center" href="https://www.abap34.com/rss.xml" target="_blank" rel="noreferrer" onClick={copyRSS}>
                        <FaRss className="mr-2" />
                        Copy RSS URL
                    </button>
                    <div className="flex space-x-2">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search Blog"
                                className="w-full h-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring focus:ring-blue-600 focus:border-blue-600 transition duration-300 placeholder-gray-400 dark:placeholder-gray-500 dark:bg-gray-800"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-2 top-2 text-gray-400" onClick={() => window.location.href = `/search?q=${searchQuery}`}>
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/icon.png" alt="Blog Icon" className="max-w-full h-auto" />
                </div>
            </div>

            <section className="mt-16">
                <h2 className="text-2xl font-bold">All Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {posts.map(eachPost)}
                </div>
            </section>


        </main>
    );
}
