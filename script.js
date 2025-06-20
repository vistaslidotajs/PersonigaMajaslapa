//sveiciens konsole
console.log("Sveiciens no Annas mājaslapas!");

//bridinajums ja logs tiek aizverts
window.addEventListener("beforeunload", () => {
    console.log("Paldies par apmeklējumu! Uz tikšanos!");
});
