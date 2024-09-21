import { FaTag } from 'react-icons/fa';


export default function Tag({ name, label }) {
    return (
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-lg space-x-1 word-break-all truncate">
            <FaTag className="inline-block mr-1" />
            <a href={`/search?tag=${name}`} className="hover:text-blue-600 transition duration-300">{label}</a>
        </span>
    );
}