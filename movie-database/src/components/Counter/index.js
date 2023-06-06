/* eslint-disable react-hooks/exhaustive-deps */
// Import useState untuk menggunakan State.
import { useEffect, useState } from "react";

function Counter() {
/**
   * Membuat state menggunakan useState.
   * Memberikan nilai awal: 0.
   * Mengembalikan sepasang value:
   *  - Nilai saat ini.
   *  - Fungsi mengupdate state.
   */
const [angka, setAngka] = useState(0);

/**
   * Membuat fungsi addAngka.
   * Dijalankan ketika button diklik.
   */
function addAngka() {
    // update state angka menggunakan setAngka
    setAngka(angka + 1);
}

function updateDOM() {
    console.log("Lifecycle: Dimount");

    /**
     * Melakukan side effect: access dom.
     * Mengubah title document setiap state berubah
     */
    document.title = `Hasil: ${angka}`;
}

/**
   * Menjalankan useEffect untuk melakukan side effect.
   * Digunakan untuk melakukan side effect.
   * Parameter pertama (callback): Dijalankan setelah dirender (lifecycle mount dan update).
   * Parameter kedua (array):
   *  - Digunakan untuk custom lifecycle update.
   *  - Lifecycle update hanya dijalankan ketika state di array berubah.
   */
useEffect(() => {updateDOM()}, [angka]);

console.log("Lifecycle: Dirender");

return (
    <div>
    <p>Result: {angka}</p>
      {/* Menambahkan event onClick */}
    <button onClick={addAngka}>Add</button>
    </div>
);
}

export default Counter;