const calculator = new Calculator(100);

calculator.add(10); // 110
calculator.add(10); // 120
calculator.sub(20); // 100
console.log(calculator.get()) // 100

calculator.set(20); // 20
calculator.add(10); // 30
calculator.add(10); // 40
calculator.add('qwe'); // NaN и значение 40 не менять
console.log(calculator.get()) // 40


function Calculator(base) {
    this.base = base;

    this.isNumber = function (num) {
        return !isNaN(num);
    }

    this.add = function (num) {
        if (this.isNumber(num)) {
            this.base += num;
        }
    }

    this.sub = function (num) {
        if (this.isNumber(num)) {
            this.base -= num;
        }
    }

    this.set = function (num) {
        if (this.isNumber(num)) {
            this.base = num;
        }
    }

    this.get = function (num) {
        return this.base;
    }
}


