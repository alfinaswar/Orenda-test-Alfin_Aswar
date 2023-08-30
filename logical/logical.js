const isPalindrome = (x) => {
    const angkaStr = x.toString();
    const palindrom = angkaStr === angkaStr.split('').reverse().join('');
    return palindrom;
};

const angka = parseInt(prompt("Masukkan suatu bilangan bulat: "));
const palindromStatus = isPalindrome(angka);

console.log(`Apakah ${angka} merupakan bilangan palindrom? ${palindromStatus}`);
if (palindromStatus) {
    console.log(`${angka} adalah bilangan palindrom.`);
} else {
    console.log(`${angka} bukan bilangan palindrom.`);
}