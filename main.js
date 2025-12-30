const mirrorball = document.getElementById("mirrorball");
const content = document.getElementById("content");

mirrorball.addEventListener("click", () => {
    let i = 0;
    content.innerHTML = "";

    function showNext() {
        if (i >= dailyContent.length) return; // fine dell’array

        const item = dailyContent[i];
        content.innerHTML = ""; // cancella il precedente

        if(item.type === "text") {
            const p = document.createElement("p");
            p.textContent = item.data;
            content.appendChild(p);
        }

        if(item.type === "audio") {
            const audio = document.createElement("audio");
            audio.src = item.data;
            audio.controls = true;
            content.appendChild(audio);
            audio.play().catch(err => {
                console.log("Audio bloccato dall’autoplay, fai click sul player");
            });
        }

        i++;
        setTimeout(showNext, 3000); // cambia contenuto ogni 3 secondi
    }

    showNext();
});
