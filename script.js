function hitungBMI() {
    const tinggiCm = parseFloat(document.getElementById("tinggi").value);
    const beratKg = parseFloat(document.getElementById("berat").value);
    const hasilDiv = document.getElementById("hasil");
    const interpretasiDiv = document.getElementById("interpretasi");

    if (isNaN(tinggiCm) || isNaN(beratKg) || tinggiCm <= 0 || beratKg <= 0) {
        hasilDiv.textContent = "Masukkan tinggi dan berat badan yang valid.";
        interpretasiDiv.textContent = "";
        return;
    }

    // Konversi tinggi dari cm ke meter
    const tinggiMeter = tinggiCm / 100;

    // Hitung BMI
    const bmi = beratKg / (tinggiMeter * tinggiMeter);
    const bmiBulat = bmi.toFixed(2); // Bulatkan menjadi 2 angka desimal

    // Tampilkan hasil BMI
    hasilDiv.textContent = `BMI Anda: ${bmiBulat}`;

    // Interpretasi BMI
    let interpretasi = "";
    if (bmi < 18.5) {
        interpretasi = "wkwkwkw kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretasi = "normal badan blum tentu jawa normal";
    } else if (bmi >= 25 && bmi < 30) {
        interpretasi = "wkwkw gendut ya gendut";
    } else if (bmi >= 30) {
        interpretasi = "Wkkkwwkwkwkwk katak ceri";
    }
    interpretasiDiv.textContent = interpretasi;
}