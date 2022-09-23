import { User } from "../Models/User";
import proto from '../../Proto/proto.js';
import { DataManager } from "./DataManager";
const { NUser, AttrPromoteType, NItem}=proto;

export class ItemManager{
    public static Instance:ItemManager=new ItemManager();

    /**
     * 背包添加道具
     * @param itemId 
     * @param count 
     */
    public AddItem(itemId:number, count:number):boolean{
        let itemList=User.Instance.user.bag;
        // 先查询当前商品堆叠数量
        let heap = DataManager.Instance.items[itemId].StackLimit;
        // 循环将 物品放入不满的格子
        if (heap > 1) {
            for (let i = 0; i < itemList.length && count > 0; i++) {
                // 循环判断 当前背包是否已有当前商品,并且当前格子的堆叠数量没满
                if (itemList[i].itemId == itemId && itemList[i].count < heap) {
                    // 当前格子有空位,需要判断 增加的 数量是否小于格子剩余数量
                    let nItem = itemList[i];
                    if (heap - itemList[i].count >= count) {
                        nItem.count += count;
                        return true;
                    } else {
                        count = (count - (heap - nItem.count));
                        nItem.count = heap;
                    }
                }
            }
        }
        // 如果堆叠数量为1，或者循环了一圈,没有将 所有的道具储存 ;就新开一个 格子储存
        if (count > 0) {
            for (let i = 0; i < DataManager.Instance.gameConfig.BagMaxGridCount-itemList.length && count > 0; i++) {
                    if (count >= heap) {
                      let build=new NItem();
                      build.itemId=itemId;
                      build.count=heap;
                      itemList.push(build);
                      count = count - heap;
                    } else {
                      let build=new NItem();
                      build.itemId=itemId;
                      build.count=count;
                      itemList.push(build);
                      // 所有物品已加入 背包
                      return true;
                    }
            }
        }

        // 所有格子循环完了,依然没有将所有道具存入,说明背包已满
        if (count > 0) {
            return false;
        } else {
            return true;
        }
     }
   
      /**
       * 背包删除道具
       */
      public RemoveItem(itemId:number, count:number){
       let items=User.Instance.user.bag;
        for(let i=0;i<items.length;i++){
          let item=items[i]
          if(item.itemId==itemId){
            if(count==-1){
              items.splice(i,1);
            }else{
              item.count-=count;
            }
              return;
          }
        }
      }
 
      /**
       * 背包更新道具
       */
      public UpdateBagItemCount(itemId:number, count:number){
       let items=User.Instance.user.bag;
        for(let i=0;i<items.length;i++){
          let item=items[i]
          if(item.itemId==itemId){
             item.count=count;
              break;
          }
        }
      }
 
      /**
       * 交易道具
       * @param index 
       * @param money 
       */
      public TranItem(index:number,money:number){
          let items=User.Instance.user.bag;
          let item=items[index];
          if(item){
            item.isTran=true;
            item.money=money;
          }
      }

       /**
       * 取消交易道具
       * @param index 
       */
      public CancelTranItem(index:number){
        let items=User.Instance.user.bag;
        let item=items[index];
        if(item){
          item.isTran=false;
        }
    }
}