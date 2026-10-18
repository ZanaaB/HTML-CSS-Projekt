function pershendetja() {
    alert("Mirë se erdhe te Learning Together! 💙");
}

function shkronjat() {
    alert("🔤 Le të mësojmë: A, B, C, Ç, D!");
}

function ngjyrat() {
    alert("🎨 E kuqe, e verdhë, e kaltër dhe e gjelbër!");
}

function numrat() {
    alert("🔢 Le të numërojmë: 1, 2, 3, 4, 5!");
}

let pike = 0;

function shfaqRezultatin(elementi, mesazhi, sakte) {
    elementi.textContent = mesazhi;
    elementi.style.color = sakte ? "#187547" : "#a52a2a";
}

function kontrollo(pergjigjja) {
    const rezultati = document.getElementById("rezultati");

    if (pergjigjja === "gjelber") {
        pike++;

        shfaqRezultatin(
            rezultati,
            "🎉 Bravo! Përgjigjja është e saktë! Pikët: " + pike,
            true
        );
    } else {
        shfaqRezultatin(
            rezultati,
            "😊 Provo përsëri! Ti mundesh! Pikët: " + pike,
            false
        );
    }
}

function kontrolloShkronjen(pergjigjja) {
    const rezultati = document.getElementById("rezultatiShkronjes");

    if (pergjigjja === "A") {
        pike++;

        shfaqRezultatin(
            rezultati,
            "🎉 Shumë mirë! E gjete shkronjën A! Pikët: " + pike,
            true
        );
    } else {
        shfaqRezultatin(
            rezultati,
            "💙 Nuk ka problem. Provo përsëri!",
            false
        );
    }
}

function kontrolloNumrin(pergjigjja) {
    const rezultati = document.getElementById("rezultatiNumrit");

    if (pergjigjja === 3) {
        pike++;

        shfaqRezultatin(
            rezultati,
            "🌟 Saktë! 2 + 1 = 3. Pikët: " + pike,
            true
        );
    } else {
        shfaqRezultatin(
            rezultati,
            "😊 Provo përsëri! Numëro edhe një herë.",
            false
        );
    }
}