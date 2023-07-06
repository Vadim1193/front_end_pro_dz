
console.log('Run');

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const renderFile = (url, callback) => {
    fs.readFile(url, 'utf-8', (error, data) => {
        if (error) {
            return callback(error, null);
        }

        let dataFromJs = JSON.parse(data);
        callback(null, dataFromJs); 
    })
}

const filters = {
    in_stock: (data) => data.productStock === true,
    out_stock: (data) => data.productStock === false,
    all: () => true,
    filtered: (data, criteria) => data.filter(item => item.productName === criteria),
    filterPrice: (data, minPrice, maxPrice) => {
        return data.filter((product) => {
            const productPrice = parseFloat(product.productPrice);
            return productPrice >= minPrice && productPrice <= maxPrice;
        })
    },
    filteredId: (data, id) => data.find(item => item.productId == id),
}

const filterProdStock = (data, filtType) => {
    const filterFunc = filters[filtType];
    if (typeof filterFunc === 'function') {
        return data.filter(filterFunc);
    };
}

app.get('/', (req, res) => {
    res.send("Go!!");
})

app.get('/products', (req, res) => {
    const { stock, minPrice, maxPrice } = req.query;

    renderFile('data.json', (error, dataFromJs) => {
        if (error) {
           return res.status(404).send( { message: 'Error' } );
        }

        dataFromJs = stock ? filterProdStock(dataFromJs, stock) : dataFromJs;
        dataFromJs = minPrice && maxPrice ? filters.filterPrice(dataFromJs, parseFloat(minPrice), parseFloat(maxPrice)) : dataFromJs;

        res.send(dataFromJs);
    })
})

app.get('/productName', (req, res) => {
    const { criteria } = req.query;
    const formattedCrit = criteria.replace(/_/g, ' ');

    renderFile('data.json', (error, dataFromJs) => {
        if (error) {
            return res.status(403).send( { message: 'Please log in' } );
        }
        const filteredData = filters.filtered(dataFromJs, formattedCrit);
        res.send(filteredData);
    })
})

app.get('/product/:id', (req, res) => {
    const idProduct = req.params.id;
    renderFile('data.json', (error, dataFromJs) => {
        if (error) {
            return res.status(404).send( { message: 'User not found' } );
        }
        const currentId = filters.filteredId(dataFromJs, idProduct);
        res.send(currentId);
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})





