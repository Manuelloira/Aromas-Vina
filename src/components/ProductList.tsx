import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Asegúrate de que la ruta sea correcta
import { ref, onValue } from "firebase/database";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  region: string;
}

const ProductList: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    // Referencia al nodo "products" en Realtime Database
    const productosRef = ref(db, "products");

    // Escucha cambios en los datos
    onValue(productosRef, (snapshot) => {
      const data = snapshot.val(); // Obtiene los datos
      console.log("Datos recuperados:", data); // Depuración

      if (data) {
        // Convierte el objeto de productos en un array
        const productosArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProductos(productosArray);
      } else {
        console.log("No hay productos disponibles.");
      }
    });
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {productos.length > 0 ? (
        <div>
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.image} alt={producto.name} />
              <h2>{producto.name}</h2>
              <p>{producto.description}</p>
              <p><strong>Precio:</strong> {producto.price}</p>
              <p><strong>Región:</strong> {producto.region}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;