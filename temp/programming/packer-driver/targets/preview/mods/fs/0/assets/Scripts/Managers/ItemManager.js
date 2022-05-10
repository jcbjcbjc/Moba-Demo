System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, User, proto, DataManager, ItemManager, _crd, NUser, AttrPromoteType, NItem;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "../Models/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "../../Proto/proto.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "./DataManager", _context.meta, extras);
  }

  _export("ItemManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      User = _unresolved_2.User;
    }, function (_unresolved_3) {
      proto = _unresolved_3.default;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.DataManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7af88ukwIdBnLEg5ixQfdg/", "ItemManager", undefined);

      ({
        NUser,
        AttrPromoteType,
        NItem
      } = _crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto);

      _export("ItemManager", ItemManager = class ItemManager {
        /**
         * 背包添加道具
         * @param itemId 
         * @param count 
         */
        AddItem(itemId, count) {
          var itemList = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag; // 先查询当前商品堆叠数量

          var heap = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.items[itemId].StackLimit; // 循环将 物品放入不满的格子

          if (heap > 1) {
            for (var i = 0; i < itemList.length && count > 0; i++) {
              // 循环判断 当前背包是否已有当前商品,并且当前格子的堆叠数量没满
              if (itemList[i].itemId == itemId && itemList[i].count < heap) {
                // 当前格子有空位,需要判断 增加的 数量是否小于格子剩余数量
                var nItem = itemList[i];

                if (heap - itemList[i].count >= count) {
                  nItem.count += count;
                  return true;
                } else {
                  count = count - (heap - nItem.count);
                  nItem.count = heap;
                }
              }
            }
          } // 如果堆叠数量为1，或者循环了一圈,没有将 所有的道具储存 ;就新开一个 格子储存


          if (count > 0) {
            for (var _i = 0; _i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.gameConfig.BagMaxGridCount - itemList.length && count > 0; _i++) {
              if (count >= heap) {
                var build = new NItem();
                build.itemId = itemId;
                build.count = heap;
                itemList.push(build);
                count = count - heap;
              } else {
                var _build = new NItem();

                _build.itemId = itemId;
                _build.count = count;
                itemList.push(_build); // 所有物品已加入 背包

                return true;
              }
            }
          } // 所有格子循环完了,依然没有将所有道具存入,说明背包已满


          if (count > 0) {
            return false;
          } else {
            return true;
          }
        }
        /**
         * 背包删除道具
         */


        RemoveItem(itemId, count) {
          var items = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag;

          for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (item.itemId == itemId) {
              if (count == -1) {
                items.splice(i, 1);
              } else {
                item.count -= count;
              }

              return;
            }
          }
        }
        /**
         * 背包更新道具
         */


        UpdateBagItemCount(itemId, count) {
          var items = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag;

          for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (item.itemId == itemId) {
              item.count = count;
              break;
            }
          }
        }
        /**
         * 交易道具
         * @param index 
         * @param money 
         */


        TranItem(index, money) {
          var items = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag;
          var item = items[index];

          if (item) {
            item.isTran = true;
            item.money = money;
          }
        }
        /**
        * 取消交易道具
        * @param index 
        */


        CancelTranItem(index) {
          var items = (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User).Instance.user.bag;
          var item = items[index];

          if (item) {
            item.isTran = false;
          }
        }

      });

      _defineProperty(ItemManager, "Instance", new ItemManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ItemManager.js.map