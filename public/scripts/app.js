"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  //Definisi variabel2 yang akan di olah
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kosong';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      return "hai i am ".concat(this.name);
    } //method yang akan mengolah definisi variabel diatas

  }, {
    key: "getDescription",
    value: function getDescription() {
      return "".concat(this.name, " berumur ").concat(this.age, "!");
    }
  }]);

  return Person;
}(); //membuat class Student dengan mengambil referensi Person
//-constructor() dengan identifier name,age, dan major
//-super() mengambil ref 'name' dan 'age' dari class person
//deklarasi variabel asli milik student, yaitu 'Major'


var Student =
/*#__PURE__*/
function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, Major) {
    var _this;

    _classCallCheck(this, Student);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Student).call(this, name, age));
    _this.Major = Major;
    return _this;
  } //Method untuk memberikan nilai False pada this.Major
  //-!this.Major = True, !!this.Major=False


  _createClass(Student, [{
    key: "hasMajor",
    value: function hasMajor() {
      return !!this.Major;
    } //-getDescription() untuk menampilkan
    //-membuat variabel 'let description' dengan nilai menggunakan super() karena
    //--mengambil nilai dari Person.getDescription
    //-Mengecek, jika hasMajor()
    //--Jika hasMajor() terisi = 'aris winandi berumur 26!and has major Matematika'
    //--Jika hasMajor() tidak terisi = 'aris winandi berumur 26!
    //--catatan: jika tanpa fungsi hasMajor() tetap akan tampil namun,
    //-----------jika this.Major tidak terisi, akan tampil 'undefined' :
    //-----------'aris winandi berumur 26! and has major undefined'

  }, {
    key: "getDescription",
    value: function getDescription() {
      var description = _get(_getPrototypeOf(Student.prototype), "getDescription", this).call(this);

      if (this.hasMajor()) {
        description = description + "and has major ".concat(this.Major);
      }

      return description; //return `${description} and has major ${this.Major}`;
    }
  }]);

  return Student;
}(Person);

var homeLoc =
/*#__PURE__*/
function (_Person2) {
  _inherits(homeLoc, _Person2);

  function homeLoc(name, location) {
    var _this2;

    _classCallCheck(this, homeLoc);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(homeLoc).call(this, name));
    _this2.location = location;
    return _this2;
  }

  _createClass(homeLoc, [{
    key: "hasLoc",
    value: function hasLoc() {
      return !!this.location;
    }
  }, {
    key: "Greeting",
    value: function Greeting() {
      var GetG = _get(_getPrototypeOf(homeLoc.prototype), "getGreeting", this).call(this);

      if (this.hasLoc()) {
        GetG = GetG + " i am from ".concat(this.location);
      }

      return GetG;
    }
  }]);

  return homeLoc;
}(Person); //pemanggilan class dengan parameter lengkap


var write = new Student('aris winandi', 27, 'Matematika');
console.log(write.getDescription()); //pemanggilan class dengan parameter kosong

var other = new Student();
console.log(other.getDescription());
var Greeting2 = new homeLoc('Andi Winaris', 'tuban');
console.log(Greeting2.Greeting());
