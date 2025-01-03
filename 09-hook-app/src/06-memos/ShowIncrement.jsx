import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {

  console.log('Me volví a renderizar :( ');

  return (
    <button
      className="btn btn-primary"
      onClick={() => increment(5)}
    >
      Incrementar
    </button>
  )
});
