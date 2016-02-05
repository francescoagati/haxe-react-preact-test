(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
	React.Component.call(this);
};
Main.main = function() {
	ReactDOM.render(React.createElement(Main),window.document.getElementById("app"));
};
Main.__super__ = React.Component;
Main.prototype = $extend(React.Component.prototype,{
	render: function() {
		return React.createElement("div",{ className : "foo"},"test");
	}
});
Main.displayName = "Main";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
