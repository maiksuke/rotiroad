function otsiRetsept() {
    const otsinguInput = document
        .getElementById("searchInput")
        .value.toLowerCase()
    const kategooriad = document.querySelectorAll(".kategooria") // kõik kategooriad

    kategooriad.forEach(kategooria => {
        const kaardid = kategooria.querySelectorAll(".kaart") // kategooria sees olevad kaardid
        let onKaardidNahtaval = false

        kaardid.forEach(kaart => {
            const retseptPealkiri = kaart
                .querySelector(".kaart-pealkiri")
                .textContent.toLowerCase()

            if (retseptPealkiri.includes(otsinguInput)) {
                kaart.style.display = "" // näitab kaardi
                onKaardidNahtaval = true
            } else {
                kaart.style.display = "none" // peidab kaardi
            }
        })

        if (onKaardidNahtaval) {
            kategooria.classList.remove("hidden") // näitab kategooria
        } else {
            kategooria.classList.add("hidden") // peidab kategooria
        }
    })
}
