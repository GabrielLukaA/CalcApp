export default function Calculadora() {

    let calculo = ""

    return (
        <div className="calc-component">
            <h1 className="calc-title">
                Bem vindo à sua Calculadora
            </h1>
            <a>{calculo}</a>
            <div className="calc-grid">

                <button onClick={calcula}>1</button>

                <button onClick={calcula}>2</button>

                <button onClick={calcula}>3</button>

                <button onClick={calcula}>4</button>

                <button onClick={calcula}>5</button>

                <button onClick={calcula}>6</button>

                <button onClick={calcula}>7</button>

                <button onClick={calcula}>8</button>

                <button onClick={calcula}>9</button>

                <button onClick={calcula}>+</button>

                <button onClick={calcula}>-</button>

                <button onClick={calcula}>*</button>

                <button onClick={calcula}>/</button>

                <button onClick={calcula}>=</button>
                <button onClick={calcula}>. </button>
            </div>
        </div>
    )
    function calcula(event) {
        let valor = event.target.textContent
        calculo += valor
        return calculo
    }
}