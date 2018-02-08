let express = require("express");
let app = express();
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

    let campgrounds = [
            {name: "Salmon Hill", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
            {name: "Goats Crest", image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
            {name: "Granite Hill", image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
        ]

app.get("/", function(req, res) {
    res.render("landing")
})

app.get("/campgrounds", function(req, res) {

        
      res.render("campgrounds", {campgrounds:campgrounds});
})

app.post('/campgrounds', function(req, res){
    let name = req.body.name
    let image = req.body.image
    let newCampground = {name: name, image: image}
    campgrounds.push(newCampground)
    
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelpcamp has started");
})