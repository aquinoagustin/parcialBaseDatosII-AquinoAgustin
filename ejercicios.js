//2

db.cafeteria.find({ingredientes:{$eq:"chocolate"}}).count()

//3

db.cafeteria.find({ tipo:{$eq:"cold brew"},ingredientes:{$eq : "vainilla"}    }  ).count()

//4

db.cafeteria.aggregate([{$match:{intensidad:{$eq:'media'}  }}  ,{ $project:{_id:0,tipo:1,peso:1}        }])

//5

db.cafeteria.aggregate([{$match:{peso:{$gte:200,$lte:260}  }}  ,{ $project:{_id:0,tipo:1,peso:1,intensidad:1}        }])

//6

db.cafeteria.find({"tostador.localidad":/san/i},{tipo:1,peso:1,"tostador.localidad":1,_id:0}).sort({peso:-1})