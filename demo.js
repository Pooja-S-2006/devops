// Demo application to test all utilities
import Calculator from './app.js';
import { formatDate, formatTime } from './date-formatter.js';
import { validateEmail, validatePhone } from './validators.js';
import { chunk, unique, shuffle } from './array-utils.js';
import { sanitizeInput, generateRandomString } from './security.js';
import { Logger } from './logger.js';
import { StorageManager } from './storage.js';
import { PerformanceMonitor } from './performance.js';

// Initialize utilities
const logger = new Logger('info');
const storage = new StorageManager('demo_');
const monitor = new PerformanceMonitor();

async function runDemo() {
    console.log('=== Git Submodules Demo Application ===\n');
    
    // Performance monitoring
    monitor.mark('demo_start');
    
    // Calculator demo
    console.log('1. Calculator Demo:');
    const calc = new Calculator();
    calc.calculate('add', 5, 3);
    calc.calculate('multiply', 4, 7);
    console.log(calc.getFormattedHistory());
    console.log('');
    
    // Date formatting demo
    console.log('2. Date Formatting Demo:');
    const now = new Date();
    console.log('Date:', formatDate(now));
    console.log('Time:', formatTime(now));
    console.log('');
    
    // Validation demo
    console.log('3. Validation Demo:');
    console.log('Email valid:', validateEmail('test@example.com'));
    console.log('Phone valid:', validatePhone('1234567890'));
    console.log('');
    
    // Array utilities demo
    console.log('4. Array Utilities Demo:');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('Original:', numbers);
    console.log('Chunked (3):', chunk(numbers, 3));
    console.log('Shuffled:', shuffle(numbers.slice(0, 5)));
    console.log('');
    
    // Security demo
    console.log('5. Security Demo:');
    const userInput = '<script>alert("xss")</script>';
    console.log('Input:', userInput);
    console.log('Sanitized:', sanitizeInput(userInput));
    console.log('Random string:', generateRandomString(8));
    console.log('');
    
    // Storage demo
    console.log('6. Storage Demo:');
    storage.set('user', { name: 'Demo User', score: 100 });
    console.log('Stored user:', storage.get('user'));
    storage.remove('user');
    console.log('User after removal:', storage.get('user'));
    console.log('');
    
    // Performance demo
    monitor.mark('demo_end');
    const totalTime = monitor.measure('total_time', 'demo_start', 'demo_end');
    console.log('7. Performance Demo:');
    console.log('Total execution time:', totalTime.toFixed(2), 'ms');
    
    // Log completion
    logger.info('Demo completed successfully');
    console.log('\n=== Demo Complete ===');
}

// Error handling
try {
    await runDemo();
} catch (error) {
    logger.error('Demo failed:', error);
    console.error('Error:', error.message);
}
