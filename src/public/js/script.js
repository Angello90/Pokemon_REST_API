function showPokemonDetails(image, name, japaneseName, id, description) {
    document.getElementById('detail-image').src = image;
    document.getElementById('detail-image').alt = name;
    document.getElementById('detail-name').textContent = `${name} (${japaneseName})#${id}`;
    document.getElementById('detail-description').textContent = description;
    
    document.getElementById('pokemon-details').classList.remove('hidden');
}

function hidePokemonDetails() {
    document.getElementById('pokemon-details').classList.add('hidden');
}