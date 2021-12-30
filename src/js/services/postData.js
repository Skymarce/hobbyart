const postData = async (url, object) => {
    const result = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
    });
    return await result.json();
}

export {postData};