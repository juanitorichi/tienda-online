import Link from "next/link";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

type ProductoCardProps = {
  producto: Producto;
};

export default function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <Link href={`/tienda/${producto.id}`}>
      <div className="rounded-lg border shadow-md overflow-hidden bg-white cursor-pointer hover:scale-105 transition">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h2 className="text-lg font-semibold">
            {producto.nombre}
          </h2>

          <p className="text-xl font-bold text-[#017E33] mt-2">
            ${producto.precio}
          </p>

          <button
            className="mt-4 w-full bg-[#017E33] text-white py-2 rounded hover:bg-green-700 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </Link>
  );
}