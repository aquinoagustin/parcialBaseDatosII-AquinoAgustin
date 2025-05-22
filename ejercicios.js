//2

db.cafesespeciales.find({ingredientes:{$eq:"chocolate"}}).count()

//3

db.cafesespeciales.find({ tipo:{$eq:"cold brew"},ingredientes:{$eq : "vainilla"}    }  ).count()

//4

db.cafesespeciales.aggregate([{$match:{intensidad:{$eq:'media'}  }}  ,{ $project:{_id:0,tipo:1,peso:1}        }])

//5

db.cafesespeciales.aggregate([{$match:{peso:{$gte:200,$lte:260}  }}  ,{ $project:{_id:0,tipo:1,peso:1,intensidad:1}  }])

//6

db.cafesespeciales.find({"tostador.localidad":/san/i},{tipo:1,peso:1,"tostador.localidad":1,_id:0}).sort({peso:-1})

//7

db.cafesespeciales.aggregate([ {$group:{_id:"$tipo",totalPeso:{$sum:"$peso"}}}  ])

//8

db.cafesespeciales.updateMany({intensidad:{$eq:'alta'}}, {$addToSet:{ingredientes:"whisky"}})

//9

db.cafesespeciales.updateMany({peso:      {$gte:200,$lte:260}},{$inc:{peso:10}}  )

//10
//db.cafesespeciales.find({peso:{$lte:210}}) -> Comprobacion antes de mandarme una cagada
db.cafesespeciales.deleteMany({peso:{$lte:210}})