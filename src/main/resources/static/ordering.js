let purchases = [];
let validation = [];


function buyTicket(){
    const movie = document.getElementById("movie").value;
    const ticketNumber = Number(document.getElementById("ticketNr").value);
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const phoneNr = document.getElementById("phoneNr").value;
    const email = document.getElementById("email").value;


    //Resetting the error messages
    document.getElementById("movieCheck").innerText = "";
    document.getElementById("ticketNrCheck").innerText = "";
    document.getElementById("fNameCheck").innerText = "";
    document.getElementById("lNameCheck").innerText = "";
    document.getElementById("phoneNrCheck").innerText = "";
    document.getElementById("emailCheck").innerText = "";
    let valid = true;


    //Long validation of all inputs :(
    if (movie === "Select a movie") {
        document.getElementById("movieCheck").innerText = "Select a movie";
        document.getElementById("movie").value = "Select a movie";
        valid = false;
    }

    if (isNaN(ticketNumber) ){
        document.getElementById("ticketNrCheck").innerText = "Number of tickets is invalid";
        document.getElementById("ticketNr").value = "0";
        valid = false;
    }else if(!Number.isInteger(ticketNumber) || ticketNumber <= 0){
        document.getElementById("ticketNrCheck").innerText = "Number of tickets is to small or not a whole number";
        document.getElementById("ticketNr").value = "0";
        valid = false;
    }

    if (fName === ""){
        document.getElementById("fNameCheck").innerText = "First name cannot be empty";
        document.getElementById("fName").value = "";
        valid = false;
    }

    if (lName === ""){
        document.getElementById("lNameCheck").innerText = "Last name cannot be empty";
        document.getElementById("lName").value = "";
        valid = false;
    }

    if (phoneNr === ""){
        document.getElementById("phoneNrCheck").innerText = "Phone number cannot be empty";
        document.getElementById("phoneNr").value = "";
        valid = false;
    }
    if (email === "" || !email.includes("@")){
        document.getElementById("emailCheck").innerText = "Email cannot be empty and/or are not valid";
        document.getElementById("email").value = "";
        valid = false;
    }



    const purchase = {
        movieTitle : movie,
        ticketAmount : ticketNumber,
        firstName : fName,
        lastName : lName,
        phoneNumber : phoneNr,
        email : email
    }

    reset();
    if (valid === true){
        purchases.push(purchase);
    }else{
        return;
    }




    //Printing out the tickets in Purchases
    let ut = "<table><tr>" +
        "<th>Movie</th><th>total tickets</th><th>First name</th><th>Last name</th><th>Phone number</th><th>email</th>" +
        "</tr>";
    for (let p of purchases){
        ut+="<tr>";
        ut+="<td>"+p.movieTitle+"</td><td>"+p.ticketAmount+"</td><td>"+p.firstName+"</td><td>"+p.lastName+"</td><td>"+p.phoneNumber+"</td><td>"+p.email+"</td>";
        ut+="</tr>";
    }
    document.getElementById("all tickets").innerHTML=ut;
}

//Reset function of all inputs
function reset(){
    document.getElementById("movie").value = "Select a movie";
    document.getElementById("ticketNr").value = "0";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phoneNr").value = "";
    document.getElementById("email").value = "";
}


function deleteTickets(){
    purchases.splice(0,purchases.length);
    document.getElementById("all tickets").innerHTML="";
}