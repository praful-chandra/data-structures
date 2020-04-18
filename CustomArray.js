class CustomArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(newItem){
        
        this.data[this.length] = newItem;
        this.length++;
        return this.data;
    }

    get(index){
        return this.data[index];
    }

    pop(){
    delete this.data[this.length-1];
    this.length --;
    }

    delete(index){
           let oldItem = this.data[index];

            this.shiftItems(index);

            return oldItem;
    }

    shiftItems(index){

        for(let i = index;i<this.length-1;i++){
            this.data[i] = this.data[++i];
            
        }

        delete this.data[this.length-1];
        this.length--;
    }
    
}


let arr = new CustomArray();

arr.push("lol");  
arr.push("hi");
arr.push("rofl");

console.log(arr);

arr.delete(1);
console.log(arr);

