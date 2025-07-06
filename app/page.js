"use client";
import React from "react";

const videos = [
  {
    id: 1,
    title: "Jak zostać UI/UX Designerem?",
    channel: "DesignPro",
    views: "120 tys.",
    thumbnail: "https://i.ytimg.com/vi/6oTurM7gESE/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Nowości w React 2025",
    channel: "CodeLab",
    views: "80 tys.",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Najlepsze animacje CSS",
    channel: "Animato",
    views: "200 tys.",
    thumbnail: "https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181A20] to-[#23262F] text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#23262F] sticky top-0 z-10 shadow-lg">
        <div className="text-2xl font-bold text-yellow-400 tracking-wide">YT Premium</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Trending</a>
          <a href="#" className="hover:text-yellow-400 transition">Subskrypcje</a>
          <a href="#" className="hover:text-yellow-400 transition">Premium</a>
        </div>
        <input
          type="text"
          placeholder="Szukaj..."
          className="rounded-lg px-4 py-2 bg-[#181A20] text-white border border-[#23262F] focus:outline-none focus:border-yellow-400 transition"
        />
      </nav>

      {/* Banner Premium */}
      <section className="max-w-5xl mx-auto mt-10 mb-8 rounded-3xl bg-gradient-to-r from-yellow-400 to-blue-900 p-8 flex flex-col md:flex-row items-center justify-between shadow-xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#181A20] mb-2">Oglądaj bez reklam, w jakości 4K</h1>
          <p className="text-[#23262F] text-lg mb-4">Dołącz do YT Premium i odkryj nowy wymiar rozrywki.</p>
          <button className="bg-[#181A20] text-yellow-400 px-6 py-3 rounded-xl font-bold text-lg hover:bg-[#23262F] transition">Zostań Premium</button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/09/32/blur-1869391_1280.jpg"
          alt="Premium"
          className="w-64 h-40 object-cover rounded-2xl mt-6 md:mt-0 shadow-lg"
        />
      </section>

      {/* Sekcja Polecane */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Polecane dla Ciebie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[#23262F] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform"
            >
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{video.title}</h3>
                <div className="text-sm text-gray-400">{video.channel} • {video.views} wyświetleń</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
