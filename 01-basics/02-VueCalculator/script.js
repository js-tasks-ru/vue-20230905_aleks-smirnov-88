import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            operator: null,
            firstOperand: null,
            secondOperand: null
        }
    },
    computed: {
        calcResult() {
            if (this.firstOperand !== null && this.secondOperand !== null) {
                switch (this.operator) {
                    case 'sum':
                        return this.firstOperand + this.secondOperand;
                        break;
                    case 'subtract':
                        return this.firstOperand - this.secondOperand;
                        break;
                    case 'multiply':
                        return this.firstOperand * this.secondOperand;
                        break;
                    case 'divide':
                        return this.firstOperand / this.secondOperand;
                        break;
                    default: 
                    return 'Operation is not defined';
                }
            }
            return 'Fill in all data';
        }
    }
});

app.mount('#app');