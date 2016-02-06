import haxe.macro.Expr;
import haxe.macro.Context;
using thx.macro.MacroFields;

class StateAccessor {

  public static macro function build():Array<Field> {
    var cls = Context.getLocalClass();
    var fields = Context.getBuildFields();
    for (field in fields) {
      if (field.isProperty() && field.hasMeta(':state')) {
        var name = "_${field.name}";
        var get_accessor = 'get_${field.name}';
        var set_accessor = 'set_${field.name}';
        var params=[];

        var fields_accessors = (macro class {
          inline function $get_accessor() return state.$name;
          inline function $set_accessor(v) {
            setState({$name:v});
            return state.$name;
          }

        }).fields;

        for (field in fields_accessors) fields.push(field);
      }

    }

    return fields;
  }

}

@:autoBuild(StateAccessor.build())
interface IStateAccessor {}
