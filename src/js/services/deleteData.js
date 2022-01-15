const deleteData = async (url) => {
    const result = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    });
}

export {deleteData};