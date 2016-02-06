import api.react.React;
import api.react.ReactDOM;
import api.react.ReactComponent;
import js.Browser;
import api.react.ReactMacro.jsx;


class Main extends ReactComponent implements StateAccessor.IStateAccessor {

    @:state var counter(get,set):Int;

    static public function main() {
        ReactDOM.render(React.createElement(Main), Browser.document.getElementById('app'));
    }

    public function new() {
        super();
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
