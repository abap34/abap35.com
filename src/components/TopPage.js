import React from 'react';
import { FaGithub, FaLink, FaTwitter } from 'react-icons/fa';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import About from './About';
import Education from './Education';
import Works from './Works';

export default function TopPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="rounded-lg p-6 border-gray-200">
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center p-4">
                    <div className="space-y-6 md:w-1/2">
                        <h1 className="text-4xl font-bold font-mono">
                            @abap34
                        </h1>


                        <div className="space-y-4">
                            <a href="https://github.com/abap34" target="_blank" rel="noreferrer" className="text-white px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 flex items-center transition duration-300 shadow-sm dark:hover:bg-gray-700 dark:bg-gray-600">
                                <FaGithub className="mr-2" />
                                @abap34
                            </a>

                            <a href="https://twitter.com/abap34" target="_blank" rel="noreferrer" className="text-white px-4 py-2 rounded bg-sky-400 hover:bg-sky-500 flex items-center transition duration-300 shadow-sm dark:hover:bg-sky-200">
                                <FaTwitter className="mr-2" />
                                @abap34
                            </a>
                            <a href="https://abap34.com/posts.html" target="_blank" rel="noreferrer" className="text-white px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 flex items-center transition duration-300 shadow-sm dark:hover:bg-orange-200">
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
                    <Tab>About</Tab>
                    <Tab>Education</Tab>
                    <Tab>Projects</Tab>
                    <Tab>Articles</Tab>
                </TabList>

                <TabPanel>
                    <About />
                </TabPanel>
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
