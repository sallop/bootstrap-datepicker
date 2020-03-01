// import * from 'jquery-ui/ui';
// import {*} from 'jquery-ui/ui';
// import 'node_modules/jquery-ui/ui'
// require('node_modules/jquery-ui/ui')
// import {$} from 'jquery';
// import 'jquery-ui';
// @import "custom";
// @import "~bootstrap/scss/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
// bootstrap-datepicker.js  bootstrap-datepicker.min.js

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });

  $('#datepicker').datepicker();
});
