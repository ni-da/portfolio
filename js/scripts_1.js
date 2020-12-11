// printIntegers();

function printIntegers() {
    for (let index = 1; index < 100; index++) {
        if (index % 3 == 1) {
            console.log("Open");
        } else if (index % 7 == 1) {
            console.log("Source");
        } else if (index % 3 == 1 && index % 7 == 1) {
            console.log("OpenSource");
        } else {
            console.log(index);
        }
    }
}

returnAlphaArray();

function returnAlphaArray() {
    var alphaArray = [];
    for (let index = 65; index < 65 + 26; index++) {
        alphaArray.push(String.fromCharCode(index));
    }
    return alphaArray;
}

returnIntegersSum([1, "one", "two", 2, 0, 5, '789', "456"]);

function returnIntegersSum(arrayInput) {
    var intCounter = 0;
    arrayInput.forEach(element => {
        if (typeof element == 'number') {
            intCounter++;
        }
    });
    return intCounter;
}



Array.prototype.returnIntegersSum_rec = function() {
    var arr = this;
    var filterdArray = [];
    var index = 0;
    var filterIntegers = function(arr, filterdArray) {
        if (index <= arr.length - 1) {
            if (typeof arr[index] == 'number') {
                filterdArray.push(arr[index]);
            }
            index++;
            filterIntegers(arr, filterdArray);
        } else {
            return filterdArray;
        }
    };
    filterIntegers(arr, filterdArray);
    return filterdArray.length;
}


httpGet("https://www.sap.com/belgique/index.html");

function httpGet(theUrl) {
    var response;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            response = xmlhttp.responseText;
            save("hello.txt", response.replace("SAP", "Odoo"));
            console.log(response);
            return response;
        }
    }
    xmlhttp.open("GET", theUrl);
    xmlhttp.send();
}

function save(filename, data) {
    var blob = new Blob([data], { type: 'text/csv' });
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}


function playGame() {
    for (var index = 0; index <= 51; index++) {
        if (index > 50) {} else {
            guess = parseInt((lowest + highest) / 2);
            console.log("Guess" + guess);
            let state = verify(guess);
            if (state == 1) {
                highest = guess;
            } else if (state == -1) {
                lowest = guess;
            } else if (state == 0) {
                console.log("Won!" + guess);
                break;
            }
        }
    }
}

let guess = 500000;
let highest = 1000000;
let lowest = 0;
let random = randomInt(1, 1000000);

console.log(random);
playGame(random);

// functions

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function verify(guess) {
    if (guess == random) {
        return 0;
    } else if (guess > random) {
        return 1;
    } else {
        return -1;
    }
}