//var io = require('../app');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// io.sockets.on('connection', function ( socket ) {
//   console.log('connected index');
//     socket.emit('call', socket.id );
// });


module.exports = router;
