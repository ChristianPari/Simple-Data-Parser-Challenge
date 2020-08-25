// Way 1: Defined and worked within the readFile method
/*
This method is using async but has nesting callbacks which is NOT GOOD!
It worked but it's messy code and not something to do!
*/
// const fs = require("fs");

// fs.readFile("rawData.txt", (err, data) => {

//     if (err === null) {

//         const arrayData = data.toString().split("\r\n");

//         const twoDimArray = createNestedArray(arrayData);

//         const dataObject = createObject(twoDimArray);

//         const stringifiedData = JSON.stringify(dataObject);

//         fs.writeFile("formattedData.txt", stringifiedData, (err) => {

//             if (err === null) {

//                 console.log("File 'formattedData.txt' was written successfully!\n\nThis file contains: ");
//                 console.log(fs.readFileSync("formattedData.txt", "utf8"));

//             } else {

//                 console.log("Error in write file:\n", err);

//             }

//         });

//     } else {

//         console.log("Error in read file:\n", err);

//     }

// })

// function createNestedArray(array) {

//     const nestedArray = [];

//     for (let a = 0; a < array.length; a += 2) {

//         const state = array[a];
//         const num = array[a + 1];
//         const newData = [state, num];

//         nestedArray.push(newData);

//     }

//     const sortedArray = sortArray(nestedArray);

//     return sortedArray;

// }

// function sortArray(array) {

//     const sorted = array.sort((a, b) => {

//         return b[1] - a[1]

//     })

//     return sorted

// }

// function createObject(array) {

//     const dataObj = {};

//     array.forEach(elm => {

//         dataObj[elm[0]] = elm[1];

//     });

//     return dataObj;

// }

// Way 2: Globally defined
// This way is cleaner and uses sync 

const fs = require("fs");

const arrayData = fs.readFileSync("rawData.txt", "utf8").split("\r\n");

const twoDimArray = createNestedArray(arrayData);

const dataObject = createObject(twoDimArray);

const stringifiedData = JSON.stringify(dataObject);

fs.writeFile("formattedData.txt", stringifiedData, (err) => {

    if (err === null) {

        console.log("File 'formattedData.txt' was written successfully!\n\nThis file contains: ");
        console.log(fs.readFileSync("formattedData.txt", "utf8"));

    } else {

        console.log("Error in write file:\n", err);

    }

});

function createNestedArray(array) {

    const nestedArray = [];

    for (let a = 0; a < array.length; a += 2) {

        const state = array[a];
        const num = array[a + 1];
        const newData = [state, num];

        nestedArray.push(newData);

    }

    const sortedArray = sortArray(nestedArray);

    return sortedArray;

}

function sortArray(array) {

    const sorted = array.sort((a, b) => {

        return b[1] - a[1]

    })

    return sorted;

}

function createObject(array) {

    const dataObj = {};

    array.forEach(elm => {

        dataObj[elm[0]] = elm[1];

    });

    return dataObj;

}