import React, {useState} from "react";

import "./styles.css";
import {Key} from "./components/Key";

const CalculatorOperations = {
    divide: (value, add) => value / add,
    adiction: (value, add) => value + add,
    multiply: (value, add) => value * add,
    subtraction: (value, add) => value - add,
};

class CalculatorEngine {
    previousValue;
    value;
    operator;

    operators = [
        {operator: '/', function: CalculatorOperations.divide},
        {operator: '+', function: CalculatorOperations.adiction},
        {operator: '*', function: CalculatorOperations.multiply},
        {operator: '-', function: CalculatorOperations.subtraction},
    ];

    execute(value) {
        const isOperator = this.isOperator(value);

        if (isOperator) {
            //
            return;
        }

        const number = Number(value);

        if (Number.isNaN(number)) {
            throw new Error("Number incorrect.");
        }

        this.value = number;

        if (!this.previousValue) {
            this.previousValue = number;
            this.value = null;
        }
    }

    isOperator(operation) {
        return !!this.getOperator(operation);
    }

    getOperator(operation) {
        return this.operators.find(operator => operator.operator === operation);
    }
}

/*

1° Pegar o valor digitado
 - Se tiver ',' fazer o tratamento
2° Esperar por um operador
3° Pegar o proximo valor
4° Pegar o valor digitado e aplicar operação com o proximo valor
5° Voltar para o primeiro passo

Cenario:
- Digitiou 5 -> previousValue
- Apertou + -> operator
- Digitou 10 -> value
- Apertou = ->

*/

export default function Calculator() {
    const [value, setValue] = useState("");

    return (
        <div className="page">
            <div className="page-content calculator-content">
                <div className="calculator-result">

                </div>
                <div className="calculator-keys">
                    <Key name="7" onClick={() => insertInDisplay("7")}/>
                    <Key name="8" onClick={() => insertInDisplay("8")}/>
                    <Key name="9" onClick={() => insertInDisplay("9")}/>
                    <Key name="C" onClick={clear}/>
                </div>
                <div className="calculator-keys">
                    <Key name="4" onClick={() => setDisplay(prevState => prevState + "4")}/>
                    <Key name="5" onClick={() => setDisplay(prevState => prevState + "5")}/>
                    <Key name="6" onClick={() => setDisplay(prevState => prevState + "6")}/>
                    <Key name="+" onClick={() => execute('+')}/>
                </div>
                <div className="calculator-keys">
                    <Key name="1" onClick={() => setDisplay(prevState => prevState + "1")}/>
                    <Key name="2" onClick={() => setDisplay(prevState => prevState + "2")}/>
                    <Key name="3" onClick={() => setDisplay(prevState => prevState + "3")}/>
                    <Key name="-" onClick={() => execute('-')}/>
                </div>
                <div className="calculator-keys">
                    <Key name="0" double onClick={() => setDisplay(prevState => prevState + "0")}/>
                    <Key name="," onClick={() => setDisplay(prevState => prevState + ",")}/>
                    <Key name="="/>
                </div>
            </div>
        </div>
    )

}
