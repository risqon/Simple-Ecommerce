
var express = require("express");
var router = express.Router();

var AWS = require("aws-sdk");

const Item = require("../models/Item");
const transactionController = require("../controllers/transcationController");
const { models } = require("mongoose");

var s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
  bucket: "e-commerce-al",
});

/* GET home page. */
router.get('/item', function (req, res, next) {
  Item.find().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.get('/item/:id', async ( req, res ) => {
  console.log(req.params.id)
  try {
    const product = await Item.findByPk(req.params.id)
    console.log(product)
    res.json(product);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})


router.post('/item', function (req, res, next) {
  let name = req.files.image.name;
  console.log(name)
  const {title, rate, description, price, brand, detailProduct} = req.body
  let image = Date.now() + "-" + name;
  console.log(image)
  Item.create({
    title,
    rate,
    description,
    price,
    brand,
    detailProduct,
    image,
  }).then((item) => {
    s3.upload({
      Bucket: "e-commerce-al",
      Key: image,
      Body: req.files.image.data,
      ACL: "public-red"
    }, (err, data) => {
      if(err){
        console.log(err)
      }
    })
    res.status(201).json({success: true, item})
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.put('/item/:id', function (req, res, next) {
  const { title, rate, description, price, brand, detailProduct, image } = req.body
  const id = req.params.id
  Item.findOneAndUpdate({id}, 
    {
      title, 
      rate, 
      description, 
      price, 
      brand, 
      detailProduct, 
      image
    },{new: true}).then((data) => {
    res.status(201).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
});

router.delete('/item/:id', async (req, res) => {
  try {
      const targetProducts = await Item.findByIdAndRemove(req.params.id)
      res.status(201).json({success: true, targetProducts})
  } catch (error) {
      console.log(error)
      res.status(500).json(error)
  }
});



router.get("/transaction", transactionController.getTransactions);
router.post("/transaction", transactionController.createTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);

module.exports = router;