// // const req = {
// //     body: {
// //         name: "eva",
// //         age: 18,
// //         major : "Informatics",
// //     },
// // };

// //Detructing object
// const {age, name } = req.body;

// console.log(age, name);

// /**
//  * Membuat array family. Terdiri dari :
//  * - Suami : Michael
//  * - Istri : Hannah
//  * - Anak : Jonas 
//  */
// // const family = ["Michael", "Hannah", "Jonas"];

// //Detructing array
// // const [suami, istri, son] = family;

// // console.log(suami, istri, son);

// /**
//  * Membuat fungsi sum
//  * Menjumlahkan semua bilangan
//  * Fungsi memiliki 2 parameter
//  */

// function sum(... numbers) {
//     let hasil = 0; // 1, 3, 6, 10, 15

//     for (let i = 0; i < numbers.length; i++) {
//         hasil = hasil + numbers[i];
//     }

//     console.log(hasil);
// }

// sum(1, 2, 3, 4, 5);


// const family = ["Michael", "Hannah"];

// //copy array family
// const newFamily = [...family, "Jonas", "Martha"];

// console.log(newFamily);

// // const names = ["eva", "putri", "nana"];

// //method forEach untuk looping array
// // names.forEach(function (nama) {
// // console.log(nama);
// // });

// const names = ["eva", "salma", "ica"];

// /**
//  * Ubah nama menjadi awalan Mr/Mrs
//  */

// const namaFormat = names.map(function (nama) {
//     return `Mr/Mrs ${nama};`
// });

// console.log(names);
// console.log(namaFormat);

const users = [
    {
        name: "Hannah",
        age: 20,
    },
    {
        name: "Putra",
        age: 30,
    },
    {
        name: "Michael",
        age: 50,
    },
];

const userDewasa = users.filter(function (user) {
    return user.age > 21
});

console.log (userDewasa);

function download() {
    const hasilDownload = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Download");
        }, 3000);
    })
    return hasilDownload;
}

async function main()
