function otsiRetsept(event) {
    // Takistab vormi vaikimisi esitamist
    event.preventDefault()

    // Saab otsinguvälja väärtuse ja teisendab selle väikesteks tähtedeks
    const otsinguInput = document
        .getElementById("searchInput")
        .value.toLowerCase()

    // Valib kõik elemendid, millel on klass "kategooria"
    const kategooriad = document.querySelectorAll(".kategooria")

    // Käib läbi iga "kategooria" elemendi
    kategooriad.forEach(kategooria => {
        // Valib kõik elemendid, millel on klass "kaart" praeguse "kategooria" sees
        const kaardid = kategooria.querySelectorAll(".kaart")

        // Määrab muutuja , et jälgida, kas mõni kaart on nähtav
        let onKaardidNahtaval = false

        // Käib läbi iga "kaart" elemendi
        kaardid.forEach(kaart => {
            // Saab elemendi, millel on klass "kaart-pealkiri", tekstisisu praeguse "kaart" sees ja teisendab selle väikesteks tähtedeks
            const retseptPealkiri = kaart
                .querySelector(".kaart-pealkiri")
                .textContent.toLowerCase()

            // Kontrollib, kas retsepti pealkiri sisaldab otsinguvälja väärtust
            if (retseptPealkiri.includes(otsinguInput)) {
                // Kui sisaldab, kuvab kaardi
                kaart.style.display = ""
                // Seab muutuja tõeks, mis näitab, et vähemalt üks kaart on nähtav
                onKaardidNahtaval = true
            } else {
                // Kui ei sisalda, peidab kaardi
                kaart.style.display = "none"
            }
        })

        // Kui vähemalt üks kaart on nähtav, eemaldab klassi "hidden" kategooriast
        if (onKaardidNahtaval) {
            kategooria.classList.remove("hidden")
        } else {
            // Kui ükski kaart ei ole nähtav, lisab klassi "hidden" kategooriale
            kategooria.classList.add("hidden")
        }
    })
}
