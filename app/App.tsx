import { Search } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("минималистичный дизайн");

  const searchResults = [
    {
      title: "Минималистичный дизайн — Википедия",
      url: "wikipedia.org",
      description: "Минимализм — стиль в дизайне, характеризующийся лаконичностью выразительных средств, простотой, точностью и ясностью композиции.",
      favicon: "W",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=200&h=120&fit=crop"
    },
    {
      title: "Принципы минималистичного дизайна в 2026",
      url: "design-trends.com",
      description: "Основные принципы минимализма: использование негативного пространства, простая цветовая палитра, четкая типографика и функциональность.",
      favicon: "D",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=120&fit=crop"
    },
    {
      title: "50 примеров минималистичного веб-дизайна",
      url: "awwwards.com",
      description: "Коллекция лучших минималистичных сайтов 2026 года с чистым дизайном, элегантной типографикой и продуманным пространством.",
      favicon: "A",
      image: null
    },
    {
      title: "Как создать минималистичный интерфейс",
      url: "ux-design.io",
      description: "Пошаговое руководство по созданию чистого и функционального пользовательского интерфейса с минималистичной эстетикой.",
      favicon: "U",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=120&fit=crop"
    },
    {
      title: "Минимализм в веб-дизайне: меньше значит больше",
      url: "smashingmagazine.com",
      description: "Философия минималистичного дизайна и как она помогает улучшить пользовательский опыт через простоту и ясность.",
      favicon: "S",
      image: null
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-900">
        <div className="px-8 py-6">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <h1 className="font-light tracking-tight text-2xl text-white">
              OHSSH
            </h1>

            {/* Search Bar */}
            <div className="w-[600px] relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-full focus:outline-none focus:border-gray-700 transition-colors text-sm text-white placeholder:text-gray-600"
                placeholder="Поиск..."
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="px-8 py-8 flex gap-8">
        {/* Search Results */}
        <div className="space-y-6 w-[700px] flex-shrink-0">
          {searchResults.map((result, index) => (
            <article key={index} className="group">
              <a href="#" className="flex gap-3 items-start">
                {/* Favicon */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center">
                    <span className="text-xs text-gray-400">{result.favicon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="space-y-1">
                    {/* URL */}
                    <div className="text-xs text-gray-600">
                      {result.url}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg text-gray-300 group-hover:text-white transition-colors break-words">
                      {result.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed break-words">
                      {result.description}
                    </p>
                  </div>
                </div>

                {/* Image Preview */}
                {result.image && (
                  <div className="flex-shrink-0">
                    <img
                      src={result.image}
                      alt={result.title}
                      className="w-32 h-20 object-cover rounded border border-gray-800"
                    />
                  </div>
                )}
              </a>
            </article>
          ))}
        </div>

        {/* Wikipedia Panel */}
        <aside className="w-80 flex-shrink-0">
          <div className="bg-gray-950 border border-gray-900 rounded-lg p-5 sticky top-8">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&h=200&fit=crop"
              alt="Минималистичный дизайн"
              className="w-full h-48 object-cover rounded mb-4"
            />

            {/* Title */}
            <h3 className="text-lg text-white mb-3">Минималистичный дизайн</h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Минимализм — стиль в дизайне и искусстве, характеризующийся лаконичностью выразительных средств.
            </p>

            {/* Facts */}
            <div className="space-y-3 border-t border-gray-900 pt-4">
              <div>
                <div className="text-xs text-gray-600 mb-1">Основатели</div>
                <div className="text-sm text-gray-300">Дитер Рамс, Людвиг Мис ван дер Роэ</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Период</div>
                <div className="text-sm text-gray-300">1960-е годы — настоящее время</div>
              </div>
              <div>
                <div className="text-xs text-gray-600 mb-1">Принципы</div>
                <div className="text-sm text-gray-300">Простота, функциональность, чистота форм</div>
              </div>
            </div>

            {/* Source */}
            <div className="mt-4 pt-4 border-t border-gray-900">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors flex items-center gap-1">
                <span className="w-4 h-4 bg-gray-900 rounded-full flex items-center justify-center text-[10px]">W</span>
                Википедия
              </a>
            </div>
          </div>
        </aside>

        {/* Media Panel */}
        <aside className="flex-1">
          <div className="sticky top-8 space-y-3">
            {/* Photos Section */}
            <div className="bg-gray-950 border border-gray-900 rounded-lg overflow-hidden">
              <div className="px-3 py-1.5 border-b border-gray-900">
                <h3 className="text-xs text-gray-400">Фото</h3>
              </div>
              <div className="p-2">
                <div className="grid grid-cols-4 gap-1">
                  <img
                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=100&fit=crop"
                    alt="Минималистичный интерьер"
                    className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop"
                    alt="Минималистичный дизайн"
                    className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop"
                    alt="Минималистичная архитектура"
                    className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=100&h=100&fit=crop"
                    alt="Минималистичная мебель"
                    className="w-full h-16 object-cover rounded hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div className="bg-gray-950 border border-gray-900 rounded-lg overflow-hidden">
              <div className="px-3 py-1.5 border-b border-gray-900">
                <h3 className="text-xs text-gray-400">Видео</h3>
              </div>
              <div className="p-2 space-y-2">
                <div className="flex gap-2 items-center group cursor-pointer">
                  <div className="relative overflow-hidden rounded flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=150&h=100&fit=crop"
                      alt="Видео превью"
                      className="w-28 h-16 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-0.5"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 py-0.5 rounded text-[9px] text-white">
                      12:34
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate">Основы минималистичного дизайна</div>
                    <div className="text-[10px] text-gray-600">YouTube</div>
                  </div>
                </div>

                <div className="flex gap-2 items-center group cursor-pointer">
                  <div className="relative overflow-hidden rounded flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=150&h=100&fit=crop"
                      alt="Видео превью"
                      className="w-28 h-16 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[10px] border-l-black border-y-[6px] border-y-transparent ml-0.5"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 px-1 py-0.5 rounded text-[9px] text-white">
                      8:45
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-300 truncate">Минимализм в веб-дизайне</div>
                    <div className="text-[10px] text-gray-600">YouTube</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}