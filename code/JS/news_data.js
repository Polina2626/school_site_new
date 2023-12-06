function sort() {
    let sort_date = document.getElementById('sort_date');
    let sort_popularity = document.getElementById('sort_popularity');
    if (sort_popularity.selected) {
        document.getElementById('node_for_insert').innerHTML = '';
        func_sort_popularity()
    }

    if (sort_date.selected) {
        document.getElementById('node_for_insert').innerHTML = '';
        func_sort_date()
    }
}



async function func_sort_popularity() {
    let responce = await fetch("../../data/news_data.json");

    let data = await responce.text();
    data = JSON.parse(data);
    data = data.splice(0, 6);


    let node_for_insert = document.getElementById("node_for_insert");

    data_popularity = data.sort((a, b) => b.likes - a.likes);

    let key;
    for (key in data_popularity) {
        node_for_insert.innerHTML += `
        <div class="col-sm-6 col-lg-4 col-xl-4 col_news">
        <div class="card">
          <img src=${data_popularity[key].img} class="card-img-top" alt="...">
          <div class="card-body">

            <p class="card-text">${data_popularity[key].title}</p>

            <div class="card_bottom d_flex align-items-end justify-content-between">
              <a href="#" class="btn btn-primary">Читать</a>

              <div class="date_likes">
              ${data_popularity[key].date}
                <div class="likes">
                ${data_popularity[key].likes}<img src="images/not_liked.svg" class="like">
                </div>
              </div>
            </div>


          </div>



        </div>

    
      </div>
        `
    }



}

// func_sort_popularity()


async function func_sort_date() {
    let responce = await fetch("../../data/news_data.json");

    let data = await responce.text();
    data = JSON.parse(data);
    data = data.splice(0, 6);


    let node_for_insert = document.getElementById("node_for_insert");


    let key;
    for (key in data) {
        data[key].day = parseInt(data[key].date.split('-')[2]);
    }

    data_date = data.sort((a, b) => b.day - a.day);


    for (key in data_date) {
        node_for_insert.innerHTML += `
        <div class="col-sm-6 col-lg-4 col-xl-4 col_news">
        <div class="card">
          <img src=${data_date[key].img} class="card-img-top" alt="...">
          <div class="card-body">

            <p class="card-text">${data_date[key].title}</p>

            <div class="card_bottom d_flex align-items-end justify-content-between">
              <a href="#" class="btn btn-primary">Читать</a>

              <div class="date_likes">
              ${data_date[key].date}
                <div class="likes">
                ${data_date[key].likes}<img src="images/not_liked.svg" class="like">
                </div>
              </div>
            </div>


          </div>



        </div>

    
      </div>
        `
    }



}

sort();
