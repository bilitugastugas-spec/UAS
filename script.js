function cekJawaban() {
    let skor = 0;

    const jawabanBenar = {
        q1: "b",
        q2: "c",
        q3: "c",
        q4: "c",
        q5: "c"
    };

    for (let key in jawabanBenar) {
        const jawaban = document.querySelector(`input[name="${key}"]:checked`);
        if (jawaban && jawaban.value === jawabanBenar[key]) {
            skor += 20;
        }
    }

    const hasil = document.getElementById("hasil");

    if (skor >= 70) {
        hasil.innerHTML = `Skor Anda: ${skor}<br>✅ LULUS`;
        hasil.style.color = "#00ff99";
    } else {
        hasil.innerHTML = `Skor Anda: ${skor}<br>❌ TIDAK LULUS`;
        hasil.style.color = "#ff4d4d";
    }
}

function resetKuis() {
    document.getElementById("quizForm").reset();
    document.getElementById("hasil").innerHTML = "";
}