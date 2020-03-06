
function getDogImage() {
    fetch(`https://dog.ceo/api/breeds/image/random/${userInput()}`)
        .then(response => response.json())
        .then(responseJson =>
            results(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function userInput() {
    return $('.user-input').val();
}




function results(responseJson) {
    console.log(responseJson);
    let imageString = '';
    for (let i = 0; i < responseJson.message.length; i++) {
        imageString += `<img src="${responseJson.message[i]}" class="results-img">`;
    }
    $('.results').removeClass('hidden');

    $('.results-img').replaceWith(
        imageString
    );
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function () {
    watchForm();
});


function renderMainDisplay() {
    $('main').html(`
    
    <div class="container">
        <h1>Adorable Dogs</h1>
        <section>
            <form>
            <p>From 1 to 50, how many dog images do you want to see?</p>
            <input type="number" min="1" max="50" value="3" class="user-input" placeholder="number">
            <input type="submit" class="user-click" value="Click here to see cute dogs!">
        </form>
            <section class="results hidden">
        <h2>Look at this dog!</h2>
            <img src="./dog.jpg" class="results-img" alt="placeholder">
        </section>
    </div>`);

}



renderMainDisplay();


