import {
    movies
} from "../modules/db.js";

let ul = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let promo__descr = document.querySelector(".promo__descr")

let drama = document.querySelector('.drama')
let comedi = document.querySelector('.comedi')
let action = document.querySelector('.action')
let milodram = document.querySelector('.milodram')
let fantastic = document.querySelector('.fantastic')

let imdb = document.querySelector(".imdb");
let reserch = document.querySelector(".reserch");


drama.onclick = () => {

    let filteredFilm = movies.filter(props => props.Genre.includes('Drama'))

    changeFilm(filteredFilm[0])

    reload(filteredFilm)
    console.log('hi');
}
comedi.onclick = () => {

    let filteredFilm = movies.filter(props => props.Genre.includes('Comedy'))

    changeFilm(filteredFilm[0])


    reload(filteredFilm)
}
action.onclick = () => {

    let filteredFilm = movies.filter(props => props.Genre.includes('Action'))

    changeFilm(filteredFilm[0])

    reload(filteredFilm)
}
milodram.onclick = () => {

    let filteredFilm = movies.filter(props => props.Genre.includes('Adventure'))

    changeFilm(filteredFilm[0])

    reload(filteredFilm)
}
fantastic.onclick = () => {

    let filteredFilm = movies.filter(props => props.Genre.includes('Sci-Fi'))

    changeFilm(filteredFilm[0])

    reload(filteredFilm)
}



function reload(arr) {
    ul.innerHTML = ""

    arr.forEach((movie, index) => {
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = `${index + 1}. ${movie.Title}`
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.append(del)
        ul.append(li)

        li.onclick = () => {
            changeFilm(movie)
        }
    });

}
reload(movies)

let btns = document.querySelectorAll(".promo__menu-item")
function changeFilm(props) {
    promo__bg.style.backgroundImage = `url("${props.Poster}")`
    promo__genre.innerHTML = `${props.Genre};`
    promo__title.innerHTML = `${props.Title};`
    promo__descr.innerHTML = `${props.Plot}`
    imdb.innerHTML = `IMDb: ${props.imdbRating}`
    reserch.innerHTML = `Кинопоиск: ${props.Metascore}`
}

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => {
            btn.classList.remove('promo__menu-item_active')
        })
        btn.classList.add('promo__menu-item_active')
    }
    
})
