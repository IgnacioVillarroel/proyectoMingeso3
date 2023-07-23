import React, { Component } from "react";
import Preguntas from "./PreguntasComponent";
import styled from "styled-components";
import Navbar from "./NavbarComponent";

class DificilComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            randomQuestions: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/preguntas/dificiles")
            .then((response) => response.json())
            .then((data) => this.setState({ datas: data }, this.selectRandomQuestions));
    }

    selectRandomQuestions = () => {
        const { datas } = this.state;
        // Obtener 4 preguntas al azar sin repetir
        const shuffledQuestions = datas.sort(() => 0.5 - Math.random());
        const randomQuestions = shuffledQuestions.slice(0, 4);
        this.setState({ randomQuestions });
    };
    render() {
        const { randomQuestions } = this.state;
        return (
            <HomeStyle>
                <Navbar />
                <div className="text-center">
                    <h1 className="asd">
                        <b>
                            <u>Prueba: Modo Difícil </u>
                        </b>
                    </h1>
                    {randomQuestions.map((datas) => (
                        <Preguntas
                            id={datas.id}
                            enunciado={datas.enunciado}
                            codigo={datas.codigo}
                            respuesta={datas.respuesta}
                        ></Preguntas>
                    ))}
                </div>
            </HomeStyle>
        );
    }
}

export default DificilComponent;

const HomeStyle = styled.nav `
.text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
}
.asd{
    padding-top: 10px;
    padding-bottom: 30px;

}
`