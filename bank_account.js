// membuat class BankAccount
export class BankAccount {
    // constructor
    constructor() {
        this.saldo = 0;
    }

    // menambah saldo
    deposit() {
        // Meminta input dari pengguna
        let jumlah = window.prompt(
            "Masukkan jumlah saldo yang ingin ditambahkan:",
            "0"
        );
        // Mengkonversi input ke angka dan menambahkannya ke saldo
        if (jumlah !== null) {
            jumlah = parseFloat(jumlah);
            if (!isNaN(jumlah) && jumlah > 0) {
                this.saldo += jumlah;
                // Menampilkan saldo baru
                alert(
                    "Saldo berhasil ditambahkan. Saldo baru Anda adalah: " +
                        this.saldo
                );
            } else {
                alert("Input tidak valid. Silakan masukkan angka yang valid.");
            }
        }
    }

    // mengurangi saldo
    withdraw() {
        // Meminta input dari pengguna
        let jumlah = window.prompt(
            "Masukkan jumlah saldo yang ingin dikurangi:",
            "0"
        );
        // Mengkonversi input ke angka dan menguranginya dari saldo
        if (jumlah !== null) {
            jumlah = parseFloat(jumlah);
            if (!isNaN(jumlah) && jumlah > 0 && jumlah <= this.saldo) {
                this.saldo -= jumlah;
                // Menampilkan saldo baru
                alert(
                    "Saldo berhasil dikurangi. Saldo baru Anda adalah: " +
                        this.saldo
                );
            } else if (jumlah > this.saldo) {
                alert("Saldo tidak mencukupi.");
            } else {
                alert("Input tidak valid. Silakan masukkan angka yang valid.");
            }
        }
    }

    // menampilkan saldo
    show() {
        alert("Saldo Anda saat ini adalah: " + this.saldo);
    }
}
