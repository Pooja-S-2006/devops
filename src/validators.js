// Validation utilities
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

export function validateRequired(value) {
    return value !== null && value !== undefined && value.toString().trim() !== '';
}

export function validateLength(value, min, max) {
    const length = value.toString().length;
    return length >= min && length <= max;
}
