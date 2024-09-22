import React, { useEffect, useState } from 'react';
import { FaRss, FaSearch } from 'react-icons/fa';
import swal from 'sweetalert2';
import Tag from './Tag';


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


function BlogTimeline({ posts }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="relative lg:max-w-3xl mx-auto md:w-full">
                <div
                    className="absolute left-4 top-0 h-full w-1 dark:bg-blue-200 bg-blue-400"
                    aria-hidden="true"
                >
                </div>


                {posts.map((post, index) => (
                    <div key={index} className="relative space-y-4 pl-12 mb-8">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {post.post_date}
                        </p>

                        <a href={post.url} target="_blank" rel="noreferrer" className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 transition duration-300 block">
                            <h3 className="text-lg font-semibold mb-4 mt-2">{post.title}</h3>

                            <img src={post.thumbnail_url} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-2" />
                            <p className="text-sm text-gray-600 mb-2 truncate dark:text-gray-400">{post.content}</p>

                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <Tag key={index} name={tag} label={tag} />
                                ))}
                            </div>

                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
}



export default function About() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // タグの一覧. (name => 個数) の map としてもつ
    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        fetchPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    useEffect(() => {
        const tags = posts.reduce((acc, post) => {
            post.tags.forEach((tag) => {
                if (acc[tag]) {
                    acc[tag] += 1;
                } else {
                    acc[tag] = 1;
                }
            });
            return acc;
        }, {});
        // 個数でソート
        const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);
        setAllTags(sortedTags);
    }
        , [posts]);




    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">
                        <span className="text-blue-600">abap34</span>'s Blog
                    </h1>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center space-x-2 transition duration-300 dark:bg-orange-400 hidden lg:flex" onClick={copyRSS}>
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
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        window.location.href = `/search?q=${searchQuery}`;
                                    }
                                }
                                }
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


            <div className="grid lg:grid-cols-[3fr,2fr] gap-8 md:grid-cols-1 px-0 py-8 lg:px-8">
                <div className="space-y-8 lg:border border-gray-200 rounded-lg lg:p-4 md:p-2 dark:border-gray-700 overflow-y-scroll">
                    <h2 className="text-2xl font-bold sticky"> Blog Posts </h2>
                    <BlogTimeline posts={posts} />
                </div>

                <div className="sticky top-24 overflow-y-scroll hidden lg:block space-y-8 p-4 max-h-[80vh]">
                    <h2 className="text-2xl font-bold mb-4 "> Tags </h2>
                    <div className="gap-2 flex flex-wrap">
                        {allTags.map(([tag, count], index) => (
                            <Tag key={index} name={tag} label={`${tag} (${count})`} />
                        ))}

                    </div>
                </div>
            </div>
        </main>
    );
}
