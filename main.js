(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Preact = require("preact");
var React = require("preact-compat");
var RegisterPreact = function() { };
var IStateAccessor = function() { };
var Main = function(props) {
	var _g = this;
	React.Component.call(this,props);
	this.setState({ _counter : 0});
	this.state._counter;
	var timer = new haxe_Timer(1000);
	timer.run = function() {
		_g.setState({ _counter : _g.state._counter + 1});
		_g.state._counter;
	};
};
Main.__interfaces__ = [IStateAccessor];
Main.main = function() {
	RegisterPreact;
	ReactDOM.render(React.createElement(Main),window.document.getElementById("app"));
};
Main.__super__ = React.Component;
Main.prototype = $extend(React.Component.prototype,{
	render: function() {
		return React.createElement("div",{ className : "foo"},this.state._counter);
	}
	,get_counter: function() {
		return this.state._counter;
	}
	,set_counter: function(v) {
		this.setState({ _counter : v});
		return this.state._counter;
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
window.React = React;
window.ReactDOM = React;
console.log(React);
console.log(Preact);
Main.displayName = "Main";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
