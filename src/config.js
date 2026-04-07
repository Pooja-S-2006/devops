// Configuration management
export const CONFIG = {
    API_BASE_URL: 'https://api.example.com',
    VERSION: '1.0.0',
    DEBUG: true
};

export function getConfig(key) {
    return CONFIG[key];
}

export function updateConfig(key, value) {
    CONFIG[key] = value;
}
