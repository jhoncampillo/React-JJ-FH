import React from "react";

//PAra que no se Renderice cada que se ejecura el onclick
// se usa el React.memo( "Toda la funcion")
export const Hijo = React.memo(({ numero, incrementar }) => {
  console.log("Me volvi a Renderizar");
  return (
    <div className="d-flex flex-column">
      <h1>Hijo</h1>
      <hr />
      <div>
        <button
          className="btn btn-primary  "
          onClick={() => incrementar(numero)}
        >
          {numero}
        </button>
      </div>
    </div>
  );
});
