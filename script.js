// select menu
let menuDaliy = document.querySelector('#daily')
let menuWeekly = document.querySelector('#weekly')
let menuMonthly = document.querySelector('#monthly')

let main = document.getElementsByTagName('main')[0]


// select choice from menu
let menuSelected = document.querySelectorAll('li')
menuSelected.forEach(selected => {
    selected.addEventListener('click', () => {
        let selectedTitle = selected.textContent.toLowerCase()
        clearData()
        removeColor()
        selected.getElementsByTagName('a')[0].style.color = 'white'
        console.log(selected.textContent.toLowerCase())
        fetchData(selectedTitle)
    })
})

// remove color from menu
let removeColor = () => {
    menuSelected.forEach(selected => {
        selected.getElementsByTagName('a')[0].style.color = 'hsl(236, 100%, 87%)'
    })
}


// clear data
let clearData = () => {
    main.innerHTML = '';
}

// fetch data
function fetchData(tf) {
    url = 'data.json';
    fetch(url)
        .then(res => res.json())
        .then(hours => {
            hours.forEach(hour => {
            if(tf=="daily") {
                main.innerHTML += `<div class="activity ${hour.title.toLowerCase().replace(/ /g, "")}">
                                        <div class="activity-data ${hour.title.toLowerCase().replace(/ /g, "")}-data">
                                        <div class="title">
                                            <p>${hour.title}</p>
                                            <p>...</p>
                                        </div>
                                        <div class="current-hr">
                                            ${hour.timeframes.daily.current}hrs
                                        </div>
                                        <div class="previous-hr">
                                            Lastday - ${hour.timeframes.daily.previous}hrs
                                        </div>
                                        </div>
                                </div>`
            } else if(tf=="weekly") {
                main.innerHTML += `<div class="activity ${hour.title.toLowerCase().replace(/ /g, "")}">
                                        <div class="activity-data ${hour.title.toLowerCase().replace(/ /g, "")}-data">
                                        <div class="title">
                                            <p>${hour.title}</p>
                                            <p>...</p>
                                        </div>
                                        <div class="current-hr">
                                            ${hour.timeframes.weekly.current}hrs
                                        </div>
                                        <div class="previous-hr">
                                            Lastweek - ${hour.timeframes.weekly.previous}hrs
                                        </div>
                                        </div>
                                </div>`
            } else {
                main.innerHTML += `<div class="activity ${hour.title.toLowerCase().replace(/ /g, "")}">
                                        <div class="activity-data ${hour.title.toLowerCase().replace(/ /g, "")}-data">
                                        <div class="title">
                                            <p>${hour.title}</p>
                                            <p>...</p>
                                        </div>
                                        <div class="current-hr">
                                            ${hour.timeframes.monthly.current}hrs
                                        </div>
                                        <div class="previous-hr">
                                            Lastmonth - ${hour.timeframes.monthly.previous}hrs
                                        </div>
                                        </div>
                                </div>`
            }            
            })
        }
    )
}


// default selected weekly when get new page
(function defaultLoadPage() {
    document.getElementsByTagName('a')[1].style.color = 'white'
    console.log(document.getElementsByTagName('a')[1])
    fetchData(tf="weekly")
})()
