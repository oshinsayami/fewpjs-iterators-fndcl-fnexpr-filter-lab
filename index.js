// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(n => 
        n.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string){
    return drivers.filter ( n =>
        n.charAt(0) === string.charAt(0)
        )
}

function matchName(drivers, string){
    return drivers.filter ( n =>
        n.name === string)
}

