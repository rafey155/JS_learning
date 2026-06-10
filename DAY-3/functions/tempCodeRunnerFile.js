function makeTea(teaType){
    return `making${teaType}`
}

function processTea(teaProcessing){
    return processTea(makeTea)
}

console.log(processTea("chai"))