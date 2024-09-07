import React from 'react';
import { FaGithub, FaLink, FaTwitter } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Education from './Education';
import Works from './Works';

export default function About() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="rounded-lg p-6 border-gray-200">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                    <div className="space-y-6 md:w-1/2">
                        <h1 className="text-4xl font-bold font-mono">
                            @abap34
                        </h1>
                        <p className="py-2 text-gray-800 dark:text-gray-200 pb-4">
                            東京工業大学 情報理工学院情報工学系 B3
                        </p>
                        <p>
                            計算機を使うことで、
                        </p>
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 pb-4">
                            <li>人間しかできなかったことが、できるようになること</li>
                            <li>人間にはできなかったことが、できるようになること</li>
                        </ul>
                        <p>が好きです。</p>
                        <br />
                        <p>
                            それを実現する技術として、とくに機械学習に興味を持っています。
                        </p>

                        <div className="space-y-4">
                            <a href="https://github.com/abap34" target="_blank" rel="noreferrer" className="text-gray-800 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center transition duration-300 shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                                <FaGithub className="mr-2" />
                                @abap34
                            </a>
                            <a href="https://twitter.com/abap34" target="_blank" rel="noreferrer" className="text-gray-800 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center transition duration-300 shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                                <FaTwitter className="mr-2" />
                                @abap34
                            </a>
                            <a href="https://abap34.com/posts.html" target="_blank" rel="noreferrer" className="text-gray-800 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center transition duration-300 shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                                <FaLink className="mr-2" />
                                abap34's blog
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center md:w-1/2">
                        <img src="/icon.png" alt="Blog Icon" className="max-w-full h-auto rounded" />
                    </div>
                </div>
            </div>

           <Tabs className="mt-8">
                <TabList>
                    <Tab>Education</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Articles</Tab>
                </TabList>

                <TabPanel>
                    <Education />
                </TabPanel>
                <TabPanel>
                    <Works title="Projects (Click to see datails)" path="/works/works.yaml" defaultVisibleCount={3} />
                </TabPanel>
                <TabPanel>
                    <Works title="Articles (Click to see datails)" path="/works/articles.yaml" defaultVisibleCount={2} />
                </TabPanel>
            </Tabs>
        </main>
    );
}
