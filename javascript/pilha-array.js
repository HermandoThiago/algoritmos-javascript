class Stack {

    constructor(){
        this.itens = []
    }

    push(element){
        return this.itens.push(element)
    }

    pop(){
        return this.itens.pop()
    }

    peek(){
        return this.itens[this.itens.length - 1]
    }

    isEmpty(){
        return this.itens.length === 0
    }

    size(){
        return this.itens.length
    }

}


let books = new Stack()

// Adicionado novos elementos
books.push("A divina comédia")
books.push("Viagem ao centro da terra")
books.push("O Hobbit")

// Retornando o elemento no final da pilha
console.log(books.peek())

// Removendo elemento do topo da pilha
console.log(books.pop())

// Elemento no topo da pilha após a remoção
console.log(books.peek())

// Verificando se a pilha é vazia
console.log(books.isEmpty())

// Retornando a quantidade de elementos no array
console.log(books.size())
