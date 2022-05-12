import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me Volvi a Mostrar");

  return (
    <div>
      <small>{value}</small>
    </div>
  );
});
///memo= memorizar TODO  EL COMPONENTE
//Rect.memo se utiliza para no re renderizar un componente si sus propiedades no cambian.
