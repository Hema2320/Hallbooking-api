var express = require('express');
var router = express.Router();

let creating_room=[];
let booking_room=[];

/* GET home page. */
//router.get('/createget', function(req, res, next) {
 // res.json({
 //   statusCode:200,
 //   data:creating_room,
 // })
//});
router.get('/:id', function(req, res, next) {
  if(req.params.id)
res.json({
   statusCode:200,
    data:booking_room,
  })
});

router.post('/creating',(req,res)=>{
  console.log(req.body);
  creating_room.push(req.body)
  res.send({
    statusCode:200,
    message:"Data saved successfully creating room",
  
  })
})

router.post('/booking',(req,res)=>{
  console.log(req.body);
  booking_room.push(req.body)
  res.send({
    statusCode:200,
    message:"Data saved successfully for booking room "
  })
})

router.get('/:room_id',(req,res)=>{
  {
  res.json({
    statusCode:200,
    data:booking_room[req.params.id],
  })
}
})




module.exports = router;
