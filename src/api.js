// API utilities
export class ApiClient {
    constructor(baseUrl = 'https://api.example.com') {
        this.baseUrl = baseUrl;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }

    async get(endpoint, params = {}) {
        const url = new URL(endpoint, this.baseUrl);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        const response = await fetch(url, {
            method: 'GET',
            headers: this.headers
        });
        
        return response.json();
    }

    async post(endpoint, data = {}) {
        const response = await fetch(new URL(endpoint, this.baseUrl), {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        });
        
        return response.json();
    }

    async put(endpoint, data = {}) {
        const response = await fetch(new URL(endpoint, this.baseUrl), {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(data)
        });
        
        return response.json();
    }

    async delete(endpoint) {
        const response = await fetch(new URL(endpoint, this.baseUrl), {
            method: 'DELETE',
            headers: this.headers
        });
        
        return response.json();
    }
}
