import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/Createpost";
import PostDetails from "./pages/Postdetails";

function App() {
  return (
    <BrowserRouter>
      {/* Changed bg-gray-50 to a custom Slate tint for a more "tech-focused" vibe.
        Added selection styling so text highlights match your brand.
      */}
      <div className="min-h-screen bg-[#f8fafc] selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        
        {/* Increased vertical padding (py-12) and used a larger max-width 
          to let the Home grid stretch comfortably on ultra-wide screens.
        */}
        <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </main>

        {/* Optional: Simple Footer to ground the layout */}
        <footer className="border-t border-slate-100 py-10 text-center">
          <p className="text-sm text-slate-400 font-medium">
            &copy; 2026 My Thoughts Blog. Built with precision in Nairobi.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;