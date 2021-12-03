//if (!window.location.host.match("bongo")) return;

window.addEventListener("load", (event) => {
    console.log("loaded");
    let socket = new WebSocket("ws://localhost:6821");

    socket.addEventListener("open", (event) => {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Bongo",
                state: "Watching a live session",
                largeImageKey: "bongo-circle-blue"
            }
        }));
        let content_title_header_interval = setInterval(() => {
            if (!document.getElementsByClassName("content-title-header")[0]) return;
            if (document.getElementsByClassName("content-title-header")[0].innerText.toLowerCase() == "meeting recording") {
                socket.send(JSON.stringify({
                    command: "set-presence",
                    data: {
                        details: "Bongo",
                        state: "Watching a session recording",
                        largeImageKey: "bongo-circle-blue"
                    }
                }));
            };
            clearInterval(content_title_header_interval);
        }, 500);
    });
});
