'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Heart, 
  Star, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Cake,
  PartyPopper,
  Flower2
} from 'lucide-react';

export default function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const photos = [
    '/images/foto1.jpeg',
    '/images/foto2.jpeg',
    '/images/foto3.jpeg',
    '/images/foto4.jpeg',
    '/images/foto5.jpeg',
    '/images/foto6.jpeg',
    '/images/foto7.jpeg',
    '/images/foto8.jpeg',
    '/images/foto9.jpeg',
    '/images/foto10.jpeg',
  ];

  useEffect(() => {
    // Mostrar confeti después de 1 segundo
    setTimeout(() => setShowConfetti(true), 1000);
    // Mostrar mensaje después de 2 segundos
    setTimeout(() => setShowMessage(true), 2000);
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200"></div>
      
      {/* Confeti animado */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                color: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff69b4'][Math.floor(Math.random() * 5)]
              }}
            >
              <Sparkles size={16} />
            </div>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-20 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8 slide-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <PartyPopper className="w-12 h-12 text-pink-500 float-animation" />
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 float-animation">
              Feliz cumpleaños!
            </h1>
            <Cake className="w-12 h-12 text-pink-500 float-animation" />
          </div>
          <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl text-pink-500 pulse-heart">
            <span>Te amo mucho</span>
            <Heart className="w-8 h-8 fill-pink-500" />
          </div>
        </header>

        {/* Mensaje especial */}
        {showMessage && (
          <div className="text-center mb-12 slide-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-pink-200 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <Flower2 className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                En este día tan especial, quiero recordarte lo mucho que significas para mí. 
                Cada momento contigo es un regalo, cada sonrisa tuya ilumina mi día. 
                Que este nuevo año de vida esté lleno de amor, alegría y todos los sueños que mereces. 
                Espero que este sea el primero de muchos cumpleaños que podamos celebrar juntos.
                Te amo.
              </p>
              <div className="flex justify-center mt-4">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
        )}

        {/* Galería de fotos */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Foto principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
              <Image
                src={photos[currentPhotoIndex]}
                alt={`Foto ${currentPhotoIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
              
              {/* Contador de fotos */}
              <div className="absolute top-6 right-6 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" />
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentPhotoIndex 
                    ? 'border-pink-500 scale-110' 
                    : 'border-gray-300 hover:border-pink-300'
                }`}
              >
                <Image
                  src={photo}
                  alt={`Miniatura ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center slide-in">
          <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Que todos tus deseos se cumplan
              </h2>
            </div>
            <p className="text-lg md:text-xl">
              Eres una persona muy especial en mi vida y quiero que sepas que cada día me haces más feliz. 
              Que este cumpleaños sea el comienzo de un año lleno de amor, risas y momentos inolvidables juntos. 
              Que tengas un muy feliz cumpleaños!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-pink-600">
          <p className="text-lg">
            Con todo mi amor para ti
          </p>
          
          {/* Nota personal */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto border border-pink-200">
            <p className="text-sm text-gray-700">
              <strong>PD:</strong> Te debo el regalo, pero cuando regreses celebramos con la ida al cine que quedó pendiente jeje
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
