const API = 'http://localhost:5050';

export async function fetchFromAPI(endpoint, choices) {
    const { method, body } = { method: 'POST', body: null, ...choices };

    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.json();
}