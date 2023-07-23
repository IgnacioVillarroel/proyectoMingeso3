import React, { useState } from "react";
import PreguntaForm from "./PreguntaFormComponent";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";



const NuevaPreguntaComponent = () => {
  const [enunciado, setEnunciado] = useState("");
  const [codigo, setCodigo] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const [tipo, setDificultad] = useState("");

  const handleEnunciadoChange = (event) => {
    setEnunciado(event.target.value);
  };

  const handleCodigoChange = (value) => {
    setCodigo(value);
  };

  const handleRespuestaChange = (event) => {
    setRespuesta(event.target.value);
  };

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Obtener la URL del backend para enviar la nueva pregunta
    const urlBackend = "http://localhost:8080/preguntas";
  
    fetch(urlBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        enunciado: enunciado,
        codigo: codigo,
        respuesta: respuesta,
        tipo: tipo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pregunta guardada:", data);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error al guardar la pregunta:", error);
        // Manejo de errores si la pregunta no se pudo guardar en la base de datos.
      });
  };

  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <h1 className="text-center">
          <b>
            <u>Agregar nueva pregunta</u>
          </b>
        </h1>
        <div className="code-box">
          <PreguntaForm
            enunciado={enunciado}
            codigo={codigo}
            respuesta={respuesta}
            tipo={tipo}
            onChangeEnunciado={handleEnunciadoChange}
            onChangeCodigo={handleCodigoChange}
            onChangeRespuesta={handleRespuestaChange}
            onChangeDificultad={handleDificultadChange}
            onSubmit={handleSubmit}
          />
        </div>
      </HomeStyle>
    </div>
  );
};

export default NuevaPreguntaComponent;

const GlobalStyle = createGlobalStyle`
body {
    background-color: #0F889E;
}
`;

const HomeStyle = styled.nav`
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
}
.code-box {
    max-width: 600px;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-bottom: 20px;
}
.form {
    width: 50%;
    margin: auto;
    padding: 20px;
}
`