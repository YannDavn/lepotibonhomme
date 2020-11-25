document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chromepls").addEventListener("click", () => {
        document.getElementById("player").play();
        document.getElementById("chromepls").classList.add("itsokay");
    });

    const stopEvent = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
    }

    const openDialog = (evt) => {
        document.getElementById("credits").classList.remove("hidden");
        stopEvent(evt);
    };
    const closeDialog = (evt) => {
        if (["mentions", "modal"].includes(evt.target.id)) {
            return;
        }
        document.getElementById("credits").classList.add("hidden");
        stopEvent(evt);
    };
    document.getElementById("mentions").addEventListener("click", openDialog);
    document.addEventListener("click", closeDialog);
});
