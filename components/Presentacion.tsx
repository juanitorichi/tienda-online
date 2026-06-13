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
    }, 5000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${imagenes[imagenActual]})` }}
    >
        <h1 className="text-4xl font-bold mb-4">Bienvenido a mi tienda</h1>
        <p className="text-lg text-gray-700 mb-8">Encuentra los mejores productos al mejor precio</p>
        <a href="/tienda" className="bg-[#017E33] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">Explorar Tienda</a>
    </div>
  );
}