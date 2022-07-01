function recebeArray(array = [], num) {
     try {
        array || num == undefined
     } catch {
        return ReferenceError;
     }
}
recebeArray()