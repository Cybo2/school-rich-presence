let socket = new WebSocket("ws://localhost:6821");
let url = window.location.href.split("brightspace.com")[1].toLowerCase();

socket.addEventListener("open", (event) => {
    if (url == "/d2l/home") {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing school homepage",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url == "/d2l/le/worktodo/view") {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing work to do",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/le/calendar") && url.match("/event/")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing calendar event",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/le/calendar/")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing school calendar",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url != "/d2l/home" && url.match("/d2l/home/")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class homepage",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/le/sequencelauncher/") && url.match("/view")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class content",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/le/") && url.match("/discussions/list")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class discussions",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/dropbox/user/folder_submit_files.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class assignment",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/dropbox/user/folders_list.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class assignments",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/quizzing/user/quizzes_list.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class quizzes",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/grades/my_grades/main.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class grades",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/le/userprogress/")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing class progress",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/quizzing/user/quiz_summary.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing quiz",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lms/quizzing/user/attempt/quiz_start_frame_auto.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Taking quiz",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/awards/") && url.match("/#/myawards")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Viewing awards",
                largeImageKey: "brightspace-logo"
            }
        }));
    } else if (url.match("/d2l/lp/profile/profile_edit.d2l")) {
        socket.send(JSON.stringify({
            command: "set-presence",
            data: {
                details: "Brightspace",
                state: "Editing profile",
                largeImageKey: "brightspace-logo"
            }
        }));
    };
});
