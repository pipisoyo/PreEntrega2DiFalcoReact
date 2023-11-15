const products = [
    {
        "id": 1,
        "rubro": "caramelos",
        "nombreProducto": "Sugus",
        "precio": 10,
        "stock": 10,
        "imagen": "sugus.jpeg"
    },
    {
        "id": 2,
        "rubro": "caramelos",
        "nombreProducto": "Palito de la selva",
        "precio": 12,
        "stock": 10,
        "imagen": "palitos-de-la-selva.jpeg"
    },
    {
        "id": 3,
        "rubro": "caramelos",
        "nombreProducto": "Billiken",
        "precio": 56,
        "stock": 10,
        "imagen": "billiken.jpeg"
    },
    {
        "id": 4,
        "rubro": "Chocolates",
        "nombreProducto": "Block",
        "precio": 78,
        "stock": 10,
        "imagen": "block.jpg"
    },
    {
        "id": 5,
        "rubro": "Chocolates",
        "nombreProducto": "Milka",
        "precio": 29,
        "stock": 10,
        "imagen": "milka.jpg"
    },
    {
        "id": 6,
        "rubro": "Chocolates",
        "nombreProducto": "Toke",
        "precio": 66,
        "stock": 10,
        "imagen": "toke.jpeg"
    },
    {
        "id": 7,
        "rubro": "Electronica",
        "nombreProducto": "Cargador",
        "precio": 88,
        "stock": 10,
        "imagen": "cargador.jpg"
    },
    {
        "id": 8,
        "rubro": "Electronica",
        "nombreProducto": "Cable Usb",
        "precio": 96,
        "stock": 10,
        "imagen": "cable-usb.jpeg"
    },
    {
        "id": 9,
        "rubro": "Electronica",
        "nombreProducto": "Memoria Micro SD 32gb",
        "precio": 58,
        "stock": 10,
        "imagen": "memoria.jpg"
    },
    {
        "id": 10,
        "rubro": "Galletitas",
        "nombreProducto": "Divercion",
        "precio": 96,
        "stock": 10,
        "imagen": "divercion.jpg"
    },
    {
        "id": 11,
        "rubro":  "Galletitas",
        "nombreProducto": "Oreo",
        "precio": 88,
        "stock": 10,
        "imagen": "oreo.jpg"
    },
    {
        "id": 12,
        "rubro":  "Galletitas",
        "nombreProducto": "Don Satur",
        "precio": 13,
        "stock": 10,
        "imagen": "don-satur.jpg"
    },
    {
        "id": 13,
        "rubro":  "Lacteos",
        "nombreProducto": "Leche entera",
        "precio": 15,
        "stock": 10,
        "imagen": "leche-entera.jpg"
    },
    {
        "id": 14,
        "rubro": "Lacteos",
        "nombreProducto": "Leche descremada",
        "precio": 79,
        "stock": 10,
        "imagen": "leche-descremada.jpg"
    },
    {
        "id": 15,
        "rubro": "Lacteos",
        "nombreProducto": "Yogurt Ls Fut",
        "precio": 85,
        "stock": 10,
        "imagen": "yogur-ls-frutilla.jpg"
    },
    {
        "id": 16,
        "rubro": "Merceria",
        "nombreProducto": "Agujas Canastita",
        "precio": 63,
        "stock": 10,
        "imagen": "agujas-canastita.jpg"
    },
    {
        "id": 17,
        "rubro": "Merceria",
        "nombreProducto": "Elastico 2mts",
        "precio": 49,
        "stock": 10,
        "imagen": "elastico.jpg"
    },
    {
        "id": 18,
        "rubro": "Merceria",
        "nombreProducto": "Hilo de coser",
        "precio": 78,
        "stock": 10,
        "imagen": "hilo-coser.jpg"
    },
    {
        "id": 19,
        "rubro": "Regaleria",
        "nombreProducto": "Caja de bombones",
        "precio": 63,
        "stock": 10,
        "imagen": "caja-de-bombones.jpg"
    },
    {
        "id": 20,
        "rubro": "Regaleria",
        "nombreProducto": "Perfume mujercitas",
        "precio": 73,
        "stock": 10,
        "imagen": "perfume-mujercitas.jpg"
    },
    {
        "id": 21,
        "rubro": "Regaleria",
        "codigoInterno": 3,
        "nombreProducto": "Vino + Caja",
        "precio": 15,
        "stock": 10,
        "imagen": "vino-caja.jpg"
    },
    {
        "id": 22,
        "rubro": "Snacks",
        "nombreProducto": "Doritos",
        "precio": 91,
        "stock": 10,
        "imagen": "doritos.jpg"
    },
    {
        "id": 23,
        "rubro": "Snacks",
        "nombreProducto": "Lay's",
        "precio": 85,
        "stock": 10,
        "imagen": "lays.jpg"
    },
    {
        "id": 24,
        "rubro": "Snacks",
        "nombreProducto": "Chettos",
        "precio": 35,
        "stock": 10,
        "imagen": "cheetos.jpg"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 3000);
            
        }else{
            reject("No hay productos")
        }
        }
    )
    }
