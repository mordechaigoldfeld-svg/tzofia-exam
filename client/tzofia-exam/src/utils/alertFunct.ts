

export function alertMsg(alerts:[]){
    const arenas = []
    alerts.forEach((a)=>{
        if(a.priority === 'Critical'){
            arenas.push(a.arena)
        }
    })

    if(arenas.includes('North') && arenas.includes('Center') && arenas.includes('South')){

        return true
    }
    return false
}



