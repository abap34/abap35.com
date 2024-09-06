import React from 'react';
import { FaGithub, FaLink, FaTwitter } from 'react-icons/fa';
import Education from './Education';
import Works from './Works';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function About() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="rounded-lg p-6  border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold font-mono">
                            @abap34
                        </h1>


                        <p
                            className="py-2 text-gray-800 dark:text-gray-200 pb-4"
                        > 東京工業大学 情報理工学院情報工学系 B3 </p>




                        計算機を使うことで、
                        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 pb-4">
                            <li> 人間しかできなかったようなことが、機械もできるようになること </li>
                            <li> 人間にできなかったことが、機会もできるようになること </li>
                        </ul>

                        が好きです。

                        <br></br>

                        それを実現する技術として、とくに機械学習に興味を持っています。



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

                    <div className="flex justify-center items-center">
                        <img src="/icon.png" alt="Blog Icon" className="max-w-full h-auto  rounded" />
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
