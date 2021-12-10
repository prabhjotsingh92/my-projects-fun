var app = new Vue({
    el: '#app',
    data: {
        num1: 2,
        num2: 2,
        sum: 0,
        op: '+'
    },
    methods: {
        action: function () {
            switch (this.op) {
                case '+': this.sum = this.num1 + this.num2; break;
                case '-': this.sum = this.num1 - this.num2; break;
                case '*': this.sum = this.num1 * this.num2; break;
                case '/': this.sum = this.num1 / this.num2; break;
                default: this.sum = 2403030;
            }
        },
        add: function () {
            this.op = "+";
        },
        sub: function () {
            this.op = "-";
        },
        mul: function () {
            this.op = "*";
        },
        div: function () {
            this.op = "/"
        }
    }      
})