const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

let guestNames = [];
let pillowHistory = [];


app.listen(8080, () => {
    //when we use our console.log inside of a server file, it will show up in the terminal NOt the browser complete
    console.log('server has started!');
});

// app.get("/pillowmaker", (request, response) => {
//     data = {};
//     response.render("pillowmaker.ejs");
// })

// app.get('/guestbook', (request, response) => {
//     //allows our server to send and redner our ejs as html 
//     let dataToBeSent = {
//         serverData: "hello",
//         firstGuest: guestNames[0],
//     }
//     //1st param: name of the ejs file
//     //2nd param: obsject to be sent to the client
//     response.render('guestbook.ejs', dataToBeSent)
// })

app.get("/", (request, response) => {
    data = {};
    response.render("home.ejs");
})

// app.get('/sign', (request, response) => {
//     let name = request.query.guestName
//     //storing the names on my erver side
//     guestNames.push(name);
//     console.log(guestNames)
//     response.send('thanks,' + name);})


app.get('/newpillow', (request, response) => {

    let data = {};
    let name = request.query.guestName
    data.guestName = name;
    //storing the names on my erver side
    guestName.push(name);
    console.log(guestName)

if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow1.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow2.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow3.png";
}

else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow4.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow5.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow6.png";
}

else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow7.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow8.png";
} else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow9.png";
}

else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow10.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow11.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow12.png";
}

else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow13.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow14.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow15.png";
}

else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow16.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow17.png";
} else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow18.png";
}

else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow19.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow20.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow21.png";
}

else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow22.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow23.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow24.png";
}

else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
    data.pillowImage = "pillow25.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
    data.pillowImage = "pillow26.png";
} else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
    data.pillowImage = "pillow27.png";}

    console.log("name:", data.guestName);
    console.log("img:", data.pillowImage);      
    response.render("newpillow.ejs", data);

    //storing the names on my erver side
    
        // guestName: guestNames[guestNames.length - 1]
    });

app.get('/sleepingspace', (request, response) => {
    response.render("sleepingspace.ejs");
});

    // choiceOne.push(choice);
    // console.log(choiceOne)
    // response.send('you chose:' + choice);}

    //response.render('newpillow.ejs', pillowImage)
// })




// app.get('/guestbook', (request, response) => {
//     //allows our server to send and redner our ejs as html 
//     let dataToBeSent = {
//         serverData: "hello",
//         firstChoice: choiceOne[0],
//     }
//     //1st param: name of the ejs file
//     //2nd param: obsject to be sent to the client
//     response.render('guestbook.ejs', dataToBeSent)
