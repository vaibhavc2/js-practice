document.getElementById('google').addEventListener("click", () => {
    // window.location = "https://www.google.com";
    window.open('https://www.google.com', '_blank');
});

document.getElementById('facebook').addEventListener("click", () => {
    // window.location = "https://www.facebook.com";
    window.open('https://www.facebook.com', '_blank');
});

document.getElementById('twitter').addEventListener("click", () => {
    // window.location = "https://www.twitter.com";
    window.open('https://www.twitter.com', '_blank');
});


const fetchContent = async (url) => {
    const content = await fetch(url);
    let a = await content.json();
    return a;
}


// setInterval(() => {
//     const api_url = 'https://jsonplaceholder.typicode.com/todos/1';
//     console.log(fetchContent(api_url));
// }, 2000);


// glowing bulb
let cnt = 0;
const click_bulb = document.getElementById('click-bulb');

click_bulb.addEventListener('click', () => {
    ++cnt;
    if(cnt%2 != 0) {
        click_bulb.style.backgroundColor = 'yellow';
        click_bulb.style.color = 'blue';
    }
    else {
        click_bulb.style.backgroundColor = 'gray';
        click_bulb.style.color = 'black';
    }
});


// Continuously glowing bulb
setInterval(async () => {
    document.querySelector('#bulb').classList.toggle('bulb');
}, 500);



// Joke
const joke_url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&amount=10';
const fetchJokes = async () => {
    let jokes_content = await fetch(joke_url);
    const jokes_array = await jokes_content.json();
    for(Joke of jokes_array.jokes) {
        console.log(Joke.joke);
        document.getElementById('joke').innerText = Joke.joke;
        setTimeout(() => {}, 2000); // timer to wait
    }
}

fetchJokes();
setInterval(fetchJokes, 20000);



// Clock
let hours, mins, secs;
const date_div = document.getElementById('date');
setInterval(() => {
    const date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    date_div.innerText = `${hours} : ${mins} : ${secs}`;
}, 1000);