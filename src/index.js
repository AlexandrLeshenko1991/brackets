module.exports = function check(str, bracketsConfig) {
    let patrn = bracketsConfig.map(i=>i.join(''))
    let result = str;

    let nArr = [true]

    while (nArr.includes(true) && result.length){
        for (let i = 0; i < patrn.length; i++ ){
            result = result.replace(patrn[i],'')
        }
        nArr = patrn.map(p=>{
            if (result.indexOf(p) < 0) {
                return false
            }else {
                return true
            }
        })
    }

    return !result

}
