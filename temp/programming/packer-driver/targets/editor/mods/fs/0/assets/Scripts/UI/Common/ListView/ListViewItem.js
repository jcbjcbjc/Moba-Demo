System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, ListViewItem;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "./ListView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8d5cnhdstBH5gMfDi5byIp", "ListViewItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ListViewItem", ListViewItem = (_dec = ccclass('ListViewItem'), _dec(_class = (_temp = class ListViewItem extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "selected", false);

          _defineProperty(this, "owner", null);
        }

        onLoad() {// console.log('ListViewItem onLoad'+this.node.uuid)
        }

        get Selected() {
          return this.selected;
        }

        set Selected(value) {
          this.selected = value;
          this.onSelected(this.selected);
        }

        onSelected(selected) {}

        onClcik() {}

        OnPointerClick() {
          console.log('OnPointerClick selected=' + this.selected);
          this.onClcik(); // if (!this.selected)
          // {

          this.Selected = true; // }

          if (this.owner && this.owner.SelectedItem != this) {
            this.owner.SelectedItem = this;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListViewItem.js.map