const router = require("express").Router();
let User = require("../model/usersModel");

//creating a user
router.post("api/users", async (req, res) => {
  const users = req.body.users;
  try{ 
    
    const user = await User.create(users);
    console.log(user);

    res.json(user);
  }
  catch(error) {
    res.send('An error occured ', error)
  }
});



//Getting a User
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Creating User
router.post("/api/users", async (req, res) => {
  try {
    const username = req.body.username;
    console.log(username);
    const userId = await User.create({ username });
    console.log(userId);
    res.json(userId);
  } catch (error) {
    res.json({ errorMsg: error });
    console.log(error);
  }
  
  // getting the list of user 
   router.get('api/users', async(req, res) => {
    try{
      const user  = await Username.findAll()
      res.send(user)
    }
    catch(error) {
      res.send("Error occured", error)
    }
   })  




  // const newUser = new User({ username });

  // newUser
  //   .save()
  //   .then(() => res.json("User Added!"))
  //   .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
