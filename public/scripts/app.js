"use strict";

console.log('hello world'); //menggunakan function
//--fungsi alamat
//menggunakan if statement (if...else...)
//--fungsi alamat: getAlamat(alamatku), kondisi 'alamatku' harus terisi. dalam bentuk apapun. misalnya,dibawah ini mengambil 'dataKaryawan.Alamat' sebagai isi dari kondisi
//--IF 'alamatku' terpenuhi/terisi maka return/ditampilkan 'alamatku' itu sendiri
//--ELSE 'alamatku' tidak terpenuhi/kosong, maka return/ditampilkan string 'tidak diketahui'
//menggunakan conditional (ternary) operator
//--variablename = (condition) ? value1:value2 
//--templateTwo = dataKaryawan.nama ? dataKaryawan.nama : 'tidak diketahui'
//--IF 'dataKaryawan.nama' eksis, maka value1= terisi 'dataKaryawan.nama' itu sendiri, dan jika tidak eksis, value2='tidak diketahui'
// menggunakan logical && operator
//template1
//Hanya me render subtitle (dan 'p' tag) jika subtitle eksis - 
//merender p tag baru - jika options.length > 3 (array) maka muncul "ini dia pilihanmu", jika kurang dari itu muncul "ndak ada pilihan"
//JSX - Javascript XML versi git

var app = {
  title: 'Indecision App1',
  subtitle: 'serahkan nyawamu',
  options: ['one', 'two'] //Fungsi untuk mengecek input

};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
}; //variabel data sumber 'data karyawan'/sumber input data


var dataKaryawan = {
  nama: 'aris w',
  alamat: 'tuban w',
  jabatan: 'manager',
  usia: 18,
  usiaMax: 32
}; //program counter manual
//fungsi perhitungan------------------------------------------------------

var hitung = 0;

var penambahan = function penambahan() {
  hitung++;
  renderTemplate4();
};

var pengurangan = function pengurangan() {
  hitung--;
  renderTemplate4();
};

var reset = function reset() {
  hitung = 0;
  renderTemplate4();
}; //-------------------------------------------------------------------------
//fungsi alamat. ---------------------------------------------------------------


function getAlamat(alamatku) {
  if (alamatku) {
    return alamatku;
  } else {
    return 'tidak diketahui';
  }
}

function getUsiamax(usiaMaksimal) {
  if (usiaMaksimal < 18 || usiaMaksimal >= 35) {
    return 'usia tidak memenuhi syarat';
  } else {
    return usiaMaksimal;
  }
} //--------------------------------------------------------------------------------
//data yang di render-------------------------------------------------------------
//----------------------------------------------------


var appRoot = document.getElementById('app'); //jangan sampai salah posisi

var render = function render() {
  var template1 = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? 'inilah pilihanmu' : 'ndak ada pilihan'), React.createElement("p", null, app.options.length), React.createElement("button", {
    disabled: false,
    onClick: onMakeDecision
  }, "Apa yang harus aku lakukan"), React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), React.createElement("ol", null, app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "add Item")));
  ReactDOM.render(template1, appRoot); //jangan sampai salah posisi
};

render();
