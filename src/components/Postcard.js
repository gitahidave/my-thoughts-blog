import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {post.title}
      </h2>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {post.content.substring(0, 120)}...
      </p>

      <Link
        to={`/post/${post.id}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        Read More
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}