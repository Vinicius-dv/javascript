import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Importa a biblioteca node-fetch

const app = express();
app.use(cors());
app.use(express.json()); // Adiciona middleware para analisar o corpo da requisição como JSON

app.get('/pix', async (req, res) => {
    try {
        const response = await fetch('https://sandbox.api.pagseguro.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 177daa7e-73ab-4bcb-b7e5-88ba37e3281ecec07be746c2b60a76b4782638279ebb470b-591c-4676-a1bf-f80b5248e6ff'
            },
            body: JSON.stringify({
                "reference_id": "ex-00001",
                "customer": {
                    "name": "Jose da Silva",
                    "email": "email@test.com",
                    "tax_id": "12345678909",
                    "phones": [
                        {
                            "country": "55",
                            "area": "11",
                            "number": "999999999",
                            "type": "MOBILE"
                        }
                    ]
                },
                "items": [
                    {
                        "name": "nome do item",
                        "quantity": 1,
                        "unit_amount": 500
                    }
                ],
                "qr_codes": [
                    {
                        "amount": {
                            "value": 500
                        },
                        "expiration_date": "2024-10-29T20:15:59-03:00"
                    }
                ],
                "shipping": {
                    "address": {
                        "street": "Avenida Brigadeiro Faria Lima",
                        "number": "1384",
                        "complement": "apto 12",
                        "locality": "Pinheiros",
                        "city": "São Paulo",
                        "region_code": "SP",
                        "country": "BRA",
                        "postal_code": "01452002"
                    }
                },
                "notification_urls": [
                    "https://meusite.com/notificacoes"
                ]
            })
        });
        
        const data = await response.json(); // Correção aqui para processar a resposta
        console.log(data); // Exibe o conteúdo da resposta no console

        

    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).send('Erro ao criar pedido');
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando')
})