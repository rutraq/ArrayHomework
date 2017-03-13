function getRandomNumber(from, to) {
    return Math.round(from + Math.random() * (to - from));
}

function generateArray(k) {
    var length = Math.round(Math.random() * k),
        arr = new Array(length);
    for (var i = 0; i < length; i++) {
        arr[i] = getRandomNumber(0, 100);
    }
    return arr;
}

function requestValidNumber(message) {
    var length;
    do {
        length = parseInt(prompt(message));
    } while (length <= 0 || isNaN(length));
    return length;
}

var data = generateArray(requestValidNumber('Введите максимальную длинну массива'));
console.log('Первоначальный массив', data);

function sort (firstArr) {
    for (var j = 0; j < firstArr.length; j++) {
        var max = firstArr[j];
        for (var i = 0; i < firstArr.length; i++) {
            if (firstArr[i] < firstArr[j]) {
                max = firstArr[j];
                firstArr[j] = firstArr[i];
                firstArr[i] = max;
            }
        }
    }
    return firstArr;
}
var newData = sort(data);
console.log('Отсортированный массив:',newData);