import api.react.React;
import api.react.ReactDOM;
import api.react.ReactComponent;
import js.Browser;
import api.react.ReactMacro.jsx;

class Main extends ReactComponent {

    static public function main() {
        ReactDOM.render(React.createElement(Main), Browser.document.getElementById('app'));
    }

    public function new() {
        super();
    }

    override function render() {
        var cname = 'foo';
        //return React.createElement('div', {className:cname}, "test");
        return jsx('
            <div className=$cname>
                test
            </div>
        ');
    }
}
