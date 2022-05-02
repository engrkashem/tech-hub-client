
const UpdateStock = (url, newProduct) => {
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct),
    })
        .then(res => res.json())
        .then(data => console.log(data))
};

export default UpdateStock;