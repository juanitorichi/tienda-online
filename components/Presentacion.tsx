"use client";
import { useState, useEffect } from "react";

export default function Presentacion() {
  const imagenes = [
    "/images/mundial-fifa-2026.jpg",
    "/images/seleccion-mexicana.jpg",
    "/images/seleccion-usa.jpg",
    "/images/seleccion-canada.jpg",
  ];

  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Imágenes de fondo */}
      {imagenes.map((imagen, index) => (
        <div
          key={imagen}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === imagenActual ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${imagen})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bienvenido a mi tienda
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Encuentra las mejores playeras de selecciones nacionales
        </p>

        <a
          href="/tienda"
          className="bg-[#017E33] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
        >
          Explorar Tienda
        </a>
      </div>
    </div>
  );
}