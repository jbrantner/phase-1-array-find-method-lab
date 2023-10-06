// code your solution here


function superbowlWin(array) {
    let findWin = array.find(function(object){return object.result === "W"})
    if(findWin === undefined) {
        return undefined;
    } else {
    return findWin.year;}
}

