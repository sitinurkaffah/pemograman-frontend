const name = "eva"

console.log(name)

const age = 20;  // number
const isMarried = false; // boolean
let xyz;  //undefined

console.log(typeof xyz);

const nama = "eva";
const hasil = `nama saya: ${nama}`;

console.log(hasil);

const nilai = "85";

/**
 * Jika nilai > 90 = A
 * Jika nilai > 80 = B
 * Jika nilai > 70 = C
 * Selain = D
 */

if (nilai > 90) {
    console.log("A");
}
else if (nilai > 80) {
    console.log("B");
}
else if (nilai > 70) {
    console.log("C");
}
else {
    console.log("D");
}

/**
 * Tampilkan  nilai 1 sampai 10
 */
for (let i = 1 ; i <= 10; i++) {
    console.log(i);
}

/**
 * Membuat fungsi hitung umur
 * Logika : Tahun Sekarang - Tahun Lahir
 */

function hitungUmur(tahunLahir) {
    const umur = 2023 - tahunLahir;
    return umur;
}

const umurAufa = hitungUmur(1997);
console.log(umurAufa);

console.log(hitungUmur(1997));
console.log(hitungUmur(2002));
console.log(hitungUmur(2003));

/**
 * Menyimpan banyak nilai hewan
 */

const animals = ["Kucing", "Anjing", "Ikan"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);     
} 

/**
 * Nama
 * Umur
 * Jenis Kelamin
 */

const eva = {
    nama: "Siti Nur Kaffah",
    umur: 19,
    jenisKelamin: "Perempuan",
};

for (label in eva) {
    console.log(label);
    console.log(eva[label]);
}
