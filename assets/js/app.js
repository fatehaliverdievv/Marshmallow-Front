let list = document.querySelector("#films-container")

fetch('https://api.tvmaze.com/shows')
.then(res=>res.json()).then(arr => {
    for (let i = 0; i < 32; i++) {
        list.innerHTML += `<div class="col-md-3">
                <div class="card border border-0" style="width: 16rem; margin-bottom:30px; color:white;">
                    <img src="${arr[i].image.medium}" class="card-img-top ">
                    <div style="background-color:rgb(128, 30, 30)">
                    <div class="card-body">
                      <h5 class="card-title">${arr[i].name}</h5>
                      <p class="card-text">${arr[i].rating.average}</p>
                      <a href="moreinfo.html?${arr[i].id}" class="btn btn-outline-light">More info</a>
                    </div>
                    </div>
                  </div>
            </div>`
    }
})  