import { useState } from "react"

export default function Calculadora() {

    const [calculo, setCalculo] = useState('')

    return (
        <div className="calc-component">
            <h1 className="calc-title">
                Bem vindo à sua Calculadora
            </h1>
            <a>{calculo}</a>
            <div className="calc-grid">

                <button onClick={
                    event => {
                        let ultimoCaractere = calculo.charAt(calculo.length - 1);
                        if (ultimoCaractere == "+" || ultimoCaractere == "-" ||
                            ultimoCaractere == "*" || ultimoCaractere == "/") {
                            console.log("Não pode")
                        } else {
                            setCalculo(calculo + event.target.textContent)
                        }
                    }
                }

                >1</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>2</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>3</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>4</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>5</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>6</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>7</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>8</button>

                <button onClick={event => setCalculo(calculo + event.target.textContent)}>9</button>

                <button onClick={
                    event => {
                        let ultimoCaractere = calculo.charAt(calculo.length - 1);
                        if (ultimoCaractere == "+" || ultimoCaractere == "-" ||
                            ultimoCaractere == "*" || ultimoCaractere == "/") {
                            console.log("Não pode")
                        } else {
                            setCalculo(calculo + event.target.textContent)
                        }
                    }
                }>+</button>

                <button onClick={
                    event => {
                        let ultimoCaractere = calculo.charAt(calculo.length - 1);
                        if (ultimoCaractere == "+" || ultimoCaractere == "-" ||
                            ultimoCaractere == "*" || ultimoCaractere == "/") {
                            console.log("Não pode")
                        } else {
                            setCalculo(calculo + event.target.textContent)
                        }
                    }
                }>-</button>

                <button onClick={
                    event => {
                        let ultimoCaractere = calculo.charAt(calculo.length - 1);
                        if (ultimoCaractere == "+" || ultimoCaractere == "-" ||
                            ultimoCaractere == "*" || ultimoCaractere == "/") {
                            console.log("Não pode")
                        } else {
                            setCalculo(calculo + event.target.textContent)
                        }
                    }
                }>*</button>

                <button onClick={
                    event => {
                        let ultimoCaractere = calculo.charAt(calculo.length - 1);
                        if (ultimoCaractere == "+" || ultimoCaractere == "-" ||
                            ultimoCaractere == "*" || ultimoCaractere == "/") {
                            console.log("Não pode")
                        } else {
                            setCalculo(calculo + event.target.textContent)
                        }
                    }
                }>/</button>

                <button onClick={calcula}>=</button>
                <button onClick={limpa}>Del </button>
            </div>
        </div>
    )
    function calcula() {
       
    setCalculo(   eval(calculo)+"")
        
    }
    function limpa() {
        setCalculo("")
    }
}