var pessoa = '{"nome:":"João":"idade":65}'

console.log(typeof(pessoa))

var pessoa_Obj = JSON.parse(pessoa)

console.log("tipo de variavel Antes do parse:",typeof(pessoa_obj))

var pessoa_Obj = JSON.parse(pessoa)

var idade = pessoa_Obj.idade

console.log("Idade Depois do parse:",idade)