const API = 'https://git.heroku.com/whats-popping-popcorn.git';

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