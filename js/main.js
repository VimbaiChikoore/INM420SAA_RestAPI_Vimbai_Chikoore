console.log('hello main')

async function getData(apiKey) {
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const result = await data.json();
    const image = result.hdurl;
    const title = result.title;
    const expl = result.explanation;

    // Place daily image
    const imageResult = document.getElementById('apod-image');
    imageResult.innerHTML = `<img src="${image}" alt="nasa image of the day">`
    // Place image title
    const titleResult = document.getElementById('apod-title');
    titleResult.innerHTML = `<p>${title}</p>`
    // Place image explanation
    const explResult = document.getElementById('apod-expl');
    explResult.innerHTML = `<p>${expl}</p>`
}

getData('UDJekNhd6SmmV7tcA6gwtnaU7tdo5Eu1nGc4zrwv');