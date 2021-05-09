export const emptyCheck = (value : String) => {
    if(value == '' || value == null){
        return false;
    }
    return true;
}