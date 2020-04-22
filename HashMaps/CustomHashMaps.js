class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash = (key) => {
    let hash = 0;

    for (let i in key) {
      hash = (hash + key.charCodeAt(i)) % this.data.length;
    }

    return hash;
  };

  set = (key, value) => {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    if(this.get(key) !== undefined){
        throw Error("ELement already exists in the Hash Table")

    }

    this.data[hash].push([key, value]);
  };

  get = (key) => {
    let hash = this._hash(key);

    let bucket = this.data[hash];

    for(let i in bucket){
        
        if(bucket[i][0] === key){
            return bucket[i];
        }

    }

  };

  delete = (key) => {
    let hash = this._hash(key);
    this.data[hash] = [];
  };

  getAllKeys = () => {
    let allKeys = [];

    for (let i in this.data) {
      if (this.data[i][0] !== undefined) {
        allKeys.push(this.data[i][0][0]);
      }
    }

    return allKeys;
  };
}

const ht = new HashTable(100);

ht.set("grapes", 1);

ht.set("apples", 2);
ht.set("appls", 3);

//ht.set("grapes",10)

console.log(ht.get("grapes"));
console.log(ht.get("apples"));
console.log(ht.get("appls"));
