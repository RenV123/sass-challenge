function changeColor(color) {
    if (color === 'red') {
        document.documentElement.style.setProperty("--text-color", "#b32727");
        document.documentElement.style.setProperty("--header-color", "#ff6b6b");

        document.documentElement.style.setProperty("--background-color-error", "#350000");
        document.documentElement.style.setProperty("--background-color-warning", "#af5d00");
        document.documentElement.style.setProperty("--background-color-success", "#004105");
    } else {
        //Reinstate colors by reloading the page
        location.reload();
    }

}