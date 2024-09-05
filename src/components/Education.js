function EachEducation(props) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold">{props.school}</h3>
            <p className="text-sm text-gray-600">{props.period}</p>
        </div>
    );
}


function EachWork(props) {
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold">{props.company}</h3>
            <p className="text-sm text-gray-600">{props.period}</p>
            <p className="text-sm text-gray-600">{props.worktype}</p>
            <p className="text-sm text-gray-600">{props.project}</p>
        </div>
    );
}


export default function Education() {
    return (
        <div className="space-y-4 px-4 py-8 mx-auto">
            <h2 className="text-2xl font-bold">Education</h2>
            <EachEducation school="東京工業大学 情報理工学院" period="2022~" />
            <EachEducation school="東京工業大学 情報理工学院 情報工学系" period="2023~" />

            <h2 className="text-2xl font-bold">Work Experience</h2>
            <EachWork company="DENSO IT Lab" period="2022 " worktype="Reserch Internship" project="深層学習を使った研究の実装・評価をしていました。" />
            <EachWork company="XICA" period="2023" worktype="SWE Internship" project="Python製の既存の分析基盤をJuliaで書き直して高速化するプロジェクトをしていました。" />
        </div>

    );
}