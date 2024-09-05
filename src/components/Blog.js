import React from 'react';
import { FaRss, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">
                        <span className="text-blue-600">abap34</span>'s Blog
                    </h1>
                    <div className="flex space-x-2">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                placeholder="Search Blog"
                                className="w-full h-full px-4 py-2 border border-gray-300 rounded-md pr-10"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                            <FaRss className="mr-2" />
                            RSS Feed
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src="/icon.png" alt="Blog Icon" className="max-w-full h-auto" />
                </div>
            </div>

            <section className="mt-16">
                <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "(WIP) 【週刊 PEGパーサジェネレータ を作ろう】 [創刊号] [最終号]", category: "Math" },
                        { title: "n 次精度 k 階数値微分の導出", category: "Programming" },
                        { title: "mini Kaggle を streamlit で作った", category: "Math" },
                    ].map((article, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <span className="text-sm text-blue-600">{article.category}</span>
                            <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                            <Link to="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                                Read more →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
}
