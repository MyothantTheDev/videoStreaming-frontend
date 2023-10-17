export const saveState = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (error) {
        console.error('Error loading state from local storage:', error);
        return null;
    }
};