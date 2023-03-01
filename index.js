
// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    if(name == "ArrowLeft") {
    console.log(`Gauche`)};
    if(name == "ArrowRight") {
    console.log(`Droite`)}
    if(name == " ") {
    console.log(`Tire`)}
});