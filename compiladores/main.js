//Pode deletar a pasta node, para instalar novamente digitar npm install
class Users{
    constructor({email}){
        this.email = email
    }

    sendMessage(){
        console.log("Enviando mensagem para: ", this.email)
    }
}

const user = new Users({email: "email"})
user.sendMessage()
