class MyEvent{
    constructor(){
        this.listeners ={}
    }

    on(type, listener){
        if (!this.listeners[type]){
            this.listeners[type] = [listener]
        }else{
            this.listeners[type].push(listener)
        }
    }

    emit(type, ...args){
        
        for(let i=0; i< this.listeners[type].length; i++){
            this.listeners[type][i](args);
            
            
        }
    }
}

export default MyEvent;





