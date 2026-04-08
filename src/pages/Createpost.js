import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Header with a cleaner, more editorial font style */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
          Draft your <span className="text-blue-600">Story</span>
        </h1>
        <p className="text-slate-500 font-medium">Capture your ideas and share them with the world.</p>
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 space-y-8 relative overflow-hidden"
      >
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>

        <div className="space-y-2">
          <label htmlFor="title" className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-400">
            Post Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Give it a catchy name..."
            className="w-full bg-slate-50 border-none p-5 rounded-2xl text-lg font-semibold placeholder:text-slate-300 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="ml-1 text-xs font-bold uppercase tracking-widest text-slate-400">
            The Content
          </label>
          <textarea
            id="content"
            placeholder="What's on your mind?"
            className="w-full bg-slate-50 border-none p-5 rounded-2xl h-64 resize-none text-slate-700 leading-relaxed placeholder:text-slate-300 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>

        <button 
          type="submit"
          className="group relative w-full bg-slate-900 overflow-hidden py-5 px-6 rounded-2xl font-bold text-white transition-all hover:bg-blue-600 active:scale-[0.98] shadow-xl shadow-slate-900/10 hover:shadow-blue-600/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Publish to Blog
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}