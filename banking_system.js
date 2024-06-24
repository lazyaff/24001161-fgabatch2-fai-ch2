import("./bank_account.js").then((module) => {
    // Inisialisasi objek BankAccount
    let bankAccount = new module.BankAccount();

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
});
