# Estruturas de dados com javascript

## Estrutura de pilha (stack) :books:

Uma pilha é uma coleção de itens estruturados que obedecem o princípio LIFO (last in, first ou, ou então, o último que entra é o primeiro que sai). A adição e a remoção de novos elementos acontece do mesmo lado. O final da pilha é o topo e o final é a base.

Os dados serão inseridos e removidos sempre no topo do objeto. Para armazenar os dados da estrutura de pilha, será usado um array.

Como a pílha tem de seguir os princípios do LIFO, os métodos que essa classe de pilha serão limitadas à inserção e remoção de dados do topo do array.

São desenvolvidos os seguintes métodos na classe:

+ **Push**: Para inserir novos elementos dentro do array.
```javascript
push(element){
    this.itens.push(element)
}
```
+ **Pop**: Para remover elementos do topo do array.
```javascript
pop(){
    return this.itens.pop()
}
```
+ **Peek**: Para retornar o elemento que está no topo da pilha.
```javascript
peek(){
    return this.itens[this.itens.length - 1]
}
```
+ **isEmpty**: Este método retornarar **true** se a pilha contiver um elemento ou mais, e retornará **false** caso a pilha esteja vazia.
```javascript
isEmpty(){
    return this.itens.length === 0
}
```
+ **Clear**: Removerá todos os elementos do array.
```javascript
clear(){
    return this.itens == []
}
```
+ **Size**: Devolverá quantos elementos o array de pilha tem.
```javascript
size(){
    return this.itens.length
}
```

## Estrutura de fila (queue) :couple: :couple:

A fila é uma coleção de itens ordernada que obedece o princípio do FIFO (first in, first out, o primeiro que entra é o primeiro que sai). A adição de novos dados em uma estrutura de fila é sempre feita no final, enquanto a remoção é sempre feita no início. Um bom exemplo de fila no mundo real é a própria fila de cinema, onde a primeira pessoa da fila, é a primeira pessoa a entrar na sala, enquanto quem esta no final, precisa esperar os que estão na frente sairem primeiro.

Criaremos os seguintes contructors na classe:
Usaremos um objeto para guardar as informações da nossa fila, diferente do que foi feito com a estrutura de pilha.
A propriedade **count** servirá para ajudar a manter o controle da fila, ajudando também a adicionar novos elementos e a criar outros métodos. Já a propriedade **lowerCount** servirá para indicar qual elemento estará no topo da fila e a ajudar a remover elementos.

```javascript
class fila {
    constructor(){
        this.count = 0
        this.lowerCount = 0
        this.itens = {}
    }
}
```

São desenvolvidas as seguintes funcionalidades: 

+ **Enqueue**: Este método vai adicionar um novo elemento no final da fila.
```javascript
enqueue(element){
    this.itens[this.count] = element
    this.count++
    }
```
+ **Dequeue**: Este método vai remover o primeiro elemento da fila.  
```javascript
dequeue(){
    if(this.isEmpty()){
        return undefined
    }
    const result = this.itens[this.lowerCount]
    delete this.itens[this.lowerCount]
    this.lowerCount++
    return result
}
```
+ **Peek**: Este método irá retornar o elemento que está no inicio da fila, ou seja, o próximo elemento a ser removido.
```javascript
peek(){
    if(this.isEmpty()){
        return undefined
    }
    return this.itens[this.lowerCount]
}
```
+ **isEmpty**: Este método retornarar **true** se a fila contiver um elemento ou mais, e retornará **false** caso a fila esteja vazia.
```javascript
isEmpty(){
    return this.size() === 0 
}
```
+ **Size**: Devolverá a quantidade de elementos da fila.
```javascript
size(){
    return this.count - this.lowerCount
}
```

