const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

let guestNames = [];

app.listen(8080, () => {
    //when we use our console.log inside of a server file, it will show up in the terminal NOt the browser complete
    console.log('server has started!');
});

app.get("/pillowmaker", (request, response) => {
    data = {};
    response.render("pillowmaker.ejs");
})

app.get('/guestbook', (request, response) => {
    //allows our server to send and redner our ejs as html 
    let dataToBeSent = {
        serverData: "hello",
        firstGuest: guestNames[0],
    }
    //1st param: name of the ejs file
    //2nd param: obsject to be sent to the client
    response.render('guestbook.ejs', dataToBeSent)
})

app.get("/home", (request, response) => {
    data = {};
    response.render("home.ejs");
})

app.get('/sign', (request, response) => {
    let name = request.query.guestName
    //storing the names on my erver side
    guestNames.push(name);
    console.log(guestNames)
    response.send('thanks,' + name);})

    

// app.get('/guestbook', (request, response) => {
//     //allows our server to send and redner our ejs as html 
//     let dataToBeSent = {
//         serverData: "hello",
//         firstChoice: choiceOne[0],
//     }
//     //1st param: name of the ejs file
//     //2nd param: obsject to be sent to the client
//     response.render('guestbook.ejs', dataToBeSent)
// })

app.get('/newpillow', (request, response) => {
    let one = request.query.ONE;
    let two = request.query.TWO;
    let three = request.query.THREE;
    // let four = request.query.FOUR;

    let pillowImage = "default.jpg";

    if (one == "oneA" && two == "twoA" && three == "threeA") {
    pillowImage = "pillow1.jpg";
} else if (one == "oneA" && two == "twoA" && three == "threeB") {
    pillowImage = "pillow2.jpg";
} else if (one == "oneA" && two == "twoA" && three == "threeC") {
    pillowImage = "pillow3.jpg";
}

else if (one == "oneA" && two == "twoB" && three == "threeA") {
    pillowImage = "pillow4.jpg";
} else if (one == "oneA" && two == "twoB" && three == "threeB") {
    pillowImage = "pillow5.jpg";
} else if (one == "oneA" && two == "twoB" && three == "threeC") {
    pillowImage = "pillow6.jpg";
}

else if (one == "oneA" && two == "twoC" && three == "threeA") {
    pillowImage = "pillow7.jpg";
} else if (one == "oneA" && two == "twoC" && three == "threeB") {
    pillowImage = "pillow8.jpg";
} else if (one == "oneA" && two == "twoC" && three == "threeC") {
    pillowImage = "pillow9.jpg";
}

else if (one == "oneB" && two == "twoA" && three == "threeA") {
    pillowImage = "pillow10.jpg";
} else if (one == "oneB" && two == "twoA" && three == "threeB") {
    pillowImage = "pillow11.jpg";
} else if (one == "oneB" && two == "twoA" && three == "threeC") {
    pillowImage = "pillow12.jpg";
}

else if (one == "oneB" && two == "twoB" && three == "threeA") {
    pillowImage = "pillow13.jpg";
} else if (one == "oneB" && two == "twoB" && three == "threeB") {
    pillowImage = "pillow14.jpg";
} else if (one == "oneB" && two == "twoB" && three == "threeC") {
    pillowImage = "pillow15.jpg";
}

else if (one == "oneB" && two == "twoC" && three == "threeA") {
    pillowImage = "pillow16.jpg";
} else if (one == "oneB" && two == "twoC" && three == "threeB") {
    pillowImage = "pillow17.jpg";
} else if (one == "oneB" && two == "twoC" && three == "threeC") {
    pillowImage = "pillow18.jpg";
}

else if (one == "oneC" && two == "twoA" && three == "threeA") {
    pillowImage = "pillow19.jpg";
} else if (one == "oneC" && two == "twoA" && three == "threeB") {
    pillowImage = "pillow20.jpg";
} else if (one == "oneC" && two == "twoA" && three == "threeC") {
    pillowImage = "pillow21.jpg";
}

else if (one == "oneC" && two == "twoB" && three == "threeA") {
    pillowImage = "pillow22.jpg";
} else if (one == "oneC" && two == "twoB" && three == "threeB") {
    pillowImage = "pillow23.jpg";
} else if (one == "oneC" && two == "twoB" && three == "threeC") {
    pillowImage = "pillow24.jpg";
}

else if (one == "oneC" && two == "twoC" && three == "threeA") {
    pillowImage = "pillow25.jpg";
} else if (one == "oneC" && two == "twoC" && three == "threeB") {
    pillowImage = "pillow26.jpg";
} else if (one == "oneC" && two == "twoC" && three == "threeC") {
    pillowImage = "pillow27.jpg";
}

    //storing the names on my erver side
    response.render("newpillow.ejs", {
        pillowImage: pillowImage
    });

    // choiceOne.push(choice);
    // console.log(choiceOne)
    // response.send('you chose:' + choice);}
})
