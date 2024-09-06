import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-4">
      <title>abap34.com</title>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-blue-600">abap34</span>.com
          </Link>
          <div className="space-x-4">
            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link to="/" className="hover:text-blue-600">
              About
            </Link>
            <Link to="/education" className="hover:text-blue-600">
              Education
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
