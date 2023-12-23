var express = require('express');
const path = require('path');
const router = express.Router();
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
var Gun = require('gun');

var app = express();
app.use(Gun.serve);
app.use('/', router);

var server = app.listen(80);

// DO NOT add file extention
Gun({file: 'db/data', web: server});