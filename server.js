'use strict';

var express = require('express'),
    routes  = require('./app/routes/index.js'),
    app     = express();



app.set('port', (process.env.PORT || 5000));

routes(app);

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
