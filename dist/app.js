"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const shortid = require('shortid');
// const uuidv4 = require('uuid/v4');
// const uuidId = uuidv4();
// const shortidId = shortid.generate();
// console.log('uuidId: ', uuidId);
// console.log('shortidId: ', shortidId);
var add = function add(a, b) {
  return a + b;
};

add(3, 5);

var User =
/*#__PURE__*/
function () {
  function User() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, User);

    this._name = name;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return User;
}();

_defineProperty(User, "types", {
  hello: 'Hello type'
});

var user = new User('Mango');
console.log(user.name);