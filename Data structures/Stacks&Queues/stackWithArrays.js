class Stack{
    constructor(){
        this.data = [];
    }
    push(data){
        this.data.push(data);
    }
    pop(){
        this.data.pop();
    }
    peek(){
        return this.data[this.data.length - 1];
    }
    printStack(){
        console.log(this.data);
        
    }
}

let st = new Stack();

st.printStack();

st.push(1)
st.push(2)
st.printStack();
st.pop();
st.printStack();
