use cafeteria
db.cafesespeciales.insertOne(
    {
        tipo:"espresso",
        ingredientes:["vainilla-canela"],
        peso:300,
        intensidad:"bajo",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:false,
        tostador:{localidad:"avellaneda",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne( 
        {
        tipo:"filtrado",
        ingredientes:["vainilla-canela","chocolate"],
        peso:780,
        intensidad:"media",
        precio:[
            {tipo:"efectivo",precio:400},
            {tipo:"tarjeta",precio:401}
        ],
        contieneLeche:true,
        tostador:{localidad:"avellaneda",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"cold brew",
        ingredientes:["caramelo","chocolate"],
        peso:356,
        intensidad:"alta",
        precio:[
            {tipo:"efectivo",precio:400},
            {tipo:"tarjeta",precio:500}
        ],
        contieneLeche:false,
        tostador:{localidad:"quilmes",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"descafeinado",
        ingredientes:["vainilla-canela"],
        peso:150,
        intensidad:"alta",
        precio:[
            {tipo:"efectivo",precio:400},
            {tipo:"tarjeta",precio:410}
        ],
        contieneLeche:true,
        tostador:{localidad:"barracas",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["vainilla-canela"],
        peso:800,
        intensidad:"media",
        precio:[
            {tipo:"efectivo",precio:400},
            {tipo:"tarjeta",precio:430}
        ],
        contieneLeche:false,
        tostador:{localidad:"dock-sud",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["vainilla-canela","chocolate"],
        peso:670,
        intensidad:"alta",
        precio:[
            {tipo:"efectivo",precio:400},
            {tipo:"tarjeta",precio:500}
        ],
        contieneLeche:true,
        tostador:{localidad:"barracas",nombre:"alsdkjlasdj",cuit:"21120224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["chocolate","caramelo"],
        peso:100,
        intensidad:"bajo",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:false,
        tostador:{localidad:"tigre",nombre:"local",cuit:"1115234354"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["chocolate"],
        peso:407,
        intensidad:"media",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:true,
        tostador:{localidad:"avellaneda",nombre:"miscafeterias",cuit:"210224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["con leche"],
        peso:305,
        intensidad:"alta",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:true,
        tostador:{localidad:"quilmes",nombre:"cafeteriaaaa",cuit:"20224224"}
    })
db.cafesespeciales.insertOne(
        {
        tipo:"espresso",
        ingredientes:["ninguno"],
        peso:10000,
        intensidad:"media",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:false,
        tostador:{localidad:"san justo",nombre:"AAAAAAA",cuit:"3045545687"}
    }
)
db.cafesespeciales.insertOne(
        {
        tipo:"cold brew",
        ingredientes:["vainilla"],
        peso:10000,
        intensidad:"bajo",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:true,
        tostador:{localidad:"san jose",nombre:"asdasddsa",cuit:"3045545687"}
    }
),
db.cafesespeciales.insertOne(
        {
        tipo:"cold brew",
        ingredientes:["vainilla"],
        peso:250,
        intensidad:"bajo",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:false,
        tostador:{localidad:"san pedro",nombre:"HOLA",cuit:"30545687"}
    }
)
db.cafesespeciales.insertOne(
        {
        tipo:"cold brew",
        ingredientes:["vainilla"],
        peso:250,
        intensidad:"bajo",
        precio:[
            {tipo:"efectivo",precio:400}
        ],
        contieneLeche:false,
        tostador:{localidad:"santos",nombre:"HOLA",cuit:"30545687"}
    }
)