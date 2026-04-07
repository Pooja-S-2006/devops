// Performance monitoring utilities
export class PerformanceMonitor {
    constructor() {
        this.marks = new Map();
        this.measures = new Map();
    }

    mark(name) {
        this.marks.set(name, performance.now());
    }

    measure(name, startMark, endMark) {
        const startTime = this.marks.get(startMark);
        const endTime = this.marks.get(endMark);
        
        if (startTime === undefined || endTime === undefined) {
            throw new Error('Mark not found');
        }
        
        const duration = endTime - startTime;
        this.measures.set(name, duration);
        return duration;
    }

    getMeasure(name) {
        return this.measures.get(name);
    }

    getAllMeasures() {
        return Object.fromEntries(this.measures);
    }

    clear() {
        this.marks.clear();
        this.measures.clear();
    }
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
