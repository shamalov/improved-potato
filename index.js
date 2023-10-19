(function(global) {
    'use strict'; // use strict mode to prevent common JS pitfalls

    // Define the base library object
    var _ = function(element) {
        if (!(this instanceof _)) {
            return new _(element);
        }
        this.element = element;
    };

    // Define methods on the prototype
    _.prototype = {
        // Example method
        log: function() {
            console.log(this.element);
            return this; // to allow method chaining
        }
        // You can add other methods here...
    };

    // Static methods can be added directly to _
    _.ready = function(callback) {
        // Check if the DOMContentLoaded has already fired
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {  // If it has already loaded, run the callback immediately
            callback();
        }
    };


  
    if(!global._) {
        global._ = _;
    }

})(this);
// Usage:
// _().log();
// _.staticMethod();
