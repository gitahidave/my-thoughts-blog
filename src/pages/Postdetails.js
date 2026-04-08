import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();

  return (
    <article className="min-h-screen pb-20">
      {/* Progress Bar (Optional dynamic touch) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="bg-blue-600 h-full w-1/3 transition-all duration-300"></div>
      </div>

      <header className="pt-16 pb-12 px-6 bg-linear-to-b from-slate-50 to-white border-b border-slate-100 mb-16">
        <div className="max-w-3xl mx-auto">
          {/* Category Tag */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Music & Tech
          </span>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
            The Future of Digital Expression in 2026
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
              TL
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-bold text-sm">Toxic Lyrikali</span>
              <div className="flex items-center text-slate-500 text-xs">
                <span>April 7, 2026</span>
                <span className="mx-2 text-slate-300">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose lg:prose-xl prose-slate drop-cap">
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
            The landscape of creativity is shifting. What started as a niche digital 
            exploration has turned into a full-scale cultural revolution...
          </p>
          
          <p>
            This is where the full blog content will appear. Later we'll fetch this
            from the backend. For now, this is just a placeholder to demonstrate the
            post details page layout.
          </p>
          
          <blockquote className="border-l-4 border-blue-600 pl-6 my-10 italic text-2xl font-serif text-slate-700">
            "Art is not what you see, but what you make others see through your code and your rhythm."
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Post Footer / Share Tags */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex gap-2">
          {['#NairobiTech', '#WebDesign', '#CreativeCoding'].map(tag => (
            <span key={tag} className="text-sm font-medium text-slate-400 hover:text-blue-600 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}