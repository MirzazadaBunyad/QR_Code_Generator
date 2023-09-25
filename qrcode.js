const button = document.querySelector(".button");

button.addEventListener("click", () => {
    const qrCode = document.querySelector(".qr-code");
    let user_input = document.querySelector("#input_text");

    if (user_input.value !== "") {
        if (qrCode.childElementCount === 0) {
            generate(user_input, qrCode);
        } else {
            qrCode.innerHTML = "";
            generate(user_input, qrCode);
        }
    } else {
        qrCode.style.display = "none";
    }
});

function generate(user_input, qrCode) {
    qrCode.style.display = "";

    let qr_Code = new QRCode(qrCode, {
        text: `${user_input.value}`,
        width: 160,
        height: 160,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H
    });

    let download = document.createElement("button");
    qrCode.appendChild(download);

    let downLink = document.createElement("a");
    downLink.innerHTML = "Download";
    downLink.setAttribute("download", "qr-code.png");
    download.appendChild(downLink);

    let qrCodeImage = document.querySelector(".qr-code img");
    let qrCodeCanvas = document.querySelector("canvas");

    if (qrCodeImage.getAttribute("src") === null) {
        setTimeout(() => {
            downLink.setAttribute("href", `${qrCodeCanvas.toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            downLink.setAttribute("href", `${qrCodeImage.getAttribute("src")}`);
        }, 300);
    }
}
