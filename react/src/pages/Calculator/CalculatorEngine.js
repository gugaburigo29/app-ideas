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
            console.log("[Engine] Operator: ", this.getOperator(value));
            this.operator = this.getOperator(value);
            return;
        }

        const number = Number(value);

        if (Number.isNaN(number)) {
            console.log("[Engine] NaN: ", value);
            //throw new Error("Number incorrect.");
        }

        this.value = number;

        console.log("[Engine] Number: ", number);

        if (!this.previousValue && !this.operator) {
            this.previousValue = number;
            this.value = null;
            console.log("[Engine] State: ", {value: this.value, previous: this.previousValue});
            return;
        }

        if (this.previousValue && this.operator) {
            this.previousValue = this.operator.function(this.previousValue, this.value);
            this.value = null;
            this.operator = null;
            console.log("[Engine] Execute operator", this.previousValue);
            return;
        }
    }

    isOperator(operation) {
        return !!this.getOperator(operation);
    }

    getOperator(operation) {
        return this.operators.find(operator => operator.operator === operation);
    }
}

let calculatorEngine = new CalculatorEngine();
calculatorEngine.execute("4.50");
calculatorEngine.execute("3");
calculatorEngine.execute("+");
calculatorEngine.execute("2");
calculatorEngine.execute("0.50");
calculatorEngine.execute("*");
calculatorEngine.execute("2");
calculatorEngine.execute("2");
