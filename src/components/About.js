import { Book, Code, Cpu, GraduationCap, Lightbulb } from "lucide-react"

export default function About() {
    return (
        <div className="space-y-8 p-6 m-4">
            <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 dark:text-opacity-80 dark:font-bold"> About Me </h1>
            <section className="space-y-4">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <h2>所属</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 ml-8">東京工業大学情報理工学院 情報工学系 B3</p>
            </section>

            <section className="space-y-4">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <Book className="w-6 h-6 text-yellow-500" />
                    <h2>About Me </h2>
                </div>
                <div className="ml-8 space-y-4 text-gray-700 dark:text-gray-300">
                    <p>計算機を使うことで、</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>人間しかできなかったこと</li>
                        <li>人間にはできなかったこと</li>
                    </ul>
                    <p>を計算機ができるようになることが好きです。</p>
                    <p>それを実現する技術として、とくに機械学習に興味を持っています。</p>

                    <p> 理論も実装もできるエンジニア・研究者を目指しています。</p>

                </div>
            </section>



            <section className="space-y-4">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                    <h2>興味・関心</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 ml-8">
                    機械学習が主な興味の対象ですが、数学・コンピュータサイエンス全般が基本的に好きです。
                    とくにコンパイラ・数理最適化・統計に興味を持っています。
                </p>
            </section>

            <section className="space-y-4">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <Code className="w-6 h-6 text-green-500" />
                    <h2>技術スタック</h2>
                </div>

                <div className="ml-8 space-y-4 text-gray-700 dark:text-gray-300">
                    <div className="space-y-2 justify-center">
                        <p>
                            主には、Python / Julia / C++ あたりの言語を使うことが多いです。
                            <br></br>
                            ただ、どのプログラミング言語・技術も適している場面があると思っているので、
                            使う言語やライブラリにはあまりこだわりはなく、必要ならその場で使う勉強して使うタイプです。
                        </p>
                    </div>

                    <div className="space-y-2 ">
                        <img
                            src="https://github-readme-stats-git-featuredisplayb-a97b36-abap34s-projects.vercel.app/api/top-langs?username=abap34&hide=jupyter%20notebook,HTML,Rich%20Text%20Format,CSS,SCSS&stats_format=bytes_long&langs_count=10&count_private=true&layout=compact&disable_animations=true&card_width=400"
                            alt="Most Used Languages"
                            className="mx-auto"
                        />
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            (※ GitHub で公開しているソースコードの言語の割合)
                        </p>
                    </div>
                </div>
            </section>



            <section className="space-y-4">
                <div className="flex items-center space-x-2 text-xl font-semibold">
                    <Cpu className="w-6 h-6 text-red-500" />
                    <h2>より細かい興味</h2>
                </div>
                <div className="ml-8 space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                        ここ最近の細かい興味としては、 (最終更新: 2024年9月)
                    </p>


                    <ul className="list-disc list-inside space-y-2 p-2">
                        <li>連続最適化の理論 (確率的最適化の周辺)  </li>
                        <li>言語処理系と深く統合された機械学習周りのソフトウェア的な基盤 (例えば、 Julia言語の自動微分ライブラリの周辺) </li>
                        <li>OS まわり </li>
                    </ul>

                    <p>
                        に興味を持って勉強中です。
                    </p>

                </div>
            </section>


        </div>
    )
}