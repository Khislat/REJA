//*********** TACK - E */

function getReverse(str){
    return str.split("").reverse().join("");
}
  
  
console.log(getReverse("hello"));
console.log(getReverse("MIT TACK"));




//*********** TACK - D */
function checkContent(str1,str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let arr1 = [];
    let arr2 = [];

    for(let i = 0; i < str1.length; i++) {
        arr1.push(str1[i]);
        arr2.push(str2[i]);
    }

    arr1.sort();
    arr2.sort();

    return arr1.join("") === arr2.join("")

}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("MIT22", "MIT21"));


/*
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
/*
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
*/

// ********** Task-B **************

/* B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi
*/
/*
// DEFINE
function countDigits(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
*/

// console.log("Jack Ma maslaxatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60 
// ];

// function maslaxatBering(a, callback) {
//   if(typeof a !== "number") callback("Error", null);
//   else if(a <= 20) callback(null, list[0]);
//   else if(a > 30) callback(null, list[1]);
//   else if(a > 40) callback(null, list[2]);
//   else if(a > 30) callback(null, list[3]);
//   else {
//     callback(null, list[3]);
//   }
// } 

// maslaxatBering(30, (err,data) => {
//     if(err){
//         console.log("Faqat raqam kirgazing", err);
//     }else {
//         console.log(`Jack Mani maslaxati `, data);
//     }
// });

// async function maslaxatBering(age) {
//     if(typeof age !== "number") throw new Error("Error");
//     else if( age < 20) return list[0];
//     else if( age > 30) return list[1];
//     else if( age > 40) return list[2];
//     else if( age > 50) return list[3];
//     else if( age > 60) return list[4];
//     else {
//         return list[5];
//     }
// }

// maslaxatBering("fdjsf")
// .then((data) => {
//     console.log("Javob:",data);
// })
// .catch((err) => {
//     console.log("Faqat son kirgazing",err);
// });


// async function run() {
//     let javob = await maslaxatBering(10)
//         console.log(javob)
//     javob = await maslaxatBering(70)
//         console.log(javob)
// }

// run()

// ************* Tack - C *********************

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.products = {
//             non,
//             lagmon,
//             cola,
//         };
//     }
    
   
//     time(message) {
//         const currentTime = new Date().toLocaleTimeString();
//         console.log(`${currentTime} ${message}`);
//     };
    
//     // Qoldiq
//     qoldiq() {
//         const { non, lagmon, cola } = this.products;
//         const currentTime = new Date().toLocaleTimeString();
//         return `Hozir ${currentTime} da ${non}ta non, ${lagmon}ta lagmon va ${cola}ta cola mavjud!`;
//     };
    
//     // Product sotish
//     sotish(product, soni) {
//         this.products[product] -= soni;
//         this.time(`${product}dan ${soni}ta sotildi.`);
//     };
    
//     // Product qabul qilish
//     qabul(product, soni) {
//         this.products[product] += soni;
//         this.time(`${product}dan ${soni}ta qabul qilindi.`);
//     };
    
// };
  
// const shop = new Shop(4, 5, 2);
  
// console.log(shop.qoldiq()); // Hozirgi products
// shop.sotish("non", 3); // 3ta non sotiladi
// shop.qabul("cola", 4); // 4ta cola qabul qilinadi
// console.log(shop.qoldiq()); // Qoldiq products
  

