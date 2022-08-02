import MyEvent from "./MyEvent.js";

class Kitor extends MyEvent{
    constructor(){
        super()
    }
    startMoving(){
        console.log('Kitor: All Aboard!')
        this.emit('moveAlerted')
    }
}

class Karon{
    constructor(ind){
        this.karonInd = ind
        
    }
    alertPpl = () => {
        console.log(`Karon${this.karonInd}: Doors are closing`)
    }

}

const kitor = new Kitor()
const karon1 = new Karon(1)
const karon2 = new Karon(2)

kitor.on('moveAlerted', karon1.alertPpl)
kitor.on('moveAlerted', karon2.alertPpl)


kitor.startMoving()


