const addArray = (awal, akhir) =>{
    const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu']

    stuff.unshift(awal)
    stuff.push(akhir)

    return stuff;
}

console.log(addArray('Handuk', 'Celana'))