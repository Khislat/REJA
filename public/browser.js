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
        console.log("Iltimos qaytadan xarakat qilin!");
    })
});
// Step 1st: User click qiladi
document.addEventListener("click", function (e) {
     console.log(e);
    //Delete operations
    // Step 2nd: Delete classi borligini tekshirish
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
    // Step 3rd:Back-endga sorov jonatish        
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            // Step 7th: Qabulqilingan sorov orqali Htmlni parent elementidan bitta element ochiradi
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan xarakat qilin!");
            })
           
        }else {
            alert("Sizning rejangiz ochirilmadi")
        }
    };



    // Edit operations
    if(e.target.classList.contains("edit-me")) {
       let userInput = prompt("O'zgartirishni kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);

       if(userInput) {
        axios
        .post("/edit-item", {id: e.target.getAttribute("data-id"), new_input: userInput})
        .then((response) => {
            if(response) {
                alert(`Siznng rejangiz ${userInput}ga ozgardi`)
            }
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;

        }).catch((err) => {
            console.log("Iltimos qaytadan xarakat qilin!");
        });
       }
    }
});


document.getElementById("clean-all").addEventListener("click", function() {
    if(confirm("Rejalarni ochirmoqchimisiz?")) {
        axios.post("/delete-all", {delete_all: true })
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
    }else {
        alert("Sizn Cancele qildingiz")
    }
    
})