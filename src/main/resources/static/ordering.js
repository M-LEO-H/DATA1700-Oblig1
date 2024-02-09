let purchases = []




function checkFName(){
    if (document.getElementById("fName").value === ""){
        document.getElementById("fNameCheck").innerText = "First name cannot be empty";
        document.getElementById("fName").value = "";
    }
}




function buyTicket(){
    const movie = document.getElementById("movie").value;
    const ticketNumber = document.getElementById("ticketNr").value;
    const fName = document.getElementById("email").value;
    const lName = document.getElementById("lName").value;
    const phoneNr = document.getElementById("phoneNr").value;
    const email = document.getElementById("email").value;


    if (movie === "Select a movie"){
        document.getElementById("movieCheck").innerText = "Select a movie";
        document.getElementById("movie").value = "Select a movie";
    }
    if (isNaN(ticketNumber) ){
        document.getElementById("ticketNrCheck").innerText = "Number of tickets is invalid";
        document.getElementById("ticketNr").value = "0";
    }else if(!Number.isInteger(ticketNumber) || ticketNumber <= 0){
        document.getElementById("ticketNrCheck").innerText = "Number of tickets is to small or not a whole number";
        document.getElementById("ticketNr").value = "0";
    }

    if (lName === ""){
        document.getElementById("lNameCheck").innerText = "Last name cannot be empty";
        document.getElementById("lName").value = "";
    }
    if (phoneNr === ""){
        document.getElementById("phoneNrCheck").innerText = "Phone number cannot be empty";
        document.getElementById("phoneNr").value = "";
    }
    if (email === "" || !email.includes("@")){
        document.getElementById("emailCheck").innerText = "Email cannot be empty and/or are not valid";
        document.getElementById("email").value = "";
    }

    const purchase = {
        movieTitle : movie,
        ticketAmount : ticketNumber,
        firstName : fName,
        lastName : lName,
        phoneNumber : phoneNr,
        email : email
    }
    purchases.push(purchase);
    document.getElementById("movieCheck").value = "Select a movie";
    document.getElementById("ticketNrCheck").value = "0";
    document.getElementById("fNameCheck").value = "";
    document.getElementById("lNameCheck").value = "";
    document.getElementById("phoneNrCheck").value = "";
    document.getElementById("emailCheck").value = "";
    showTickets(); //Creating a new function of this for imagined future needs


}


function showTickets(){
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
