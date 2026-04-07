// Storage utilities
export class StorageManager {
    constructor(prefix = 'app_') {
        this.prefix = prefix;
    }

    set(key, value) {
        const prefixedKey = this.prefix + key;
        if (typeof value === 'object') {
            localStorage.setItem(prefixedKey, JSON.stringify(value));
        } else {
            localStorage.setItem(prefixedKey, value);
        }
    }

    get(key, defaultValue = null) {
        const prefixedKey = this.prefix + key;
        const value = localStorage.getItem(prefixedKey);
        
        if (value === null) return defaultValue;
        
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }

    remove(key) {
        const prefixedKey = this.prefix + key;
        localStorage.removeItem(prefixedKey);
    }

    clear() {
        Object.keys(localStorage)
            .filter(key => key.startsWith(this.prefix))
            .forEach(key => localStorage.removeItem(key));
    }
}
