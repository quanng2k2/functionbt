let listToDo = [];
function addToDo() {
    let valueInput = document.getElementById("input").value;
    listToDo.push(valueInput);
    hienThiDS();
}

function hienThiDS() {
    let ketqua = "";
    for (let i = 0; i < listToDo.length; i++) {
        ketqua+= `
        <tr>
            <td>
                ${listToDo[i]}  
            </td>
            <td>
                <button onclick="handleEdit(${i})">
                    edit
                </button>
            </td>
            <td>
                <button onclick="handleDelete(${i})">
                    delete
                </button>
            </td>
        </tr>
        `
    }
    document.getElementById("table").innerHTML = ketqua;
}

function handleDelete(id) {
    listToDo.splice(id,1) ;
    hienThiDS() ;
}

function handleEdit(id) {
    let x = prompt("update") ;
    listToDo[id] = x ;
    hienThiDS() ;
}

// // Set (Lưu vào localStorage) và Get (Lấy dữ liệu từ localStorage)

// // Set
// localStorage.setItem("listToDo", [1,2,3,4])

// // Get
// let getLocal = localStorage.getItem("listToDo")
// console.log(getLocal);
