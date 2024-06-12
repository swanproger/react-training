var romanToInt = function () {
    const s = "MCMXCIV";
    const numbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    return s
        .split("")
        .map((num) => {
            return numbers[num];
        })
        .reduce((prev, curr, index, array) => {
            if (array[index + 1]) {
                if (array[index] < array[index + 1]) {
                    return prev;
                }
            }
            if (array[index - 1]) {
                if (array[index - 1] < array[index]) {
                    return prev + curr - array[index - 1];
                }
            }
            return prev + curr;
        }, 0);
};
console.log(romanToInt());
