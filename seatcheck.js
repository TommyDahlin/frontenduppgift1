
function clickedSeats(){
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0 ; i < checkboxes.length; i++) {
        arr.push(checkboxes[i].id)
        console.log(arr[i])
    }

    localStorage.setItem('seatsarray', JSON.stringify(arr));
    alert(arr.toString());
}
    const ul = document.getElementById('unordered-list');
    const seatArray = JSON.parse(localStorage.getItem('seatsarray'));

    console.log(seatArray)
        seatArray.forEach(element => {
    

         const li = document.createElement('li');

         li.innerHTML = element;

         ul.appendChild(li);
        });
