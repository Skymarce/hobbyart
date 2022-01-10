async function auth(url, apiKey, email, password) {
    const result = await fetch(`${url}${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, returnSecureToken: true})
    });

    return await result.json();
}

export {auth};