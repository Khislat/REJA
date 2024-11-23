/*
console.log("Jack Ma maslaxatlari");
const list = [
    "yaxshi talaba boling", // 0-20
    "togri boshliq tanlang va koproq xato qiling", // 20-30
    "uzingizga ishlashni boshlang", // 30-40
    "siz kuchli bolgan narsalarni qiling", // 40-50
    "yoshlarga investitsiya qiling", // 50-60
    "endi dam oling, foydasi yoq endi", // 60 
];

function maslaxatBering(a, callback) {
    if(typeof a !== 'number') callback("insert a number", null);
    else if(a <= 20) callback(null,list[0]);
    else if(a > 20 && a <=30) callback(null, list[1]);
    else if(a > 30 && a <=40) callback(null, list[2]);
    else if(a > 40 && a <=50) callback(null, list[3]);
    else if(a > 50 && a <=60) callback(null, list[4]);
    else {
       
        // ********** setTimeout ********
        setTimeout(function () {
            callback(null, list[5]);
        }, 5000);
        
        /*
        //*********** setInterval ********
        setInterval(function () {
            callback(null, list[5]);
        }, 1000) 
       */
    //}
//}


// console.log("passed here 0");
// maslaxatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('javob:', data);
//     }
// });

// console.log("passed here 1");



// ************* Asyncronus Function **************
// Defination
/*
async function maslaxatBering(a) {
    if(typeof a !== "number") throw new Error("insert a number");
    else if (a <= 20) return list [0];
    else if (a > 20 && a <= 30) return list [1];
    else if (a > 30 && a <= 40) return list [2];
    else if (a > 40 && a <= 50) return list [3];
    else if (a > 50 && a <= 60) return list [4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve (list[5]);
            },5000);
        });
    }
}
*/

/*
//call via then/catch
console.log("passed here 0");
maslaxatBering(30)
    .then((data) => {
        console.log("javob:", data);
    })
    .catch((err) => {
        console.log("ERROR:",err);
    });
console.log("passed here 1");

/*
// call via async/await
async function run() {
    let javob = await maslaxatBering(20);
    console.log(javob);
    javob = await maslaxatBering(65);
    console.log(javob);
    javob = await maslaxatBering(41);
    console.log(javob);
}
run();
*/

// *********** Task *************
/*
function countLetter(letter, word) {
    let countLetter = 0;

    for (let i = 0; i <= word.length; i++ ) {
        if (word[i] === letter) {
            countLetter++;
        }
    }
    return countLetter++;
}
const letters = countLetter("s", "possession");
console.log(`Bu so'zda "s" xarifi ${letters} ta `);
*/
/*
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

greet("Alice", () => {
    console.log("This is a synchronous callback.");
});
*/
/*
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from the server.");
        callback();
    }, 5000); // 2 soniya kechikish
}

fetchData(() => {
    console.log("This is an asynchronous callback.");
});
*/

// DEFINE
function qoldiqQaytar (a, b , callback) {
   if ( b === 0) {
    callback("Error", null);
   }else {
    const c = a % b;
    callback(null, c);
   }
};

qoldiqQaytar (10, 3, (err,data) => {
    if(err){
        console.log("Error:", err);
    }else {
        console.log("Qoldiq:", data);
    }
})