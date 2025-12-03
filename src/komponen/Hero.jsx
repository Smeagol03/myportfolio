import Bg from "/my.webp";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mx-auto lg:mx-0">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Alpian
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-300 font-light">
                Administrative & Web Support
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I support organizations in managing data, documents, and digital
              systems while also building responsive websites using modern tools
              like React, Firebase, and Microsoft Office. I am detail-oriented,
              organized, and ready to contribute to an efficient work
              environment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleScrollDown}
                className="px-6 sm:px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                View Portfolio
              </button>

              <button className="px-6 sm:px-8 py-3 border-2 border-blue-500/50 rounded-lg font-semibold text-blue-300 hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 pt-4 text-xl md:text-2xl">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                💼
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                🐙
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                ✉️
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="hidden md:flex justify-center items-center animate-slide-up">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-70 blur-xl animate-pulse"></div>

              {/* Content box */}
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-blue-500/30 flex items-center justify-center text-center p-6">
                <div>
                  <div className="text-5xl sm:text-6xl mb-4">💻</div>
                  <p className="text-gray-300 font-semibold text-sm sm:text-base">
                    Let's build something amazing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs sm:text-sm font-medium">
              Scroll to explore
            </span>

            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
