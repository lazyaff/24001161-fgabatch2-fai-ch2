import { BankAccount } from "./bank_account.js";

// Inisialisasi objek BankAccount
let bankAccount = new BankAccount();

// Menambahkan event listener
document.addEventListener("click", function (event) {
    if (event.target.matches("#tambahSaldoButton")) {
        bankAccount.deposit();
    } else if (event.target.matches("#kurangiSaldoButton")) {
        bankAccount.withdraw();
    } else if (event.target.matches("#tampilkanSaldoButton")) {
        bankAccount.show();
    }
});
