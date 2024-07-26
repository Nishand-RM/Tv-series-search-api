document.querySelector("button").addEventListener("click", foo);
async function foo() {
    try {
        var res = document.getElementById("Text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${res}`);
        var data1 = await data.json();
        console.log(data1);
        var col_box = document.createElement("div");
        col_box.className = "col-lg-4";
        col_box.innerHTML = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${data1[0].show.image.medium}" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title"><b>Language:</b>${data1[0].show.language}</h5>
                    <h5 class="card-title"><b>Genre:</b>${data1[0].show.genres}</h5>
                    <h5 class="card-title"><b>Premiered:</b>${data1[0].show.premiered}</h5>
                    <h5 class="card-title"><b>Rating:</b>${data1[0].show.rating.average}</h5>
                    <h5 class="card-title"><b>Runtime:</b>${data1[0].show.runtime}</h5>
                    <h5 class="card-title"><b>Website:</b>${data1[0].show.officialSite}</h5>
                    <h5 class="card-title"><b>Country:</b>${data1[0].show.network.country.name}</h5>
                    <p class="card-title" style="color: black;"><b>Summary:</b>${data1[0].show.summary}</p>

                    </div>
                </div>`
        document.body.append(col_box);
    } catch (error) {
        console.log(error);
    }
}


