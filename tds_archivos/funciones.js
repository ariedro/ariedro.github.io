function miniest(nombre) {
    if (nombre.value.length == 0) {
        alert('Ingrese el nick del personaje');
        nombre.focus();
        return false;
    }
    var checkOK = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "abcdefghijklmnñopqrstuvwxyz ";
    var checkStr = nombre.value;
    var allValid = true;
    for (i = 0; i < checkStr.length; i++) {
        ch = checkStr.charAt(i);
        for (j = 0; j < checkOK.length; j++)
            if (ch == checkOK.charAt(j))
                break;
        if (j == checkOK.length) {
            allValid = false;
            break;
        }
    }
}