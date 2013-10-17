//
// Get the serialized JSON object of all the successful controls
// (http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2)
// in the same way $.serializeArray() does. Actually this $.serializeArray()
// is the starting point.
//
(function ($) {
  $.fn.serializeObject = function () {
    'use strict';

    var reduce = function (collection, callback, initialValue) {
      // Array.prototype.reduce is an ECMAScript 5 addition, use it if present.
      if ('function' === typeof Array.prototype.reduce) {
        return Array.prototype.reduce.call(collection, callback, initialValue)
      }
      $.each(collection, function (index, value) {
        // Follow the Array.prototype.reduce callback argument convention.
        initialValue = callback.call(null, initialValue, value, index, collection);
      });
      return initialValue;
    };

    return reduce(this.serializeArray(), function (obj, control) {
      if (!hasOwnProperty.call(obj, control.name)) {
        obj[control.name] = control.value;
      } else {
        if (!$.isArray(obj[control.name])) {
          obj[control.name] = [obj[control.name]];
        }
        obj[control.name].push(control.value);
      }
      return obj;
    }, {});

  };
})(jQuery);