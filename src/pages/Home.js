import { useState } from "react";
import PostCard from "../components/Postcard";

export default function Home() {
  // Mock data - replace with your actual state/API fetch
  const [posts] = useState([
    { id: 1, title: "The Rhythm of Nairobi", content: "Exploring the streets where urban beats meet traditional sounds..." },
    { id: 2, title: "Utility-First Design", content: "Why Tailwind CSS is changing the way we think about the modern web..." },
    { id: 3, title: "Digital Storytelling", content: "Crafting narratives in an age of instant information and fast media..." },
  ]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <header className="py-20 px-6 border-b border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            The Digital Anthology
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Think. Write. <span className="text-blue-600">Repeat.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
            Welcome to a space for deep dives into tech, music, and the creative hustle.
          </p>
        </div>
      </header>

      {/* Blog Feed Grid */}
      <main className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Latest Entries</h2>
            <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
          </div>
          <button className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">
            View Archive →
          </button>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>

      {/* Subtle Newsletter Section */}
      <section className="bg-slate-900 py-20 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Stay in the loop</h3>
          <p className="text-slate-400 mb-8">Get the latest stories delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-600/20">
              Join
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}