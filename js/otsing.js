function otsiRetsept(event) {
    event.preventDefault()
    const otsinguInput = document
        .getElementById("searchInput")
        .value.toLowerCase()
    const kategooriad = document.querySelectorAll(".kategooria") // Kõik kategooriad
    kategooriad.forEach(kategooria => {
        const kaardid = kategooria.querySelectorAll(".kaart") // Kategooria sees olevad kaardid
        let onKaardidNahtaval = false
        kaardid.forEach(kaart => {
            const retseptPealkiri = kaart
                .querySelector(".kaart-pealkiri")
                .textContent.toLowerCase()
            if (retseptPealkiri.includes(otsinguInput)) {
                kaart.style.display = "" // Kuvab kaardi
                onKaardidNahtaval = true
            } else {
                kaart.style.display = "none" // Peidab kaardi
            }
        })
        // Peida või kuva kategooria sõltuvalt nähtavatest kaartidest
        if (onKaardidNahtaval) {
            kategooria.classList.remove("hidden") // Kuvab kategooria
        } else {
            kategooria.classList.add("hidden") // Peidab kategooria
        }
    })
}
