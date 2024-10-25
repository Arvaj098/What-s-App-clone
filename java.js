const connectivityNotification = document.getElementsByClassName("connectivity-notification")[0];
connectivityNotification.classList.add("hidden");

window.addEventListener("online", () => {
    connectivityNotification.classList.add("hidden");
    console.log(connectivityNotification.classList);
    console.log("online");
});

window.addEventListener("offline", () => {
    connectivityNotification.classList.remove("hidden");
    console.log("offline");
});

const chatWindowContents = document.getElementById("chat-window-contents");
const scrollToTopButton = document.getElementsByClassName("scroll-to-top-button")[0];
const scrollToTopButtonIcon = document.getElementsByClassName("scroll-to-top-button-icon")[0];

chatWindowContents.addEventListener("scroll", (event) => {
    const scrollPositionFromTop = chatWindowContents.scrollTop;
    const scrollFromBottom = chatWindowContents.scrollHeight - scrollPositionFromTop - chatWindowContents.clientHeight;
    
    if (scrollFromBottom === 0) {
        scrollToTopButton.classList.add("shrink");
        scrollToTopButtonIcon.classList.add("shrink");
    } else {
        scrollToTopButton.classList.remove("shrink");
        scrollToTopButtonIcon.classList.remove("shrink");
    }
});

scrollToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    chatWindowContents.scrollTop = chatWindowContents.scrollHeight - chatWindowContents.clientHeight;
});
