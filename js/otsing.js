function otsiRetsept(event) {
    event.preventDefault()
    const otsinguInput = document
        .getElementById("searchInput")
        .value.toLowerCase()
    const kategooriad = document.querySelectorAll(".kategooria")
    kategooriad.forEach(kategooria => {
        const kaardid = kategooria.querySelectorAll(".kaart")
        let onKaardidNahtaval = false
        kaardid.forEach(kaart => {
            const retseptPealkiri = kaart
                .querySelector(".kaart-pealkiri")
                .textContent.toLowerCase()
            if (retseptPealkiri.includes(otsinguInput)) {
                kaart.style.display = ""
                onKaardidNahtaval = true
            } else {
                kaart.style.display = "none"
            }
        })
        if (onKaardidNahtaval) {
            kategooria.classList.remove("hidden")
        } else {
            kategooria.classList.add("hidden")
        }
    })
}
