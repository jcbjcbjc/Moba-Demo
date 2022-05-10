System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SpriteFrame, loader, AudioClip, resources, LoadResUtil, _crd;

  _export("LoadResUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      SpriteFrame = _cc.SpriteFrame;
      loader = _cc.loader;
      AudioClip = _cc.AudioClip;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa20cL7zjVFYZJGz3VeQRCh", "LoadResUtil", undefined);

      _export("LoadResUtil", LoadResUtil = class LoadResUtil {
        /**
         * 加载prefab
         * @param load_url 
         */
        static loadPrefab(load_url) {
          return new Promise((resolve, reject) => {
            loader.loadRes(load_url, (err, loadedResource) => {
              if (err) {
                reject(err);
              } else {
                resolve(loadedResource);
              }
            });
          });
        }
        /**
         * 加载文本文件
         * @param json_name 
         */


        static loadConfig(path) {
          return new Promise((resolve, reject) => {
            cc.loader.loadRes(path, (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data.text);
              }
            });
          });
        }
        /**
        * 加载本地图片
        * @param load_url  
        */


        static load_local_sprite(load_url) {
          return new Promise((resolve, reject) => {
            resources.load(load_url, SpriteFrame, function (err, spriteFrame) {
              if (err) {
                reject(err);
              } else {
                resolve(spriteFrame);
              }
            });
          });
        }
        /**
         * 加载音效资源
         * @param load_url 
         */


        static load_local_AudioClip(load_url) {
          return new Promise((resolve, reject) => {
            cc.loader.loadRes(load_url, AudioClip, function (err, audioClip) {
              if (err) {
                reject(err);
              } else {
                resolve(audioClip);
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoadResUtil.js.map