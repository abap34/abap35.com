import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Education from './Education';
import Works from './Works';

export default function About() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="bg-white text-gray-800 rounded-lg p-6  border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold font-mono">
                            @abap34
                        </h1>

                        <p> 東京工業大学 情報理工学院情報工学系 B3 </p>

                        計算機を使って人間にできなかったようなことができるようになること。  <br></br>
                        もしくは人間しかできなかったようなことが機械にできるようになることが好きです。  <br></br>
                        それを実現する技術として、 とくに機械学習に興味を持っています。

                        <div className="space-y-4">
                            <a href="https://github.com/abap34" target="_blank" rel="noreferrer" className="text-gray-800 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center transition duration-300 shadow-sm">
                                <FaGithub className="mr-2" />
                                @abap34
                            </a>
                            <a href="https://twitter.com/abap34" target="_blank" rel="noreferrer" className="text-gray-800 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center transition duration-300 shadow-sm">
                                <FaTwitter className="mr-2" />
                                @abap34
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src="/icon.png" alt="Blog Icon" className="max-w-full h-auto  rounded" />
                    </div>


                </div>
            </div>

            <Education />
            <Works />

        </main>
    );
}
