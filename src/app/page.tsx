'use client';

import { useState } from 'react';

const flirtyLines = [
  "Come on, don't be shy! 😘",
  "I promise I'm worth it! 💕",
  "My heart is waiting for you... 🥺",
  "Don't break my heart like this! 💔",
  "Pretty please with chocolates on top? 🍫",
  "I'll even buy you flowers! 🌹",
  "Say yes and make me the happiest! 🥰",
  "Your smile is my happiness! ✨",
];

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupLevel, setPopupLevel] = useState(0);
  const [currentFlirtyLine, setCurrentFlirtyLine] = useState(0);

  const handleYes = () => {
    setResponse('yes');
    setShowPopup(false);
    setPopupLevel(0);
  };

  const handleNoClick = () => {
    setShowPopup(true);
    setPopupLevel(1);
  };

  const handleNoInPopup = () => {
    setPopupLevel(popupLevel + 1);
    setCurrentFlirtyLine((prev) => (prev + 1) % flirtyLines.length);
  };

  const handleReset = () => {
    setResponse(null);
    setShowPopup(false);
    setPopupLevel(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-red-50 to-pink-50 flex items-center justify-center p-4 relative">
      {/* Modal Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-bounce-in">
            {/* Header with flirty line */}
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💕✨</div>
              <h2 className="text-2xl font-bold text-pink-600 mb-2">
                {popupLevel === 1 ? "Are you really sure?" : "Think again..."}
              </h2>
              <p className="text-lg italic text-red-500 font-semibold">
                "{flirtyLines[currentFlirtyLine]}"
              </p>
            </div>

            {/* Messages based on popup level */}
            <div className="text-center mb-8">
              {popupLevel === 1 && (
                <p className="text-gray-700 text-lg">
                  I'm standing here with my heart in my hand... 🥺
                </p>
              )}
              {popupLevel === 2 && (
                <p className="text-gray-700 text-lg">
                  Seriously though, you're breaking me! 💔
                </p>
              )}
              {popupLevel === 3 && (
                <p className="text-gray-700 text-lg">
                  I'm not giving up that easily! 😤💪
                </p>
              )}
              {popupLevel >= 4 && (
                <p className="text-gray-700 text-lg">
                  You can't resist forever! 😏💕
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-col sm:flex-row">
              <button
                onClick={handleYes}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Just Say Yes Please!!! 💖
              </button>
              <button
                onClick={handleNoInPopup}
                className="flex-1 px-6 py-3 bg-gray-400 hover:bg-gray-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                No
              </button>
            </div>

            {/* Fun counter */}
            <p className="text-center text-gray-500 text-sm mt-4">
              Attempt #{popupLevel}
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="text-center max-w-2xl">
        <div className="mb-8 animate-pulse">
          <span className="text-6xl">💕</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-6">
          Will you be my Valentine?
        </h1>

        <p className="text-xl text-gray-700 mb-12">
          Let's make this day special together
        </p>

        {!response ? (
          <div className="flex gap-6 justify-center flex-col sm:flex-row">
            <button
              onClick={handleYes}
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
            >
              Yes! 💖
            </button>
            <button
              onClick={handleNoClick}
              className="px-8 py-4 bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 cursor-not-allowed"
            >
              No 💔
            </button>
          </div>
        ) : response === 'yes' ? (
          <div>
            <div className="text-8xl mb-6 animate-bounce">🎉</div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="text-6xl animate-bounce" style={{ animationDelay: '0.1s' }}>💃</div>
              <div className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🕺</div>
              <div className="text-6xl animate-bounce" style={{ animationDelay: '0.3s' }}>💃</div>
            </div>
            <p className="text-3xl text-red-600 font-bold mb-8">
              You made me the happiest person! 💕
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg"
            >
              Ask again? ✨
            </button>
          </div>
        ) : (
          <div>
            <div className="text-8xl mb-6">😢</div>
            <p className="text-2xl text-gray-700 font-bold mb-8">
              Maybe next time... 💔
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg"
            >
              Try again? 🤔
            </button>
          </div>
        )}

        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          <span className="text-4xl">💐</span>
          <span className="text-4xl">🌹</span>
          <span className="text-4xl">💝</span>
          <span className="text-4xl">🎀</span>
          <span className="text-4xl">✨</span>
        </div>
      </div>
    </div>
  );
}
