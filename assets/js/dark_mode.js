$(document).ready(function() {
    console.log("LSTHEME", localStorage.getItem("theme"))
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     console.log("darkcase", window.matchMedia('(prefers-color-scheme: dark)'))
    //     // $('[data-theme="dark"]')
    //     toggleTheme("light");
    // } else {
    //     console.log("lightcase", window.matchMedia('(prefers-color-scheme: light)'))
    //     // $('[data-theme="light"]')
    //     toggleTheme("dark"); // change this to "dark" for system theme. Right now it will always be dark.
    // }
    const mode_toggle = document.getElementById("light-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    });
});
