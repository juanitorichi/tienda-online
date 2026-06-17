import ProductoCard from "./Productocard";

const productos = [
  {
    id: 1,
    nombre: "Playera México 2026",
    precio: 1499,
    imagen: "/images/seleccion-mexicana.jpg",
  },
  {
    id: 2,
    nombre: "Playera USA 2026",
    precio: 1499,
    imagen: "/images/seleccion-usa.jpg",
  },
  {
    id: 3,
    nombre: "Playera Canadá 2026",
    precio: 1499,
    imagen: "/images/seleccion-canada.jpg",
  },
];

export default function Catalogo() {
  return (
    <section className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/images/fondo-tienda.jpg')",
      }}>
      <h1 className="text-4xl font-bold mb-8">
        Catálogo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </section>
  );
}