console.log("Succefully added index.js to the project");

function sum(x, y) {
    
    console.log("function has been called");
    return x + y;
}

function getParams() {
    let x = Number(document.getElementById('x').value);
    let y = Number(document.getElementById('y').value);
    let result = document.getElementById('result')
    let error = document.getElementById('error_message');
    
    if (typeof x !== 'number' || typeof y !== 'number') {
        error.innerText = "Please provide correct data type";
        throw new Error("Please provide correct data type")
    } else {
        result.innerText = sum(x, y);
    }
    
}