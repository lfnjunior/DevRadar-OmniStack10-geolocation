module.exports = function parseStringAsArray(stringAsArray, separetedBy){
    return stringAsArray.split(separetedBy).map(tech => stringAsArray.trim())
}