class Worker {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
   getName() {
    return this.name;
   } 

   getId() {
    return this.id;
   }

   getEmail() {
    return this.email;
   }

   getrole() {
    return Worker;
   }
}
module.exports = Worker;