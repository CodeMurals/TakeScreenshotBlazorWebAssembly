
function Takeshot() {
    let div =
        document.getElementById('screenshotContainer');

    html2canvas(div).then(
        function (canvas) {
            document
                .getElementById('output')
                .appendChild(canvas);
        });
}

function DownloadImg() {
    html2canvas(document.querySelector("#output")).then(canvas => {
        saveAs(canvas.toDataURL(), 'screenshot.png');
    });
}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}