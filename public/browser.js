console.log("FrontEnd JS ishga tushdi");

let creatField = document.getElementById("create-field");

function itemTemplate(item) {
    return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between" >
                    <span class="item-text">${item.reja}</span>
                    <div>
                        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                            Ozgartirish
                        </button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm mr-1">Ochirish</button>
                    </div>
                </li>`;
}

// Step 1st: User formda submitni bosdi va function ishga tushdi
document.getElementById("create-form").addEventListener("submit" , function(e) {
    e.preventDefault();
//Step 2nd: Formning inputiga yozilgan malumotni olib uning qiymatini reja nomi orqali Axios yordamida backendga request jonatib
// kutuv amalga oshiriladi
    axios
    .post("/create-item", {reja: creatField.value})
// Step 6th: Back-enddan kelgan malumotni royhatning oxiriga qoshdi   
    .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        
        creatField.value = "";
        creatField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan xarakat qilin!")
    })
});
