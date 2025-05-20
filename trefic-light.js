let light = prompt("type of light : ");
if (light === "red") {
    let vehicle = prompt("enter a vechiacle name: ")
    if (vehicle === "normal" || vehicle === "Normal" || vehicle === "NORMAl" || vehicle === "n" || vehicle === "N") {
        console.log("you are stop")
    } else if (vehicle === "Police" || vehicle === "POLICE" || vehicle === "police" || vehicle === "P" || vehicle === "p") {
        let criminal = prompt("Is there a criminal in the car? yes or no");
        if (criminal === "yes" || criminal === "YES" || criminal === "Yes") {
            console.log("you must go");
        }
        else if (criminal === "NO" || criminal === "No" || criminal === "no") {
            console.log("you are stop");
        }

    } else if (vehicle === "ambulance" || vehicle === "Ambulance" || vehicle === "AMBULANCE" || vehicle === "a" || vehicle === "A") {
        let marij = prompt("Is there marij in the car? yes or no : ");
        if (marij === "yes" || marij === "Yes" || marij === "YES") {
            console.log("you are go");
        }
        else if (marij === "no" || marij === "No" || marij === "NO") {
            console.log("you are stop");
        }
      
    }
}
if (light === "yellow") {
    let vehicle = prompt("enter a vechiacle name: ");
    if (vehicle === "normal" || vehicle === "Normal" || vehicle === "NORMAl" || vehicle === "n" || vehicle === "N") {
        console.log("you are stop --|")
    } else if (vehicle === "Police" || vehicle === "POLICE" || vehicle === "police" || vehicle === "P" || vehicle === "p") {
        let criminal = prompt("Is there a criminal in the car? yes or no");
        if (criminal === "yes" || criminal === "YES" || criminal === "Yes") {
            console.log("you must go--->");
        }
        else if (criminal === "NO" || criminal === "No" || criminal === "no") {
            console.log("you are stop....|");
        }

    } else if (vehicle === "ambulance" || vehicle === "Ambulance" || vehicle === "AMBULANCE" || vehicle === "a" || vehicle === "A") {
        let marij = prompt("Is there marij in the car? yes or no : ");
        if (marij === "yes" || marij === "Yes" || marij === "YES") {
            console.log("you are go.>>>");
        }
        else if (marij === "no" || marij === "No" || marij === "NO") {
            console.log("you are stop....|");
        }
    }
}
if (light === "green") {
    let vehicle = prompt("enter a vechiacle name: ")
    if (vehicle === "normal" || vehicle === "Normal" || vehicle === "NORMAl" || vehicle === "n" || vehicle === "N") {
        console.log("you are go.")
    }
    else if (vehicle === "Police" || vehicle === "POLICE" || vehicle === "police" || vehicle === "P" || vehicle === "p") {
      
            console.log("you are go.... 'police'");
        
       
    }
    else if (vehicle === "ambulance" || vehicle === "Ambulance" || vehicle === "AMBULANCE" || vehicle === "a" || vehicle === "A") {
            
        console.log("you are go....'Ambulance'");
        
    }
}
