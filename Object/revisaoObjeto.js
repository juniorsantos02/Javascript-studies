// Revisão 

const produto = new Object; 
produto.nome = 'Cadeira'; 
produto['Marca do produto'] = 'Generica'; 
produto.preco = 220; 

console.log(produto); 
delete produto.preco 
delete produto['Marca do produto']; 

console.log(produto);


