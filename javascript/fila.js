class Fila {

    constructor(){
        this.count = 0;
        this.lowerCount = 0 ;
        this.itens = {};
    }

    enqueue(element){
        this.itens[this.count] = element
        this.count++
    }

    isEmpty(){
        return this.size() === 0
    }

    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        const result = this.itens[this.lowerCount]
        delete this.itens[this.lowerCount]
        this.lowerCount++
        return result
    
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.itens[this.lowerCount]
    }

    clear(){
        this.itens = {}
        this.count = 0
        this.lowerCount = 0
    }

    size(){
        return this.count - this.lowerCount
    }


}

let cine = new Fila();

// Adicionando novos elementos na fila
cine.enqueue("Hermando")
cine.enqueue("Hernandes")
cine.enqueue("Lorena")

// Removendo elementos no inicio da fila
cine.dequeue()
console.log(cine.itens)

// Verificando se a fila está vazia 
console.log(cine.isEmpty())

// Olhando o tamanho da fila
console.log(cine.size())

// Olhando o primeiro elemento da fila
console.log(cine.peek())

// Removendo todos os elementos da fila
cine.clear()

// Verificando se todos os elementos foram removidos
console.log(cine.size())