import { Book, Code, GraduationCap, Lightbulb } from "lucide-react"

export default function About() {
    return (
        <div className="space-y-8 p-6 rounded-lg">
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
                    <h2>よく使う技術</h2>
                </div>
                <div className="ml-8 space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                        あたらしいプログラミング言語を使うのにあまり抵抗がないタイプですが、
                        第一の選択肢としてとるプログラミング言語では Python / Julia / C++ あたりを使うことが多いです。
                    </p>

                </div>
            </section>


        </div>
    )
}