const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { UserModel } = require('./models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookiesParser = require('cookie-parser')


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookiesParser())


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/moviedb")
  console.log("db connect");
}

// for register detalis
app.post('/register', async (req, res) => {
  // let User = new UserModel();
  // User.email = req.body.email;
  // User.password = req.body.pass;
  // const doc = await User.save();
  // console.log(doc)
  // res.json(doc)

  try {

    const { email, password } = req.body
    if (!(email && password)) {
      res.status(404).send("All fields are required")
    }

    const existingUser = await UserModel.findOne({ email })
    if (existingUser) {
      res.status(401).send("User already exists with this email")
    }

    const myEncPassword = await bcrypt.hash(password, 10)

    const user = await UserModel.create({
      email,
      password: myEncPassword,
    })

    const token = jwt.sign({
      id: user._id, email
    }, 'shhhh', //process.env.jwtsecret
      {
        expiresIn: '2h'
      }
    );

    user.token = token
    user.password = undefined

    res.status(201).json(user)

  } catch (error) {
    console.log(error);
  }

})



// for login detalis
app.post('/login', async (req, res) => {
  // const { email, pass } = req.body;

  // try {
  //   const user = await UserModel.findOne({ email: email });

  //   if (user) {
  //     console.log("user find");

  //     if (user.password === pass) {
  //       res.json("success");
  //     } else {
  //       res.json("The password is incorrect");

  //     } else {
  //       res.json("No record exists");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json("Internal Server Error");
  //   }




  try {


    const { email, password } = req.body

    if (!(email && password)) {
      res.status(400).send('send all data')
    }


    const user = await UserModel.findOne({ email })
    if (user) {
      res.status(401).send("user not exsist")
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { id: user._id },
        'shhhh',//process.env.jwtsecret
        {
          expiresIn: '2h'
        }
      )
      user.token = token
      user.password = undefined


      // cookies section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user
      })

      res.status(201).json(user)

    }

  } catch (error) {
    console.log(error);
  }


});


// for demo
app.get('/connect', async (req, res) => {
  res.send("hello")
})



// for fetch all movies end point

// app.get('/allmovies', async (req, res) => {

//   try {
//     const movies = await movieModel.find();
//     res.json(movies);
//   }
//   catch (error) {
//     console.error('Error fetching movies:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// })






// for movies uplode

// app.post("/uploade", async (req, res) => {
//   let moviedata = new movieModel();
//   moviedata.moviePoster = req.body.poster;
//   moviedata.movieTrailer = req.body.trailer;
//   moviedata.movieTitle = req.body.title;
//   moviedata.movieYear = req.body.year;
//   moviedata.movieDescription = req.body.description;
//   moviedata.movieCategory = req.body.category;
//   moviedata.movieCast = req.body.cast;
//   moviedata.movieRating = req.body.rating;
//   const doc = await moviedata.save();
//   res.send(doc);
//   console.log(doc)
// })




app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});