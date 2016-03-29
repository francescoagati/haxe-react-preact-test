import api.react.React;
import api.react.ReactDOM;
import api.react.ReactComponent;
import js.Browser;
import api.react.ReactMacro.jsx;


@:jsRequire("preact")
extern class Preact {}

@:jsRequire("preact-compat")
@:native("React")
extern class PreactCompat {}

@:keep
@:keepInit
class RegisterPreact {
  public static function __init__() {
    untyped window.React = PreactCompat;
    untyped window.ReactDOM = PreactCompat;
    trace(PreactCompat);
    trace(Preact);
  }
}

class Main extends ReactComponent implements StateAccessor.IStateAccessor {

    @:state var counter(get,set):Int;

    static public function main() {
        RegisterPreact;
        ReactDOM.render(React.createElement(Main), Browser.document.getElementById('app'));
    }

    public function new(props) {
        super(props);
        counter = 0;
        var timer = new haxe.Timer(1000);
        timer.run = function() {
          counter = counter + 1;
        }

    }

    override function render() {
        var cname = 'foo';
        //return React.createElement('div', {className:cname}, "test");
        return jsx('
            <div className=$cname>
                ${counter}
            </div>
        ');
    }
}
