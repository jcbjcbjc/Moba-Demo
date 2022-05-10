System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Label, _dec, _class, _crd, ccclass, property, UITestFloat;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99874Pbz0tPWadvNatb9kAm", "UITestFloat", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UITestFloat", UITestFloat = (_dec = ccclass('UITestFloat'), _dec(_class = class UITestFloat extends Component {
        start() {
          this.TestFloat(100);
        }

        TestFloat(count) {
          var v = 0.25;

          for (var i = 0; i < count; i++) {
            v = Math.sin(v);
            this.node.children[i % 28].getComponent(Label).string = i + ':' + v;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UITestFloat.js.map