function one() {
    var a = 2;

    function two() {
        var b = 3;
        return a + b;
    }
    console.log(two());
    return two;
}

one();