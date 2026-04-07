// Main application
import { add, multiply } from '../lib/external-library/src/math.js';
import { capitalize } from '../lib/external-library/src/string.js';

class Calculator {
    constructor() {
        this.history = [];
    }

    calculate(operation, a, b) {
        let result;
        switch (operation) {
            case 'add':
                result = add(a, b);
                break;
            case 'multiply':
                result = multiply(a, b);
                break;
            default:
                throw new Error('Unknown operation');
        }
        
        this.history.push({
            operation,
            a,
            b,
            result,
            timestamp: new Date().toISOString()
        });
        
        return result;
    }

    getFormattedHistory() {
        return this.history.map(entry => 
            `${capitalize(entry.operation)}: ${entry.a} ${entry.operation} ${entry.b} = ${entry.result}`
        ).join('\n');
    }
}

export default Calculator;
