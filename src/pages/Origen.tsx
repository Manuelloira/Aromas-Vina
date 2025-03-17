import React from "react";

const Origen = () => {
  return (
    <section className="hero">
      <img src="../img/ORIGEN.jpg" alt="Fondo Vinos" className="background-img" />
      <div className="origen">
        <h1 className="titulo-origen">Nuestro Origen</h1>
        <div className="contenido-origen">
          <div className="imagen-origen">
            <img src="../img/CEO.jpg" alt="Foto de Manuel Loira" className="ceo-img" />
          </div>
          <div className="texto-origen">
            <p>
              Manuel Loira es un joven visionario y un ferviente defensor de la rica tradición vinícola de Galicia, región emblemática por su ancestral tradición en la producción de vinos excepcionales. Criado entre las verdes colinas y los valles bañados por el Atlántico, Manuel siente en su alma la conexión profunda con la tierra que lo vio nacer, y desde muy temprana edad, supo que su destino estaba ligado a la viticultura.
            </p>
            <p>
              Con una formación rigurosa en enología y gestión de bodegas, Manuel Loira decidió emprender su propio camino con la fundación de Bodegas Da Viña, un proyecto audaz que fusiona la tradición milenaria de la viticultura gallega con las innovaciones más sofisticadas del mundo moderno. En sus tierras, ubicadas en el privilegiado paisaje de Galicia, se cultivan viñas que dan vida a vinos de incomparable calidad, cuyas características reflejan la riqueza del entorno natural que las acoge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origen;