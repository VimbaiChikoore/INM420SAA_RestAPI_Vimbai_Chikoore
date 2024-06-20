console.log('hello main')

async function getData(apiKey) {
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const result = await data.json();
    const image = result.hdurl;
    const title = result.title;
    const desc = result.explanation;

    
    const imageResult = document.getElementById('apod-image');
    imageResult.innerHTML = `<img src="${image}" alt="nasa image of the day">`

    const titleResult = document.getElementById('apod-title');
    titleResult.innerHTML = `<p>${title}</p>`

    const descResult = document.getElementById('apod-desc');
    descResult.innerHTML = `<p>${desc}</p>`

    // console.log(image);
}

getData('UDJekNhd6SmmV7tcA6gwtnaU7tdo5Eu1nGc4zrwv');