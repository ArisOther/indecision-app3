"use strict";

var a = function a() {
  this.nama = 'dono';

  var x = function x() {
    console.log(this.nama); // ini hasilnya dono kalo this ga di bind dono nya ga dapet
  };

  x();
};
