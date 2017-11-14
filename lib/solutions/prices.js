//PRICES - each item's prices are organised quantity for price in ascending order

module.exports = {
    'A': {
        prices: [
        {qty: 1, price: 50},
        {qty: 3, price: 130},
        {qty: 5, price: 200}
        ]
    },
    'B': {
        prices: [
            {qty: 1, price: 30},
            {qty: 2, price: 45}
        ]
    },
    'C': {
            prices: [
            {qty: 1, price: 20}
        ]
    },
    'D': {
            prices: [
            {qty: 1, price: 15}
        ]
    },
    'E': {
        prices: [
            {qty: 1, price: 40}
        ],
        freebies: {
            every: 2,
            freeItem: 'B',
            freeQty: 1
        }
    },
    'F': {
        prices: [
            {qty: 1, price: 10}
        ],
        freebies: {
            every: 2,
            freeItem: 'F',
            freeQty: 1
        }
    }
};

