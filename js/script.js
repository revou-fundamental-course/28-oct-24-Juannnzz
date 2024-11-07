function calculateBMI() {
    // Ambil nilai dari input form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; 
    const age = parseFloat(document.getElementById('age').value);

    // Cek apakah semua field sudah terisi
    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Semua kolom harus diisi dengan benar!");
        return; 
    }
    
    // Hitung BMI
    const bmi = weight / (height * height);

    // Logic kategori BMI dan deskripsi
    let category;
    let description;
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        description = "Anda perlu menambah berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (ideal)";
        description = "Berat badan Anda ideal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Kelebihan berat badan";
        description = "Anda perlu menurunkan berat badan.";
    } else {
        category = "Kegemukan (Obesitas)";
        description = "Anda sangat perlu menurunkan berat badan.";
    }

    // Tampilkan hasil
    document.getElementById('header').style.display = 'none';
    document.getElementById('bmi-value').textContent = bmi.toFixed(1);
    document.getElementById('bmi-category').textContent = category;
    document.getElementById('bmi-description').textContent = description;

    // Sembunyikan kalkulator dan tampilkan hasil
    document.querySelector('.bmi-calculator').style.display = 'none';
    document.getElementById('bmiResultPage').style.display = 'block';

    // Ke halaman hasil
    document.getElementById('bmiResultPage').scrollIntoView({ behavior: 'smooth' });
}

function backToCalculator() {
    // Tampilkan kembali kalkulator dan sembunyikan hasil
    document.querySelector('.bmi-calculator').style.display = 'block';
    document.getElementById('bmiResultPage').style.display = 'none';

    document.getElementById('header').style.display = 'block';

    document.getElementById('bmiForm').reset();
}