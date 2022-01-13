//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, Name){
    return drivers.filter(names => names.toLowerCase() === Name.toLowerCase())
}

function fuzzyMatch(drivers, Name){
    return drivers.filter(names => names.toLowerCase().indexOf(Name.toLowerCase()) === 0)
}
function matchName(drivers, Name){
    return drivers.filter(names => names.name === Name)
}