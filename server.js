const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const helpers = require("./utils/helpers");
var validator = require("validator");

validator.isEmail("foo@bar.com"); //=> true

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const { link } = require("fs");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
var myStore = new SequelizeStore({ db: sequelize });
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: myStore,
};
app.use(session(sess));
const hbs = exphbs.create({ helpers });
// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Sets up our Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "/public")));
app.use(require("./controllers/"));

// Starts the server to begin listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
// $(".form")
//   .find("input, textarea")
//   .on("keyup blur focus", function (e) {
//     var $this = $(this),
//       label = $this.prev("label");

//     if (e.type === "keyup") {
//       if ($this.val() === "") {
//         label.removeClass("active highlight");
//       } else {
//         label.addClass("active highlight");
//       }
//     } else if (e.type === "blur") {
//       if ($this.val() === "") {
//         label.removeClass("active highlight");
//       } else {
//         label.removeClass("highlight");
//       }
//     } else if (e.type === "focus") {
//       if ($this.val() === "") {
//         label.removeClass("highlight");
//       } else if ($this.val() !== "") {
//         label.addClass("highlight");
//       }
//     }
//   });

// $(".tab a").on("click", function (e) {
//   e.preventDefault();

//   $(this).parent().addClass("active");
//   $(this).parent().siblings().removeClass("active");

//   target = $(this).attr("href");

//   $(".tab-content > div").not(target).hide();

//   $(target).fadeIn(600);
// });
