(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var IStateAccessor = function() { };
var Main = function() {
	var _g = this;
	React.Component.call(this);
	this.set_counter(0);
	var timer = new haxe_Timer(1000);
	timer.run = function() {
		_g.set_counter(_g.get_counter() + 1);
	};
};
Main.__interfaces__ = [IStateAccessor];
Main.main = function() {
	ReactDOM.render(React.createElement(Main),window.document.getElementById("app"));
};
Main.__super__ = React.Component;
Main.prototype = $extend(React.Component.prototype,{
	render: function() {
		return React.createElement("div",{ className : "foo"},this.get_counter());
	}
	,get_counter: function() {
		return this.state["_${field.name}"];
	}
	,set_counter: function(v) {
		this.setState({ '_${field.name}' : v});
		return this.state["_${field.name}"];
	}
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.prototype = {
	run: function() {
	}
};
Main.displayName = "Main";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
