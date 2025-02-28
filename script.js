const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlist');

let displayName = document.querySelector(".artists__name");
let artistImage = document.querySelector(".artists__img-container img");

const searchInput = document.getElementById('search-input');



searchInput.addEventListener("keyup", (element) => {
    if(element.key.startsWith("Enter")){
         feachAPI();
    }

});

async function feachAPI(){

    resultPlaylist.classList.add("hidden");
    resultArtist.classList.add("visible");

    let inputValue = await searchInput.value.trim();
    const firstName = await inputValue.charAt(0).toUpperCase() + inputValue.slice(1, inputValue.indexOf(" ")).toLowerCase();
    let lastName;

    let artistName;
if(spaceName == 0){

}
    const spaceName = inputValue.indexOf(" ");

    lastName = await inputValue.slice(spaceName + 1).toLowerCase();
    lastName = await lastName.charAt(0).toUpperCase() + lastName.slice(1);

    

    const response = await fetch(`http://localhost:3000/artists?name=${artistName}`); 
    const data = await response.json();
    displayName.textContent = data[0].name;
    artistImage.src = data[0].urlImg;
}
