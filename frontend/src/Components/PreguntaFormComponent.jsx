import React from "react";
import { Form, Button } from "react-bootstrap";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

const PreguntaForm = ({ enunciado, codigo, respuesta, tipo, onChangeEnunciado, onChangeCodigo, onChangeRespuesta, onChangeDificultad, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="enunciado">
        <Form.Label>Enunciado:</Form.Label>
        <Form.Control type="text" value={enunciado} onChange={onChangeEnunciado} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="codigo">
        <Form.Label>Código:</Form.Label>
        <CodeMirror
          value={codigo}
          onChange={onChangeCodigo}
          language="javascript"
          height="200px"
          theme={vscodeDarkInit({
            settings: {
              caret: "#c6c6c6",
              fontFamily: "monospace",
            },
          })}
          extensions={[javascript({ jsx: true })]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="respuesta">
        <Form.Label>Respuesta:</Form.Label>
        <Form.Control type="text" value={respuesta} onChange={onChangeRespuesta} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tipo">
        <Form.Label>Dificultad:</Form.Label>
        <Form.Control type="text" value={tipo} onChange={onChangeDificultad} required />
      </Form.Group>
      <Button type="submit" variant="primary">
        Guardar Pregunta
      </Button>
    </Form>
  );
};

export default PreguntaForm;

