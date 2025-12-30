const mirrorball = document.getElementById("mirrorball");
const content = document.getElementById("content");

mirrorball.addEventListener("click", () => {
    content.innerHTML = "";
    dailyContent.forEach(item => {
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
        }
    });
});
