import express from 'express'

const PORT = 3000;
const app = express();

app.get('/anuncios', (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'EXEMPLO1'
        },
        {
            id: 1,
            name: 'EXEMPLO1'
        },
        {
            id: 1,
            name: 'EXEMPLO1'
        }
    ])
})

app.listen(PORT)