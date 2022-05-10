System.register(["protobufjs/minimal.js","__unresolved_0"],function(_export,_context){"use strict";var _req,_loader,_cjsExports,__cjsMetaURL;_export("default",void 0);return{setters:[function(_protobufjsMinimalJs){_req=_protobufjsMinimalJs.__cjsMetaURL;},function(_unresolved_){_loader=_unresolved_.default;}],execute:function(){_loader.define(_context.meta.url,function(exports,_require,module,__filename,__dirname){var require=_loader.createRequireWithReqMap({"protobufjs/minimal.js":_req},_require);(function(){var $protobuf=require("protobufjs/minimal.js");// Common aliases
var $Reader=$protobuf.Reader,$Writer=$protobuf.Writer,$util=$protobuf.util;// Exported root namespace
var $root=$protobuf.roots["default"]||($protobuf.roots["default"]={});/**
 * Result enum.
 * @exports Result
 * @enum {string}
 * @property {number} Success=0 Success value
 * @property {number} Failed=1 Failed value
 */$root.Result=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Success"]=0;values[valuesById[1]="Failed"]=1;return values;}();/**
 * CharacterClass enum.
 * @exports CharacterClass
 * @enum {string}
 * @property {number} NONE=0 NONE value
 * @property {number} WARRIOR=1 WARRIOR value
 * @property {number} WIZARD=2 WIZARD value
 * @property {number} ASSASSIN=3 ASSASSIN value
 * @property {number} NoticeMonsters=4 NoticeMonsters value
 * @property {number} Monsters=5 Monsters value
 * @property {number} Soldier=6 Soldier value
 * @property {number} Cart=7 Cart value
 */$root.CharacterClass=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="NONE"]=0;values[valuesById[1]="WARRIOR"]=1;values[valuesById[2]="WIZARD"]=2;values[valuesById[3]="ASSASSIN"]=3;values[valuesById[4]="NoticeMonsters"]=4;values[valuesById[5]="Monsters"]=5;values[valuesById[6]="Soldier"]=6;values[valuesById[7]="Cart"]=7;return values;}();/**
 * ItemType enum.
 * @exports ItemType
 * @enum {string}
 * @property {number} SPORTS=0 SPORTS value
 * @property {number} ATTSTONE=1 ATTSTONE value
 * @property {number} DEFSTONE=2 DEFSTONE value
 * @property {number} RESUSTONE=3 RESUSTONE value
 * @property {number} HPSTONE=4 HPSTONE value
 * @property {number} CDSTONE=5 CDSTONE value
 * @property {number} CRISTONE=6 CRISTONE value
 * @property {number} SPEEDSTONE=7 SPEEDSTONE value
 */$root.ItemType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="SPORTS"]=0;values[valuesById[1]="ATTSTONE"]=1;values[valuesById[2]="DEFSTONE"]=2;values[valuesById[3]="RESUSTONE"]=3;values[valuesById[4]="HPSTONE"]=4;values[valuesById[5]="CDSTONE"]=5;values[valuesById[6]="CRISTONE"]=6;values[valuesById[7]="SPEEDSTONE"]=7;return values;}();/**
 * AddAttrType enum.
 * @exports AddAttrType
 * @enum {string}
 * @property {number} GEM=0 GEM value
 * @property {number} SPAR=1 SPAR value
 */$root.AddAttrType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="GEM"]=0;values[valuesById[1]="SPAR"]=1;return values;}();/**
 * ItemFunction enum.
 * @exports ItemFunction
 * @enum {string}
 * @property {number} RecoverHP=0 RecoverHP value
 * @property {number} RecoverMP=1 RecoverMP value
 * @property {number} AddBuf=2 AddBuf value
 * @property {number} AddExp=3 AddExp value
 * @property {number} AddMoney=4 AddMoney value
 * @property {number} AddItem=5 AddItem value
 * @property {number} AddBuff=6 AddBuff value
 * @property {number} AddSkillPoint=7 AddSkillPoint value
 */$root.ItemFunction=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="RecoverHP"]=0;values[valuesById[1]="RecoverMP"]=1;values[valuesById[2]="AddBuf"]=2;values[valuesById[3]="AddExp"]=3;values[valuesById[4]="AddMoney"]=4;values[valuesById[5]="AddItem"]=5;values[valuesById[6]="AddBuff"]=6;values[valuesById[7]="AddSkillPoint"]=7;return values;}();/**
 * BagHandleType enum.
 * @exports BagHandleType
 * @enum {string}
 * @property {number} SELL=0 SELL value
 * @property {number} TRAN=1 TRAN value
 * @property {number} CANCELTRAN=2 CANCELTRAN value
 */$root.BagHandleType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="SELL"]=0;values[valuesById[1]="TRAN"]=1;values[valuesById[2]="CANCELTRAN"]=2;return values;}();/**
 * TipsType enum.
 * @exports TipsType
 * @enum {string}
 * @property {number} Tips=0 Tips value
 * @property {number} Popup=1 Popup value
 */$root.TipsType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Tips"]=0;values[valuesById[1]="Popup"]=1;return values;}();$root.NUser=function(){/**
     * Properties of a NUser.
     * @exports INUser
     * @interface INUser
     * @property {number|null} [id] NUser id
     * @property {string|null} [nickname] NUser nickname
     * @property {number|Long|null} [coin] NUser coin
     * @property {INCharacter|null} [character] NUser character
     * @property {Array.<IUnLockCharacter>|null} [unLockCharacters] NUser unLockCharacters
     * @property {boolean|null} [isFollow] NUser isFollow
     * @property {Array.<INItem>|null} [bag] NUser bag
     * @property {boolean|null} [status] NUser status
     * @property {number|null} [fenSiCount] NUser fenSiCount
     * @property {UserStatus|null} [userStatus] NUser userStatus
     * @property {string|null} [biFen] NUser biFen
     * @property {TeamType|null} [teamType] NUser teamType
     * @property {number|null} [roomNum] NUser roomNum
     */ /**
     * Constructs a new NUser.
     * @exports NUser
     * @classdesc Represents a NUser.
     * @implements INUser
     * @constructor
     * @param {INUser=} [properties] Properties to set
     */function NUser(properties){this.unLockCharacters=[];this.bag=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NUser id.
     * @member {number} id
     * @memberof NUser
     * @instance
     */NUser.prototype.id=0;/**
     * NUser nickname.
     * @member {string} nickname
     * @memberof NUser
     * @instance
     */NUser.prototype.nickname="";/**
     * NUser coin.
     * @member {number|Long} coin
     * @memberof NUser
     * @instance
     */NUser.prototype.coin=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * NUser character.
     * @member {INCharacter|null|undefined} character
     * @memberof NUser
     * @instance
     */NUser.prototype.character=null;/**
     * NUser unLockCharacters.
     * @member {Array.<IUnLockCharacter>} unLockCharacters
     * @memberof NUser
     * @instance
     */NUser.prototype.unLockCharacters=$util.emptyArray;/**
     * NUser isFollow.
     * @member {boolean} isFollow
     * @memberof NUser
     * @instance
     */NUser.prototype.isFollow=false;/**
     * NUser bag.
     * @member {Array.<INItem>} bag
     * @memberof NUser
     * @instance
     */NUser.prototype.bag=$util.emptyArray;/**
     * NUser status.
     * @member {boolean} status
     * @memberof NUser
     * @instance
     */NUser.prototype.status=false;/**
     * NUser fenSiCount.
     * @member {number} fenSiCount
     * @memberof NUser
     * @instance
     */NUser.prototype.fenSiCount=0;/**
     * NUser userStatus.
     * @member {UserStatus} userStatus
     * @memberof NUser
     * @instance
     */NUser.prototype.userStatus=0;/**
     * NUser biFen.
     * @member {string} biFen
     * @memberof NUser
     * @instance
     */NUser.prototype.biFen="";/**
     * NUser teamType.
     * @member {TeamType} teamType
     * @memberof NUser
     * @instance
     */NUser.prototype.teamType=0;/**
     * NUser roomNum.
     * @member {number} roomNum
     * @memberof NUser
     * @instance
     */NUser.prototype.roomNum=0;/**
     * Creates a new NUser instance using the specified properties.
     * @function create
     * @memberof NUser
     * @static
     * @param {INUser=} [properties] Properties to set
     * @returns {NUser} NUser instance
     */NUser.create=function create(properties){return new NUser(properties);};/**
     * Encodes the specified NUser message. Does not implicitly {@link NUser.verify|verify} messages.
     * @function encode
     * @memberof NUser
     * @static
     * @param {INUser} message NUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NUser.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.id!=null&&message.hasOwnProperty("id"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);if(message.nickname!=null&&message.hasOwnProperty("nickname"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);if(message.coin!=null&&message.hasOwnProperty("coin"))writer.uint32(/* id 3, wireType 0 =*/24).int64(message.coin);if(message.character!=null&&message.hasOwnProperty("character"))$root.NCharacter.encode(message.character,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();if(message.unLockCharacters!=null&&message.unLockCharacters.length)for(var i=0;i<message.unLockCharacters.length;++i){$root.UnLockCharacter.encode(message.unLockCharacters[i],writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();}if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isFollow);if(message.bag!=null&&message.bag.length)for(var i=0;i<message.bag.length;++i){$root.NItem.encode(message.bag[i],writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();}if(message.status!=null&&message.hasOwnProperty("status"))writer.uint32(/* id 8, wireType 0 =*/64).bool(message.status);if(message.fenSiCount!=null&&message.hasOwnProperty("fenSiCount"))writer.uint32(/* id 9, wireType 0 =*/72).int32(message.fenSiCount);if(message.userStatus!=null&&message.hasOwnProperty("userStatus"))writer.uint32(/* id 10, wireType 0 =*/80).int32(message.userStatus);if(message.biFen!=null&&message.hasOwnProperty("biFen"))writer.uint32(/* id 11, wireType 2 =*/90).string(message.biFen);if(message.teamType!=null&&message.hasOwnProperty("teamType"))writer.uint32(/* id 12, wireType 0 =*/96).int32(message.teamType);if(message.roomNum!=null&&message.hasOwnProperty("roomNum"))writer.uint32(/* id 13, wireType 0 =*/104).int32(message.roomNum);return writer;};/**
     * Encodes the specified NUser message, length delimited. Does not implicitly {@link NUser.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NUser
     * @static
     * @param {INUser} message NUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NUser.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NUser message from the specified reader or buffer.
     * @function decode
     * @memberof NUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NUser} NUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NUser.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NUser();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.id=reader.int32();break;case 2:message.nickname=reader.string();break;case 3:message.coin=reader.int64();break;case 4:message.character=$root.NCharacter.decode(reader,reader.uint32());break;case 5:if(!(message.unLockCharacters&&message.unLockCharacters.length))message.unLockCharacters=[];message.unLockCharacters.push($root.UnLockCharacter.decode(reader,reader.uint32()));break;case 6:message.isFollow=reader.bool();break;case 7:if(!(message.bag&&message.bag.length))message.bag=[];message.bag.push($root.NItem.decode(reader,reader.uint32()));break;case 8:message.status=reader.bool();break;case 9:message.fenSiCount=reader.int32();break;case 10:message.userStatus=reader.int32();break;case 11:message.biFen=reader.string();break;case 12:message.teamType=reader.int32();break;case 13:message.roomNum=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NUser message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NUser} NUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NUser.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NUser message.
     * @function verify
     * @memberof NUser
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NUser.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isInteger(message.id))return"id: integer expected";if(message.nickname!=null&&message.hasOwnProperty("nickname"))if(!$util.isString(message.nickname))return"nickname: string expected";if(message.coin!=null&&message.hasOwnProperty("coin"))if(!$util.isInteger(message.coin)&&!(message.coin&&$util.isInteger(message.coin.low)&&$util.isInteger(message.coin.high)))return"coin: integer|Long expected";if(message.character!=null&&message.hasOwnProperty("character")){var error=$root.NCharacter.verify(message.character);if(error)return"character."+error;}if(message.unLockCharacters!=null&&message.hasOwnProperty("unLockCharacters")){if(!Array.isArray(message.unLockCharacters))return"unLockCharacters: array expected";for(var i=0;i<message.unLockCharacters.length;++i){var error=$root.UnLockCharacter.verify(message.unLockCharacters[i]);if(error)return"unLockCharacters."+error;}}if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))if(typeof message.isFollow!=="boolean")return"isFollow: boolean expected";if(message.bag!=null&&message.hasOwnProperty("bag")){if(!Array.isArray(message.bag))return"bag: array expected";for(var i=0;i<message.bag.length;++i){var error=$root.NItem.verify(message.bag[i]);if(error)return"bag."+error;}}if(message.status!=null&&message.hasOwnProperty("status"))if(typeof message.status!=="boolean")return"status: boolean expected";if(message.fenSiCount!=null&&message.hasOwnProperty("fenSiCount"))if(!$util.isInteger(message.fenSiCount))return"fenSiCount: integer expected";if(message.userStatus!=null&&message.hasOwnProperty("userStatus"))switch(message.userStatus){default:return"userStatus: enum value expected";case 0:case 1:case 2:case 3:case 4:break;}if(message.biFen!=null&&message.hasOwnProperty("biFen"))if(!$util.isString(message.biFen))return"biFen: string expected";if(message.teamType!=null&&message.hasOwnProperty("teamType"))switch(message.teamType){default:return"teamType: enum value expected";case 0:case 1:break;}if(message.roomNum!=null&&message.hasOwnProperty("roomNum"))if(!$util.isInteger(message.roomNum))return"roomNum: integer expected";return null;};/**
     * Creates a NUser message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NUser
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NUser} NUser
     */NUser.fromObject=function fromObject(object){if(object instanceof $root.NUser)return object;var message=new $root.NUser();if(object.id!=null)message.id=object.id|0;if(object.nickname!=null)message.nickname=String(object.nickname);if(object.coin!=null)if($util.Long)(message.coin=$util.Long.fromValue(object.coin)).unsigned=false;else if(typeof object.coin==="string")message.coin=parseInt(object.coin,10);else if(typeof object.coin==="number")message.coin=object.coin;else if(typeof object.coin==="object")message.coin=new $util.LongBits(object.coin.low>>>0,object.coin.high>>>0).toNumber();if(object.character!=null){if(typeof object.character!=="object")throw TypeError(".NUser.character: object expected");message.character=$root.NCharacter.fromObject(object.character);}if(object.unLockCharacters){if(!Array.isArray(object.unLockCharacters))throw TypeError(".NUser.unLockCharacters: array expected");message.unLockCharacters=[];for(var i=0;i<object.unLockCharacters.length;++i){if(typeof object.unLockCharacters[i]!=="object")throw TypeError(".NUser.unLockCharacters: object expected");message.unLockCharacters[i]=$root.UnLockCharacter.fromObject(object.unLockCharacters[i]);}}if(object.isFollow!=null)message.isFollow=Boolean(object.isFollow);if(object.bag){if(!Array.isArray(object.bag))throw TypeError(".NUser.bag: array expected");message.bag=[];for(var i=0;i<object.bag.length;++i){if(typeof object.bag[i]!=="object")throw TypeError(".NUser.bag: object expected");message.bag[i]=$root.NItem.fromObject(object.bag[i]);}}if(object.status!=null)message.status=Boolean(object.status);if(object.fenSiCount!=null)message.fenSiCount=object.fenSiCount|0;switch(object.userStatus){case"Normal":case 0:message.userStatus=0;break;case"Game":case 1:message.userStatus=1;break;case"Room":case 2:message.userStatus=2;break;case"Live":case 3:message.userStatus=3;break;case"GameOver":case 4:message.userStatus=4;break;}if(object.biFen!=null)message.biFen=String(object.biFen);switch(object.teamType){case"My":case 0:message.teamType=0;break;case"Enemy":case 1:message.teamType=1;break;}if(object.roomNum!=null)message.roomNum=object.roomNum|0;return message;};/**
     * Creates a plain object from a NUser message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NUser
     * @static
     * @param {NUser} message NUser
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NUser.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults){object.unLockCharacters=[];object.bag=[];}if(options.defaults){object.id=0;object.nickname="";if($util.Long){var long=new $util.Long(0,0,false);object.coin=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.coin=options.longs===String?"0":0;object.character=null;object.isFollow=false;object.status=false;object.fenSiCount=0;object.userStatus=options.enums===String?"Normal":0;object.biFen="";object.teamType=options.enums===String?"My":0;object.roomNum=0;}if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.nickname!=null&&message.hasOwnProperty("nickname"))object.nickname=message.nickname;if(message.coin!=null&&message.hasOwnProperty("coin"))if(typeof message.coin==="number")object.coin=options.longs===String?String(message.coin):message.coin;else object.coin=options.longs===String?$util.Long.prototype.toString.call(message.coin):options.longs===Number?new $util.LongBits(message.coin.low>>>0,message.coin.high>>>0).toNumber():message.coin;if(message.character!=null&&message.hasOwnProperty("character"))object.character=$root.NCharacter.toObject(message.character,options);if(message.unLockCharacters&&message.unLockCharacters.length){object.unLockCharacters=[];for(var j=0;j<message.unLockCharacters.length;++j){object.unLockCharacters[j]=$root.UnLockCharacter.toObject(message.unLockCharacters[j],options);}}if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))object.isFollow=message.isFollow;if(message.bag&&message.bag.length){object.bag=[];for(var j=0;j<message.bag.length;++j){object.bag[j]=$root.NItem.toObject(message.bag[j],options);}}if(message.status!=null&&message.hasOwnProperty("status"))object.status=message.status;if(message.fenSiCount!=null&&message.hasOwnProperty("fenSiCount"))object.fenSiCount=message.fenSiCount;if(message.userStatus!=null&&message.hasOwnProperty("userStatus"))object.userStatus=options.enums===String?$root.UserStatus[message.userStatus]:message.userStatus;if(message.biFen!=null&&message.hasOwnProperty("biFen"))object.biFen=message.biFen;if(message.teamType!=null&&message.hasOwnProperty("teamType"))object.teamType=options.enums===String?$root.TeamType[message.teamType]:message.teamType;if(message.roomNum!=null&&message.hasOwnProperty("roomNum"))object.roomNum=message.roomNum;return object;};/**
     * Converts this NUser to JSON.
     * @function toJSON
     * @memberof NUser
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NUser.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NUser;}();$root.UnLockCharacter=function(){/**
     * Properties of an UnLockCharacter.
     * @exports IUnLockCharacter
     * @interface IUnLockCharacter
     * @property {number|null} [tid] UnLockCharacter tid
     * @property {number|null} [cid] UnLockCharacter cid
     */ /**
     * Constructs a new UnLockCharacter.
     * @exports UnLockCharacter
     * @classdesc Represents an UnLockCharacter.
     * @implements IUnLockCharacter
     * @constructor
     * @param {IUnLockCharacter=} [properties] Properties to set
     */function UnLockCharacter(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UnLockCharacter tid.
     * @member {number} tid
     * @memberof UnLockCharacter
     * @instance
     */UnLockCharacter.prototype.tid=0;/**
     * UnLockCharacter cid.
     * @member {number} cid
     * @memberof UnLockCharacter
     * @instance
     */UnLockCharacter.prototype.cid=0;/**
     * Creates a new UnLockCharacter instance using the specified properties.
     * @function create
     * @memberof UnLockCharacter
     * @static
     * @param {IUnLockCharacter=} [properties] Properties to set
     * @returns {UnLockCharacter} UnLockCharacter instance
     */UnLockCharacter.create=function create(properties){return new UnLockCharacter(properties);};/**
     * Encodes the specified UnLockCharacter message. Does not implicitly {@link UnLockCharacter.verify|verify} messages.
     * @function encode
     * @memberof UnLockCharacter
     * @static
     * @param {IUnLockCharacter} message UnLockCharacter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockCharacter.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.tid!=null&&message.hasOwnProperty("tid"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tid);if(message.cid!=null&&message.hasOwnProperty("cid"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cid);return writer;};/**
     * Encodes the specified UnLockCharacter message, length delimited. Does not implicitly {@link UnLockCharacter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnLockCharacter
     * @static
     * @param {IUnLockCharacter} message UnLockCharacter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockCharacter.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UnLockCharacter message from the specified reader or buffer.
     * @function decode
     * @memberof UnLockCharacter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnLockCharacter} UnLockCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockCharacter.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UnLockCharacter();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.tid=reader.int32();break;case 2:message.cid=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UnLockCharacter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnLockCharacter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnLockCharacter} UnLockCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockCharacter.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UnLockCharacter message.
     * @function verify
     * @memberof UnLockCharacter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UnLockCharacter.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.tid!=null&&message.hasOwnProperty("tid"))if(!$util.isInteger(message.tid))return"tid: integer expected";if(message.cid!=null&&message.hasOwnProperty("cid"))if(!$util.isInteger(message.cid))return"cid: integer expected";return null;};/**
     * Creates an UnLockCharacter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnLockCharacter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnLockCharacter} UnLockCharacter
     */UnLockCharacter.fromObject=function fromObject(object){if(object instanceof $root.UnLockCharacter)return object;var message=new $root.UnLockCharacter();if(object.tid!=null)message.tid=object.tid|0;if(object.cid!=null)message.cid=object.cid|0;return message;};/**
     * Creates a plain object from an UnLockCharacter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnLockCharacter
     * @static
     * @param {UnLockCharacter} message UnLockCharacter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UnLockCharacter.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.tid=0;object.cid=0;}if(message.tid!=null&&message.hasOwnProperty("tid"))object.tid=message.tid;if(message.cid!=null&&message.hasOwnProperty("cid"))object.cid=message.cid;return object;};/**
     * Converts this UnLockCharacter to JSON.
     * @function toJSON
     * @memberof UnLockCharacter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UnLockCharacter.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UnLockCharacter;}();$root.NCharacter=function(){/**
     * Properties of a NCharacter.
     * @exports INCharacter
     * @interface INCharacter
     * @property {number|null} [tid] NCharacter tid
     * @property {number|null} [cid] NCharacter cid
     * @property {number|null} [level] NCharacter level
     * @property {number|Long|null} [exp] NCharacter exp
     * @property {number|null} [userId] NCharacter userId
     * @property {number|null} [att] NCharacter att
     * @property {number|null} [def] NCharacter def
     * @property {number|null} [hp] NCharacter hp
     * @property {number|null} [cri] NCharacter cri
     * @property {number|null} [resu] NCharacter resu
     * @property {number|null} [speed] NCharacter speed
     * @property {number|null} [cd] NCharacter cd
     * @property {number|null} [attSpot] NCharacter attSpot
     * @property {number|null} [defSpot] NCharacter defSpot
     * @property {number|null} [hpSpot] NCharacter hpSpot
     * @property {number|null} [criSpot] NCharacter criSpot
     * @property {number|null} [resuSpot] NCharacter resuSpot
     * @property {number|null} [speedSpot] NCharacter speedSpot
     * @property {number|null} [cdSpot] NCharacter cdSpot
     * @property {number|Long|null} [levelExp] NCharacter levelExp
     * @property {number|null} [speedValue] NCharacter speedValue
     */ /**
     * Constructs a new NCharacter.
     * @exports NCharacter
     * @classdesc Represents a NCharacter.
     * @implements INCharacter
     * @constructor
     * @param {INCharacter=} [properties] Properties to set
     */function NCharacter(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NCharacter tid.
     * @member {number} tid
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.tid=0;/**
     * NCharacter cid.
     * @member {number} cid
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.cid=0;/**
     * NCharacter level.
     * @member {number} level
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.level=0;/**
     * NCharacter exp.
     * @member {number|Long} exp
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.exp=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * NCharacter userId.
     * @member {number} userId
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.userId=0;/**
     * NCharacter att.
     * @member {number} att
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.att=0;/**
     * NCharacter def.
     * @member {number} def
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.def=0;/**
     * NCharacter hp.
     * @member {number} hp
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.hp=0;/**
     * NCharacter cri.
     * @member {number} cri
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.cri=0;/**
     * NCharacter resu.
     * @member {number} resu
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.resu=0;/**
     * NCharacter speed.
     * @member {number} speed
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.speed=0;/**
     * NCharacter cd.
     * @member {number} cd
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.cd=0;/**
     * NCharacter attSpot.
     * @member {number} attSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.attSpot=0;/**
     * NCharacter defSpot.
     * @member {number} defSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.defSpot=0;/**
     * NCharacter hpSpot.
     * @member {number} hpSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.hpSpot=0;/**
     * NCharacter criSpot.
     * @member {number} criSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.criSpot=0;/**
     * NCharacter resuSpot.
     * @member {number} resuSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.resuSpot=0;/**
     * NCharacter speedSpot.
     * @member {number} speedSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.speedSpot=0;/**
     * NCharacter cdSpot.
     * @member {number} cdSpot
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.cdSpot=0;/**
     * NCharacter levelExp.
     * @member {number|Long} levelExp
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.levelExp=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * NCharacter speedValue.
     * @member {number} speedValue
     * @memberof NCharacter
     * @instance
     */NCharacter.prototype.speedValue=0;/**
     * Creates a new NCharacter instance using the specified properties.
     * @function create
     * @memberof NCharacter
     * @static
     * @param {INCharacter=} [properties] Properties to set
     * @returns {NCharacter} NCharacter instance
     */NCharacter.create=function create(properties){return new NCharacter(properties);};/**
     * Encodes the specified NCharacter message. Does not implicitly {@link NCharacter.verify|verify} messages.
     * @function encode
     * @memberof NCharacter
     * @static
     * @param {INCharacter} message NCharacter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NCharacter.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.tid!=null&&message.hasOwnProperty("tid"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tid);if(message.cid!=null&&message.hasOwnProperty("cid"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cid);if(message.level!=null&&message.hasOwnProperty("level"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.level);if(message.exp!=null&&message.hasOwnProperty("exp"))writer.uint32(/* id 4, wireType 0 =*/32).int64(message.exp);if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 5, wireType 0 =*/40).int32(message.userId);if(message.att!=null&&message.hasOwnProperty("att"))writer.uint32(/* id 6, wireType 0 =*/48).int32(message.att);if(message.def!=null&&message.hasOwnProperty("def"))writer.uint32(/* id 7, wireType 0 =*/56).int32(message.def);if(message.hp!=null&&message.hasOwnProperty("hp"))writer.uint32(/* id 8, wireType 0 =*/64).int32(message.hp);if(message.cri!=null&&message.hasOwnProperty("cri"))writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cri);if(message.resu!=null&&message.hasOwnProperty("resu"))writer.uint32(/* id 10, wireType 0 =*/80).int32(message.resu);if(message.speed!=null&&message.hasOwnProperty("speed"))writer.uint32(/* id 11, wireType 0 =*/88).int32(message.speed);if(message.cd!=null&&message.hasOwnProperty("cd"))writer.uint32(/* id 12, wireType 0 =*/96).int32(message.cd);if(message.attSpot!=null&&message.hasOwnProperty("attSpot"))writer.uint32(/* id 13, wireType 0 =*/104).int32(message.attSpot);if(message.defSpot!=null&&message.hasOwnProperty("defSpot"))writer.uint32(/* id 14, wireType 0 =*/112).int32(message.defSpot);if(message.hpSpot!=null&&message.hasOwnProperty("hpSpot"))writer.uint32(/* id 15, wireType 0 =*/120).int32(message.hpSpot);if(message.criSpot!=null&&message.hasOwnProperty("criSpot"))writer.uint32(/* id 16, wireType 0 =*/128).int32(message.criSpot);if(message.resuSpot!=null&&message.hasOwnProperty("resuSpot"))writer.uint32(/* id 17, wireType 0 =*/136).int32(message.resuSpot);if(message.speedSpot!=null&&message.hasOwnProperty("speedSpot"))writer.uint32(/* id 18, wireType 0 =*/144).int32(message.speedSpot);if(message.cdSpot!=null&&message.hasOwnProperty("cdSpot"))writer.uint32(/* id 19, wireType 0 =*/152).int32(message.cdSpot);if(message.levelExp!=null&&message.hasOwnProperty("levelExp"))writer.uint32(/* id 20, wireType 0 =*/160).int64(message.levelExp);if(message.speedValue!=null&&message.hasOwnProperty("speedValue"))writer.uint32(/* id 21, wireType 0 =*/168).int32(message.speedValue);return writer;};/**
     * Encodes the specified NCharacter message, length delimited. Does not implicitly {@link NCharacter.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NCharacter
     * @static
     * @param {INCharacter} message NCharacter message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NCharacter.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NCharacter message from the specified reader or buffer.
     * @function decode
     * @memberof NCharacter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NCharacter} NCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NCharacter.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NCharacter();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.tid=reader.int32();break;case 2:message.cid=reader.int32();break;case 3:message.level=reader.int32();break;case 4:message.exp=reader.int64();break;case 5:message.userId=reader.int32();break;case 6:message.att=reader.int32();break;case 7:message.def=reader.int32();break;case 8:message.hp=reader.int32();break;case 9:message.cri=reader.int32();break;case 10:message.resu=reader.int32();break;case 11:message.speed=reader.int32();break;case 12:message.cd=reader.int32();break;case 13:message.attSpot=reader.int32();break;case 14:message.defSpot=reader.int32();break;case 15:message.hpSpot=reader.int32();break;case 16:message.criSpot=reader.int32();break;case 17:message.resuSpot=reader.int32();break;case 18:message.speedSpot=reader.int32();break;case 19:message.cdSpot=reader.int32();break;case 20:message.levelExp=reader.int64();break;case 21:message.speedValue=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NCharacter message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NCharacter
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NCharacter} NCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NCharacter.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NCharacter message.
     * @function verify
     * @memberof NCharacter
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NCharacter.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.tid!=null&&message.hasOwnProperty("tid"))if(!$util.isInteger(message.tid))return"tid: integer expected";if(message.cid!=null&&message.hasOwnProperty("cid"))if(!$util.isInteger(message.cid))return"cid: integer expected";if(message.level!=null&&message.hasOwnProperty("level"))if(!$util.isInteger(message.level))return"level: integer expected";if(message.exp!=null&&message.hasOwnProperty("exp"))if(!$util.isInteger(message.exp)&&!(message.exp&&$util.isInteger(message.exp.low)&&$util.isInteger(message.exp.high)))return"exp: integer|Long expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.att!=null&&message.hasOwnProperty("att"))if(!$util.isInteger(message.att))return"att: integer expected";if(message.def!=null&&message.hasOwnProperty("def"))if(!$util.isInteger(message.def))return"def: integer expected";if(message.hp!=null&&message.hasOwnProperty("hp"))if(!$util.isInteger(message.hp))return"hp: integer expected";if(message.cri!=null&&message.hasOwnProperty("cri"))if(!$util.isInteger(message.cri))return"cri: integer expected";if(message.resu!=null&&message.hasOwnProperty("resu"))if(!$util.isInteger(message.resu))return"resu: integer expected";if(message.speed!=null&&message.hasOwnProperty("speed"))if(!$util.isInteger(message.speed))return"speed: integer expected";if(message.cd!=null&&message.hasOwnProperty("cd"))if(!$util.isInteger(message.cd))return"cd: integer expected";if(message.attSpot!=null&&message.hasOwnProperty("attSpot"))if(!$util.isInteger(message.attSpot))return"attSpot: integer expected";if(message.defSpot!=null&&message.hasOwnProperty("defSpot"))if(!$util.isInteger(message.defSpot))return"defSpot: integer expected";if(message.hpSpot!=null&&message.hasOwnProperty("hpSpot"))if(!$util.isInteger(message.hpSpot))return"hpSpot: integer expected";if(message.criSpot!=null&&message.hasOwnProperty("criSpot"))if(!$util.isInteger(message.criSpot))return"criSpot: integer expected";if(message.resuSpot!=null&&message.hasOwnProperty("resuSpot"))if(!$util.isInteger(message.resuSpot))return"resuSpot: integer expected";if(message.speedSpot!=null&&message.hasOwnProperty("speedSpot"))if(!$util.isInteger(message.speedSpot))return"speedSpot: integer expected";if(message.cdSpot!=null&&message.hasOwnProperty("cdSpot"))if(!$util.isInteger(message.cdSpot))return"cdSpot: integer expected";if(message.levelExp!=null&&message.hasOwnProperty("levelExp"))if(!$util.isInteger(message.levelExp)&&!(message.levelExp&&$util.isInteger(message.levelExp.low)&&$util.isInteger(message.levelExp.high)))return"levelExp: integer|Long expected";if(message.speedValue!=null&&message.hasOwnProperty("speedValue"))if(!$util.isInteger(message.speedValue))return"speedValue: integer expected";return null;};/**
     * Creates a NCharacter message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NCharacter
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NCharacter} NCharacter
     */NCharacter.fromObject=function fromObject(object){if(object instanceof $root.NCharacter)return object;var message=new $root.NCharacter();if(object.tid!=null)message.tid=object.tid|0;if(object.cid!=null)message.cid=object.cid|0;if(object.level!=null)message.level=object.level|0;if(object.exp!=null)if($util.Long)(message.exp=$util.Long.fromValue(object.exp)).unsigned=false;else if(typeof object.exp==="string")message.exp=parseInt(object.exp,10);else if(typeof object.exp==="number")message.exp=object.exp;else if(typeof object.exp==="object")message.exp=new $util.LongBits(object.exp.low>>>0,object.exp.high>>>0).toNumber();if(object.userId!=null)message.userId=object.userId|0;if(object.att!=null)message.att=object.att|0;if(object.def!=null)message.def=object.def|0;if(object.hp!=null)message.hp=object.hp|0;if(object.cri!=null)message.cri=object.cri|0;if(object.resu!=null)message.resu=object.resu|0;if(object.speed!=null)message.speed=object.speed|0;if(object.cd!=null)message.cd=object.cd|0;if(object.attSpot!=null)message.attSpot=object.attSpot|0;if(object.defSpot!=null)message.defSpot=object.defSpot|0;if(object.hpSpot!=null)message.hpSpot=object.hpSpot|0;if(object.criSpot!=null)message.criSpot=object.criSpot|0;if(object.resuSpot!=null)message.resuSpot=object.resuSpot|0;if(object.speedSpot!=null)message.speedSpot=object.speedSpot|0;if(object.cdSpot!=null)message.cdSpot=object.cdSpot|0;if(object.levelExp!=null)if($util.Long)(message.levelExp=$util.Long.fromValue(object.levelExp)).unsigned=false;else if(typeof object.levelExp==="string")message.levelExp=parseInt(object.levelExp,10);else if(typeof object.levelExp==="number")message.levelExp=object.levelExp;else if(typeof object.levelExp==="object")message.levelExp=new $util.LongBits(object.levelExp.low>>>0,object.levelExp.high>>>0).toNumber();if(object.speedValue!=null)message.speedValue=object.speedValue|0;return message;};/**
     * Creates a plain object from a NCharacter message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NCharacter
     * @static
     * @param {NCharacter} message NCharacter
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NCharacter.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.tid=0;object.cid=0;object.level=0;if($util.Long){var long=new $util.Long(0,0,false);object.exp=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.exp=options.longs===String?"0":0;object.userId=0;object.att=0;object.def=0;object.hp=0;object.cri=0;object.resu=0;object.speed=0;object.cd=0;object.attSpot=0;object.defSpot=0;object.hpSpot=0;object.criSpot=0;object.resuSpot=0;object.speedSpot=0;object.cdSpot=0;if($util.Long){var long=new $util.Long(0,0,false);object.levelExp=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.levelExp=options.longs===String?"0":0;object.speedValue=0;}if(message.tid!=null&&message.hasOwnProperty("tid"))object.tid=message.tid;if(message.cid!=null&&message.hasOwnProperty("cid"))object.cid=message.cid;if(message.level!=null&&message.hasOwnProperty("level"))object.level=message.level;if(message.exp!=null&&message.hasOwnProperty("exp"))if(typeof message.exp==="number")object.exp=options.longs===String?String(message.exp):message.exp;else object.exp=options.longs===String?$util.Long.prototype.toString.call(message.exp):options.longs===Number?new $util.LongBits(message.exp.low>>>0,message.exp.high>>>0).toNumber():message.exp;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.att!=null&&message.hasOwnProperty("att"))object.att=message.att;if(message.def!=null&&message.hasOwnProperty("def"))object.def=message.def;if(message.hp!=null&&message.hasOwnProperty("hp"))object.hp=message.hp;if(message.cri!=null&&message.hasOwnProperty("cri"))object.cri=message.cri;if(message.resu!=null&&message.hasOwnProperty("resu"))object.resu=message.resu;if(message.speed!=null&&message.hasOwnProperty("speed"))object.speed=message.speed;if(message.cd!=null&&message.hasOwnProperty("cd"))object.cd=message.cd;if(message.attSpot!=null&&message.hasOwnProperty("attSpot"))object.attSpot=message.attSpot;if(message.defSpot!=null&&message.hasOwnProperty("defSpot"))object.defSpot=message.defSpot;if(message.hpSpot!=null&&message.hasOwnProperty("hpSpot"))object.hpSpot=message.hpSpot;if(message.criSpot!=null&&message.hasOwnProperty("criSpot"))object.criSpot=message.criSpot;if(message.resuSpot!=null&&message.hasOwnProperty("resuSpot"))object.resuSpot=message.resuSpot;if(message.speedSpot!=null&&message.hasOwnProperty("speedSpot"))object.speedSpot=message.speedSpot;if(message.cdSpot!=null&&message.hasOwnProperty("cdSpot"))object.cdSpot=message.cdSpot;if(message.levelExp!=null&&message.hasOwnProperty("levelExp"))if(typeof message.levelExp==="number")object.levelExp=options.longs===String?String(message.levelExp):message.levelExp;else object.levelExp=options.longs===String?$util.Long.prototype.toString.call(message.levelExp):options.longs===Number?new $util.LongBits(message.levelExp.low>>>0,message.levelExp.high>>>0).toNumber():message.levelExp;if(message.speedValue!=null&&message.hasOwnProperty("speedValue"))object.speedValue=message.speedValue;return object;};/**
     * Converts this NCharacter to JSON.
     * @function toJSON
     * @memberof NCharacter
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NCharacter.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NCharacter;}();$root.NItem=function(){/**
     * Properties of a NItem.
     * @exports INItem
     * @interface INItem
     * @property {number|null} [itemId] NItem itemId
     * @property {number|null} [count] NItem count
     * @property {boolean|null} [isTran] NItem isTran
     * @property {number|Long|null} [money] NItem money
     */ /**
     * Constructs a new NItem.
     * @exports NItem
     * @classdesc Represents a NItem.
     * @implements INItem
     * @constructor
     * @param {INItem=} [properties] Properties to set
     */function NItem(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NItem itemId.
     * @member {number} itemId
     * @memberof NItem
     * @instance
     */NItem.prototype.itemId=0;/**
     * NItem count.
     * @member {number} count
     * @memberof NItem
     * @instance
     */NItem.prototype.count=0;/**
     * NItem isTran.
     * @member {boolean} isTran
     * @memberof NItem
     * @instance
     */NItem.prototype.isTran=false;/**
     * NItem money.
     * @member {number|Long} money
     * @memberof NItem
     * @instance
     */NItem.prototype.money=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new NItem instance using the specified properties.
     * @function create
     * @memberof NItem
     * @static
     * @param {INItem=} [properties] Properties to set
     * @returns {NItem} NItem instance
     */NItem.create=function create(properties){return new NItem(properties);};/**
     * Encodes the specified NItem message. Does not implicitly {@link NItem.verify|verify} messages.
     * @function encode
     * @memberof NItem
     * @static
     * @param {INItem} message NItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NItem.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);if(message.count!=null&&message.hasOwnProperty("count"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);if(message.isTran!=null&&message.hasOwnProperty("isTran"))writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isTran);if(message.money!=null&&message.hasOwnProperty("money"))writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);return writer;};/**
     * Encodes the specified NItem message, length delimited. Does not implicitly {@link NItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NItem
     * @static
     * @param {INItem} message NItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NItem.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NItem message from the specified reader or buffer.
     * @function decode
     * @memberof NItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NItem} NItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NItem.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NItem();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.itemId=reader.int32();break;case 2:message.count=reader.int32();break;case 3:message.isTran=reader.bool();break;case 4:message.money=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NItem} NItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NItem.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NItem message.
     * @function verify
     * @memberof NItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NItem.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";if(message.count!=null&&message.hasOwnProperty("count"))if(!$util.isInteger(message.count))return"count: integer expected";if(message.isTran!=null&&message.hasOwnProperty("isTran"))if(typeof message.isTran!=="boolean")return"isTran: boolean expected";if(message.money!=null&&message.hasOwnProperty("money"))if(!$util.isInteger(message.money)&&!(message.money&&$util.isInteger(message.money.low)&&$util.isInteger(message.money.high)))return"money: integer|Long expected";return null;};/**
     * Creates a NItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NItem} NItem
     */NItem.fromObject=function fromObject(object){if(object instanceof $root.NItem)return object;var message=new $root.NItem();if(object.itemId!=null)message.itemId=object.itemId|0;if(object.count!=null)message.count=object.count|0;if(object.isTran!=null)message.isTran=Boolean(object.isTran);if(object.money!=null)if($util.Long)(message.money=$util.Long.fromValue(object.money)).unsigned=false;else if(typeof object.money==="string")message.money=parseInt(object.money,10);else if(typeof object.money==="number")message.money=object.money;else if(typeof object.money==="object")message.money=new $util.LongBits(object.money.low>>>0,object.money.high>>>0).toNumber();return message;};/**
     * Creates a plain object from a NItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NItem
     * @static
     * @param {NItem} message NItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NItem.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.itemId=0;object.count=0;object.isTran=false;if($util.Long){var long=new $util.Long(0,0,false);object.money=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.money=options.longs===String?"0":0;}if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;if(message.count!=null&&message.hasOwnProperty("count"))object.count=message.count;if(message.isTran!=null&&message.hasOwnProperty("isTran"))object.isTran=message.isTran;if(message.money!=null&&message.hasOwnProperty("money"))if(typeof message.money==="number")object.money=options.longs===String?String(message.money):message.money;else object.money=options.longs===String?$util.Long.prototype.toString.call(message.money):options.longs===Number?new $util.LongBits(message.money.low>>>0,message.money.high>>>0).toNumber():message.money;return object;};/**
     * Converts this NItem to JSON.
     * @function toJSON
     * @memberof NItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NItem.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NItem;}();/**
 * StatusAction enum.
 * @exports StatusAction
 * @enum {string}
 * @property {number} UPDATE=0 UPDATE value
 * @property {number} ADD=1 ADD value
 * @property {number} DELETE=2 DELETE value
 */$root.StatusAction=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="UPDATE"]=0;values[valuesById[1]="ADD"]=1;values[valuesById[2]="DELETE"]=2;return values;}();/**
 * StatusType enum.
 * @exports StatusType
 * @enum {string}
 * @property {number} MONEY=0 MONEY value
 * @property {number} EXP=1 EXP value
 * @property {number} SKILL_POINT=2 SKILL_POINT value
 * @property {number} ITEM=3 ITEM value
 */$root.StatusType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="MONEY"]=0;values[valuesById[1]="EXP"]=1;values[valuesById[2]="SKILL_POINT"]=2;values[valuesById[3]="ITEM"]=3;return values;}();$root.NStatus=function(){/**
     * Properties of a NStatus.
     * @exports INStatus
     * @interface INStatus
     * @property {StatusType|null} [type] NStatus type
     * @property {StatusAction|null} [action] NStatus action
     * @property {number|null} [id] NStatus id
     * @property {number|Long|null} [value] NStatus value
     */ /**
     * Constructs a new NStatus.
     * @exports NStatus
     * @classdesc Represents a NStatus.
     * @implements INStatus
     * @constructor
     * @param {INStatus=} [properties] Properties to set
     */function NStatus(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NStatus type.
     * @member {StatusType} type
     * @memberof NStatus
     * @instance
     */NStatus.prototype.type=0;/**
     * NStatus action.
     * @member {StatusAction} action
     * @memberof NStatus
     * @instance
     */NStatus.prototype.action=0;/**
     * NStatus id.
     * @member {number} id
     * @memberof NStatus
     * @instance
     */NStatus.prototype.id=0;/**
     * NStatus value.
     * @member {number|Long} value
     * @memberof NStatus
     * @instance
     */NStatus.prototype.value=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new NStatus instance using the specified properties.
     * @function create
     * @memberof NStatus
     * @static
     * @param {INStatus=} [properties] Properties to set
     * @returns {NStatus} NStatus instance
     */NStatus.create=function create(properties){return new NStatus(properties);};/**
     * Encodes the specified NStatus message. Does not implicitly {@link NStatus.verify|verify} messages.
     * @function encode
     * @memberof NStatus
     * @static
     * @param {INStatus} message NStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NStatus.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.type!=null&&message.hasOwnProperty("type"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);if(message.action!=null&&message.hasOwnProperty("action"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);if(message.id!=null&&message.hasOwnProperty("id"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.id);if(message.value!=null&&message.hasOwnProperty("value"))writer.uint32(/* id 4, wireType 0 =*/32).int64(message.value);return writer;};/**
     * Encodes the specified NStatus message, length delimited. Does not implicitly {@link NStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NStatus
     * @static
     * @param {INStatus} message NStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NStatus.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NStatus message from the specified reader or buffer.
     * @function decode
     * @memberof NStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NStatus} NStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NStatus.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NStatus();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.type=reader.int32();break;case 2:message.action=reader.int32();break;case 3:message.id=reader.int32();break;case 4:message.value=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NStatus} NStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NStatus.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NStatus message.
     * @function verify
     * @memberof NStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NStatus.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.type!=null&&message.hasOwnProperty("type"))switch(message.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:break;}if(message.action!=null&&message.hasOwnProperty("action"))switch(message.action){default:return"action: enum value expected";case 0:case 1:case 2:break;}if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isInteger(message.id))return"id: integer expected";if(message.value!=null&&message.hasOwnProperty("value"))if(!$util.isInteger(message.value)&&!(message.value&&$util.isInteger(message.value.low)&&$util.isInteger(message.value.high)))return"value: integer|Long expected";return null;};/**
     * Creates a NStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NStatus} NStatus
     */NStatus.fromObject=function fromObject(object){if(object instanceof $root.NStatus)return object;var message=new $root.NStatus();switch(object.type){case"MONEY":case 0:message.type=0;break;case"EXP":case 1:message.type=1;break;case"SKILL_POINT":case 2:message.type=2;break;case"ITEM":case 3:message.type=3;break;}switch(object.action){case"UPDATE":case 0:message.action=0;break;case"ADD":case 1:message.action=1;break;case"DELETE":case 2:message.action=2;break;}if(object.id!=null)message.id=object.id|0;if(object.value!=null)if($util.Long)(message.value=$util.Long.fromValue(object.value)).unsigned=false;else if(typeof object.value==="string")message.value=parseInt(object.value,10);else if(typeof object.value==="number")message.value=object.value;else if(typeof object.value==="object")message.value=new $util.LongBits(object.value.low>>>0,object.value.high>>>0).toNumber();return message;};/**
     * Creates a plain object from a NStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NStatus
     * @static
     * @param {NStatus} message NStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NStatus.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.type=options.enums===String?"MONEY":0;object.action=options.enums===String?"UPDATE":0;object.id=0;if($util.Long){var long=new $util.Long(0,0,false);object.value=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.value=options.longs===String?"0":0;}if(message.type!=null&&message.hasOwnProperty("type"))object.type=options.enums===String?$root.StatusType[message.type]:message.type;if(message.action!=null&&message.hasOwnProperty("action"))object.action=options.enums===String?$root.StatusAction[message.action]:message.action;if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.value!=null&&message.hasOwnProperty("value"))if(typeof message.value==="number")object.value=options.longs===String?String(message.value):message.value;else object.value=options.longs===String?$util.Long.prototype.toString.call(message.value):options.longs===Number?new $util.LongBits(message.value.low>>>0,message.value.high>>>0).toNumber():message.value;return object;};/**
     * Converts this NStatus to JSON.
     * @function toJSON
     * @memberof NStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NStatus.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NStatus;}();$root.StatusNotify=function(){/**
     * Properties of a StatusNotify.
     * @exports IStatusNotify
     * @interface IStatusNotify
     * @property {Array.<INStatus>|null} [status] StatusNotify status
     */ /**
     * Constructs a new StatusNotify.
     * @exports StatusNotify
     * @classdesc Represents a StatusNotify.
     * @implements IStatusNotify
     * @constructor
     * @param {IStatusNotify=} [properties] Properties to set
     */function StatusNotify(properties){this.status=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * StatusNotify status.
     * @member {Array.<INStatus>} status
     * @memberof StatusNotify
     * @instance
     */StatusNotify.prototype.status=$util.emptyArray;/**
     * Creates a new StatusNotify instance using the specified properties.
     * @function create
     * @memberof StatusNotify
     * @static
     * @param {IStatusNotify=} [properties] Properties to set
     * @returns {StatusNotify} StatusNotify instance
     */StatusNotify.create=function create(properties){return new StatusNotify(properties);};/**
     * Encodes the specified StatusNotify message. Does not implicitly {@link StatusNotify.verify|verify} messages.
     * @function encode
     * @memberof StatusNotify
     * @static
     * @param {IStatusNotify} message StatusNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StatusNotify.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.status!=null&&message.status.length)for(var i=0;i<message.status.length;++i){$root.NStatus.encode(message.status[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}return writer;};/**
     * Encodes the specified StatusNotify message, length delimited. Does not implicitly {@link StatusNotify.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StatusNotify
     * @static
     * @param {IStatusNotify} message StatusNotify message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StatusNotify.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a StatusNotify message from the specified reader or buffer.
     * @function decode
     * @memberof StatusNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StatusNotify} StatusNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StatusNotify.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.StatusNotify();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.status&&message.status.length))message.status=[];message.status.push($root.NStatus.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a StatusNotify message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StatusNotify
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StatusNotify} StatusNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StatusNotify.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a StatusNotify message.
     * @function verify
     * @memberof StatusNotify
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */StatusNotify.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.status!=null&&message.hasOwnProperty("status")){if(!Array.isArray(message.status))return"status: array expected";for(var i=0;i<message.status.length;++i){var error=$root.NStatus.verify(message.status[i]);if(error)return"status."+error;}}return null;};/**
     * Creates a StatusNotify message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StatusNotify
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StatusNotify} StatusNotify
     */StatusNotify.fromObject=function fromObject(object){if(object instanceof $root.StatusNotify)return object;var message=new $root.StatusNotify();if(object.status){if(!Array.isArray(object.status))throw TypeError(".StatusNotify.status: array expected");message.status=[];for(var i=0;i<object.status.length;++i){if(typeof object.status[i]!=="object")throw TypeError(".StatusNotify.status: object expected");message.status[i]=$root.NStatus.fromObject(object.status[i]);}}return message;};/**
     * Creates a plain object from a StatusNotify message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StatusNotify
     * @static
     * @param {StatusNotify} message StatusNotify
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */StatusNotify.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.status=[];if(message.status&&message.status.length){object.status=[];for(var j=0;j<message.status.length;++j){object.status[j]=$root.NStatus.toObject(message.status[j],options);}}return object;};/**
     * Converts this StatusNotify to JSON.
     * @function toJSON
     * @memberof StatusNotify
     * @instance
     * @returns {Object.<string,*>} JSON object
     */StatusNotify.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return StatusNotify;}();$root.NUserStatusChange=function(){/**
     * Properties of a NUserStatusChange.
     * @exports INUserStatusChange
     * @interface INUserStatusChange
     * @property {number|null} [userId] NUserStatusChange userId
     * @property {boolean|null} [status] NUserStatusChange status
     */ /**
     * Constructs a new NUserStatusChange.
     * @exports NUserStatusChange
     * @classdesc Represents a NUserStatusChange.
     * @implements INUserStatusChange
     * @constructor
     * @param {INUserStatusChange=} [properties] Properties to set
     */function NUserStatusChange(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NUserStatusChange userId.
     * @member {number} userId
     * @memberof NUserStatusChange
     * @instance
     */NUserStatusChange.prototype.userId=0;/**
     * NUserStatusChange status.
     * @member {boolean} status
     * @memberof NUserStatusChange
     * @instance
     */NUserStatusChange.prototype.status=false;/**
     * Creates a new NUserStatusChange instance using the specified properties.
     * @function create
     * @memberof NUserStatusChange
     * @static
     * @param {INUserStatusChange=} [properties] Properties to set
     * @returns {NUserStatusChange} NUserStatusChange instance
     */NUserStatusChange.create=function create(properties){return new NUserStatusChange(properties);};/**
     * Encodes the specified NUserStatusChange message. Does not implicitly {@link NUserStatusChange.verify|verify} messages.
     * @function encode
     * @memberof NUserStatusChange
     * @static
     * @param {INUserStatusChange} message NUserStatusChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NUserStatusChange.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);if(message.status!=null&&message.hasOwnProperty("status"))writer.uint32(/* id 2, wireType 0 =*/16).bool(message.status);return writer;};/**
     * Encodes the specified NUserStatusChange message, length delimited. Does not implicitly {@link NUserStatusChange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NUserStatusChange
     * @static
     * @param {INUserStatusChange} message NUserStatusChange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NUserStatusChange.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NUserStatusChange message from the specified reader or buffer.
     * @function decode
     * @memberof NUserStatusChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NUserStatusChange} NUserStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NUserStatusChange.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NUserStatusChange();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;case 2:message.status=reader.bool();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NUserStatusChange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NUserStatusChange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NUserStatusChange} NUserStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NUserStatusChange.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NUserStatusChange message.
     * @function verify
     * @memberof NUserStatusChange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NUserStatusChange.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.status!=null&&message.hasOwnProperty("status"))if(typeof message.status!=="boolean")return"status: boolean expected";return null;};/**
     * Creates a NUserStatusChange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NUserStatusChange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NUserStatusChange} NUserStatusChange
     */NUserStatusChange.fromObject=function fromObject(object){if(object instanceof $root.NUserStatusChange)return object;var message=new $root.NUserStatusChange();if(object.userId!=null)message.userId=object.userId|0;if(object.status!=null)message.status=Boolean(object.status);return message;};/**
     * Creates a plain object from a NUserStatusChange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NUserStatusChange
     * @static
     * @param {NUserStatusChange} message NUserStatusChange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NUserStatusChange.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId=0;object.status=false;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.status!=null&&message.hasOwnProperty("status"))object.status=message.status;return object;};/**
     * Converts this NUserStatusChange to JSON.
     * @function toJSON
     * @memberof NUserStatusChange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NUserStatusChange.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NUserStatusChange;}();$root.NAuctionItem=function(){/**
     * Properties of a NAuctionItem.
     * @exports INAuctionItem
     * @interface INAuctionItem
     * @property {number|null} [id] NAuctionItem id
     * @property {number|null} [userId] NAuctionItem userId
     * @property {number|null} [itemId] NAuctionItem itemId
     * @property {number|null} [count] NAuctionItem count
     * @property {number|Long|null} [biddingPrice] NAuctionItem biddingPrice
     * @property {number|Long|null} [currentPrice] NAuctionItem currentPrice
     * @property {number|null} [bidderUserId] NAuctionItem bidderUserId
     * @property {string|null} [bidderNickName] NAuctionItem bidderNickName
     * @property {number|Long|null} [remainingTime] NAuctionItem remainingTime
     */ /**
     * Constructs a new NAuctionItem.
     * @exports NAuctionItem
     * @classdesc Represents a NAuctionItem.
     * @implements INAuctionItem
     * @constructor
     * @param {INAuctionItem=} [properties] Properties to set
     */function NAuctionItem(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NAuctionItem id.
     * @member {number} id
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.id=0;/**
     * NAuctionItem userId.
     * @member {number} userId
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.userId=0;/**
     * NAuctionItem itemId.
     * @member {number} itemId
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.itemId=0;/**
     * NAuctionItem count.
     * @member {number} count
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.count=0;/**
     * NAuctionItem biddingPrice.
     * @member {number|Long} biddingPrice
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.biddingPrice=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * NAuctionItem currentPrice.
     * @member {number|Long} currentPrice
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.currentPrice=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * NAuctionItem bidderUserId.
     * @member {number} bidderUserId
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.bidderUserId=0;/**
     * NAuctionItem bidderNickName.
     * @member {string} bidderNickName
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.bidderNickName="";/**
     * NAuctionItem remainingTime.
     * @member {number|Long} remainingTime
     * @memberof NAuctionItem
     * @instance
     */NAuctionItem.prototype.remainingTime=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new NAuctionItem instance using the specified properties.
     * @function create
     * @memberof NAuctionItem
     * @static
     * @param {INAuctionItem=} [properties] Properties to set
     * @returns {NAuctionItem} NAuctionItem instance
     */NAuctionItem.create=function create(properties){return new NAuctionItem(properties);};/**
     * Encodes the specified NAuctionItem message. Does not implicitly {@link NAuctionItem.verify|verify} messages.
     * @function encode
     * @memberof NAuctionItem
     * @static
     * @param {INAuctionItem} message NAuctionItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NAuctionItem.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.id!=null&&message.hasOwnProperty("id"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.itemId);if(message.count!=null&&message.hasOwnProperty("count"))writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);if(message.biddingPrice!=null&&message.hasOwnProperty("biddingPrice"))writer.uint32(/* id 5, wireType 0 =*/40).int64(message.biddingPrice);if(message.currentPrice!=null&&message.hasOwnProperty("currentPrice"))writer.uint32(/* id 6, wireType 0 =*/48).int64(message.currentPrice);if(message.bidderUserId!=null&&message.hasOwnProperty("bidderUserId"))writer.uint32(/* id 7, wireType 0 =*/56).int32(message.bidderUserId);if(message.bidderNickName!=null&&message.hasOwnProperty("bidderNickName"))writer.uint32(/* id 8, wireType 2 =*/66).string(message.bidderNickName);if(message.remainingTime!=null&&message.hasOwnProperty("remainingTime"))writer.uint32(/* id 9, wireType 0 =*/72).int64(message.remainingTime);return writer;};/**
     * Encodes the specified NAuctionItem message, length delimited. Does not implicitly {@link NAuctionItem.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NAuctionItem
     * @static
     * @param {INAuctionItem} message NAuctionItem message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NAuctionItem.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NAuctionItem message from the specified reader or buffer.
     * @function decode
     * @memberof NAuctionItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NAuctionItem} NAuctionItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NAuctionItem.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NAuctionItem();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.id=reader.int32();break;case 2:message.userId=reader.int32();break;case 3:message.itemId=reader.int32();break;case 4:message.count=reader.int32();break;case 5:message.biddingPrice=reader.int64();break;case 6:message.currentPrice=reader.int64();break;case 7:message.bidderUserId=reader.int32();break;case 8:message.bidderNickName=reader.string();break;case 9:message.remainingTime=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NAuctionItem message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NAuctionItem
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NAuctionItem} NAuctionItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NAuctionItem.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NAuctionItem message.
     * @function verify
     * @memberof NAuctionItem
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NAuctionItem.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isInteger(message.id))return"id: integer expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";if(message.count!=null&&message.hasOwnProperty("count"))if(!$util.isInteger(message.count))return"count: integer expected";if(message.biddingPrice!=null&&message.hasOwnProperty("biddingPrice"))if(!$util.isInteger(message.biddingPrice)&&!(message.biddingPrice&&$util.isInteger(message.biddingPrice.low)&&$util.isInteger(message.biddingPrice.high)))return"biddingPrice: integer|Long expected";if(message.currentPrice!=null&&message.hasOwnProperty("currentPrice"))if(!$util.isInteger(message.currentPrice)&&!(message.currentPrice&&$util.isInteger(message.currentPrice.low)&&$util.isInteger(message.currentPrice.high)))return"currentPrice: integer|Long expected";if(message.bidderUserId!=null&&message.hasOwnProperty("bidderUserId"))if(!$util.isInteger(message.bidderUserId))return"bidderUserId: integer expected";if(message.bidderNickName!=null&&message.hasOwnProperty("bidderNickName"))if(!$util.isString(message.bidderNickName))return"bidderNickName: string expected";if(message.remainingTime!=null&&message.hasOwnProperty("remainingTime"))if(!$util.isInteger(message.remainingTime)&&!(message.remainingTime&&$util.isInteger(message.remainingTime.low)&&$util.isInteger(message.remainingTime.high)))return"remainingTime: integer|Long expected";return null;};/**
     * Creates a NAuctionItem message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NAuctionItem
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NAuctionItem} NAuctionItem
     */NAuctionItem.fromObject=function fromObject(object){if(object instanceof $root.NAuctionItem)return object;var message=new $root.NAuctionItem();if(object.id!=null)message.id=object.id|0;if(object.userId!=null)message.userId=object.userId|0;if(object.itemId!=null)message.itemId=object.itemId|0;if(object.count!=null)message.count=object.count|0;if(object.biddingPrice!=null)if($util.Long)(message.biddingPrice=$util.Long.fromValue(object.biddingPrice)).unsigned=false;else if(typeof object.biddingPrice==="string")message.biddingPrice=parseInt(object.biddingPrice,10);else if(typeof object.biddingPrice==="number")message.biddingPrice=object.biddingPrice;else if(typeof object.biddingPrice==="object")message.biddingPrice=new $util.LongBits(object.biddingPrice.low>>>0,object.biddingPrice.high>>>0).toNumber();if(object.currentPrice!=null)if($util.Long)(message.currentPrice=$util.Long.fromValue(object.currentPrice)).unsigned=false;else if(typeof object.currentPrice==="string")message.currentPrice=parseInt(object.currentPrice,10);else if(typeof object.currentPrice==="number")message.currentPrice=object.currentPrice;else if(typeof object.currentPrice==="object")message.currentPrice=new $util.LongBits(object.currentPrice.low>>>0,object.currentPrice.high>>>0).toNumber();if(object.bidderUserId!=null)message.bidderUserId=object.bidderUserId|0;if(object.bidderNickName!=null)message.bidderNickName=String(object.bidderNickName);if(object.remainingTime!=null)if($util.Long)(message.remainingTime=$util.Long.fromValue(object.remainingTime)).unsigned=false;else if(typeof object.remainingTime==="string")message.remainingTime=parseInt(object.remainingTime,10);else if(typeof object.remainingTime==="number")message.remainingTime=object.remainingTime;else if(typeof object.remainingTime==="object")message.remainingTime=new $util.LongBits(object.remainingTime.low>>>0,object.remainingTime.high>>>0).toNumber();return message;};/**
     * Creates a plain object from a NAuctionItem message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NAuctionItem
     * @static
     * @param {NAuctionItem} message NAuctionItem
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NAuctionItem.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.id=0;object.userId=0;object.itemId=0;object.count=0;if($util.Long){var long=new $util.Long(0,0,false);object.biddingPrice=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.biddingPrice=options.longs===String?"0":0;if($util.Long){var long=new $util.Long(0,0,false);object.currentPrice=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.currentPrice=options.longs===String?"0":0;object.bidderUserId=0;object.bidderNickName="";if($util.Long){var long=new $util.Long(0,0,false);object.remainingTime=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.remainingTime=options.longs===String?"0":0;}if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;if(message.count!=null&&message.hasOwnProperty("count"))object.count=message.count;if(message.biddingPrice!=null&&message.hasOwnProperty("biddingPrice"))if(typeof message.biddingPrice==="number")object.biddingPrice=options.longs===String?String(message.biddingPrice):message.biddingPrice;else object.biddingPrice=options.longs===String?$util.Long.prototype.toString.call(message.biddingPrice):options.longs===Number?new $util.LongBits(message.biddingPrice.low>>>0,message.biddingPrice.high>>>0).toNumber():message.biddingPrice;if(message.currentPrice!=null&&message.hasOwnProperty("currentPrice"))if(typeof message.currentPrice==="number")object.currentPrice=options.longs===String?String(message.currentPrice):message.currentPrice;else object.currentPrice=options.longs===String?$util.Long.prototype.toString.call(message.currentPrice):options.longs===Number?new $util.LongBits(message.currentPrice.low>>>0,message.currentPrice.high>>>0).toNumber():message.currentPrice;if(message.bidderUserId!=null&&message.hasOwnProperty("bidderUserId"))object.bidderUserId=message.bidderUserId;if(message.bidderNickName!=null&&message.hasOwnProperty("bidderNickName"))object.bidderNickName=message.bidderNickName;if(message.remainingTime!=null&&message.hasOwnProperty("remainingTime"))if(typeof message.remainingTime==="number")object.remainingTime=options.longs===String?String(message.remainingTime):message.remainingTime;else object.remainingTime=options.longs===String?$util.Long.prototype.toString.call(message.remainingTime):options.longs===Number?new $util.LongBits(message.remainingTime.low>>>0,message.remainingTime.high>>>0).toNumber():message.remainingTime;return object;};/**
     * Converts this NAuctionItem to JSON.
     * @function toJSON
     * @memberof NAuctionItem
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NAuctionItem.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NAuctionItem;}();/**
 * UserStatus enum.
 * @exports UserStatus
 * @enum {string}
 * @property {number} Normal=0 Normal value
 * @property {number} Game=1 Game value
 * @property {number} Room=2 Room value
 * @property {number} Live=3 Live value
 * @property {number} GameOver=4 GameOver value
 */$root.UserStatus=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Normal"]=0;values[valuesById[1]="Game"]=1;values[valuesById[2]="Room"]=2;values[valuesById[3]="Live"]=3;values[valuesById[4]="GameOver"]=4;return values;}();$root.NetMessage=function(){/**
     * Properties of a NetMessage.
     * @exports INetMessage
     * @interface INetMessage
     * @property {INetMessageRequest|null} [Request] NetMessage Request
     * @property {INetMessageResponse|null} [Response] NetMessage Response
     */ /**
     * Constructs a new NetMessage.
     * @exports NetMessage
     * @classdesc Represents a NetMessage.
     * @implements INetMessage
     * @constructor
     * @param {INetMessage=} [properties] Properties to set
     */function NetMessage(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NetMessage Request.
     * @member {INetMessageRequest|null|undefined} Request
     * @memberof NetMessage
     * @instance
     */NetMessage.prototype.Request=null;/**
     * NetMessage Response.
     * @member {INetMessageResponse|null|undefined} Response
     * @memberof NetMessage
     * @instance
     */NetMessage.prototype.Response=null;/**
     * Creates a new NetMessage instance using the specified properties.
     * @function create
     * @memberof NetMessage
     * @static
     * @param {INetMessage=} [properties] Properties to set
     * @returns {NetMessage} NetMessage instance
     */NetMessage.create=function create(properties){return new NetMessage(properties);};/**
     * Encodes the specified NetMessage message. Does not implicitly {@link NetMessage.verify|verify} messages.
     * @function encode
     * @memberof NetMessage
     * @static
     * @param {INetMessage} message NetMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessage.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.Request!=null&&message.hasOwnProperty("Request"))$root.NetMessageRequest.encode(message.Request,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.Response!=null&&message.hasOwnProperty("Response"))$root.NetMessageResponse.encode(message.Response,writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();return writer;};/**
     * Encodes the specified NetMessage message, length delimited. Does not implicitly {@link NetMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NetMessage
     * @static
     * @param {INetMessage} message NetMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessage.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NetMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NetMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NetMessage} NetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessage.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NetMessage();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.Request=$root.NetMessageRequest.decode(reader,reader.uint32());break;case 2:message.Response=$root.NetMessageResponse.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NetMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NetMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NetMessage} NetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessage.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NetMessage message.
     * @function verify
     * @memberof NetMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NetMessage.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.Request!=null&&message.hasOwnProperty("Request")){var error=$root.NetMessageRequest.verify(message.Request);if(error)return"Request."+error;}if(message.Response!=null&&message.hasOwnProperty("Response")){var error=$root.NetMessageResponse.verify(message.Response);if(error)return"Response."+error;}return null;};/**
     * Creates a NetMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NetMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NetMessage} NetMessage
     */NetMessage.fromObject=function fromObject(object){if(object instanceof $root.NetMessage)return object;var message=new $root.NetMessage();if(object.Request!=null){if(typeof object.Request!=="object")throw TypeError(".NetMessage.Request: object expected");message.Request=$root.NetMessageRequest.fromObject(object.Request);}if(object.Response!=null){if(typeof object.Response!=="object")throw TypeError(".NetMessage.Response: object expected");message.Response=$root.NetMessageResponse.fromObject(object.Response);}return message;};/**
     * Creates a plain object from a NetMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NetMessage
     * @static
     * @param {NetMessage} message NetMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NetMessage.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.Request=null;object.Response=null;}if(message.Request!=null&&message.hasOwnProperty("Request"))object.Request=$root.NetMessageRequest.toObject(message.Request,options);if(message.Response!=null&&message.hasOwnProperty("Response"))object.Response=$root.NetMessageResponse.toObject(message.Response,options);return object;};/**
     * Converts this NetMessage to JSON.
     * @function toJSON
     * @memberof NetMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NetMessage.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NetMessage;}();$root.NetMessageRequest=function(){/**
     * Properties of a NetMessageRequest.
     * @exports INetMessageRequest
     * @interface INetMessageRequest
     * @property {IUserRegisterRequest|null} [userRegister] NetMessageRequest userRegister
     * @property {IUserLoginRequest|null} [userLogin] NetMessageRequest userLogin
     * @property {ICharacterDetailRequest|null} [characterDetail] NetMessageRequest characterDetail
     * @property {IUpdateNickNameRequest|null} [updateNickName] NetMessageRequest updateNickName
     * @property {IAttrPromoteRequest|null} [attrPromote] NetMessageRequest attrPromote
     * @property {ICombatPowerRankingRequest|null} [combatPowerRanking] NetMessageRequest combatPowerRanking
     * @property {IItemBuyRequest|null} [itemBuy] NetMessageRequest itemBuy
     * @property {IFollowRequest|null} [followReq] NetMessageRequest followReq
     * @property {IUnLockRequest|null} [unLockReq] NetMessageRequest unLockReq
     * @property {ISwitchCharacterRequest|null} [switchCharacterReq] NetMessageRequest switchCharacterReq
     * @property {IBagHandleRequest|null} [bagHandleReq] NetMessageRequest bagHandleReq
     * @property {IQueryTranRequest|null} [queryTranReq] NetMessageRequest queryTranReq
     * @property {IBuyTranRequest|null} [buyTranReq] NetMessageRequest buyTranReq
     * @property {IHeartBeatRequest|null} [heartBeatReq] NetMessageRequest heartBeatReq
     * @property {IOfferPriceRequest|null} [offerPriceReq] NetMessageRequest offerPriceReq
     * @property {IAuctionRequest|null} [auctionReq] NetMessageRequest auctionReq
     * @property {IGetAuctionListRequest|null} [getAuctionListReq] NetMessageRequest getAuctionListReq
     * @property {IMyRoomRequest|null} [myRoomReq] NetMessageRequest myRoomReq
     * @property {IInviteRequest|null} [inviteReq] NetMessageRequest inviteReq
     * @property {IInviteResponse|null} [inviteRes] NetMessageRequest inviteRes
     * @property {IKickOutRequest|null} [kickOutReq] NetMessageRequest kickOutReq
     * @property {IRoomStartGameRequest|null} [roomStartGameReq] NetMessageRequest roomStartGameReq
     * @property {INickNameSearchRequest|null} [nickNameSearchReq] NetMessageRequest nickNameSearchReq
     * @property {IAddRoomRequest|null} [addRoomReq] NetMessageRequest addRoomReq
     * @property {IAddRoomResponse|null} [addRoomRes] NetMessageRequest addRoomRes
     * @property {IOutRoomRequest|null} [outRoomReq] NetMessageRequest outRoomReq
     * @property {IChatRequest|null} [chatReq] NetMessageRequest chatReq
     * @property {IUserStatusQueryRequest|null} [userStatusQueryReq] NetMessageRequest userStatusQueryReq
     * @property {IStartMatchRequest|null} [startMatchReq] NetMessageRequest startMatchReq
     * @property {IGameOver2Request|null} [gameOver2Req] NetMessageRequest gameOver2Req
     * @property {IAddLiveRequest|null} [addLiveReq] NetMessageRequest addLiveReq
     * @property {IUploadBiFenRequest|null} [uploadBiFenReq] NetMessageRequest uploadBiFenReq
     * @property {IFollowListRequest|null} [followListReq] NetMessageRequest followListReq
     * @property {IValidateOpenRoomRequest|null} [validateOpenRoomReq] NetMessageRequest validateOpenRoomReq
     */ /**
     * Constructs a new NetMessageRequest.
     * @exports NetMessageRequest
     * @classdesc Represents a NetMessageRequest.
     * @implements INetMessageRequest
     * @constructor
     * @param {INetMessageRequest=} [properties] Properties to set
     */function NetMessageRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NetMessageRequest userRegister.
     * @member {IUserRegisterRequest|null|undefined} userRegister
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.userRegister=null;/**
     * NetMessageRequest userLogin.
     * @member {IUserLoginRequest|null|undefined} userLogin
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.userLogin=null;/**
     * NetMessageRequest characterDetail.
     * @member {ICharacterDetailRequest|null|undefined} characterDetail
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.characterDetail=null;/**
     * NetMessageRequest updateNickName.
     * @member {IUpdateNickNameRequest|null|undefined} updateNickName
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.updateNickName=null;/**
     * NetMessageRequest attrPromote.
     * @member {IAttrPromoteRequest|null|undefined} attrPromote
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.attrPromote=null;/**
     * NetMessageRequest combatPowerRanking.
     * @member {ICombatPowerRankingRequest|null|undefined} combatPowerRanking
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.combatPowerRanking=null;/**
     * NetMessageRequest itemBuy.
     * @member {IItemBuyRequest|null|undefined} itemBuy
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.itemBuy=null;/**
     * NetMessageRequest followReq.
     * @member {IFollowRequest|null|undefined} followReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.followReq=null;/**
     * NetMessageRequest unLockReq.
     * @member {IUnLockRequest|null|undefined} unLockReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.unLockReq=null;/**
     * NetMessageRequest switchCharacterReq.
     * @member {ISwitchCharacterRequest|null|undefined} switchCharacterReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.switchCharacterReq=null;/**
     * NetMessageRequest bagHandleReq.
     * @member {IBagHandleRequest|null|undefined} bagHandleReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.bagHandleReq=null;/**
     * NetMessageRequest queryTranReq.
     * @member {IQueryTranRequest|null|undefined} queryTranReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.queryTranReq=null;/**
     * NetMessageRequest buyTranReq.
     * @member {IBuyTranRequest|null|undefined} buyTranReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.buyTranReq=null;/**
     * NetMessageRequest heartBeatReq.
     * @member {IHeartBeatRequest|null|undefined} heartBeatReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.heartBeatReq=null;/**
     * NetMessageRequest offerPriceReq.
     * @member {IOfferPriceRequest|null|undefined} offerPriceReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.offerPriceReq=null;/**
     * NetMessageRequest auctionReq.
     * @member {IAuctionRequest|null|undefined} auctionReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.auctionReq=null;/**
     * NetMessageRequest getAuctionListReq.
     * @member {IGetAuctionListRequest|null|undefined} getAuctionListReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.getAuctionListReq=null;/**
     * NetMessageRequest myRoomReq.
     * @member {IMyRoomRequest|null|undefined} myRoomReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.myRoomReq=null;/**
     * NetMessageRequest inviteReq.
     * @member {IInviteRequest|null|undefined} inviteReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.inviteReq=null;/**
     * NetMessageRequest inviteRes.
     * @member {IInviteResponse|null|undefined} inviteRes
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.inviteRes=null;/**
     * NetMessageRequest kickOutReq.
     * @member {IKickOutRequest|null|undefined} kickOutReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.kickOutReq=null;/**
     * NetMessageRequest roomStartGameReq.
     * @member {IRoomStartGameRequest|null|undefined} roomStartGameReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.roomStartGameReq=null;/**
     * NetMessageRequest nickNameSearchReq.
     * @member {INickNameSearchRequest|null|undefined} nickNameSearchReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.nickNameSearchReq=null;/**
     * NetMessageRequest addRoomReq.
     * @member {IAddRoomRequest|null|undefined} addRoomReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.addRoomReq=null;/**
     * NetMessageRequest addRoomRes.
     * @member {IAddRoomResponse|null|undefined} addRoomRes
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.addRoomRes=null;/**
     * NetMessageRequest outRoomReq.
     * @member {IOutRoomRequest|null|undefined} outRoomReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.outRoomReq=null;/**
     * NetMessageRequest chatReq.
     * @member {IChatRequest|null|undefined} chatReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.chatReq=null;/**
     * NetMessageRequest userStatusQueryReq.
     * @member {IUserStatusQueryRequest|null|undefined} userStatusQueryReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.userStatusQueryReq=null;/**
     * NetMessageRequest startMatchReq.
     * @member {IStartMatchRequest|null|undefined} startMatchReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.startMatchReq=null;/**
     * NetMessageRequest gameOver2Req.
     * @member {IGameOver2Request|null|undefined} gameOver2Req
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.gameOver2Req=null;/**
     * NetMessageRequest addLiveReq.
     * @member {IAddLiveRequest|null|undefined} addLiveReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.addLiveReq=null;/**
     * NetMessageRequest uploadBiFenReq.
     * @member {IUploadBiFenRequest|null|undefined} uploadBiFenReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.uploadBiFenReq=null;/**
     * NetMessageRequest followListReq.
     * @member {IFollowListRequest|null|undefined} followListReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.followListReq=null;/**
     * NetMessageRequest validateOpenRoomReq.
     * @member {IValidateOpenRoomRequest|null|undefined} validateOpenRoomReq
     * @memberof NetMessageRequest
     * @instance
     */NetMessageRequest.prototype.validateOpenRoomReq=null;/**
     * Creates a new NetMessageRequest instance using the specified properties.
     * @function create
     * @memberof NetMessageRequest
     * @static
     * @param {INetMessageRequest=} [properties] Properties to set
     * @returns {NetMessageRequest} NetMessageRequest instance
     */NetMessageRequest.create=function create(properties){return new NetMessageRequest(properties);};/**
     * Encodes the specified NetMessageRequest message. Does not implicitly {@link NetMessageRequest.verify|verify} messages.
     * @function encode
     * @memberof NetMessageRequest
     * @static
     * @param {INetMessageRequest} message NetMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessageRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userRegister!=null&&message.hasOwnProperty("userRegister"))$root.UserRegisterRequest.encode(message.userRegister,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.userLogin!=null&&message.hasOwnProperty("userLogin"))$root.UserLoginRequest.encode(message.userLogin,writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail"))$root.CharacterDetailRequest.encode(message.characterDetail,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName"))$root.UpdateNickNameRequest.encode(message.updateNickName,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote"))$root.AttrPromoteRequest.encode(message.attrPromote,writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking"))$root.CombatPowerRankingRequest.encode(message.combatPowerRanking,writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy"))$root.ItemBuyRequest.encode(message.itemBuy,writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();if(message.followReq!=null&&message.hasOwnProperty("followReq"))$root.FollowRequest.encode(message.followReq,writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();if(message.unLockReq!=null&&message.hasOwnProperty("unLockReq"))$root.UnLockRequest.encode(message.unLockReq,writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();if(message.switchCharacterReq!=null&&message.hasOwnProperty("switchCharacterReq"))$root.SwitchCharacterRequest.encode(message.switchCharacterReq,writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();if(message.bagHandleReq!=null&&message.hasOwnProperty("bagHandleReq"))$root.BagHandleRequest.encode(message.bagHandleReq,writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();if(message.queryTranReq!=null&&message.hasOwnProperty("queryTranReq"))$root.QueryTranRequest.encode(message.queryTranReq,writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();if(message.buyTranReq!=null&&message.hasOwnProperty("buyTranReq"))$root.BuyTranRequest.encode(message.buyTranReq,writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();if(message.heartBeatReq!=null&&message.hasOwnProperty("heartBeatReq"))$root.HeartBeatRequest.encode(message.heartBeatReq,writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();if(message.offerPriceReq!=null&&message.hasOwnProperty("offerPriceReq"))$root.OfferPriceRequest.encode(message.offerPriceReq,writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();if(message.auctionReq!=null&&message.hasOwnProperty("auctionReq"))$root.AuctionRequest.encode(message.auctionReq,writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();if(message.getAuctionListReq!=null&&message.hasOwnProperty("getAuctionListReq"))$root.GetAuctionListRequest.encode(message.getAuctionListReq,writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();if(message.myRoomReq!=null&&message.hasOwnProperty("myRoomReq"))$root.MyRoomRequest.encode(message.myRoomReq,writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq"))$root.InviteRequest.encode(message.inviteReq,writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes"))$root.InviteResponse.encode(message.inviteRes,writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();if(message.kickOutReq!=null&&message.hasOwnProperty("kickOutReq"))$root.KickOutRequest.encode(message.kickOutReq,writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();if(message.roomStartGameReq!=null&&message.hasOwnProperty("roomStartGameReq"))$root.RoomStartGameRequest.encode(message.roomStartGameReq,writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();if(message.nickNameSearchReq!=null&&message.hasOwnProperty("nickNameSearchReq"))$root.NickNameSearchRequest.encode(message.nickNameSearchReq,writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq"))$root.AddRoomRequest.encode(message.addRoomReq,writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes"))$root.AddRoomResponse.encode(message.addRoomRes,writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();if(message.outRoomReq!=null&&message.hasOwnProperty("outRoomReq"))$root.OutRoomRequest.encode(message.outRoomReq,writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();if(message.chatReq!=null&&message.hasOwnProperty("chatReq"))$root.ChatRequest.encode(message.chatReq,writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();if(message.userStatusQueryReq!=null&&message.hasOwnProperty("userStatusQueryReq"))$root.UserStatusQueryRequest.encode(message.userStatusQueryReq,writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();if(message.startMatchReq!=null&&message.hasOwnProperty("startMatchReq"))$root.StartMatchRequest.encode(message.startMatchReq,writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();if(message.gameOver2Req!=null&&message.hasOwnProperty("gameOver2Req"))$root.GameOver2Request.encode(message.gameOver2Req,writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();if(message.addLiveReq!=null&&message.hasOwnProperty("addLiveReq"))$root.AddLiveRequest.encode(message.addLiveReq,writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();if(message.uploadBiFenReq!=null&&message.hasOwnProperty("uploadBiFenReq"))$root.UploadBiFenRequest.encode(message.uploadBiFenReq,writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();if(message.followListReq!=null&&message.hasOwnProperty("followListReq"))$root.FollowListRequest.encode(message.followListReq,writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();if(message.validateOpenRoomReq!=null&&message.hasOwnProperty("validateOpenRoomReq"))$root.ValidateOpenRoomRequest.encode(message.validateOpenRoomReq,writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();return writer;};/**
     * Encodes the specified NetMessageRequest message, length delimited. Does not implicitly {@link NetMessageRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NetMessageRequest
     * @static
     * @param {INetMessageRequest} message NetMessageRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessageRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NetMessageRequest message from the specified reader or buffer.
     * @function decode
     * @memberof NetMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NetMessageRequest} NetMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessageRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NetMessageRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userRegister=$root.UserRegisterRequest.decode(reader,reader.uint32());break;case 2:message.userLogin=$root.UserLoginRequest.decode(reader,reader.uint32());break;case 3:message.characterDetail=$root.CharacterDetailRequest.decode(reader,reader.uint32());break;case 4:message.updateNickName=$root.UpdateNickNameRequest.decode(reader,reader.uint32());break;case 5:message.attrPromote=$root.AttrPromoteRequest.decode(reader,reader.uint32());break;case 6:message.combatPowerRanking=$root.CombatPowerRankingRequest.decode(reader,reader.uint32());break;case 7:message.itemBuy=$root.ItemBuyRequest.decode(reader,reader.uint32());break;case 8:message.followReq=$root.FollowRequest.decode(reader,reader.uint32());break;case 9:message.unLockReq=$root.UnLockRequest.decode(reader,reader.uint32());break;case 10:message.switchCharacterReq=$root.SwitchCharacterRequest.decode(reader,reader.uint32());break;case 11:message.bagHandleReq=$root.BagHandleRequest.decode(reader,reader.uint32());break;case 12:message.queryTranReq=$root.QueryTranRequest.decode(reader,reader.uint32());break;case 13:message.buyTranReq=$root.BuyTranRequest.decode(reader,reader.uint32());break;case 14:message.heartBeatReq=$root.HeartBeatRequest.decode(reader,reader.uint32());break;case 15:message.offerPriceReq=$root.OfferPriceRequest.decode(reader,reader.uint32());break;case 16:message.auctionReq=$root.AuctionRequest.decode(reader,reader.uint32());break;case 17:message.getAuctionListReq=$root.GetAuctionListRequest.decode(reader,reader.uint32());break;case 18:message.myRoomReq=$root.MyRoomRequest.decode(reader,reader.uint32());break;case 19:message.inviteReq=$root.InviteRequest.decode(reader,reader.uint32());break;case 20:message.inviteRes=$root.InviteResponse.decode(reader,reader.uint32());break;case 21:message.kickOutReq=$root.KickOutRequest.decode(reader,reader.uint32());break;case 22:message.roomStartGameReq=$root.RoomStartGameRequest.decode(reader,reader.uint32());break;case 23:message.nickNameSearchReq=$root.NickNameSearchRequest.decode(reader,reader.uint32());break;case 24:message.addRoomReq=$root.AddRoomRequest.decode(reader,reader.uint32());break;case 25:message.addRoomRes=$root.AddRoomResponse.decode(reader,reader.uint32());break;case 26:message.outRoomReq=$root.OutRoomRequest.decode(reader,reader.uint32());break;case 27:message.chatReq=$root.ChatRequest.decode(reader,reader.uint32());break;case 28:message.userStatusQueryReq=$root.UserStatusQueryRequest.decode(reader,reader.uint32());break;case 29:message.startMatchReq=$root.StartMatchRequest.decode(reader,reader.uint32());break;case 30:message.gameOver2Req=$root.GameOver2Request.decode(reader,reader.uint32());break;case 31:message.addLiveReq=$root.AddLiveRequest.decode(reader,reader.uint32());break;case 32:message.uploadBiFenReq=$root.UploadBiFenRequest.decode(reader,reader.uint32());break;case 33:message.followListReq=$root.FollowListRequest.decode(reader,reader.uint32());break;case 34:message.validateOpenRoomReq=$root.ValidateOpenRoomRequest.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NetMessageRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NetMessageRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NetMessageRequest} NetMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessageRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NetMessageRequest message.
     * @function verify
     * @memberof NetMessageRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NetMessageRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userRegister!=null&&message.hasOwnProperty("userRegister")){var error=$root.UserRegisterRequest.verify(message.userRegister);if(error)return"userRegister."+error;}if(message.userLogin!=null&&message.hasOwnProperty("userLogin")){var error=$root.UserLoginRequest.verify(message.userLogin);if(error)return"userLogin."+error;}if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail")){var error=$root.CharacterDetailRequest.verify(message.characterDetail);if(error)return"characterDetail."+error;}if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName")){var error=$root.UpdateNickNameRequest.verify(message.updateNickName);if(error)return"updateNickName."+error;}if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote")){var error=$root.AttrPromoteRequest.verify(message.attrPromote);if(error)return"attrPromote."+error;}if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking")){var error=$root.CombatPowerRankingRequest.verify(message.combatPowerRanking);if(error)return"combatPowerRanking."+error;}if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy")){var error=$root.ItemBuyRequest.verify(message.itemBuy);if(error)return"itemBuy."+error;}if(message.followReq!=null&&message.hasOwnProperty("followReq")){var error=$root.FollowRequest.verify(message.followReq);if(error)return"followReq."+error;}if(message.unLockReq!=null&&message.hasOwnProperty("unLockReq")){var error=$root.UnLockRequest.verify(message.unLockReq);if(error)return"unLockReq."+error;}if(message.switchCharacterReq!=null&&message.hasOwnProperty("switchCharacterReq")){var error=$root.SwitchCharacterRequest.verify(message.switchCharacterReq);if(error)return"switchCharacterReq."+error;}if(message.bagHandleReq!=null&&message.hasOwnProperty("bagHandleReq")){var error=$root.BagHandleRequest.verify(message.bagHandleReq);if(error)return"bagHandleReq."+error;}if(message.queryTranReq!=null&&message.hasOwnProperty("queryTranReq")){var error=$root.QueryTranRequest.verify(message.queryTranReq);if(error)return"queryTranReq."+error;}if(message.buyTranReq!=null&&message.hasOwnProperty("buyTranReq")){var error=$root.BuyTranRequest.verify(message.buyTranReq);if(error)return"buyTranReq."+error;}if(message.heartBeatReq!=null&&message.hasOwnProperty("heartBeatReq")){var error=$root.HeartBeatRequest.verify(message.heartBeatReq);if(error)return"heartBeatReq."+error;}if(message.offerPriceReq!=null&&message.hasOwnProperty("offerPriceReq")){var error=$root.OfferPriceRequest.verify(message.offerPriceReq);if(error)return"offerPriceReq."+error;}if(message.auctionReq!=null&&message.hasOwnProperty("auctionReq")){var error=$root.AuctionRequest.verify(message.auctionReq);if(error)return"auctionReq."+error;}if(message.getAuctionListReq!=null&&message.hasOwnProperty("getAuctionListReq")){var error=$root.GetAuctionListRequest.verify(message.getAuctionListReq);if(error)return"getAuctionListReq."+error;}if(message.myRoomReq!=null&&message.hasOwnProperty("myRoomReq")){var error=$root.MyRoomRequest.verify(message.myRoomReq);if(error)return"myRoomReq."+error;}if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq")){var error=$root.InviteRequest.verify(message.inviteReq);if(error)return"inviteReq."+error;}if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes")){var error=$root.InviteResponse.verify(message.inviteRes);if(error)return"inviteRes."+error;}if(message.kickOutReq!=null&&message.hasOwnProperty("kickOutReq")){var error=$root.KickOutRequest.verify(message.kickOutReq);if(error)return"kickOutReq."+error;}if(message.roomStartGameReq!=null&&message.hasOwnProperty("roomStartGameReq")){var error=$root.RoomStartGameRequest.verify(message.roomStartGameReq);if(error)return"roomStartGameReq."+error;}if(message.nickNameSearchReq!=null&&message.hasOwnProperty("nickNameSearchReq")){var error=$root.NickNameSearchRequest.verify(message.nickNameSearchReq);if(error)return"nickNameSearchReq."+error;}if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq")){var error=$root.AddRoomRequest.verify(message.addRoomReq);if(error)return"addRoomReq."+error;}if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes")){var error=$root.AddRoomResponse.verify(message.addRoomRes);if(error)return"addRoomRes."+error;}if(message.outRoomReq!=null&&message.hasOwnProperty("outRoomReq")){var error=$root.OutRoomRequest.verify(message.outRoomReq);if(error)return"outRoomReq."+error;}if(message.chatReq!=null&&message.hasOwnProperty("chatReq")){var error=$root.ChatRequest.verify(message.chatReq);if(error)return"chatReq."+error;}if(message.userStatusQueryReq!=null&&message.hasOwnProperty("userStatusQueryReq")){var error=$root.UserStatusQueryRequest.verify(message.userStatusQueryReq);if(error)return"userStatusQueryReq."+error;}if(message.startMatchReq!=null&&message.hasOwnProperty("startMatchReq")){var error=$root.StartMatchRequest.verify(message.startMatchReq);if(error)return"startMatchReq."+error;}if(message.gameOver2Req!=null&&message.hasOwnProperty("gameOver2Req")){var error=$root.GameOver2Request.verify(message.gameOver2Req);if(error)return"gameOver2Req."+error;}if(message.addLiveReq!=null&&message.hasOwnProperty("addLiveReq")){var error=$root.AddLiveRequest.verify(message.addLiveReq);if(error)return"addLiveReq."+error;}if(message.uploadBiFenReq!=null&&message.hasOwnProperty("uploadBiFenReq")){var error=$root.UploadBiFenRequest.verify(message.uploadBiFenReq);if(error)return"uploadBiFenReq."+error;}if(message.followListReq!=null&&message.hasOwnProperty("followListReq")){var error=$root.FollowListRequest.verify(message.followListReq);if(error)return"followListReq."+error;}if(message.validateOpenRoomReq!=null&&message.hasOwnProperty("validateOpenRoomReq")){var error=$root.ValidateOpenRoomRequest.verify(message.validateOpenRoomReq);if(error)return"validateOpenRoomReq."+error;}return null;};/**
     * Creates a NetMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NetMessageRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NetMessageRequest} NetMessageRequest
     */NetMessageRequest.fromObject=function fromObject(object){if(object instanceof $root.NetMessageRequest)return object;var message=new $root.NetMessageRequest();if(object.userRegister!=null){if(typeof object.userRegister!=="object")throw TypeError(".NetMessageRequest.userRegister: object expected");message.userRegister=$root.UserRegisterRequest.fromObject(object.userRegister);}if(object.userLogin!=null){if(typeof object.userLogin!=="object")throw TypeError(".NetMessageRequest.userLogin: object expected");message.userLogin=$root.UserLoginRequest.fromObject(object.userLogin);}if(object.characterDetail!=null){if(typeof object.characterDetail!=="object")throw TypeError(".NetMessageRequest.characterDetail: object expected");message.characterDetail=$root.CharacterDetailRequest.fromObject(object.characterDetail);}if(object.updateNickName!=null){if(typeof object.updateNickName!=="object")throw TypeError(".NetMessageRequest.updateNickName: object expected");message.updateNickName=$root.UpdateNickNameRequest.fromObject(object.updateNickName);}if(object.attrPromote!=null){if(typeof object.attrPromote!=="object")throw TypeError(".NetMessageRequest.attrPromote: object expected");message.attrPromote=$root.AttrPromoteRequest.fromObject(object.attrPromote);}if(object.combatPowerRanking!=null){if(typeof object.combatPowerRanking!=="object")throw TypeError(".NetMessageRequest.combatPowerRanking: object expected");message.combatPowerRanking=$root.CombatPowerRankingRequest.fromObject(object.combatPowerRanking);}if(object.itemBuy!=null){if(typeof object.itemBuy!=="object")throw TypeError(".NetMessageRequest.itemBuy: object expected");message.itemBuy=$root.ItemBuyRequest.fromObject(object.itemBuy);}if(object.followReq!=null){if(typeof object.followReq!=="object")throw TypeError(".NetMessageRequest.followReq: object expected");message.followReq=$root.FollowRequest.fromObject(object.followReq);}if(object.unLockReq!=null){if(typeof object.unLockReq!=="object")throw TypeError(".NetMessageRequest.unLockReq: object expected");message.unLockReq=$root.UnLockRequest.fromObject(object.unLockReq);}if(object.switchCharacterReq!=null){if(typeof object.switchCharacterReq!=="object")throw TypeError(".NetMessageRequest.switchCharacterReq: object expected");message.switchCharacterReq=$root.SwitchCharacterRequest.fromObject(object.switchCharacterReq);}if(object.bagHandleReq!=null){if(typeof object.bagHandleReq!=="object")throw TypeError(".NetMessageRequest.bagHandleReq: object expected");message.bagHandleReq=$root.BagHandleRequest.fromObject(object.bagHandleReq);}if(object.queryTranReq!=null){if(typeof object.queryTranReq!=="object")throw TypeError(".NetMessageRequest.queryTranReq: object expected");message.queryTranReq=$root.QueryTranRequest.fromObject(object.queryTranReq);}if(object.buyTranReq!=null){if(typeof object.buyTranReq!=="object")throw TypeError(".NetMessageRequest.buyTranReq: object expected");message.buyTranReq=$root.BuyTranRequest.fromObject(object.buyTranReq);}if(object.heartBeatReq!=null){if(typeof object.heartBeatReq!=="object")throw TypeError(".NetMessageRequest.heartBeatReq: object expected");message.heartBeatReq=$root.HeartBeatRequest.fromObject(object.heartBeatReq);}if(object.offerPriceReq!=null){if(typeof object.offerPriceReq!=="object")throw TypeError(".NetMessageRequest.offerPriceReq: object expected");message.offerPriceReq=$root.OfferPriceRequest.fromObject(object.offerPriceReq);}if(object.auctionReq!=null){if(typeof object.auctionReq!=="object")throw TypeError(".NetMessageRequest.auctionReq: object expected");message.auctionReq=$root.AuctionRequest.fromObject(object.auctionReq);}if(object.getAuctionListReq!=null){if(typeof object.getAuctionListReq!=="object")throw TypeError(".NetMessageRequest.getAuctionListReq: object expected");message.getAuctionListReq=$root.GetAuctionListRequest.fromObject(object.getAuctionListReq);}if(object.myRoomReq!=null){if(typeof object.myRoomReq!=="object")throw TypeError(".NetMessageRequest.myRoomReq: object expected");message.myRoomReq=$root.MyRoomRequest.fromObject(object.myRoomReq);}if(object.inviteReq!=null){if(typeof object.inviteReq!=="object")throw TypeError(".NetMessageRequest.inviteReq: object expected");message.inviteReq=$root.InviteRequest.fromObject(object.inviteReq);}if(object.inviteRes!=null){if(typeof object.inviteRes!=="object")throw TypeError(".NetMessageRequest.inviteRes: object expected");message.inviteRes=$root.InviteResponse.fromObject(object.inviteRes);}if(object.kickOutReq!=null){if(typeof object.kickOutReq!=="object")throw TypeError(".NetMessageRequest.kickOutReq: object expected");message.kickOutReq=$root.KickOutRequest.fromObject(object.kickOutReq);}if(object.roomStartGameReq!=null){if(typeof object.roomStartGameReq!=="object")throw TypeError(".NetMessageRequest.roomStartGameReq: object expected");message.roomStartGameReq=$root.RoomStartGameRequest.fromObject(object.roomStartGameReq);}if(object.nickNameSearchReq!=null){if(typeof object.nickNameSearchReq!=="object")throw TypeError(".NetMessageRequest.nickNameSearchReq: object expected");message.nickNameSearchReq=$root.NickNameSearchRequest.fromObject(object.nickNameSearchReq);}if(object.addRoomReq!=null){if(typeof object.addRoomReq!=="object")throw TypeError(".NetMessageRequest.addRoomReq: object expected");message.addRoomReq=$root.AddRoomRequest.fromObject(object.addRoomReq);}if(object.addRoomRes!=null){if(typeof object.addRoomRes!=="object")throw TypeError(".NetMessageRequest.addRoomRes: object expected");message.addRoomRes=$root.AddRoomResponse.fromObject(object.addRoomRes);}if(object.outRoomReq!=null){if(typeof object.outRoomReq!=="object")throw TypeError(".NetMessageRequest.outRoomReq: object expected");message.outRoomReq=$root.OutRoomRequest.fromObject(object.outRoomReq);}if(object.chatReq!=null){if(typeof object.chatReq!=="object")throw TypeError(".NetMessageRequest.chatReq: object expected");message.chatReq=$root.ChatRequest.fromObject(object.chatReq);}if(object.userStatusQueryReq!=null){if(typeof object.userStatusQueryReq!=="object")throw TypeError(".NetMessageRequest.userStatusQueryReq: object expected");message.userStatusQueryReq=$root.UserStatusQueryRequest.fromObject(object.userStatusQueryReq);}if(object.startMatchReq!=null){if(typeof object.startMatchReq!=="object")throw TypeError(".NetMessageRequest.startMatchReq: object expected");message.startMatchReq=$root.StartMatchRequest.fromObject(object.startMatchReq);}if(object.gameOver2Req!=null){if(typeof object.gameOver2Req!=="object")throw TypeError(".NetMessageRequest.gameOver2Req: object expected");message.gameOver2Req=$root.GameOver2Request.fromObject(object.gameOver2Req);}if(object.addLiveReq!=null){if(typeof object.addLiveReq!=="object")throw TypeError(".NetMessageRequest.addLiveReq: object expected");message.addLiveReq=$root.AddLiveRequest.fromObject(object.addLiveReq);}if(object.uploadBiFenReq!=null){if(typeof object.uploadBiFenReq!=="object")throw TypeError(".NetMessageRequest.uploadBiFenReq: object expected");message.uploadBiFenReq=$root.UploadBiFenRequest.fromObject(object.uploadBiFenReq);}if(object.followListReq!=null){if(typeof object.followListReq!=="object")throw TypeError(".NetMessageRequest.followListReq: object expected");message.followListReq=$root.FollowListRequest.fromObject(object.followListReq);}if(object.validateOpenRoomReq!=null){if(typeof object.validateOpenRoomReq!=="object")throw TypeError(".NetMessageRequest.validateOpenRoomReq: object expected");message.validateOpenRoomReq=$root.ValidateOpenRoomRequest.fromObject(object.validateOpenRoomReq);}return message;};/**
     * Creates a plain object from a NetMessageRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NetMessageRequest
     * @static
     * @param {NetMessageRequest} message NetMessageRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NetMessageRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userRegister=null;object.userLogin=null;object.characterDetail=null;object.updateNickName=null;object.attrPromote=null;object.combatPowerRanking=null;object.itemBuy=null;object.followReq=null;object.unLockReq=null;object.switchCharacterReq=null;object.bagHandleReq=null;object.queryTranReq=null;object.buyTranReq=null;object.heartBeatReq=null;object.offerPriceReq=null;object.auctionReq=null;object.getAuctionListReq=null;object.myRoomReq=null;object.inviteReq=null;object.inviteRes=null;object.kickOutReq=null;object.roomStartGameReq=null;object.nickNameSearchReq=null;object.addRoomReq=null;object.addRoomRes=null;object.outRoomReq=null;object.chatReq=null;object.userStatusQueryReq=null;object.startMatchReq=null;object.gameOver2Req=null;object.addLiveReq=null;object.uploadBiFenReq=null;object.followListReq=null;object.validateOpenRoomReq=null;}if(message.userRegister!=null&&message.hasOwnProperty("userRegister"))object.userRegister=$root.UserRegisterRequest.toObject(message.userRegister,options);if(message.userLogin!=null&&message.hasOwnProperty("userLogin"))object.userLogin=$root.UserLoginRequest.toObject(message.userLogin,options);if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail"))object.characterDetail=$root.CharacterDetailRequest.toObject(message.characterDetail,options);if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName"))object.updateNickName=$root.UpdateNickNameRequest.toObject(message.updateNickName,options);if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote"))object.attrPromote=$root.AttrPromoteRequest.toObject(message.attrPromote,options);if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking"))object.combatPowerRanking=$root.CombatPowerRankingRequest.toObject(message.combatPowerRanking,options);if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy"))object.itemBuy=$root.ItemBuyRequest.toObject(message.itemBuy,options);if(message.followReq!=null&&message.hasOwnProperty("followReq"))object.followReq=$root.FollowRequest.toObject(message.followReq,options);if(message.unLockReq!=null&&message.hasOwnProperty("unLockReq"))object.unLockReq=$root.UnLockRequest.toObject(message.unLockReq,options);if(message.switchCharacterReq!=null&&message.hasOwnProperty("switchCharacterReq"))object.switchCharacterReq=$root.SwitchCharacterRequest.toObject(message.switchCharacterReq,options);if(message.bagHandleReq!=null&&message.hasOwnProperty("bagHandleReq"))object.bagHandleReq=$root.BagHandleRequest.toObject(message.bagHandleReq,options);if(message.queryTranReq!=null&&message.hasOwnProperty("queryTranReq"))object.queryTranReq=$root.QueryTranRequest.toObject(message.queryTranReq,options);if(message.buyTranReq!=null&&message.hasOwnProperty("buyTranReq"))object.buyTranReq=$root.BuyTranRequest.toObject(message.buyTranReq,options);if(message.heartBeatReq!=null&&message.hasOwnProperty("heartBeatReq"))object.heartBeatReq=$root.HeartBeatRequest.toObject(message.heartBeatReq,options);if(message.offerPriceReq!=null&&message.hasOwnProperty("offerPriceReq"))object.offerPriceReq=$root.OfferPriceRequest.toObject(message.offerPriceReq,options);if(message.auctionReq!=null&&message.hasOwnProperty("auctionReq"))object.auctionReq=$root.AuctionRequest.toObject(message.auctionReq,options);if(message.getAuctionListReq!=null&&message.hasOwnProperty("getAuctionListReq"))object.getAuctionListReq=$root.GetAuctionListRequest.toObject(message.getAuctionListReq,options);if(message.myRoomReq!=null&&message.hasOwnProperty("myRoomReq"))object.myRoomReq=$root.MyRoomRequest.toObject(message.myRoomReq,options);if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq"))object.inviteReq=$root.InviteRequest.toObject(message.inviteReq,options);if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes"))object.inviteRes=$root.InviteResponse.toObject(message.inviteRes,options);if(message.kickOutReq!=null&&message.hasOwnProperty("kickOutReq"))object.kickOutReq=$root.KickOutRequest.toObject(message.kickOutReq,options);if(message.roomStartGameReq!=null&&message.hasOwnProperty("roomStartGameReq"))object.roomStartGameReq=$root.RoomStartGameRequest.toObject(message.roomStartGameReq,options);if(message.nickNameSearchReq!=null&&message.hasOwnProperty("nickNameSearchReq"))object.nickNameSearchReq=$root.NickNameSearchRequest.toObject(message.nickNameSearchReq,options);if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq"))object.addRoomReq=$root.AddRoomRequest.toObject(message.addRoomReq,options);if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes"))object.addRoomRes=$root.AddRoomResponse.toObject(message.addRoomRes,options);if(message.outRoomReq!=null&&message.hasOwnProperty("outRoomReq"))object.outRoomReq=$root.OutRoomRequest.toObject(message.outRoomReq,options);if(message.chatReq!=null&&message.hasOwnProperty("chatReq"))object.chatReq=$root.ChatRequest.toObject(message.chatReq,options);if(message.userStatusQueryReq!=null&&message.hasOwnProperty("userStatusQueryReq"))object.userStatusQueryReq=$root.UserStatusQueryRequest.toObject(message.userStatusQueryReq,options);if(message.startMatchReq!=null&&message.hasOwnProperty("startMatchReq"))object.startMatchReq=$root.StartMatchRequest.toObject(message.startMatchReq,options);if(message.gameOver2Req!=null&&message.hasOwnProperty("gameOver2Req"))object.gameOver2Req=$root.GameOver2Request.toObject(message.gameOver2Req,options);if(message.addLiveReq!=null&&message.hasOwnProperty("addLiveReq"))object.addLiveReq=$root.AddLiveRequest.toObject(message.addLiveReq,options);if(message.uploadBiFenReq!=null&&message.hasOwnProperty("uploadBiFenReq"))object.uploadBiFenReq=$root.UploadBiFenRequest.toObject(message.uploadBiFenReq,options);if(message.followListReq!=null&&message.hasOwnProperty("followListReq"))object.followListReq=$root.FollowListRequest.toObject(message.followListReq,options);if(message.validateOpenRoomReq!=null&&message.hasOwnProperty("validateOpenRoomReq"))object.validateOpenRoomReq=$root.ValidateOpenRoomRequest.toObject(message.validateOpenRoomReq,options);return object;};/**
     * Converts this NetMessageRequest to JSON.
     * @function toJSON
     * @memberof NetMessageRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NetMessageRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NetMessageRequest;}();$root.NetMessageResponse=function(){/**
     * Properties of a NetMessageResponse.
     * @exports INetMessageResponse
     * @interface INetMessageResponse
     * @property {IUserRegisterResponse|null} [userRegister] NetMessageResponse userRegister
     * @property {IUserLoginResponse|null} [userLogin] NetMessageResponse userLogin
     * @property {ICharacterDetailResponse|null} [characterDetail] NetMessageResponse characterDetail
     * @property {IUpdateNickNameResponse|null} [updateNickName] NetMessageResponse updateNickName
     * @property {IAttrPromoteInfoResponse|null} [attrPromote] NetMessageResponse attrPromote
     * @property {ICombatPowerRankingResponse|null} [combatPowerRanking] NetMessageResponse combatPowerRanking
     * @property {IItemBuyResponse|null} [itemBuy] NetMessageResponse itemBuy
     * @property {IFollowResponse|null} [followRes] NetMessageResponse followRes
     * @property {IUnLockResponse|null} [unLockRes] NetMessageResponse unLockRes
     * @property {ISwitchCharacterResponse|null} [switchCharacterRes] NetMessageResponse switchCharacterRes
     * @property {IBagHandleResponse|null} [bagHandleRes] NetMessageResponse bagHandleRes
     * @property {IUserStatusChangeResponse|null} [userStatusChangeRes] NetMessageResponse userStatusChangeRes
     * @property {IQueryTranResponse|null} [queryTranRes] NetMessageResponse queryTranRes
     * @property {IBuyTranResponse|null} [buyTranRes] NetMessageResponse buyTranRes
     * @property {IHeartBeatResponse|null} [heartBeatRes] NetMessageResponse heartBeatRes
     * @property {IOfferPriceResponse|null} [offerPriceRes] NetMessageResponse offerPriceRes
     * @property {IAuctionResponse|null} [auctionRes] NetMessageResponse auctionRes
     * @property {IGetAuctionListResponse|null} [getAuctionListRes] NetMessageResponse getAuctionListRes
     * @property {ITipsResponse|null} [tipsRes] NetMessageResponse tipsRes
     * @property {IMyRoomResponse|null} [myRoomRes] NetMessageResponse myRoomRes
     * @property {IInviteRequest|null} [inviteReq] NetMessageResponse inviteReq
     * @property {IInviteResponse|null} [inviteRes] NetMessageResponse inviteRes
     * @property {IKickOutResponse|null} [kickOutRes] NetMessageResponse kickOutRes
     * @property {IRoomStartGameResponse|null} [roomStartGameRes] NetMessageResponse roomStartGameRes
     * @property {INickNameSearchResponse|null} [nickNameSearchRes] NetMessageResponse nickNameSearchRes
     * @property {IFollowListResponse|null} [followListRes] NetMessageResponse followListRes
     * @property {IAddRoomRequest|null} [addRoomReq] NetMessageResponse addRoomReq
     * @property {IAddRoomResponse|null} [addRoomRes] NetMessageResponse addRoomRes
     * @property {IOutRoomResponse|null} [outRoomRes] NetMessageResponse outRoomRes
     * @property {IChatResponse|null} [chatRes] NetMessageResponse chatRes
     * @property {IUserStatusQueryResponse|null} [userStatusQueryRes] NetMessageResponse userStatusQueryRes
     * @property {IStartMatchResponse|null} [startMatchRes] NetMessageResponse startMatchRes
     * @property {IMatchResponse|null} [matchRes] NetMessageResponse matchRes
     * @property {IAddLiveResponse|null} [addLiveRes] NetMessageResponse addLiveRes
     * @property {IValidateOpenRoomResponse|null} [validateOpenRoomRes] NetMessageResponse validateOpenRoomRes
     * @property {IStatusNotify|null} [statusNotify] NetMessageResponse statusNotify
     */ /**
     * Constructs a new NetMessageResponse.
     * @exports NetMessageResponse
     * @classdesc Represents a NetMessageResponse.
     * @implements INetMessageResponse
     * @constructor
     * @param {INetMessageResponse=} [properties] Properties to set
     */function NetMessageResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NetMessageResponse userRegister.
     * @member {IUserRegisterResponse|null|undefined} userRegister
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.userRegister=null;/**
     * NetMessageResponse userLogin.
     * @member {IUserLoginResponse|null|undefined} userLogin
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.userLogin=null;/**
     * NetMessageResponse characterDetail.
     * @member {ICharacterDetailResponse|null|undefined} characterDetail
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.characterDetail=null;/**
     * NetMessageResponse updateNickName.
     * @member {IUpdateNickNameResponse|null|undefined} updateNickName
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.updateNickName=null;/**
     * NetMessageResponse attrPromote.
     * @member {IAttrPromoteInfoResponse|null|undefined} attrPromote
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.attrPromote=null;/**
     * NetMessageResponse combatPowerRanking.
     * @member {ICombatPowerRankingResponse|null|undefined} combatPowerRanking
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.combatPowerRanking=null;/**
     * NetMessageResponse itemBuy.
     * @member {IItemBuyResponse|null|undefined} itemBuy
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.itemBuy=null;/**
     * NetMessageResponse followRes.
     * @member {IFollowResponse|null|undefined} followRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.followRes=null;/**
     * NetMessageResponse unLockRes.
     * @member {IUnLockResponse|null|undefined} unLockRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.unLockRes=null;/**
     * NetMessageResponse switchCharacterRes.
     * @member {ISwitchCharacterResponse|null|undefined} switchCharacterRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.switchCharacterRes=null;/**
     * NetMessageResponse bagHandleRes.
     * @member {IBagHandleResponse|null|undefined} bagHandleRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.bagHandleRes=null;/**
     * NetMessageResponse userStatusChangeRes.
     * @member {IUserStatusChangeResponse|null|undefined} userStatusChangeRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.userStatusChangeRes=null;/**
     * NetMessageResponse queryTranRes.
     * @member {IQueryTranResponse|null|undefined} queryTranRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.queryTranRes=null;/**
     * NetMessageResponse buyTranRes.
     * @member {IBuyTranResponse|null|undefined} buyTranRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.buyTranRes=null;/**
     * NetMessageResponse heartBeatRes.
     * @member {IHeartBeatResponse|null|undefined} heartBeatRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.heartBeatRes=null;/**
     * NetMessageResponse offerPriceRes.
     * @member {IOfferPriceResponse|null|undefined} offerPriceRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.offerPriceRes=null;/**
     * NetMessageResponse auctionRes.
     * @member {IAuctionResponse|null|undefined} auctionRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.auctionRes=null;/**
     * NetMessageResponse getAuctionListRes.
     * @member {IGetAuctionListResponse|null|undefined} getAuctionListRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.getAuctionListRes=null;/**
     * NetMessageResponse tipsRes.
     * @member {ITipsResponse|null|undefined} tipsRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.tipsRes=null;/**
     * NetMessageResponse myRoomRes.
     * @member {IMyRoomResponse|null|undefined} myRoomRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.myRoomRes=null;/**
     * NetMessageResponse inviteReq.
     * @member {IInviteRequest|null|undefined} inviteReq
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.inviteReq=null;/**
     * NetMessageResponse inviteRes.
     * @member {IInviteResponse|null|undefined} inviteRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.inviteRes=null;/**
     * NetMessageResponse kickOutRes.
     * @member {IKickOutResponse|null|undefined} kickOutRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.kickOutRes=null;/**
     * NetMessageResponse roomStartGameRes.
     * @member {IRoomStartGameResponse|null|undefined} roomStartGameRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.roomStartGameRes=null;/**
     * NetMessageResponse nickNameSearchRes.
     * @member {INickNameSearchResponse|null|undefined} nickNameSearchRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.nickNameSearchRes=null;/**
     * NetMessageResponse followListRes.
     * @member {IFollowListResponse|null|undefined} followListRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.followListRes=null;/**
     * NetMessageResponse addRoomReq.
     * @member {IAddRoomRequest|null|undefined} addRoomReq
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.addRoomReq=null;/**
     * NetMessageResponse addRoomRes.
     * @member {IAddRoomResponse|null|undefined} addRoomRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.addRoomRes=null;/**
     * NetMessageResponse outRoomRes.
     * @member {IOutRoomResponse|null|undefined} outRoomRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.outRoomRes=null;/**
     * NetMessageResponse chatRes.
     * @member {IChatResponse|null|undefined} chatRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.chatRes=null;/**
     * NetMessageResponse userStatusQueryRes.
     * @member {IUserStatusQueryResponse|null|undefined} userStatusQueryRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.userStatusQueryRes=null;/**
     * NetMessageResponse startMatchRes.
     * @member {IStartMatchResponse|null|undefined} startMatchRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.startMatchRes=null;/**
     * NetMessageResponse matchRes.
     * @member {IMatchResponse|null|undefined} matchRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.matchRes=null;/**
     * NetMessageResponse addLiveRes.
     * @member {IAddLiveResponse|null|undefined} addLiveRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.addLiveRes=null;/**
     * NetMessageResponse validateOpenRoomRes.
     * @member {IValidateOpenRoomResponse|null|undefined} validateOpenRoomRes
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.validateOpenRoomRes=null;/**
     * NetMessageResponse statusNotify.
     * @member {IStatusNotify|null|undefined} statusNotify
     * @memberof NetMessageResponse
     * @instance
     */NetMessageResponse.prototype.statusNotify=null;/**
     * Creates a new NetMessageResponse instance using the specified properties.
     * @function create
     * @memberof NetMessageResponse
     * @static
     * @param {INetMessageResponse=} [properties] Properties to set
     * @returns {NetMessageResponse} NetMessageResponse instance
     */NetMessageResponse.create=function create(properties){return new NetMessageResponse(properties);};/**
     * Encodes the specified NetMessageResponse message. Does not implicitly {@link NetMessageResponse.verify|verify} messages.
     * @function encode
     * @memberof NetMessageResponse
     * @static
     * @param {INetMessageResponse} message NetMessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessageResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userRegister!=null&&message.hasOwnProperty("userRegister"))$root.UserRegisterResponse.encode(message.userRegister,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();if(message.userLogin!=null&&message.hasOwnProperty("userLogin"))$root.UserLoginResponse.encode(message.userLogin,writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail"))$root.CharacterDetailResponse.encode(message.characterDetail,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName"))$root.UpdateNickNameResponse.encode(message.updateNickName,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote"))$root.AttrPromoteInfoResponse.encode(message.attrPromote,writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking"))$root.CombatPowerRankingResponse.encode(message.combatPowerRanking,writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy"))$root.ItemBuyResponse.encode(message.itemBuy,writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();if(message.followRes!=null&&message.hasOwnProperty("followRes"))$root.FollowResponse.encode(message.followRes,writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();if(message.unLockRes!=null&&message.hasOwnProperty("unLockRes"))$root.UnLockResponse.encode(message.unLockRes,writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();if(message.switchCharacterRes!=null&&message.hasOwnProperty("switchCharacterRes"))$root.SwitchCharacterResponse.encode(message.switchCharacterRes,writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();if(message.bagHandleRes!=null&&message.hasOwnProperty("bagHandleRes"))$root.BagHandleResponse.encode(message.bagHandleRes,writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();if(message.userStatusChangeRes!=null&&message.hasOwnProperty("userStatusChangeRes"))$root.UserStatusChangeResponse.encode(message.userStatusChangeRes,writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();if(message.queryTranRes!=null&&message.hasOwnProperty("queryTranRes"))$root.QueryTranResponse.encode(message.queryTranRes,writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();if(message.buyTranRes!=null&&message.hasOwnProperty("buyTranRes"))$root.BuyTranResponse.encode(message.buyTranRes,writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();if(message.heartBeatRes!=null&&message.hasOwnProperty("heartBeatRes"))$root.HeartBeatResponse.encode(message.heartBeatRes,writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();if(message.offerPriceRes!=null&&message.hasOwnProperty("offerPriceRes"))$root.OfferPriceResponse.encode(message.offerPriceRes,writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();if(message.auctionRes!=null&&message.hasOwnProperty("auctionRes"))$root.AuctionResponse.encode(message.auctionRes,writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();if(message.getAuctionListRes!=null&&message.hasOwnProperty("getAuctionListRes"))$root.GetAuctionListResponse.encode(message.getAuctionListRes,writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();if(message.tipsRes!=null&&message.hasOwnProperty("tipsRes"))$root.TipsResponse.encode(message.tipsRes,writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();if(message.myRoomRes!=null&&message.hasOwnProperty("myRoomRes"))$root.MyRoomResponse.encode(message.myRoomRes,writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq"))$root.InviteRequest.encode(message.inviteReq,writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes"))$root.InviteResponse.encode(message.inviteRes,writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();if(message.kickOutRes!=null&&message.hasOwnProperty("kickOutRes"))$root.KickOutResponse.encode(message.kickOutRes,writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();if(message.roomStartGameRes!=null&&message.hasOwnProperty("roomStartGameRes"))$root.RoomStartGameResponse.encode(message.roomStartGameRes,writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();if(message.nickNameSearchRes!=null&&message.hasOwnProperty("nickNameSearchRes"))$root.NickNameSearchResponse.encode(message.nickNameSearchRes,writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();if(message.followListRes!=null&&message.hasOwnProperty("followListRes"))$root.FollowListResponse.encode(message.followListRes,writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq"))$root.AddRoomRequest.encode(message.addRoomReq,writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes"))$root.AddRoomResponse.encode(message.addRoomRes,writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();if(message.outRoomRes!=null&&message.hasOwnProperty("outRoomRes"))$root.OutRoomResponse.encode(message.outRoomRes,writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();if(message.chatRes!=null&&message.hasOwnProperty("chatRes"))$root.ChatResponse.encode(message.chatRes,writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();if(message.userStatusQueryRes!=null&&message.hasOwnProperty("userStatusQueryRes"))$root.UserStatusQueryResponse.encode(message.userStatusQueryRes,writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();if(message.startMatchRes!=null&&message.hasOwnProperty("startMatchRes"))$root.StartMatchResponse.encode(message.startMatchRes,writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();if(message.matchRes!=null&&message.hasOwnProperty("matchRes"))$root.MatchResponse.encode(message.matchRes,writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();if(message.addLiveRes!=null&&message.hasOwnProperty("addLiveRes"))$root.AddLiveResponse.encode(message.addLiveRes,writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();if(message.validateOpenRoomRes!=null&&message.hasOwnProperty("validateOpenRoomRes"))$root.ValidateOpenRoomResponse.encode(message.validateOpenRoomRes,writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();if(message.statusNotify!=null&&message.hasOwnProperty("statusNotify"))$root.StatusNotify.encode(message.statusNotify,writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();return writer;};/**
     * Encodes the specified NetMessageResponse message, length delimited. Does not implicitly {@link NetMessageResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NetMessageResponse
     * @static
     * @param {INetMessageResponse} message NetMessageResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NetMessageResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NetMessageResponse message from the specified reader or buffer.
     * @function decode
     * @memberof NetMessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NetMessageResponse} NetMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessageResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NetMessageResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userRegister=$root.UserRegisterResponse.decode(reader,reader.uint32());break;case 2:message.userLogin=$root.UserLoginResponse.decode(reader,reader.uint32());break;case 3:message.characterDetail=$root.CharacterDetailResponse.decode(reader,reader.uint32());break;case 4:message.updateNickName=$root.UpdateNickNameResponse.decode(reader,reader.uint32());break;case 5:message.attrPromote=$root.AttrPromoteInfoResponse.decode(reader,reader.uint32());break;case 6:message.combatPowerRanking=$root.CombatPowerRankingResponse.decode(reader,reader.uint32());break;case 7:message.itemBuy=$root.ItemBuyResponse.decode(reader,reader.uint32());break;case 8:message.followRes=$root.FollowResponse.decode(reader,reader.uint32());break;case 10:message.unLockRes=$root.UnLockResponse.decode(reader,reader.uint32());break;case 11:message.switchCharacterRes=$root.SwitchCharacterResponse.decode(reader,reader.uint32());break;case 12:message.bagHandleRes=$root.BagHandleResponse.decode(reader,reader.uint32());break;case 13:message.userStatusChangeRes=$root.UserStatusChangeResponse.decode(reader,reader.uint32());break;case 14:message.queryTranRes=$root.QueryTranResponse.decode(reader,reader.uint32());break;case 15:message.buyTranRes=$root.BuyTranResponse.decode(reader,reader.uint32());break;case 16:message.heartBeatRes=$root.HeartBeatResponse.decode(reader,reader.uint32());break;case 17:message.offerPriceRes=$root.OfferPriceResponse.decode(reader,reader.uint32());break;case 18:message.auctionRes=$root.AuctionResponse.decode(reader,reader.uint32());break;case 19:message.getAuctionListRes=$root.GetAuctionListResponse.decode(reader,reader.uint32());break;case 20:message.tipsRes=$root.TipsResponse.decode(reader,reader.uint32());break;case 21:message.myRoomRes=$root.MyRoomResponse.decode(reader,reader.uint32());break;case 22:message.inviteReq=$root.InviteRequest.decode(reader,reader.uint32());break;case 23:message.inviteRes=$root.InviteResponse.decode(reader,reader.uint32());break;case 24:message.kickOutRes=$root.KickOutResponse.decode(reader,reader.uint32());break;case 25:message.roomStartGameRes=$root.RoomStartGameResponse.decode(reader,reader.uint32());break;case 26:message.nickNameSearchRes=$root.NickNameSearchResponse.decode(reader,reader.uint32());break;case 27:message.followListRes=$root.FollowListResponse.decode(reader,reader.uint32());break;case 28:message.addRoomReq=$root.AddRoomRequest.decode(reader,reader.uint32());break;case 29:message.addRoomRes=$root.AddRoomResponse.decode(reader,reader.uint32());break;case 30:message.outRoomRes=$root.OutRoomResponse.decode(reader,reader.uint32());break;case 31:message.chatRes=$root.ChatResponse.decode(reader,reader.uint32());break;case 32:message.userStatusQueryRes=$root.UserStatusQueryResponse.decode(reader,reader.uint32());break;case 33:message.startMatchRes=$root.StartMatchResponse.decode(reader,reader.uint32());break;case 34:message.matchRes=$root.MatchResponse.decode(reader,reader.uint32());break;case 35:message.addLiveRes=$root.AddLiveResponse.decode(reader,reader.uint32());break;case 36:message.validateOpenRoomRes=$root.ValidateOpenRoomResponse.decode(reader,reader.uint32());break;case 100:message.statusNotify=$root.StatusNotify.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NetMessageResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NetMessageResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NetMessageResponse} NetMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NetMessageResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NetMessageResponse message.
     * @function verify
     * @memberof NetMessageResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NetMessageResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userRegister!=null&&message.hasOwnProperty("userRegister")){var error=$root.UserRegisterResponse.verify(message.userRegister);if(error)return"userRegister."+error;}if(message.userLogin!=null&&message.hasOwnProperty("userLogin")){var error=$root.UserLoginResponse.verify(message.userLogin);if(error)return"userLogin."+error;}if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail")){var error=$root.CharacterDetailResponse.verify(message.characterDetail);if(error)return"characterDetail."+error;}if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName")){var error=$root.UpdateNickNameResponse.verify(message.updateNickName);if(error)return"updateNickName."+error;}if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote")){var error=$root.AttrPromoteInfoResponse.verify(message.attrPromote);if(error)return"attrPromote."+error;}if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking")){var error=$root.CombatPowerRankingResponse.verify(message.combatPowerRanking);if(error)return"combatPowerRanking."+error;}if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy")){var error=$root.ItemBuyResponse.verify(message.itemBuy);if(error)return"itemBuy."+error;}if(message.followRes!=null&&message.hasOwnProperty("followRes")){var error=$root.FollowResponse.verify(message.followRes);if(error)return"followRes."+error;}if(message.unLockRes!=null&&message.hasOwnProperty("unLockRes")){var error=$root.UnLockResponse.verify(message.unLockRes);if(error)return"unLockRes."+error;}if(message.switchCharacterRes!=null&&message.hasOwnProperty("switchCharacterRes")){var error=$root.SwitchCharacterResponse.verify(message.switchCharacterRes);if(error)return"switchCharacterRes."+error;}if(message.bagHandleRes!=null&&message.hasOwnProperty("bagHandleRes")){var error=$root.BagHandleResponse.verify(message.bagHandleRes);if(error)return"bagHandleRes."+error;}if(message.userStatusChangeRes!=null&&message.hasOwnProperty("userStatusChangeRes")){var error=$root.UserStatusChangeResponse.verify(message.userStatusChangeRes);if(error)return"userStatusChangeRes."+error;}if(message.queryTranRes!=null&&message.hasOwnProperty("queryTranRes")){var error=$root.QueryTranResponse.verify(message.queryTranRes);if(error)return"queryTranRes."+error;}if(message.buyTranRes!=null&&message.hasOwnProperty("buyTranRes")){var error=$root.BuyTranResponse.verify(message.buyTranRes);if(error)return"buyTranRes."+error;}if(message.heartBeatRes!=null&&message.hasOwnProperty("heartBeatRes")){var error=$root.HeartBeatResponse.verify(message.heartBeatRes);if(error)return"heartBeatRes."+error;}if(message.offerPriceRes!=null&&message.hasOwnProperty("offerPriceRes")){var error=$root.OfferPriceResponse.verify(message.offerPriceRes);if(error)return"offerPriceRes."+error;}if(message.auctionRes!=null&&message.hasOwnProperty("auctionRes")){var error=$root.AuctionResponse.verify(message.auctionRes);if(error)return"auctionRes."+error;}if(message.getAuctionListRes!=null&&message.hasOwnProperty("getAuctionListRes")){var error=$root.GetAuctionListResponse.verify(message.getAuctionListRes);if(error)return"getAuctionListRes."+error;}if(message.tipsRes!=null&&message.hasOwnProperty("tipsRes")){var error=$root.TipsResponse.verify(message.tipsRes);if(error)return"tipsRes."+error;}if(message.myRoomRes!=null&&message.hasOwnProperty("myRoomRes")){var error=$root.MyRoomResponse.verify(message.myRoomRes);if(error)return"myRoomRes."+error;}if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq")){var error=$root.InviteRequest.verify(message.inviteReq);if(error)return"inviteReq."+error;}if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes")){var error=$root.InviteResponse.verify(message.inviteRes);if(error)return"inviteRes."+error;}if(message.kickOutRes!=null&&message.hasOwnProperty("kickOutRes")){var error=$root.KickOutResponse.verify(message.kickOutRes);if(error)return"kickOutRes."+error;}if(message.roomStartGameRes!=null&&message.hasOwnProperty("roomStartGameRes")){var error=$root.RoomStartGameResponse.verify(message.roomStartGameRes);if(error)return"roomStartGameRes."+error;}if(message.nickNameSearchRes!=null&&message.hasOwnProperty("nickNameSearchRes")){var error=$root.NickNameSearchResponse.verify(message.nickNameSearchRes);if(error)return"nickNameSearchRes."+error;}if(message.followListRes!=null&&message.hasOwnProperty("followListRes")){var error=$root.FollowListResponse.verify(message.followListRes);if(error)return"followListRes."+error;}if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq")){var error=$root.AddRoomRequest.verify(message.addRoomReq);if(error)return"addRoomReq."+error;}if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes")){var error=$root.AddRoomResponse.verify(message.addRoomRes);if(error)return"addRoomRes."+error;}if(message.outRoomRes!=null&&message.hasOwnProperty("outRoomRes")){var error=$root.OutRoomResponse.verify(message.outRoomRes);if(error)return"outRoomRes."+error;}if(message.chatRes!=null&&message.hasOwnProperty("chatRes")){var error=$root.ChatResponse.verify(message.chatRes);if(error)return"chatRes."+error;}if(message.userStatusQueryRes!=null&&message.hasOwnProperty("userStatusQueryRes")){var error=$root.UserStatusQueryResponse.verify(message.userStatusQueryRes);if(error)return"userStatusQueryRes."+error;}if(message.startMatchRes!=null&&message.hasOwnProperty("startMatchRes")){var error=$root.StartMatchResponse.verify(message.startMatchRes);if(error)return"startMatchRes."+error;}if(message.matchRes!=null&&message.hasOwnProperty("matchRes")){var error=$root.MatchResponse.verify(message.matchRes);if(error)return"matchRes."+error;}if(message.addLiveRes!=null&&message.hasOwnProperty("addLiveRes")){var error=$root.AddLiveResponse.verify(message.addLiveRes);if(error)return"addLiveRes."+error;}if(message.validateOpenRoomRes!=null&&message.hasOwnProperty("validateOpenRoomRes")){var error=$root.ValidateOpenRoomResponse.verify(message.validateOpenRoomRes);if(error)return"validateOpenRoomRes."+error;}if(message.statusNotify!=null&&message.hasOwnProperty("statusNotify")){var error=$root.StatusNotify.verify(message.statusNotify);if(error)return"statusNotify."+error;}return null;};/**
     * Creates a NetMessageResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NetMessageResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NetMessageResponse} NetMessageResponse
     */NetMessageResponse.fromObject=function fromObject(object){if(object instanceof $root.NetMessageResponse)return object;var message=new $root.NetMessageResponse();if(object.userRegister!=null){if(typeof object.userRegister!=="object")throw TypeError(".NetMessageResponse.userRegister: object expected");message.userRegister=$root.UserRegisterResponse.fromObject(object.userRegister);}if(object.userLogin!=null){if(typeof object.userLogin!=="object")throw TypeError(".NetMessageResponse.userLogin: object expected");message.userLogin=$root.UserLoginResponse.fromObject(object.userLogin);}if(object.characterDetail!=null){if(typeof object.characterDetail!=="object")throw TypeError(".NetMessageResponse.characterDetail: object expected");message.characterDetail=$root.CharacterDetailResponse.fromObject(object.characterDetail);}if(object.updateNickName!=null){if(typeof object.updateNickName!=="object")throw TypeError(".NetMessageResponse.updateNickName: object expected");message.updateNickName=$root.UpdateNickNameResponse.fromObject(object.updateNickName);}if(object.attrPromote!=null){if(typeof object.attrPromote!=="object")throw TypeError(".NetMessageResponse.attrPromote: object expected");message.attrPromote=$root.AttrPromoteInfoResponse.fromObject(object.attrPromote);}if(object.combatPowerRanking!=null){if(typeof object.combatPowerRanking!=="object")throw TypeError(".NetMessageResponse.combatPowerRanking: object expected");message.combatPowerRanking=$root.CombatPowerRankingResponse.fromObject(object.combatPowerRanking);}if(object.itemBuy!=null){if(typeof object.itemBuy!=="object")throw TypeError(".NetMessageResponse.itemBuy: object expected");message.itemBuy=$root.ItemBuyResponse.fromObject(object.itemBuy);}if(object.followRes!=null){if(typeof object.followRes!=="object")throw TypeError(".NetMessageResponse.followRes: object expected");message.followRes=$root.FollowResponse.fromObject(object.followRes);}if(object.unLockRes!=null){if(typeof object.unLockRes!=="object")throw TypeError(".NetMessageResponse.unLockRes: object expected");message.unLockRes=$root.UnLockResponse.fromObject(object.unLockRes);}if(object.switchCharacterRes!=null){if(typeof object.switchCharacterRes!=="object")throw TypeError(".NetMessageResponse.switchCharacterRes: object expected");message.switchCharacterRes=$root.SwitchCharacterResponse.fromObject(object.switchCharacterRes);}if(object.bagHandleRes!=null){if(typeof object.bagHandleRes!=="object")throw TypeError(".NetMessageResponse.bagHandleRes: object expected");message.bagHandleRes=$root.BagHandleResponse.fromObject(object.bagHandleRes);}if(object.userStatusChangeRes!=null){if(typeof object.userStatusChangeRes!=="object")throw TypeError(".NetMessageResponse.userStatusChangeRes: object expected");message.userStatusChangeRes=$root.UserStatusChangeResponse.fromObject(object.userStatusChangeRes);}if(object.queryTranRes!=null){if(typeof object.queryTranRes!=="object")throw TypeError(".NetMessageResponse.queryTranRes: object expected");message.queryTranRes=$root.QueryTranResponse.fromObject(object.queryTranRes);}if(object.buyTranRes!=null){if(typeof object.buyTranRes!=="object")throw TypeError(".NetMessageResponse.buyTranRes: object expected");message.buyTranRes=$root.BuyTranResponse.fromObject(object.buyTranRes);}if(object.heartBeatRes!=null){if(typeof object.heartBeatRes!=="object")throw TypeError(".NetMessageResponse.heartBeatRes: object expected");message.heartBeatRes=$root.HeartBeatResponse.fromObject(object.heartBeatRes);}if(object.offerPriceRes!=null){if(typeof object.offerPriceRes!=="object")throw TypeError(".NetMessageResponse.offerPriceRes: object expected");message.offerPriceRes=$root.OfferPriceResponse.fromObject(object.offerPriceRes);}if(object.auctionRes!=null){if(typeof object.auctionRes!=="object")throw TypeError(".NetMessageResponse.auctionRes: object expected");message.auctionRes=$root.AuctionResponse.fromObject(object.auctionRes);}if(object.getAuctionListRes!=null){if(typeof object.getAuctionListRes!=="object")throw TypeError(".NetMessageResponse.getAuctionListRes: object expected");message.getAuctionListRes=$root.GetAuctionListResponse.fromObject(object.getAuctionListRes);}if(object.tipsRes!=null){if(typeof object.tipsRes!=="object")throw TypeError(".NetMessageResponse.tipsRes: object expected");message.tipsRes=$root.TipsResponse.fromObject(object.tipsRes);}if(object.myRoomRes!=null){if(typeof object.myRoomRes!=="object")throw TypeError(".NetMessageResponse.myRoomRes: object expected");message.myRoomRes=$root.MyRoomResponse.fromObject(object.myRoomRes);}if(object.inviteReq!=null){if(typeof object.inviteReq!=="object")throw TypeError(".NetMessageResponse.inviteReq: object expected");message.inviteReq=$root.InviteRequest.fromObject(object.inviteReq);}if(object.inviteRes!=null){if(typeof object.inviteRes!=="object")throw TypeError(".NetMessageResponse.inviteRes: object expected");message.inviteRes=$root.InviteResponse.fromObject(object.inviteRes);}if(object.kickOutRes!=null){if(typeof object.kickOutRes!=="object")throw TypeError(".NetMessageResponse.kickOutRes: object expected");message.kickOutRes=$root.KickOutResponse.fromObject(object.kickOutRes);}if(object.roomStartGameRes!=null){if(typeof object.roomStartGameRes!=="object")throw TypeError(".NetMessageResponse.roomStartGameRes: object expected");message.roomStartGameRes=$root.RoomStartGameResponse.fromObject(object.roomStartGameRes);}if(object.nickNameSearchRes!=null){if(typeof object.nickNameSearchRes!=="object")throw TypeError(".NetMessageResponse.nickNameSearchRes: object expected");message.nickNameSearchRes=$root.NickNameSearchResponse.fromObject(object.nickNameSearchRes);}if(object.followListRes!=null){if(typeof object.followListRes!=="object")throw TypeError(".NetMessageResponse.followListRes: object expected");message.followListRes=$root.FollowListResponse.fromObject(object.followListRes);}if(object.addRoomReq!=null){if(typeof object.addRoomReq!=="object")throw TypeError(".NetMessageResponse.addRoomReq: object expected");message.addRoomReq=$root.AddRoomRequest.fromObject(object.addRoomReq);}if(object.addRoomRes!=null){if(typeof object.addRoomRes!=="object")throw TypeError(".NetMessageResponse.addRoomRes: object expected");message.addRoomRes=$root.AddRoomResponse.fromObject(object.addRoomRes);}if(object.outRoomRes!=null){if(typeof object.outRoomRes!=="object")throw TypeError(".NetMessageResponse.outRoomRes: object expected");message.outRoomRes=$root.OutRoomResponse.fromObject(object.outRoomRes);}if(object.chatRes!=null){if(typeof object.chatRes!=="object")throw TypeError(".NetMessageResponse.chatRes: object expected");message.chatRes=$root.ChatResponse.fromObject(object.chatRes);}if(object.userStatusQueryRes!=null){if(typeof object.userStatusQueryRes!=="object")throw TypeError(".NetMessageResponse.userStatusQueryRes: object expected");message.userStatusQueryRes=$root.UserStatusQueryResponse.fromObject(object.userStatusQueryRes);}if(object.startMatchRes!=null){if(typeof object.startMatchRes!=="object")throw TypeError(".NetMessageResponse.startMatchRes: object expected");message.startMatchRes=$root.StartMatchResponse.fromObject(object.startMatchRes);}if(object.matchRes!=null){if(typeof object.matchRes!=="object")throw TypeError(".NetMessageResponse.matchRes: object expected");message.matchRes=$root.MatchResponse.fromObject(object.matchRes);}if(object.addLiveRes!=null){if(typeof object.addLiveRes!=="object")throw TypeError(".NetMessageResponse.addLiveRes: object expected");message.addLiveRes=$root.AddLiveResponse.fromObject(object.addLiveRes);}if(object.validateOpenRoomRes!=null){if(typeof object.validateOpenRoomRes!=="object")throw TypeError(".NetMessageResponse.validateOpenRoomRes: object expected");message.validateOpenRoomRes=$root.ValidateOpenRoomResponse.fromObject(object.validateOpenRoomRes);}if(object.statusNotify!=null){if(typeof object.statusNotify!=="object")throw TypeError(".NetMessageResponse.statusNotify: object expected");message.statusNotify=$root.StatusNotify.fromObject(object.statusNotify);}return message;};/**
     * Creates a plain object from a NetMessageResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NetMessageResponse
     * @static
     * @param {NetMessageResponse} message NetMessageResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NetMessageResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userRegister=null;object.userLogin=null;object.characterDetail=null;object.updateNickName=null;object.attrPromote=null;object.combatPowerRanking=null;object.itemBuy=null;object.followRes=null;object.unLockRes=null;object.switchCharacterRes=null;object.bagHandleRes=null;object.userStatusChangeRes=null;object.queryTranRes=null;object.buyTranRes=null;object.heartBeatRes=null;object.offerPriceRes=null;object.auctionRes=null;object.getAuctionListRes=null;object.tipsRes=null;object.myRoomRes=null;object.inviteReq=null;object.inviteRes=null;object.kickOutRes=null;object.roomStartGameRes=null;object.nickNameSearchRes=null;object.followListRes=null;object.addRoomReq=null;object.addRoomRes=null;object.outRoomRes=null;object.chatRes=null;object.userStatusQueryRes=null;object.startMatchRes=null;object.matchRes=null;object.addLiveRes=null;object.validateOpenRoomRes=null;object.statusNotify=null;}if(message.userRegister!=null&&message.hasOwnProperty("userRegister"))object.userRegister=$root.UserRegisterResponse.toObject(message.userRegister,options);if(message.userLogin!=null&&message.hasOwnProperty("userLogin"))object.userLogin=$root.UserLoginResponse.toObject(message.userLogin,options);if(message.characterDetail!=null&&message.hasOwnProperty("characterDetail"))object.characterDetail=$root.CharacterDetailResponse.toObject(message.characterDetail,options);if(message.updateNickName!=null&&message.hasOwnProperty("updateNickName"))object.updateNickName=$root.UpdateNickNameResponse.toObject(message.updateNickName,options);if(message.attrPromote!=null&&message.hasOwnProperty("attrPromote"))object.attrPromote=$root.AttrPromoteInfoResponse.toObject(message.attrPromote,options);if(message.combatPowerRanking!=null&&message.hasOwnProperty("combatPowerRanking"))object.combatPowerRanking=$root.CombatPowerRankingResponse.toObject(message.combatPowerRanking,options);if(message.itemBuy!=null&&message.hasOwnProperty("itemBuy"))object.itemBuy=$root.ItemBuyResponse.toObject(message.itemBuy,options);if(message.followRes!=null&&message.hasOwnProperty("followRes"))object.followRes=$root.FollowResponse.toObject(message.followRes,options);if(message.unLockRes!=null&&message.hasOwnProperty("unLockRes"))object.unLockRes=$root.UnLockResponse.toObject(message.unLockRes,options);if(message.switchCharacterRes!=null&&message.hasOwnProperty("switchCharacterRes"))object.switchCharacterRes=$root.SwitchCharacterResponse.toObject(message.switchCharacterRes,options);if(message.bagHandleRes!=null&&message.hasOwnProperty("bagHandleRes"))object.bagHandleRes=$root.BagHandleResponse.toObject(message.bagHandleRes,options);if(message.userStatusChangeRes!=null&&message.hasOwnProperty("userStatusChangeRes"))object.userStatusChangeRes=$root.UserStatusChangeResponse.toObject(message.userStatusChangeRes,options);if(message.queryTranRes!=null&&message.hasOwnProperty("queryTranRes"))object.queryTranRes=$root.QueryTranResponse.toObject(message.queryTranRes,options);if(message.buyTranRes!=null&&message.hasOwnProperty("buyTranRes"))object.buyTranRes=$root.BuyTranResponse.toObject(message.buyTranRes,options);if(message.heartBeatRes!=null&&message.hasOwnProperty("heartBeatRes"))object.heartBeatRes=$root.HeartBeatResponse.toObject(message.heartBeatRes,options);if(message.offerPriceRes!=null&&message.hasOwnProperty("offerPriceRes"))object.offerPriceRes=$root.OfferPriceResponse.toObject(message.offerPriceRes,options);if(message.auctionRes!=null&&message.hasOwnProperty("auctionRes"))object.auctionRes=$root.AuctionResponse.toObject(message.auctionRes,options);if(message.getAuctionListRes!=null&&message.hasOwnProperty("getAuctionListRes"))object.getAuctionListRes=$root.GetAuctionListResponse.toObject(message.getAuctionListRes,options);if(message.tipsRes!=null&&message.hasOwnProperty("tipsRes"))object.tipsRes=$root.TipsResponse.toObject(message.tipsRes,options);if(message.myRoomRes!=null&&message.hasOwnProperty("myRoomRes"))object.myRoomRes=$root.MyRoomResponse.toObject(message.myRoomRes,options);if(message.inviteReq!=null&&message.hasOwnProperty("inviteReq"))object.inviteReq=$root.InviteRequest.toObject(message.inviteReq,options);if(message.inviteRes!=null&&message.hasOwnProperty("inviteRes"))object.inviteRes=$root.InviteResponse.toObject(message.inviteRes,options);if(message.kickOutRes!=null&&message.hasOwnProperty("kickOutRes"))object.kickOutRes=$root.KickOutResponse.toObject(message.kickOutRes,options);if(message.roomStartGameRes!=null&&message.hasOwnProperty("roomStartGameRes"))object.roomStartGameRes=$root.RoomStartGameResponse.toObject(message.roomStartGameRes,options);if(message.nickNameSearchRes!=null&&message.hasOwnProperty("nickNameSearchRes"))object.nickNameSearchRes=$root.NickNameSearchResponse.toObject(message.nickNameSearchRes,options);if(message.followListRes!=null&&message.hasOwnProperty("followListRes"))object.followListRes=$root.FollowListResponse.toObject(message.followListRes,options);if(message.addRoomReq!=null&&message.hasOwnProperty("addRoomReq"))object.addRoomReq=$root.AddRoomRequest.toObject(message.addRoomReq,options);if(message.addRoomRes!=null&&message.hasOwnProperty("addRoomRes"))object.addRoomRes=$root.AddRoomResponse.toObject(message.addRoomRes,options);if(message.outRoomRes!=null&&message.hasOwnProperty("outRoomRes"))object.outRoomRes=$root.OutRoomResponse.toObject(message.outRoomRes,options);if(message.chatRes!=null&&message.hasOwnProperty("chatRes"))object.chatRes=$root.ChatResponse.toObject(message.chatRes,options);if(message.userStatusQueryRes!=null&&message.hasOwnProperty("userStatusQueryRes"))object.userStatusQueryRes=$root.UserStatusQueryResponse.toObject(message.userStatusQueryRes,options);if(message.startMatchRes!=null&&message.hasOwnProperty("startMatchRes"))object.startMatchRes=$root.StartMatchResponse.toObject(message.startMatchRes,options);if(message.matchRes!=null&&message.hasOwnProperty("matchRes"))object.matchRes=$root.MatchResponse.toObject(message.matchRes,options);if(message.addLiveRes!=null&&message.hasOwnProperty("addLiveRes"))object.addLiveRes=$root.AddLiveResponse.toObject(message.addLiveRes,options);if(message.validateOpenRoomRes!=null&&message.hasOwnProperty("validateOpenRoomRes"))object.validateOpenRoomRes=$root.ValidateOpenRoomResponse.toObject(message.validateOpenRoomRes,options);if(message.statusNotify!=null&&message.hasOwnProperty("statusNotify"))object.statusNotify=$root.StatusNotify.toObject(message.statusNotify,options);return object;};/**
     * Converts this NetMessageResponse to JSON.
     * @function toJSON
     * @memberof NetMessageResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NetMessageResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NetMessageResponse;}();$root.UserLoginRequest=function(){/**
     * Properties of a UserLoginRequest.
     * @exports IUserLoginRequest
     * @interface IUserLoginRequest
     * @property {string|null} [userName] UserLoginRequest userName
     * @property {string|null} [passward] UserLoginRequest passward
     */ /**
     * Constructs a new UserLoginRequest.
     * @exports UserLoginRequest
     * @classdesc Represents a UserLoginRequest.
     * @implements IUserLoginRequest
     * @constructor
     * @param {IUserLoginRequest=} [properties] Properties to set
     */function UserLoginRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserLoginRequest userName.
     * @member {string} userName
     * @memberof UserLoginRequest
     * @instance
     */UserLoginRequest.prototype.userName="";/**
     * UserLoginRequest passward.
     * @member {string} passward
     * @memberof UserLoginRequest
     * @instance
     */UserLoginRequest.prototype.passward="";/**
     * Creates a new UserLoginRequest instance using the specified properties.
     * @function create
     * @memberof UserLoginRequest
     * @static
     * @param {IUserLoginRequest=} [properties] Properties to set
     * @returns {UserLoginRequest} UserLoginRequest instance
     */UserLoginRequest.create=function create(properties){return new UserLoginRequest(properties);};/**
     * Encodes the specified UserLoginRequest message. Does not implicitly {@link UserLoginRequest.verify|verify} messages.
     * @function encode
     * @memberof UserLoginRequest
     * @static
     * @param {IUserLoginRequest} message UserLoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserLoginRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userName!=null&&message.hasOwnProperty("userName"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);if(message.passward!=null&&message.hasOwnProperty("passward"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.passward);return writer;};/**
     * Encodes the specified UserLoginRequest message, length delimited. Does not implicitly {@link UserLoginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserLoginRequest
     * @static
     * @param {IUserLoginRequest} message UserLoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserLoginRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserLoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserLoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserLoginRequest} UserLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserLoginRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserLoginRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userName=reader.string();break;case 2:message.passward=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserLoginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserLoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserLoginRequest} UserLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserLoginRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserLoginRequest message.
     * @function verify
     * @memberof UserLoginRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserLoginRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userName!=null&&message.hasOwnProperty("userName"))if(!$util.isString(message.userName))return"userName: string expected";if(message.passward!=null&&message.hasOwnProperty("passward"))if(!$util.isString(message.passward))return"passward: string expected";return null;};/**
     * Creates a UserLoginRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserLoginRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserLoginRequest} UserLoginRequest
     */UserLoginRequest.fromObject=function fromObject(object){if(object instanceof $root.UserLoginRequest)return object;var message=new $root.UserLoginRequest();if(object.userName!=null)message.userName=String(object.userName);if(object.passward!=null)message.passward=String(object.passward);return message;};/**
     * Creates a plain object from a UserLoginRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserLoginRequest
     * @static
     * @param {UserLoginRequest} message UserLoginRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserLoginRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userName="";object.passward="";}if(message.userName!=null&&message.hasOwnProperty("userName"))object.userName=message.userName;if(message.passward!=null&&message.hasOwnProperty("passward"))object.passward=message.passward;return object;};/**
     * Converts this UserLoginRequest to JSON.
     * @function toJSON
     * @memberof UserLoginRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserLoginRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserLoginRequest;}();$root.UserLoginResponse=function(){/**
     * Properties of a UserLoginResponse.
     * @exports IUserLoginResponse
     * @interface IUserLoginResponse
     * @property {Result|null} [result] UserLoginResponse result
     * @property {string|null} [errormsg] UserLoginResponse errormsg
     * @property {INUser|null} [user] UserLoginResponse user
     */ /**
     * Constructs a new UserLoginResponse.
     * @exports UserLoginResponse
     * @classdesc Represents a UserLoginResponse.
     * @implements IUserLoginResponse
     * @constructor
     * @param {IUserLoginResponse=} [properties] Properties to set
     */function UserLoginResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserLoginResponse result.
     * @member {Result} result
     * @memberof UserLoginResponse
     * @instance
     */UserLoginResponse.prototype.result=0;/**
     * UserLoginResponse errormsg.
     * @member {string} errormsg
     * @memberof UserLoginResponse
     * @instance
     */UserLoginResponse.prototype.errormsg="";/**
     * UserLoginResponse user.
     * @member {INUser|null|undefined} user
     * @memberof UserLoginResponse
     * @instance
     */UserLoginResponse.prototype.user=null;/**
     * Creates a new UserLoginResponse instance using the specified properties.
     * @function create
     * @memberof UserLoginResponse
     * @static
     * @param {IUserLoginResponse=} [properties] Properties to set
     * @returns {UserLoginResponse} UserLoginResponse instance
     */UserLoginResponse.create=function create(properties){return new UserLoginResponse(properties);};/**
     * Encodes the specified UserLoginResponse message. Does not implicitly {@link UserLoginResponse.verify|verify} messages.
     * @function encode
     * @memberof UserLoginResponse
     * @static
     * @param {IUserLoginResponse} message UserLoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserLoginResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.user!=null&&message.hasOwnProperty("user"))$root.NUser.encode(message.user,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified UserLoginResponse message, length delimited. Does not implicitly {@link UserLoginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserLoginResponse
     * @static
     * @param {IUserLoginResponse} message UserLoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserLoginResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserLoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserLoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserLoginResponse} UserLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserLoginResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserLoginResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.user=$root.NUser.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserLoginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserLoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserLoginResponse} UserLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserLoginResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserLoginResponse message.
     * @function verify
     * @memberof UserLoginResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserLoginResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.user!=null&&message.hasOwnProperty("user")){var error=$root.NUser.verify(message.user);if(error)return"user."+error;}return null;};/**
     * Creates a UserLoginResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserLoginResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserLoginResponse} UserLoginResponse
     */UserLoginResponse.fromObject=function fromObject(object){if(object instanceof $root.UserLoginResponse)return object;var message=new $root.UserLoginResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.user!=null){if(typeof object.user!=="object")throw TypeError(".UserLoginResponse.user: object expected");message.user=$root.NUser.fromObject(object.user);}return message;};/**
     * Creates a plain object from a UserLoginResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserLoginResponse
     * @static
     * @param {UserLoginResponse} message UserLoginResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserLoginResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.user=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.user!=null&&message.hasOwnProperty("user"))object.user=$root.NUser.toObject(message.user,options);return object;};/**
     * Converts this UserLoginResponse to JSON.
     * @function toJSON
     * @memberof UserLoginResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserLoginResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserLoginResponse;}();$root.UserRegisterRequest=function(){/**
     * Properties of a UserRegisterRequest.
     * @exports IUserRegisterRequest
     * @interface IUserRegisterRequest
     * @property {string|null} [userName] UserRegisterRequest userName
     * @property {string|null} [password] UserRegisterRequest password
     */ /**
     * Constructs a new UserRegisterRequest.
     * @exports UserRegisterRequest
     * @classdesc Represents a UserRegisterRequest.
     * @implements IUserRegisterRequest
     * @constructor
     * @param {IUserRegisterRequest=} [properties] Properties to set
     */function UserRegisterRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserRegisterRequest userName.
     * @member {string} userName
     * @memberof UserRegisterRequest
     * @instance
     */UserRegisterRequest.prototype.userName="";/**
     * UserRegisterRequest password.
     * @member {string} password
     * @memberof UserRegisterRequest
     * @instance
     */UserRegisterRequest.prototype.password="";/**
     * Creates a new UserRegisterRequest instance using the specified properties.
     * @function create
     * @memberof UserRegisterRequest
     * @static
     * @param {IUserRegisterRequest=} [properties] Properties to set
     * @returns {UserRegisterRequest} UserRegisterRequest instance
     */UserRegisterRequest.create=function create(properties){return new UserRegisterRequest(properties);};/**
     * Encodes the specified UserRegisterRequest message. Does not implicitly {@link UserRegisterRequest.verify|verify} messages.
     * @function encode
     * @memberof UserRegisterRequest
     * @static
     * @param {IUserRegisterRequest} message UserRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserRegisterRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userName!=null&&message.hasOwnProperty("userName"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);if(message.password!=null&&message.hasOwnProperty("password"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);return writer;};/**
     * Encodes the specified UserRegisterRequest message, length delimited. Does not implicitly {@link UserRegisterRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRegisterRequest
     * @static
     * @param {IUserRegisterRequest} message UserRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserRegisterRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserRegisterRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRegisterRequest} UserRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserRegisterRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserRegisterRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userName=reader.string();break;case 2:message.password=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserRegisterRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRegisterRequest} UserRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserRegisterRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserRegisterRequest message.
     * @function verify
     * @memberof UserRegisterRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserRegisterRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userName!=null&&message.hasOwnProperty("userName"))if(!$util.isString(message.userName))return"userName: string expected";if(message.password!=null&&message.hasOwnProperty("password"))if(!$util.isString(message.password))return"password: string expected";return null;};/**
     * Creates a UserRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRegisterRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRegisterRequest} UserRegisterRequest
     */UserRegisterRequest.fromObject=function fromObject(object){if(object instanceof $root.UserRegisterRequest)return object;var message=new $root.UserRegisterRequest();if(object.userName!=null)message.userName=String(object.userName);if(object.password!=null)message.password=String(object.password);return message;};/**
     * Creates a plain object from a UserRegisterRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRegisterRequest
     * @static
     * @param {UserRegisterRequest} message UserRegisterRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserRegisterRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userName="";object.password="";}if(message.userName!=null&&message.hasOwnProperty("userName"))object.userName=message.userName;if(message.password!=null&&message.hasOwnProperty("password"))object.password=message.password;return object;};/**
     * Converts this UserRegisterRequest to JSON.
     * @function toJSON
     * @memberof UserRegisterRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserRegisterRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserRegisterRequest;}();$root.UserRegisterResponse=function(){/**
     * Properties of a UserRegisterResponse.
     * @exports IUserRegisterResponse
     * @interface IUserRegisterResponse
     * @property {Result|null} [result] UserRegisterResponse result
     * @property {string|null} [errormsg] UserRegisterResponse errormsg
     */ /**
     * Constructs a new UserRegisterResponse.
     * @exports UserRegisterResponse
     * @classdesc Represents a UserRegisterResponse.
     * @implements IUserRegisterResponse
     * @constructor
     * @param {IUserRegisterResponse=} [properties] Properties to set
     */function UserRegisterResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserRegisterResponse result.
     * @member {Result} result
     * @memberof UserRegisterResponse
     * @instance
     */UserRegisterResponse.prototype.result=0;/**
     * UserRegisterResponse errormsg.
     * @member {string} errormsg
     * @memberof UserRegisterResponse
     * @instance
     */UserRegisterResponse.prototype.errormsg="";/**
     * Creates a new UserRegisterResponse instance using the specified properties.
     * @function create
     * @memberof UserRegisterResponse
     * @static
     * @param {IUserRegisterResponse=} [properties] Properties to set
     * @returns {UserRegisterResponse} UserRegisterResponse instance
     */UserRegisterResponse.create=function create(properties){return new UserRegisterResponse(properties);};/**
     * Encodes the specified UserRegisterResponse message. Does not implicitly {@link UserRegisterResponse.verify|verify} messages.
     * @function encode
     * @memberof UserRegisterResponse
     * @static
     * @param {IUserRegisterResponse} message UserRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserRegisterResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified UserRegisterResponse message, length delimited. Does not implicitly {@link UserRegisterResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRegisterResponse
     * @static
     * @param {IUserRegisterResponse} message UserRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserRegisterResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserRegisterResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRegisterResponse} UserRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserRegisterResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserRegisterResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserRegisterResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRegisterResponse} UserRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserRegisterResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserRegisterResponse message.
     * @function verify
     * @memberof UserRegisterResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserRegisterResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a UserRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRegisterResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRegisterResponse} UserRegisterResponse
     */UserRegisterResponse.fromObject=function fromObject(object){if(object instanceof $root.UserRegisterResponse)return object;var message=new $root.UserRegisterResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a UserRegisterResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRegisterResponse
     * @static
     * @param {UserRegisterResponse} message UserRegisterResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserRegisterResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this UserRegisterResponse to JSON.
     * @function toJSON
     * @memberof UserRegisterResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserRegisterResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserRegisterResponse;}();$root.CharacterDetailRequest=function(){/**
     * Properties of a CharacterDetailRequest.
     * @exports ICharacterDetailRequest
     * @interface ICharacterDetailRequest
     * @property {number|null} [userId] CharacterDetailRequest userId
     * @property {number|null} [tCharacterId] CharacterDetailRequest tCharacterId
     */ /**
     * Constructs a new CharacterDetailRequest.
     * @exports CharacterDetailRequest
     * @classdesc Represents a CharacterDetailRequest.
     * @implements ICharacterDetailRequest
     * @constructor
     * @param {ICharacterDetailRequest=} [properties] Properties to set
     */function CharacterDetailRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * CharacterDetailRequest userId.
     * @member {number} userId
     * @memberof CharacterDetailRequest
     * @instance
     */CharacterDetailRequest.prototype.userId=0;/**
     * CharacterDetailRequest tCharacterId.
     * @member {number} tCharacterId
     * @memberof CharacterDetailRequest
     * @instance
     */CharacterDetailRequest.prototype.tCharacterId=0;/**
     * Creates a new CharacterDetailRequest instance using the specified properties.
     * @function create
     * @memberof CharacterDetailRequest
     * @static
     * @param {ICharacterDetailRequest=} [properties] Properties to set
     * @returns {CharacterDetailRequest} CharacterDetailRequest instance
     */CharacterDetailRequest.create=function create(properties){return new CharacterDetailRequest(properties);};/**
     * Encodes the specified CharacterDetailRequest message. Does not implicitly {@link CharacterDetailRequest.verify|verify} messages.
     * @function encode
     * @memberof CharacterDetailRequest
     * @static
     * @param {ICharacterDetailRequest} message CharacterDetailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CharacterDetailRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tCharacterId);return writer;};/**
     * Encodes the specified CharacterDetailRequest message, length delimited. Does not implicitly {@link CharacterDetailRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterDetailRequest
     * @static
     * @param {ICharacterDetailRequest} message CharacterDetailRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CharacterDetailRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a CharacterDetailRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterDetailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterDetailRequest} CharacterDetailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CharacterDetailRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.CharacterDetailRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;case 2:message.tCharacterId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a CharacterDetailRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterDetailRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterDetailRequest} CharacterDetailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CharacterDetailRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a CharacterDetailRequest message.
     * @function verify
     * @memberof CharacterDetailRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CharacterDetailRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))if(!$util.isInteger(message.tCharacterId))return"tCharacterId: integer expected";return null;};/**
     * Creates a CharacterDetailRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterDetailRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterDetailRequest} CharacterDetailRequest
     */CharacterDetailRequest.fromObject=function fromObject(object){if(object instanceof $root.CharacterDetailRequest)return object;var message=new $root.CharacterDetailRequest();if(object.userId!=null)message.userId=object.userId|0;if(object.tCharacterId!=null)message.tCharacterId=object.tCharacterId|0;return message;};/**
     * Creates a plain object from a CharacterDetailRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterDetailRequest
     * @static
     * @param {CharacterDetailRequest} message CharacterDetailRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CharacterDetailRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId=0;object.tCharacterId=0;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))object.tCharacterId=message.tCharacterId;return object;};/**
     * Converts this CharacterDetailRequest to JSON.
     * @function toJSON
     * @memberof CharacterDetailRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CharacterDetailRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return CharacterDetailRequest;}();$root.CharacterDetailResponse=function(){/**
     * Properties of a CharacterDetailResponse.
     * @exports ICharacterDetailResponse
     * @interface ICharacterDetailResponse
     * @property {Result|null} [result] CharacterDetailResponse result
     * @property {string|null} [errormsg] CharacterDetailResponse errormsg
     * @property {INUser|null} [user] CharacterDetailResponse user
     */ /**
     * Constructs a new CharacterDetailResponse.
     * @exports CharacterDetailResponse
     * @classdesc Represents a CharacterDetailResponse.
     * @implements ICharacterDetailResponse
     * @constructor
     * @param {ICharacterDetailResponse=} [properties] Properties to set
     */function CharacterDetailResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * CharacterDetailResponse result.
     * @member {Result} result
     * @memberof CharacterDetailResponse
     * @instance
     */CharacterDetailResponse.prototype.result=0;/**
     * CharacterDetailResponse errormsg.
     * @member {string} errormsg
     * @memberof CharacterDetailResponse
     * @instance
     */CharacterDetailResponse.prototype.errormsg="";/**
     * CharacterDetailResponse user.
     * @member {INUser|null|undefined} user
     * @memberof CharacterDetailResponse
     * @instance
     */CharacterDetailResponse.prototype.user=null;/**
     * Creates a new CharacterDetailResponse instance using the specified properties.
     * @function create
     * @memberof CharacterDetailResponse
     * @static
     * @param {ICharacterDetailResponse=} [properties] Properties to set
     * @returns {CharacterDetailResponse} CharacterDetailResponse instance
     */CharacterDetailResponse.create=function create(properties){return new CharacterDetailResponse(properties);};/**
     * Encodes the specified CharacterDetailResponse message. Does not implicitly {@link CharacterDetailResponse.verify|verify} messages.
     * @function encode
     * @memberof CharacterDetailResponse
     * @static
     * @param {ICharacterDetailResponse} message CharacterDetailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CharacterDetailResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.user!=null&&message.hasOwnProperty("user"))$root.NUser.encode(message.user,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified CharacterDetailResponse message, length delimited. Does not implicitly {@link CharacterDetailResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterDetailResponse
     * @static
     * @param {ICharacterDetailResponse} message CharacterDetailResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CharacterDetailResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a CharacterDetailResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterDetailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterDetailResponse} CharacterDetailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CharacterDetailResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.CharacterDetailResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.user=$root.NUser.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a CharacterDetailResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterDetailResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterDetailResponse} CharacterDetailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CharacterDetailResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a CharacterDetailResponse message.
     * @function verify
     * @memberof CharacterDetailResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CharacterDetailResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.user!=null&&message.hasOwnProperty("user")){var error=$root.NUser.verify(message.user);if(error)return"user."+error;}return null;};/**
     * Creates a CharacterDetailResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterDetailResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterDetailResponse} CharacterDetailResponse
     */CharacterDetailResponse.fromObject=function fromObject(object){if(object instanceof $root.CharacterDetailResponse)return object;var message=new $root.CharacterDetailResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.user!=null){if(typeof object.user!=="object")throw TypeError(".CharacterDetailResponse.user: object expected");message.user=$root.NUser.fromObject(object.user);}return message;};/**
     * Creates a plain object from a CharacterDetailResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterDetailResponse
     * @static
     * @param {CharacterDetailResponse} message CharacterDetailResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CharacterDetailResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.user=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.user!=null&&message.hasOwnProperty("user"))object.user=$root.NUser.toObject(message.user,options);return object;};/**
     * Converts this CharacterDetailResponse to JSON.
     * @function toJSON
     * @memberof CharacterDetailResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CharacterDetailResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return CharacterDetailResponse;}();$root.UpdateNickNameRequest=function(){/**
     * Properties of an UpdateNickNameRequest.
     * @exports IUpdateNickNameRequest
     * @interface IUpdateNickNameRequest
     * @property {string|null} [nickname] UpdateNickNameRequest nickname
     */ /**
     * Constructs a new UpdateNickNameRequest.
     * @exports UpdateNickNameRequest
     * @classdesc Represents an UpdateNickNameRequest.
     * @implements IUpdateNickNameRequest
     * @constructor
     * @param {IUpdateNickNameRequest=} [properties] Properties to set
     */function UpdateNickNameRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UpdateNickNameRequest nickname.
     * @member {string} nickname
     * @memberof UpdateNickNameRequest
     * @instance
     */UpdateNickNameRequest.prototype.nickname="";/**
     * Creates a new UpdateNickNameRequest instance using the specified properties.
     * @function create
     * @memberof UpdateNickNameRequest
     * @static
     * @param {IUpdateNickNameRequest=} [properties] Properties to set
     * @returns {UpdateNickNameRequest} UpdateNickNameRequest instance
     */UpdateNickNameRequest.create=function create(properties){return new UpdateNickNameRequest(properties);};/**
     * Encodes the specified UpdateNickNameRequest message. Does not implicitly {@link UpdateNickNameRequest.verify|verify} messages.
     * @function encode
     * @memberof UpdateNickNameRequest
     * @static
     * @param {IUpdateNickNameRequest} message UpdateNickNameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UpdateNickNameRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.nickname!=null&&message.hasOwnProperty("nickname"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickname);return writer;};/**
     * Encodes the specified UpdateNickNameRequest message, length delimited. Does not implicitly {@link UpdateNickNameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateNickNameRequest
     * @static
     * @param {IUpdateNickNameRequest} message UpdateNickNameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UpdateNickNameRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UpdateNickNameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateNickNameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateNickNameRequest} UpdateNickNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UpdateNickNameRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UpdateNickNameRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.nickname=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UpdateNickNameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateNickNameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateNickNameRequest} UpdateNickNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UpdateNickNameRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UpdateNickNameRequest message.
     * @function verify
     * @memberof UpdateNickNameRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UpdateNickNameRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.nickname!=null&&message.hasOwnProperty("nickname"))if(!$util.isString(message.nickname))return"nickname: string expected";return null;};/**
     * Creates an UpdateNickNameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateNickNameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateNickNameRequest} UpdateNickNameRequest
     */UpdateNickNameRequest.fromObject=function fromObject(object){if(object instanceof $root.UpdateNickNameRequest)return object;var message=new $root.UpdateNickNameRequest();if(object.nickname!=null)message.nickname=String(object.nickname);return message;};/**
     * Creates a plain object from an UpdateNickNameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateNickNameRequest
     * @static
     * @param {UpdateNickNameRequest} message UpdateNickNameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UpdateNickNameRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.nickname="";if(message.nickname!=null&&message.hasOwnProperty("nickname"))object.nickname=message.nickname;return object;};/**
     * Converts this UpdateNickNameRequest to JSON.
     * @function toJSON
     * @memberof UpdateNickNameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UpdateNickNameRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UpdateNickNameRequest;}();$root.UpdateNickNameResponse=function(){/**
     * Properties of an UpdateNickNameResponse.
     * @exports IUpdateNickNameResponse
     * @interface IUpdateNickNameResponse
     * @property {Result|null} [result] UpdateNickNameResponse result
     * @property {string|null} [errormsg] UpdateNickNameResponse errormsg
     */ /**
     * Constructs a new UpdateNickNameResponse.
     * @exports UpdateNickNameResponse
     * @classdesc Represents an UpdateNickNameResponse.
     * @implements IUpdateNickNameResponse
     * @constructor
     * @param {IUpdateNickNameResponse=} [properties] Properties to set
     */function UpdateNickNameResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UpdateNickNameResponse result.
     * @member {Result} result
     * @memberof UpdateNickNameResponse
     * @instance
     */UpdateNickNameResponse.prototype.result=0;/**
     * UpdateNickNameResponse errormsg.
     * @member {string} errormsg
     * @memberof UpdateNickNameResponse
     * @instance
     */UpdateNickNameResponse.prototype.errormsg="";/**
     * Creates a new UpdateNickNameResponse instance using the specified properties.
     * @function create
     * @memberof UpdateNickNameResponse
     * @static
     * @param {IUpdateNickNameResponse=} [properties] Properties to set
     * @returns {UpdateNickNameResponse} UpdateNickNameResponse instance
     */UpdateNickNameResponse.create=function create(properties){return new UpdateNickNameResponse(properties);};/**
     * Encodes the specified UpdateNickNameResponse message. Does not implicitly {@link UpdateNickNameResponse.verify|verify} messages.
     * @function encode
     * @memberof UpdateNickNameResponse
     * @static
     * @param {IUpdateNickNameResponse} message UpdateNickNameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UpdateNickNameResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified UpdateNickNameResponse message, length delimited. Does not implicitly {@link UpdateNickNameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UpdateNickNameResponse
     * @static
     * @param {IUpdateNickNameResponse} message UpdateNickNameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UpdateNickNameResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UpdateNickNameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UpdateNickNameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UpdateNickNameResponse} UpdateNickNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UpdateNickNameResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UpdateNickNameResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UpdateNickNameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UpdateNickNameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UpdateNickNameResponse} UpdateNickNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UpdateNickNameResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UpdateNickNameResponse message.
     * @function verify
     * @memberof UpdateNickNameResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UpdateNickNameResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates an UpdateNickNameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UpdateNickNameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UpdateNickNameResponse} UpdateNickNameResponse
     */UpdateNickNameResponse.fromObject=function fromObject(object){if(object instanceof $root.UpdateNickNameResponse)return object;var message=new $root.UpdateNickNameResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from an UpdateNickNameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UpdateNickNameResponse
     * @static
     * @param {UpdateNickNameResponse} message UpdateNickNameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UpdateNickNameResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this UpdateNickNameResponse to JSON.
     * @function toJSON
     * @memberof UpdateNickNameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UpdateNickNameResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UpdateNickNameResponse;}();$root.AttrPromoteInfoResponse=function(){/**
     * Properties of an AttrPromoteInfoResponse.
     * @exports IAttrPromoteInfoResponse
     * @interface IAttrPromoteInfoResponse
     * @property {Result|null} [result] AttrPromoteInfoResponse result
     * @property {string|null} [errormsg] AttrPromoteInfoResponse errormsg
     * @property {number|null} [spot] AttrPromoteInfoResponse spot
     * @property {number|null} [attrValue] AttrPromoteInfoResponse attrValue
     */ /**
     * Constructs a new AttrPromoteInfoResponse.
     * @exports AttrPromoteInfoResponse
     * @classdesc Represents an AttrPromoteInfoResponse.
     * @implements IAttrPromoteInfoResponse
     * @constructor
     * @param {IAttrPromoteInfoResponse=} [properties] Properties to set
     */function AttrPromoteInfoResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AttrPromoteInfoResponse result.
     * @member {Result} result
     * @memberof AttrPromoteInfoResponse
     * @instance
     */AttrPromoteInfoResponse.prototype.result=0;/**
     * AttrPromoteInfoResponse errormsg.
     * @member {string} errormsg
     * @memberof AttrPromoteInfoResponse
     * @instance
     */AttrPromoteInfoResponse.prototype.errormsg="";/**
     * AttrPromoteInfoResponse spot.
     * @member {number} spot
     * @memberof AttrPromoteInfoResponse
     * @instance
     */AttrPromoteInfoResponse.prototype.spot=0;/**
     * AttrPromoteInfoResponse attrValue.
     * @member {number} attrValue
     * @memberof AttrPromoteInfoResponse
     * @instance
     */AttrPromoteInfoResponse.prototype.attrValue=0;/**
     * Creates a new AttrPromoteInfoResponse instance using the specified properties.
     * @function create
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {IAttrPromoteInfoResponse=} [properties] Properties to set
     * @returns {AttrPromoteInfoResponse} AttrPromoteInfoResponse instance
     */AttrPromoteInfoResponse.create=function create(properties){return new AttrPromoteInfoResponse(properties);};/**
     * Encodes the specified AttrPromoteInfoResponse message. Does not implicitly {@link AttrPromoteInfoResponse.verify|verify} messages.
     * @function encode
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {IAttrPromoteInfoResponse} message AttrPromoteInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AttrPromoteInfoResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.spot!=null&&message.hasOwnProperty("spot"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.spot);if(message.attrValue!=null&&message.hasOwnProperty("attrValue"))writer.uint32(/* id 4, wireType 0 =*/32).int32(message.attrValue);return writer;};/**
     * Encodes the specified AttrPromoteInfoResponse message, length delimited. Does not implicitly {@link AttrPromoteInfoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {IAttrPromoteInfoResponse} message AttrPromoteInfoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AttrPromoteInfoResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AttrPromoteInfoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AttrPromoteInfoResponse} AttrPromoteInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AttrPromoteInfoResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AttrPromoteInfoResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.spot=reader.int32();break;case 4:message.attrValue=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AttrPromoteInfoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttrPromoteInfoResponse} AttrPromoteInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AttrPromoteInfoResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AttrPromoteInfoResponse message.
     * @function verify
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AttrPromoteInfoResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.spot!=null&&message.hasOwnProperty("spot"))if(!$util.isInteger(message.spot))return"spot: integer expected";if(message.attrValue!=null&&message.hasOwnProperty("attrValue"))if(!$util.isInteger(message.attrValue))return"attrValue: integer expected";return null;};/**
     * Creates an AttrPromoteInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AttrPromoteInfoResponse} AttrPromoteInfoResponse
     */AttrPromoteInfoResponse.fromObject=function fromObject(object){if(object instanceof $root.AttrPromoteInfoResponse)return object;var message=new $root.AttrPromoteInfoResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.spot!=null)message.spot=object.spot|0;if(object.attrValue!=null)message.attrValue=object.attrValue|0;return message;};/**
     * Creates a plain object from an AttrPromoteInfoResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AttrPromoteInfoResponse
     * @static
     * @param {AttrPromoteInfoResponse} message AttrPromoteInfoResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AttrPromoteInfoResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.spot=0;object.attrValue=0;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.spot!=null&&message.hasOwnProperty("spot"))object.spot=message.spot;if(message.attrValue!=null&&message.hasOwnProperty("attrValue"))object.attrValue=message.attrValue;return object;};/**
     * Converts this AttrPromoteInfoResponse to JSON.
     * @function toJSON
     * @memberof AttrPromoteInfoResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AttrPromoteInfoResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AttrPromoteInfoResponse;}();$root.AttrPromoteRequest=function(){/**
     * Properties of an AttrPromoteRequest.
     * @exports IAttrPromoteRequest
     * @interface IAttrPromoteRequest
     * @property {number|null} [tCharacterId] AttrPromoteRequest tCharacterId
     * @property {AttrPromoteType|null} [attrPromoteType] AttrPromoteRequest attrPromoteType
     */ /**
     * Constructs a new AttrPromoteRequest.
     * @exports AttrPromoteRequest
     * @classdesc Represents an AttrPromoteRequest.
     * @implements IAttrPromoteRequest
     * @constructor
     * @param {IAttrPromoteRequest=} [properties] Properties to set
     */function AttrPromoteRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AttrPromoteRequest tCharacterId.
     * @member {number} tCharacterId
     * @memberof AttrPromoteRequest
     * @instance
     */AttrPromoteRequest.prototype.tCharacterId=0;/**
     * AttrPromoteRequest attrPromoteType.
     * @member {AttrPromoteType} attrPromoteType
     * @memberof AttrPromoteRequest
     * @instance
     */AttrPromoteRequest.prototype.attrPromoteType=0;/**
     * Creates a new AttrPromoteRequest instance using the specified properties.
     * @function create
     * @memberof AttrPromoteRequest
     * @static
     * @param {IAttrPromoteRequest=} [properties] Properties to set
     * @returns {AttrPromoteRequest} AttrPromoteRequest instance
     */AttrPromoteRequest.create=function create(properties){return new AttrPromoteRequest(properties);};/**
     * Encodes the specified AttrPromoteRequest message. Does not implicitly {@link AttrPromoteRequest.verify|verify} messages.
     * @function encode
     * @memberof AttrPromoteRequest
     * @static
     * @param {IAttrPromoteRequest} message AttrPromoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AttrPromoteRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tCharacterId);if(message.attrPromoteType!=null&&message.hasOwnProperty("attrPromoteType"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.attrPromoteType);return writer;};/**
     * Encodes the specified AttrPromoteRequest message, length delimited. Does not implicitly {@link AttrPromoteRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AttrPromoteRequest
     * @static
     * @param {IAttrPromoteRequest} message AttrPromoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AttrPromoteRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AttrPromoteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AttrPromoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AttrPromoteRequest} AttrPromoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AttrPromoteRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AttrPromoteRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.tCharacterId=reader.int32();break;case 2:message.attrPromoteType=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AttrPromoteRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AttrPromoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AttrPromoteRequest} AttrPromoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AttrPromoteRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AttrPromoteRequest message.
     * @function verify
     * @memberof AttrPromoteRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AttrPromoteRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))if(!$util.isInteger(message.tCharacterId))return"tCharacterId: integer expected";if(message.attrPromoteType!=null&&message.hasOwnProperty("attrPromoteType"))switch(message.attrPromoteType){default:return"attrPromoteType: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 6:break;}return null;};/**
     * Creates an AttrPromoteRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AttrPromoteRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AttrPromoteRequest} AttrPromoteRequest
     */AttrPromoteRequest.fromObject=function fromObject(object){if(object instanceof $root.AttrPromoteRequest)return object;var message=new $root.AttrPromoteRequest();if(object.tCharacterId!=null)message.tCharacterId=object.tCharacterId|0;switch(object.attrPromoteType){case"Att":case 0:message.attrPromoteType=0;break;case"Def":case 1:message.attrPromoteType=1;break;case"Hp":case 2:message.attrPromoteType=2;break;case"Cri":case 3:message.attrPromoteType=3;break;case"Resu":case 4:message.attrPromoteType=4;break;case"Speed":case 5:message.attrPromoteType=5;break;case"Cd":case 6:message.attrPromoteType=6;break;}return message;};/**
     * Creates a plain object from an AttrPromoteRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AttrPromoteRequest
     * @static
     * @param {AttrPromoteRequest} message AttrPromoteRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AttrPromoteRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.tCharacterId=0;object.attrPromoteType=options.enums===String?"Att":0;}if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))object.tCharacterId=message.tCharacterId;if(message.attrPromoteType!=null&&message.hasOwnProperty("attrPromoteType"))object.attrPromoteType=options.enums===String?$root.AttrPromoteType[message.attrPromoteType]:message.attrPromoteType;return object;};/**
     * Converts this AttrPromoteRequest to JSON.
     * @function toJSON
     * @memberof AttrPromoteRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AttrPromoteRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AttrPromoteRequest;}();/**
 * AttrPromoteType enum.
 * @exports AttrPromoteType
 * @enum {string}
 * @property {number} Att=0 Att value
 * @property {number} Def=1 Def value
 * @property {number} Hp=2 Hp value
 * @property {number} Cri=3 Cri value
 * @property {number} Resu=4 Resu value
 * @property {number} Speed=5 Speed value
 * @property {number} Cd=6 Cd value
 */$root.AttrPromoteType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Att"]=0;values[valuesById[1]="Def"]=1;values[valuesById[2]="Hp"]=2;values[valuesById[3]="Cri"]=3;values[valuesById[4]="Resu"]=4;values[valuesById[5]="Speed"]=5;values[valuesById[6]="Cd"]=6;return values;}();$root.CombatPowerRankingRequest=function(){/**
     * Properties of a CombatPowerRankingRequest.
     * @exports ICombatPowerRankingRequest
     * @interface ICombatPowerRankingRequest
     */ /**
     * Constructs a new CombatPowerRankingRequest.
     * @exports CombatPowerRankingRequest
     * @classdesc Represents a CombatPowerRankingRequest.
     * @implements ICombatPowerRankingRequest
     * @constructor
     * @param {ICombatPowerRankingRequest=} [properties] Properties to set
     */function CombatPowerRankingRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new CombatPowerRankingRequest instance using the specified properties.
     * @function create
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {ICombatPowerRankingRequest=} [properties] Properties to set
     * @returns {CombatPowerRankingRequest} CombatPowerRankingRequest instance
     */CombatPowerRankingRequest.create=function create(properties){return new CombatPowerRankingRequest(properties);};/**
     * Encodes the specified CombatPowerRankingRequest message. Does not implicitly {@link CombatPowerRankingRequest.verify|verify} messages.
     * @function encode
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {ICombatPowerRankingRequest} message CombatPowerRankingRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CombatPowerRankingRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified CombatPowerRankingRequest message, length delimited. Does not implicitly {@link CombatPowerRankingRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {ICombatPowerRankingRequest} message CombatPowerRankingRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CombatPowerRankingRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a CombatPowerRankingRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CombatPowerRankingRequest} CombatPowerRankingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CombatPowerRankingRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.CombatPowerRankingRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a CombatPowerRankingRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CombatPowerRankingRequest} CombatPowerRankingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CombatPowerRankingRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a CombatPowerRankingRequest message.
     * @function verify
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CombatPowerRankingRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a CombatPowerRankingRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CombatPowerRankingRequest} CombatPowerRankingRequest
     */CombatPowerRankingRequest.fromObject=function fromObject(object){if(object instanceof $root.CombatPowerRankingRequest)return object;return new $root.CombatPowerRankingRequest();};/**
     * Creates a plain object from a CombatPowerRankingRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CombatPowerRankingRequest
     * @static
     * @param {CombatPowerRankingRequest} message CombatPowerRankingRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CombatPowerRankingRequest.toObject=function toObject(){return{};};/**
     * Converts this CombatPowerRankingRequest to JSON.
     * @function toJSON
     * @memberof CombatPowerRankingRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CombatPowerRankingRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return CombatPowerRankingRequest;}();$root.CombatPowerRankingResponse=function(){/**
     * Properties of a CombatPowerRankingResponse.
     * @exports ICombatPowerRankingResponse
     * @interface ICombatPowerRankingResponse
     * @property {Array.<INUser>|null} [users] CombatPowerRankingResponse users
     * @property {number|null} [myRanking] CombatPowerRankingResponse myRanking
     */ /**
     * Constructs a new CombatPowerRankingResponse.
     * @exports CombatPowerRankingResponse
     * @classdesc Represents a CombatPowerRankingResponse.
     * @implements ICombatPowerRankingResponse
     * @constructor
     * @param {ICombatPowerRankingResponse=} [properties] Properties to set
     */function CombatPowerRankingResponse(properties){this.users=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * CombatPowerRankingResponse users.
     * @member {Array.<INUser>} users
     * @memberof CombatPowerRankingResponse
     * @instance
     */CombatPowerRankingResponse.prototype.users=$util.emptyArray;/**
     * CombatPowerRankingResponse myRanking.
     * @member {number} myRanking
     * @memberof CombatPowerRankingResponse
     * @instance
     */CombatPowerRankingResponse.prototype.myRanking=0;/**
     * Creates a new CombatPowerRankingResponse instance using the specified properties.
     * @function create
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {ICombatPowerRankingResponse=} [properties] Properties to set
     * @returns {CombatPowerRankingResponse} CombatPowerRankingResponse instance
     */CombatPowerRankingResponse.create=function create(properties){return new CombatPowerRankingResponse(properties);};/**
     * Encodes the specified CombatPowerRankingResponse message. Does not implicitly {@link CombatPowerRankingResponse.verify|verify} messages.
     * @function encode
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {ICombatPowerRankingResponse} message CombatPowerRankingResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CombatPowerRankingResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.users!=null&&message.users.length)for(var i=0;i<message.users.length;++i){$root.NUser.encode(message.users[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}if(message.myRanking!=null&&message.hasOwnProperty("myRanking"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.myRanking);return writer;};/**
     * Encodes the specified CombatPowerRankingResponse message, length delimited. Does not implicitly {@link CombatPowerRankingResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {ICombatPowerRankingResponse} message CombatPowerRankingResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */CombatPowerRankingResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a CombatPowerRankingResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CombatPowerRankingResponse} CombatPowerRankingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CombatPowerRankingResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.CombatPowerRankingResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.users&&message.users.length))message.users=[];message.users.push($root.NUser.decode(reader,reader.uint32()));break;case 2:message.myRanking=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a CombatPowerRankingResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CombatPowerRankingResponse} CombatPowerRankingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */CombatPowerRankingResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a CombatPowerRankingResponse message.
     * @function verify
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */CombatPowerRankingResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.users!=null&&message.hasOwnProperty("users")){if(!Array.isArray(message.users))return"users: array expected";for(var i=0;i<message.users.length;++i){var error=$root.NUser.verify(message.users[i]);if(error)return"users."+error;}}if(message.myRanking!=null&&message.hasOwnProperty("myRanking"))if(!$util.isInteger(message.myRanking))return"myRanking: integer expected";return null;};/**
     * Creates a CombatPowerRankingResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CombatPowerRankingResponse} CombatPowerRankingResponse
     */CombatPowerRankingResponse.fromObject=function fromObject(object){if(object instanceof $root.CombatPowerRankingResponse)return object;var message=new $root.CombatPowerRankingResponse();if(object.users){if(!Array.isArray(object.users))throw TypeError(".CombatPowerRankingResponse.users: array expected");message.users=[];for(var i=0;i<object.users.length;++i){if(typeof object.users[i]!=="object")throw TypeError(".CombatPowerRankingResponse.users: object expected");message.users[i]=$root.NUser.fromObject(object.users[i]);}}if(object.myRanking!=null)message.myRanking=object.myRanking|0;return message;};/**
     * Creates a plain object from a CombatPowerRankingResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CombatPowerRankingResponse
     * @static
     * @param {CombatPowerRankingResponse} message CombatPowerRankingResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */CombatPowerRankingResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.users=[];if(options.defaults)object.myRanking=0;if(message.users&&message.users.length){object.users=[];for(var j=0;j<message.users.length;++j){object.users[j]=$root.NUser.toObject(message.users[j],options);}}if(message.myRanking!=null&&message.hasOwnProperty("myRanking"))object.myRanking=message.myRanking;return object;};/**
     * Converts this CombatPowerRankingResponse to JSON.
     * @function toJSON
     * @memberof CombatPowerRankingResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */CombatPowerRankingResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return CombatPowerRankingResponse;}();$root.ItemBuyRequest=function(){/**
     * Properties of an ItemBuyRequest.
     * @exports IItemBuyRequest
     * @interface IItemBuyRequest
     * @property {number|null} [shopId] ItemBuyRequest shopId
     * @property {number|null} [itemId] ItemBuyRequest itemId
     * @property {number|null} [count] ItemBuyRequest count
     */ /**
     * Constructs a new ItemBuyRequest.
     * @exports ItemBuyRequest
     * @classdesc Represents an ItemBuyRequest.
     * @implements IItemBuyRequest
     * @constructor
     * @param {IItemBuyRequest=} [properties] Properties to set
     */function ItemBuyRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ItemBuyRequest shopId.
     * @member {number} shopId
     * @memberof ItemBuyRequest
     * @instance
     */ItemBuyRequest.prototype.shopId=0;/**
     * ItemBuyRequest itemId.
     * @member {number} itemId
     * @memberof ItemBuyRequest
     * @instance
     */ItemBuyRequest.prototype.itemId=0;/**
     * ItemBuyRequest count.
     * @member {number} count
     * @memberof ItemBuyRequest
     * @instance
     */ItemBuyRequest.prototype.count=0;/**
     * Creates a new ItemBuyRequest instance using the specified properties.
     * @function create
     * @memberof ItemBuyRequest
     * @static
     * @param {IItemBuyRequest=} [properties] Properties to set
     * @returns {ItemBuyRequest} ItemBuyRequest instance
     */ItemBuyRequest.create=function create(properties){return new ItemBuyRequest(properties);};/**
     * Encodes the specified ItemBuyRequest message. Does not implicitly {@link ItemBuyRequest.verify|verify} messages.
     * @function encode
     * @memberof ItemBuyRequest
     * @static
     * @param {IItemBuyRequest} message ItemBuyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ItemBuyRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.shopId!=null&&message.hasOwnProperty("shopId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.shopId);if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);if(message.count!=null&&message.hasOwnProperty("count"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);return writer;};/**
     * Encodes the specified ItemBuyRequest message, length delimited. Does not implicitly {@link ItemBuyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemBuyRequest
     * @static
     * @param {IItemBuyRequest} message ItemBuyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ItemBuyRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an ItemBuyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ItemBuyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemBuyRequest} ItemBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ItemBuyRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ItemBuyRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.shopId=reader.int32();break;case 2:message.itemId=reader.int32();break;case 3:message.count=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an ItemBuyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemBuyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemBuyRequest} ItemBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ItemBuyRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an ItemBuyRequest message.
     * @function verify
     * @memberof ItemBuyRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ItemBuyRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.shopId!=null&&message.hasOwnProperty("shopId"))if(!$util.isInteger(message.shopId))return"shopId: integer expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";if(message.count!=null&&message.hasOwnProperty("count"))if(!$util.isInteger(message.count))return"count: integer expected";return null;};/**
     * Creates an ItemBuyRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ItemBuyRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemBuyRequest} ItemBuyRequest
     */ItemBuyRequest.fromObject=function fromObject(object){if(object instanceof $root.ItemBuyRequest)return object;var message=new $root.ItemBuyRequest();if(object.shopId!=null)message.shopId=object.shopId|0;if(object.itemId!=null)message.itemId=object.itemId|0;if(object.count!=null)message.count=object.count|0;return message;};/**
     * Creates a plain object from an ItemBuyRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ItemBuyRequest
     * @static
     * @param {ItemBuyRequest} message ItemBuyRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ItemBuyRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.shopId=0;object.itemId=0;object.count=0;}if(message.shopId!=null&&message.hasOwnProperty("shopId"))object.shopId=message.shopId;if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;if(message.count!=null&&message.hasOwnProperty("count"))object.count=message.count;return object;};/**
     * Converts this ItemBuyRequest to JSON.
     * @function toJSON
     * @memberof ItemBuyRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ItemBuyRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ItemBuyRequest;}();$root.ItemBuyResponse=function(){/**
     * Properties of an ItemBuyResponse.
     * @exports IItemBuyResponse
     * @interface IItemBuyResponse
     * @property {Result|null} [result] ItemBuyResponse result
     * @property {string|null} [errormsg] ItemBuyResponse errormsg
     */ /**
     * Constructs a new ItemBuyResponse.
     * @exports ItemBuyResponse
     * @classdesc Represents an ItemBuyResponse.
     * @implements IItemBuyResponse
     * @constructor
     * @param {IItemBuyResponse=} [properties] Properties to set
     */function ItemBuyResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ItemBuyResponse result.
     * @member {Result} result
     * @memberof ItemBuyResponse
     * @instance
     */ItemBuyResponse.prototype.result=0;/**
     * ItemBuyResponse errormsg.
     * @member {string} errormsg
     * @memberof ItemBuyResponse
     * @instance
     */ItemBuyResponse.prototype.errormsg="";/**
     * Creates a new ItemBuyResponse instance using the specified properties.
     * @function create
     * @memberof ItemBuyResponse
     * @static
     * @param {IItemBuyResponse=} [properties] Properties to set
     * @returns {ItemBuyResponse} ItemBuyResponse instance
     */ItemBuyResponse.create=function create(properties){return new ItemBuyResponse(properties);};/**
     * Encodes the specified ItemBuyResponse message. Does not implicitly {@link ItemBuyResponse.verify|verify} messages.
     * @function encode
     * @memberof ItemBuyResponse
     * @static
     * @param {IItemBuyResponse} message ItemBuyResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ItemBuyResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified ItemBuyResponse message, length delimited. Does not implicitly {@link ItemBuyResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ItemBuyResponse
     * @static
     * @param {IItemBuyResponse} message ItemBuyResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ItemBuyResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an ItemBuyResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ItemBuyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ItemBuyResponse} ItemBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ItemBuyResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ItemBuyResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an ItemBuyResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ItemBuyResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ItemBuyResponse} ItemBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ItemBuyResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an ItemBuyResponse message.
     * @function verify
     * @memberof ItemBuyResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ItemBuyResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates an ItemBuyResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ItemBuyResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ItemBuyResponse} ItemBuyResponse
     */ItemBuyResponse.fromObject=function fromObject(object){if(object instanceof $root.ItemBuyResponse)return object;var message=new $root.ItemBuyResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from an ItemBuyResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ItemBuyResponse
     * @static
     * @param {ItemBuyResponse} message ItemBuyResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ItemBuyResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this ItemBuyResponse to JSON.
     * @function toJSON
     * @memberof ItemBuyResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ItemBuyResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ItemBuyResponse;}();$root.FollowRequest=function(){/**
     * Properties of a FollowRequest.
     * @exports IFollowRequest
     * @interface IFollowRequest
     * @property {number|null} [userId] FollowRequest userId
     * @property {boolean|null} [isFollow] FollowRequest isFollow
     */ /**
     * Constructs a new FollowRequest.
     * @exports FollowRequest
     * @classdesc Represents a FollowRequest.
     * @implements IFollowRequest
     * @constructor
     * @param {IFollowRequest=} [properties] Properties to set
     */function FollowRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * FollowRequest userId.
     * @member {number} userId
     * @memberof FollowRequest
     * @instance
     */FollowRequest.prototype.userId=0;/**
     * FollowRequest isFollow.
     * @member {boolean} isFollow
     * @memberof FollowRequest
     * @instance
     */FollowRequest.prototype.isFollow=false;/**
     * Creates a new FollowRequest instance using the specified properties.
     * @function create
     * @memberof FollowRequest
     * @static
     * @param {IFollowRequest=} [properties] Properties to set
     * @returns {FollowRequest} FollowRequest instance
     */FollowRequest.create=function create(properties){return new FollowRequest(properties);};/**
     * Encodes the specified FollowRequest message. Does not implicitly {@link FollowRequest.verify|verify} messages.
     * @function encode
     * @memberof FollowRequest
     * @static
     * @param {IFollowRequest} message FollowRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isFollow);return writer;};/**
     * Encodes the specified FollowRequest message, length delimited. Does not implicitly {@link FollowRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FollowRequest
     * @static
     * @param {IFollowRequest} message FollowRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a FollowRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FollowRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FollowRequest} FollowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.FollowRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;case 2:message.isFollow=reader.bool();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a FollowRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FollowRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FollowRequest} FollowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a FollowRequest message.
     * @function verify
     * @memberof FollowRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */FollowRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))if(typeof message.isFollow!=="boolean")return"isFollow: boolean expected";return null;};/**
     * Creates a FollowRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FollowRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FollowRequest} FollowRequest
     */FollowRequest.fromObject=function fromObject(object){if(object instanceof $root.FollowRequest)return object;var message=new $root.FollowRequest();if(object.userId!=null)message.userId=object.userId|0;if(object.isFollow!=null)message.isFollow=Boolean(object.isFollow);return message;};/**
     * Creates a plain object from a FollowRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FollowRequest
     * @static
     * @param {FollowRequest} message FollowRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */FollowRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId=0;object.isFollow=false;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.isFollow!=null&&message.hasOwnProperty("isFollow"))object.isFollow=message.isFollow;return object;};/**
     * Converts this FollowRequest to JSON.
     * @function toJSON
     * @memberof FollowRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */FollowRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return FollowRequest;}();$root.FollowResponse=function(){/**
     * Properties of a FollowResponse.
     * @exports IFollowResponse
     * @interface IFollowResponse
     * @property {Result|null} [result] FollowResponse result
     * @property {string|null} [errormsg] FollowResponse errormsg
     */ /**
     * Constructs a new FollowResponse.
     * @exports FollowResponse
     * @classdesc Represents a FollowResponse.
     * @implements IFollowResponse
     * @constructor
     * @param {IFollowResponse=} [properties] Properties to set
     */function FollowResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * FollowResponse result.
     * @member {Result} result
     * @memberof FollowResponse
     * @instance
     */FollowResponse.prototype.result=0;/**
     * FollowResponse errormsg.
     * @member {string} errormsg
     * @memberof FollowResponse
     * @instance
     */FollowResponse.prototype.errormsg="";/**
     * Creates a new FollowResponse instance using the specified properties.
     * @function create
     * @memberof FollowResponse
     * @static
     * @param {IFollowResponse=} [properties] Properties to set
     * @returns {FollowResponse} FollowResponse instance
     */FollowResponse.create=function create(properties){return new FollowResponse(properties);};/**
     * Encodes the specified FollowResponse message. Does not implicitly {@link FollowResponse.verify|verify} messages.
     * @function encode
     * @memberof FollowResponse
     * @static
     * @param {IFollowResponse} message FollowResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified FollowResponse message, length delimited. Does not implicitly {@link FollowResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FollowResponse
     * @static
     * @param {IFollowResponse} message FollowResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a FollowResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FollowResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FollowResponse} FollowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.FollowResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a FollowResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FollowResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FollowResponse} FollowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a FollowResponse message.
     * @function verify
     * @memberof FollowResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */FollowResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a FollowResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FollowResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FollowResponse} FollowResponse
     */FollowResponse.fromObject=function fromObject(object){if(object instanceof $root.FollowResponse)return object;var message=new $root.FollowResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a FollowResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FollowResponse
     * @static
     * @param {FollowResponse} message FollowResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */FollowResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this FollowResponse to JSON.
     * @function toJSON
     * @memberof FollowResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */FollowResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return FollowResponse;}();$root.UnLockRequest=function(){/**
     * Properties of an UnLockRequest.
     * @exports IUnLockRequest
     * @interface IUnLockRequest
     * @property {number|null} [cCharacterId] UnLockRequest cCharacterId
     */ /**
     * Constructs a new UnLockRequest.
     * @exports UnLockRequest
     * @classdesc Represents an UnLockRequest.
     * @implements IUnLockRequest
     * @constructor
     * @param {IUnLockRequest=} [properties] Properties to set
     */function UnLockRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UnLockRequest cCharacterId.
     * @member {number} cCharacterId
     * @memberof UnLockRequest
     * @instance
     */UnLockRequest.prototype.cCharacterId=0;/**
     * Creates a new UnLockRequest instance using the specified properties.
     * @function create
     * @memberof UnLockRequest
     * @static
     * @param {IUnLockRequest=} [properties] Properties to set
     * @returns {UnLockRequest} UnLockRequest instance
     */UnLockRequest.create=function create(properties){return new UnLockRequest(properties);};/**
     * Encodes the specified UnLockRequest message. Does not implicitly {@link UnLockRequest.verify|verify} messages.
     * @function encode
     * @memberof UnLockRequest
     * @static
     * @param {IUnLockRequest} message UnLockRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cCharacterId);return writer;};/**
     * Encodes the specified UnLockRequest message, length delimited. Does not implicitly {@link UnLockRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnLockRequest
     * @static
     * @param {IUnLockRequest} message UnLockRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UnLockRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UnLockRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnLockRequest} UnLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UnLockRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.cCharacterId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UnLockRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnLockRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnLockRequest} UnLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UnLockRequest message.
     * @function verify
     * @memberof UnLockRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UnLockRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))if(!$util.isInteger(message.cCharacterId))return"cCharacterId: integer expected";return null;};/**
     * Creates an UnLockRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnLockRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnLockRequest} UnLockRequest
     */UnLockRequest.fromObject=function fromObject(object){if(object instanceof $root.UnLockRequest)return object;var message=new $root.UnLockRequest();if(object.cCharacterId!=null)message.cCharacterId=object.cCharacterId|0;return message;};/**
     * Creates a plain object from an UnLockRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnLockRequest
     * @static
     * @param {UnLockRequest} message UnLockRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UnLockRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.cCharacterId=0;if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))object.cCharacterId=message.cCharacterId;return object;};/**
     * Converts this UnLockRequest to JSON.
     * @function toJSON
     * @memberof UnLockRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UnLockRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UnLockRequest;}();$root.UnLockResponse=function(){/**
     * Properties of an UnLockResponse.
     * @exports IUnLockResponse
     * @interface IUnLockResponse
     * @property {Result|null} [result] UnLockResponse result
     * @property {string|null} [errormsg] UnLockResponse errormsg
     * @property {IUnLockCharacter|null} [unLockCharacter] UnLockResponse unLockCharacter
     */ /**
     * Constructs a new UnLockResponse.
     * @exports UnLockResponse
     * @classdesc Represents an UnLockResponse.
     * @implements IUnLockResponse
     * @constructor
     * @param {IUnLockResponse=} [properties] Properties to set
     */function UnLockResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UnLockResponse result.
     * @member {Result} result
     * @memberof UnLockResponse
     * @instance
     */UnLockResponse.prototype.result=0;/**
     * UnLockResponse errormsg.
     * @member {string} errormsg
     * @memberof UnLockResponse
     * @instance
     */UnLockResponse.prototype.errormsg="";/**
     * UnLockResponse unLockCharacter.
     * @member {IUnLockCharacter|null|undefined} unLockCharacter
     * @memberof UnLockResponse
     * @instance
     */UnLockResponse.prototype.unLockCharacter=null;/**
     * Creates a new UnLockResponse instance using the specified properties.
     * @function create
     * @memberof UnLockResponse
     * @static
     * @param {IUnLockResponse=} [properties] Properties to set
     * @returns {UnLockResponse} UnLockResponse instance
     */UnLockResponse.create=function create(properties){return new UnLockResponse(properties);};/**
     * Encodes the specified UnLockResponse message. Does not implicitly {@link UnLockResponse.verify|verify} messages.
     * @function encode
     * @memberof UnLockResponse
     * @static
     * @param {IUnLockResponse} message UnLockResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.unLockCharacter!=null&&message.hasOwnProperty("unLockCharacter"))$root.UnLockCharacter.encode(message.unLockCharacter,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified UnLockResponse message, length delimited. Does not implicitly {@link UnLockResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UnLockResponse
     * @static
     * @param {IUnLockResponse} message UnLockResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UnLockResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UnLockResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UnLockResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UnLockResponse} UnLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UnLockResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.unLockCharacter=$root.UnLockCharacter.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UnLockResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UnLockResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UnLockResponse} UnLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UnLockResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UnLockResponse message.
     * @function verify
     * @memberof UnLockResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UnLockResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.unLockCharacter!=null&&message.hasOwnProperty("unLockCharacter")){var error=$root.UnLockCharacter.verify(message.unLockCharacter);if(error)return"unLockCharacter."+error;}return null;};/**
     * Creates an UnLockResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UnLockResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UnLockResponse} UnLockResponse
     */UnLockResponse.fromObject=function fromObject(object){if(object instanceof $root.UnLockResponse)return object;var message=new $root.UnLockResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.unLockCharacter!=null){if(typeof object.unLockCharacter!=="object")throw TypeError(".UnLockResponse.unLockCharacter: object expected");message.unLockCharacter=$root.UnLockCharacter.fromObject(object.unLockCharacter);}return message;};/**
     * Creates a plain object from an UnLockResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UnLockResponse
     * @static
     * @param {UnLockResponse} message UnLockResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UnLockResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.unLockCharacter=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.unLockCharacter!=null&&message.hasOwnProperty("unLockCharacter"))object.unLockCharacter=$root.UnLockCharacter.toObject(message.unLockCharacter,options);return object;};/**
     * Converts this UnLockResponse to JSON.
     * @function toJSON
     * @memberof UnLockResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UnLockResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UnLockResponse;}();$root.SwitchCharacterRequest=function(){/**
     * Properties of a SwitchCharacterRequest.
     * @exports ISwitchCharacterRequest
     * @interface ISwitchCharacterRequest
     * @property {number|null} [tCharacterId] SwitchCharacterRequest tCharacterId
     */ /**
     * Constructs a new SwitchCharacterRequest.
     * @exports SwitchCharacterRequest
     * @classdesc Represents a SwitchCharacterRequest.
     * @implements ISwitchCharacterRequest
     * @constructor
     * @param {ISwitchCharacterRequest=} [properties] Properties to set
     */function SwitchCharacterRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * SwitchCharacterRequest tCharacterId.
     * @member {number} tCharacterId
     * @memberof SwitchCharacterRequest
     * @instance
     */SwitchCharacterRequest.prototype.tCharacterId=0;/**
     * Creates a new SwitchCharacterRequest instance using the specified properties.
     * @function create
     * @memberof SwitchCharacterRequest
     * @static
     * @param {ISwitchCharacterRequest=} [properties] Properties to set
     * @returns {SwitchCharacterRequest} SwitchCharacterRequest instance
     */SwitchCharacterRequest.create=function create(properties){return new SwitchCharacterRequest(properties);};/**
     * Encodes the specified SwitchCharacterRequest message. Does not implicitly {@link SwitchCharacterRequest.verify|verify} messages.
     * @function encode
     * @memberof SwitchCharacterRequest
     * @static
     * @param {ISwitchCharacterRequest} message SwitchCharacterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */SwitchCharacterRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tCharacterId);return writer;};/**
     * Encodes the specified SwitchCharacterRequest message, length delimited. Does not implicitly {@link SwitchCharacterRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SwitchCharacterRequest
     * @static
     * @param {ISwitchCharacterRequest} message SwitchCharacterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */SwitchCharacterRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a SwitchCharacterRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SwitchCharacterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SwitchCharacterRequest} SwitchCharacterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */SwitchCharacterRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.SwitchCharacterRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.tCharacterId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a SwitchCharacterRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SwitchCharacterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SwitchCharacterRequest} SwitchCharacterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */SwitchCharacterRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a SwitchCharacterRequest message.
     * @function verify
     * @memberof SwitchCharacterRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */SwitchCharacterRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))if(!$util.isInteger(message.tCharacterId))return"tCharacterId: integer expected";return null;};/**
     * Creates a SwitchCharacterRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SwitchCharacterRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SwitchCharacterRequest} SwitchCharacterRequest
     */SwitchCharacterRequest.fromObject=function fromObject(object){if(object instanceof $root.SwitchCharacterRequest)return object;var message=new $root.SwitchCharacterRequest();if(object.tCharacterId!=null)message.tCharacterId=object.tCharacterId|0;return message;};/**
     * Creates a plain object from a SwitchCharacterRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SwitchCharacterRequest
     * @static
     * @param {SwitchCharacterRequest} message SwitchCharacterRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */SwitchCharacterRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.tCharacterId=0;if(message.tCharacterId!=null&&message.hasOwnProperty("tCharacterId"))object.tCharacterId=message.tCharacterId;return object;};/**
     * Converts this SwitchCharacterRequest to JSON.
     * @function toJSON
     * @memberof SwitchCharacterRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */SwitchCharacterRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return SwitchCharacterRequest;}();$root.SwitchCharacterResponse=function(){/**
     * Properties of a SwitchCharacterResponse.
     * @exports ISwitchCharacterResponse
     * @interface ISwitchCharacterResponse
     * @property {Result|null} [result] SwitchCharacterResponse result
     * @property {string|null} [errormsg] SwitchCharacterResponse errormsg
     * @property {INCharacter|null} [character] SwitchCharacterResponse character
     */ /**
     * Constructs a new SwitchCharacterResponse.
     * @exports SwitchCharacterResponse
     * @classdesc Represents a SwitchCharacterResponse.
     * @implements ISwitchCharacterResponse
     * @constructor
     * @param {ISwitchCharacterResponse=} [properties] Properties to set
     */function SwitchCharacterResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * SwitchCharacterResponse result.
     * @member {Result} result
     * @memberof SwitchCharacterResponse
     * @instance
     */SwitchCharacterResponse.prototype.result=0;/**
     * SwitchCharacterResponse errormsg.
     * @member {string} errormsg
     * @memberof SwitchCharacterResponse
     * @instance
     */SwitchCharacterResponse.prototype.errormsg="";/**
     * SwitchCharacterResponse character.
     * @member {INCharacter|null|undefined} character
     * @memberof SwitchCharacterResponse
     * @instance
     */SwitchCharacterResponse.prototype.character=null;/**
     * Creates a new SwitchCharacterResponse instance using the specified properties.
     * @function create
     * @memberof SwitchCharacterResponse
     * @static
     * @param {ISwitchCharacterResponse=} [properties] Properties to set
     * @returns {SwitchCharacterResponse} SwitchCharacterResponse instance
     */SwitchCharacterResponse.create=function create(properties){return new SwitchCharacterResponse(properties);};/**
     * Encodes the specified SwitchCharacterResponse message. Does not implicitly {@link SwitchCharacterResponse.verify|verify} messages.
     * @function encode
     * @memberof SwitchCharacterResponse
     * @static
     * @param {ISwitchCharacterResponse} message SwitchCharacterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */SwitchCharacterResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.character!=null&&message.hasOwnProperty("character"))$root.NCharacter.encode(message.character,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified SwitchCharacterResponse message, length delimited. Does not implicitly {@link SwitchCharacterResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SwitchCharacterResponse
     * @static
     * @param {ISwitchCharacterResponse} message SwitchCharacterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */SwitchCharacterResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a SwitchCharacterResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SwitchCharacterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SwitchCharacterResponse} SwitchCharacterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */SwitchCharacterResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.SwitchCharacterResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.character=$root.NCharacter.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a SwitchCharacterResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SwitchCharacterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SwitchCharacterResponse} SwitchCharacterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */SwitchCharacterResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a SwitchCharacterResponse message.
     * @function verify
     * @memberof SwitchCharacterResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */SwitchCharacterResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.character!=null&&message.hasOwnProperty("character")){var error=$root.NCharacter.verify(message.character);if(error)return"character."+error;}return null;};/**
     * Creates a SwitchCharacterResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SwitchCharacterResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SwitchCharacterResponse} SwitchCharacterResponse
     */SwitchCharacterResponse.fromObject=function fromObject(object){if(object instanceof $root.SwitchCharacterResponse)return object;var message=new $root.SwitchCharacterResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.character!=null){if(typeof object.character!=="object")throw TypeError(".SwitchCharacterResponse.character: object expected");message.character=$root.NCharacter.fromObject(object.character);}return message;};/**
     * Creates a plain object from a SwitchCharacterResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SwitchCharacterResponse
     * @static
     * @param {SwitchCharacterResponse} message SwitchCharacterResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */SwitchCharacterResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.character=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.character!=null&&message.hasOwnProperty("character"))object.character=$root.NCharacter.toObject(message.character,options);return object;};/**
     * Converts this SwitchCharacterResponse to JSON.
     * @function toJSON
     * @memberof SwitchCharacterResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */SwitchCharacterResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return SwitchCharacterResponse;}();$root.BagHandleRequest=function(){/**
     * Properties of a BagHandleRequest.
     * @exports IBagHandleRequest
     * @interface IBagHandleRequest
     * @property {number|null} [itemId] BagHandleRequest itemId
     * @property {BagHandleType|null} [bagHandleType] BagHandleRequest bagHandleType
     * @property {number|Long|null} [money] BagHandleRequest money
     */ /**
     * Constructs a new BagHandleRequest.
     * @exports BagHandleRequest
     * @classdesc Represents a BagHandleRequest.
     * @implements IBagHandleRequest
     * @constructor
     * @param {IBagHandleRequest=} [properties] Properties to set
     */function BagHandleRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * BagHandleRequest itemId.
     * @member {number} itemId
     * @memberof BagHandleRequest
     * @instance
     */BagHandleRequest.prototype.itemId=0;/**
     * BagHandleRequest bagHandleType.
     * @member {BagHandleType} bagHandleType
     * @memberof BagHandleRequest
     * @instance
     */BagHandleRequest.prototype.bagHandleType=0;/**
     * BagHandleRequest money.
     * @member {number|Long} money
     * @memberof BagHandleRequest
     * @instance
     */BagHandleRequest.prototype.money=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new BagHandleRequest instance using the specified properties.
     * @function create
     * @memberof BagHandleRequest
     * @static
     * @param {IBagHandleRequest=} [properties] Properties to set
     * @returns {BagHandleRequest} BagHandleRequest instance
     */BagHandleRequest.create=function create(properties){return new BagHandleRequest(properties);};/**
     * Encodes the specified BagHandleRequest message. Does not implicitly {@link BagHandleRequest.verify|verify} messages.
     * @function encode
     * @memberof BagHandleRequest
     * @static
     * @param {IBagHandleRequest} message BagHandleRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BagHandleRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);if(message.bagHandleType!=null&&message.hasOwnProperty("bagHandleType"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bagHandleType);if(message.money!=null&&message.hasOwnProperty("money"))writer.uint32(/* id 3, wireType 0 =*/24).int64(message.money);return writer;};/**
     * Encodes the specified BagHandleRequest message, length delimited. Does not implicitly {@link BagHandleRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BagHandleRequest
     * @static
     * @param {IBagHandleRequest} message BagHandleRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BagHandleRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a BagHandleRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BagHandleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BagHandleRequest} BagHandleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BagHandleRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.BagHandleRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.itemId=reader.int32();break;case 2:message.bagHandleType=reader.int32();break;case 3:message.money=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a BagHandleRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BagHandleRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BagHandleRequest} BagHandleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BagHandleRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a BagHandleRequest message.
     * @function verify
     * @memberof BagHandleRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BagHandleRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";if(message.bagHandleType!=null&&message.hasOwnProperty("bagHandleType"))switch(message.bagHandleType){default:return"bagHandleType: enum value expected";case 0:case 1:case 2:break;}if(message.money!=null&&message.hasOwnProperty("money"))if(!$util.isInteger(message.money)&&!(message.money&&$util.isInteger(message.money.low)&&$util.isInteger(message.money.high)))return"money: integer|Long expected";return null;};/**
     * Creates a BagHandleRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BagHandleRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BagHandleRequest} BagHandleRequest
     */BagHandleRequest.fromObject=function fromObject(object){if(object instanceof $root.BagHandleRequest)return object;var message=new $root.BagHandleRequest();if(object.itemId!=null)message.itemId=object.itemId|0;switch(object.bagHandleType){case"SELL":case 0:message.bagHandleType=0;break;case"TRAN":case 1:message.bagHandleType=1;break;case"CANCELTRAN":case 2:message.bagHandleType=2;break;}if(object.money!=null)if($util.Long)(message.money=$util.Long.fromValue(object.money)).unsigned=false;else if(typeof object.money==="string")message.money=parseInt(object.money,10);else if(typeof object.money==="number")message.money=object.money;else if(typeof object.money==="object")message.money=new $util.LongBits(object.money.low>>>0,object.money.high>>>0).toNumber();return message;};/**
     * Creates a plain object from a BagHandleRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BagHandleRequest
     * @static
     * @param {BagHandleRequest} message BagHandleRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BagHandleRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.itemId=0;object.bagHandleType=options.enums===String?"SELL":0;if($util.Long){var long=new $util.Long(0,0,false);object.money=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.money=options.longs===String?"0":0;}if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;if(message.bagHandleType!=null&&message.hasOwnProperty("bagHandleType"))object.bagHandleType=options.enums===String?$root.BagHandleType[message.bagHandleType]:message.bagHandleType;if(message.money!=null&&message.hasOwnProperty("money"))if(typeof message.money==="number")object.money=options.longs===String?String(message.money):message.money;else object.money=options.longs===String?$util.Long.prototype.toString.call(message.money):options.longs===Number?new $util.LongBits(message.money.low>>>0,message.money.high>>>0).toNumber():message.money;return object;};/**
     * Converts this BagHandleRequest to JSON.
     * @function toJSON
     * @memberof BagHandleRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BagHandleRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return BagHandleRequest;}();$root.BagHandleResponse=function(){/**
     * Properties of a BagHandleResponse.
     * @exports IBagHandleResponse
     * @interface IBagHandleResponse
     * @property {Result|null} [result] BagHandleResponse result
     * @property {string|null} [errormsg] BagHandleResponse errormsg
     */ /**
     * Constructs a new BagHandleResponse.
     * @exports BagHandleResponse
     * @classdesc Represents a BagHandleResponse.
     * @implements IBagHandleResponse
     * @constructor
     * @param {IBagHandleResponse=} [properties] Properties to set
     */function BagHandleResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * BagHandleResponse result.
     * @member {Result} result
     * @memberof BagHandleResponse
     * @instance
     */BagHandleResponse.prototype.result=0;/**
     * BagHandleResponse errormsg.
     * @member {string} errormsg
     * @memberof BagHandleResponse
     * @instance
     */BagHandleResponse.prototype.errormsg="";/**
     * Creates a new BagHandleResponse instance using the specified properties.
     * @function create
     * @memberof BagHandleResponse
     * @static
     * @param {IBagHandleResponse=} [properties] Properties to set
     * @returns {BagHandleResponse} BagHandleResponse instance
     */BagHandleResponse.create=function create(properties){return new BagHandleResponse(properties);};/**
     * Encodes the specified BagHandleResponse message. Does not implicitly {@link BagHandleResponse.verify|verify} messages.
     * @function encode
     * @memberof BagHandleResponse
     * @static
     * @param {IBagHandleResponse} message BagHandleResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BagHandleResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified BagHandleResponse message, length delimited. Does not implicitly {@link BagHandleResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BagHandleResponse
     * @static
     * @param {IBagHandleResponse} message BagHandleResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BagHandleResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a BagHandleResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BagHandleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BagHandleResponse} BagHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BagHandleResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.BagHandleResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a BagHandleResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BagHandleResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BagHandleResponse} BagHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BagHandleResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a BagHandleResponse message.
     * @function verify
     * @memberof BagHandleResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BagHandleResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a BagHandleResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BagHandleResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BagHandleResponse} BagHandleResponse
     */BagHandleResponse.fromObject=function fromObject(object){if(object instanceof $root.BagHandleResponse)return object;var message=new $root.BagHandleResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a BagHandleResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BagHandleResponse
     * @static
     * @param {BagHandleResponse} message BagHandleResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BagHandleResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this BagHandleResponse to JSON.
     * @function toJSON
     * @memberof BagHandleResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BagHandleResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return BagHandleResponse;}();$root.UserStatusChangeResponse=function(){/**
     * Properties of a UserStatusChangeResponse.
     * @exports IUserStatusChangeResponse
     * @interface IUserStatusChangeResponse
     * @property {Array.<INUserStatusChange>|null} [userStatusChanges] UserStatusChangeResponse userStatusChanges
     */ /**
     * Constructs a new UserStatusChangeResponse.
     * @exports UserStatusChangeResponse
     * @classdesc Represents a UserStatusChangeResponse.
     * @implements IUserStatusChangeResponse
     * @constructor
     * @param {IUserStatusChangeResponse=} [properties] Properties to set
     */function UserStatusChangeResponse(properties){this.userStatusChanges=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserStatusChangeResponse userStatusChanges.
     * @member {Array.<INUserStatusChange>} userStatusChanges
     * @memberof UserStatusChangeResponse
     * @instance
     */UserStatusChangeResponse.prototype.userStatusChanges=$util.emptyArray;/**
     * Creates a new UserStatusChangeResponse instance using the specified properties.
     * @function create
     * @memberof UserStatusChangeResponse
     * @static
     * @param {IUserStatusChangeResponse=} [properties] Properties to set
     * @returns {UserStatusChangeResponse} UserStatusChangeResponse instance
     */UserStatusChangeResponse.create=function create(properties){return new UserStatusChangeResponse(properties);};/**
     * Encodes the specified UserStatusChangeResponse message. Does not implicitly {@link UserStatusChangeResponse.verify|verify} messages.
     * @function encode
     * @memberof UserStatusChangeResponse
     * @static
     * @param {IUserStatusChangeResponse} message UserStatusChangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusChangeResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userStatusChanges!=null&&message.userStatusChanges.length)for(var i=0;i<message.userStatusChanges.length;++i){$root.NUserStatusChange.encode(message.userStatusChanges[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}return writer;};/**
     * Encodes the specified UserStatusChangeResponse message, length delimited. Does not implicitly {@link UserStatusChangeResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserStatusChangeResponse
     * @static
     * @param {IUserStatusChangeResponse} message UserStatusChangeResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusChangeResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserStatusChangeResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserStatusChangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserStatusChangeResponse} UserStatusChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusChangeResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserStatusChangeResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.userStatusChanges&&message.userStatusChanges.length))message.userStatusChanges=[];message.userStatusChanges.push($root.NUserStatusChange.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserStatusChangeResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserStatusChangeResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserStatusChangeResponse} UserStatusChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusChangeResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserStatusChangeResponse message.
     * @function verify
     * @memberof UserStatusChangeResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserStatusChangeResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userStatusChanges!=null&&message.hasOwnProperty("userStatusChanges")){if(!Array.isArray(message.userStatusChanges))return"userStatusChanges: array expected";for(var i=0;i<message.userStatusChanges.length;++i){var error=$root.NUserStatusChange.verify(message.userStatusChanges[i]);if(error)return"userStatusChanges."+error;}}return null;};/**
     * Creates a UserStatusChangeResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserStatusChangeResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserStatusChangeResponse} UserStatusChangeResponse
     */UserStatusChangeResponse.fromObject=function fromObject(object){if(object instanceof $root.UserStatusChangeResponse)return object;var message=new $root.UserStatusChangeResponse();if(object.userStatusChanges){if(!Array.isArray(object.userStatusChanges))throw TypeError(".UserStatusChangeResponse.userStatusChanges: array expected");message.userStatusChanges=[];for(var i=0;i<object.userStatusChanges.length;++i){if(typeof object.userStatusChanges[i]!=="object")throw TypeError(".UserStatusChangeResponse.userStatusChanges: object expected");message.userStatusChanges[i]=$root.NUserStatusChange.fromObject(object.userStatusChanges[i]);}}return message;};/**
     * Creates a plain object from a UserStatusChangeResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserStatusChangeResponse
     * @static
     * @param {UserStatusChangeResponse} message UserStatusChangeResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserStatusChangeResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.userStatusChanges=[];if(message.userStatusChanges&&message.userStatusChanges.length){object.userStatusChanges=[];for(var j=0;j<message.userStatusChanges.length;++j){object.userStatusChanges[j]=$root.NUserStatusChange.toObject(message.userStatusChanges[j],options);}}return object;};/**
     * Converts this UserStatusChangeResponse to JSON.
     * @function toJSON
     * @memberof UserStatusChangeResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserStatusChangeResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserStatusChangeResponse;}();$root.QueryTranRequest=function(){/**
     * Properties of a QueryTranRequest.
     * @exports IQueryTranRequest
     * @interface IQueryTranRequest
     * @property {number|null} [userId] QueryTranRequest userId
     */ /**
     * Constructs a new QueryTranRequest.
     * @exports QueryTranRequest
     * @classdesc Represents a QueryTranRequest.
     * @implements IQueryTranRequest
     * @constructor
     * @param {IQueryTranRequest=} [properties] Properties to set
     */function QueryTranRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * QueryTranRequest userId.
     * @member {number} userId
     * @memberof QueryTranRequest
     * @instance
     */QueryTranRequest.prototype.userId=0;/**
     * Creates a new QueryTranRequest instance using the specified properties.
     * @function create
     * @memberof QueryTranRequest
     * @static
     * @param {IQueryTranRequest=} [properties] Properties to set
     * @returns {QueryTranRequest} QueryTranRequest instance
     */QueryTranRequest.create=function create(properties){return new QueryTranRequest(properties);};/**
     * Encodes the specified QueryTranRequest message. Does not implicitly {@link QueryTranRequest.verify|verify} messages.
     * @function encode
     * @memberof QueryTranRequest
     * @static
     * @param {IQueryTranRequest} message QueryTranRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */QueryTranRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);return writer;};/**
     * Encodes the specified QueryTranRequest message, length delimited. Does not implicitly {@link QueryTranRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QueryTranRequest
     * @static
     * @param {IQueryTranRequest} message QueryTranRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */QueryTranRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a QueryTranRequest message from the specified reader or buffer.
     * @function decode
     * @memberof QueryTranRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QueryTranRequest} QueryTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */QueryTranRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.QueryTranRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a QueryTranRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QueryTranRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QueryTranRequest} QueryTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */QueryTranRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a QueryTranRequest message.
     * @function verify
     * @memberof QueryTranRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */QueryTranRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";return null;};/**
     * Creates a QueryTranRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QueryTranRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QueryTranRequest} QueryTranRequest
     */QueryTranRequest.fromObject=function fromObject(object){if(object instanceof $root.QueryTranRequest)return object;var message=new $root.QueryTranRequest();if(object.userId!=null)message.userId=object.userId|0;return message;};/**
     * Creates a plain object from a QueryTranRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QueryTranRequest
     * @static
     * @param {QueryTranRequest} message QueryTranRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */QueryTranRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.userId=0;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;return object;};/**
     * Converts this QueryTranRequest to JSON.
     * @function toJSON
     * @memberof QueryTranRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */QueryTranRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return QueryTranRequest;}();$root.QueryTranResponse=function(){/**
     * Properties of a QueryTranResponse.
     * @exports IQueryTranResponse
     * @interface IQueryTranResponse
     * @property {Array.<INItem>|null} [items] QueryTranResponse items
     * @property {Result|null} [result] QueryTranResponse result
     * @property {string|null} [errormsg] QueryTranResponse errormsg
     */ /**
     * Constructs a new QueryTranResponse.
     * @exports QueryTranResponse
     * @classdesc Represents a QueryTranResponse.
     * @implements IQueryTranResponse
     * @constructor
     * @param {IQueryTranResponse=} [properties] Properties to set
     */function QueryTranResponse(properties){this.items=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * QueryTranResponse items.
     * @member {Array.<INItem>} items
     * @memberof QueryTranResponse
     * @instance
     */QueryTranResponse.prototype.items=$util.emptyArray;/**
     * QueryTranResponse result.
     * @member {Result} result
     * @memberof QueryTranResponse
     * @instance
     */QueryTranResponse.prototype.result=0;/**
     * QueryTranResponse errormsg.
     * @member {string} errormsg
     * @memberof QueryTranResponse
     * @instance
     */QueryTranResponse.prototype.errormsg="";/**
     * Creates a new QueryTranResponse instance using the specified properties.
     * @function create
     * @memberof QueryTranResponse
     * @static
     * @param {IQueryTranResponse=} [properties] Properties to set
     * @returns {QueryTranResponse} QueryTranResponse instance
     */QueryTranResponse.create=function create(properties){return new QueryTranResponse(properties);};/**
     * Encodes the specified QueryTranResponse message. Does not implicitly {@link QueryTranResponse.verify|verify} messages.
     * @function encode
     * @memberof QueryTranResponse
     * @static
     * @param {IQueryTranResponse} message QueryTranResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */QueryTranResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.items!=null&&message.items.length)for(var i=0;i<message.items.length;++i){$root.NItem.encode(message.items[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.errormsg);return writer;};/**
     * Encodes the specified QueryTranResponse message, length delimited. Does not implicitly {@link QueryTranResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof QueryTranResponse
     * @static
     * @param {IQueryTranResponse} message QueryTranResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */QueryTranResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a QueryTranResponse message from the specified reader or buffer.
     * @function decode
     * @memberof QueryTranResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {QueryTranResponse} QueryTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */QueryTranResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.QueryTranResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.items&&message.items.length))message.items=[];message.items.push($root.NItem.decode(reader,reader.uint32()));break;case 2:message.result=reader.int32();break;case 3:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a QueryTranResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof QueryTranResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {QueryTranResponse} QueryTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */QueryTranResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a QueryTranResponse message.
     * @function verify
     * @memberof QueryTranResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */QueryTranResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.items!=null&&message.hasOwnProperty("items")){if(!Array.isArray(message.items))return"items: array expected";for(var i=0;i<message.items.length;++i){var error=$root.NItem.verify(message.items[i]);if(error)return"items."+error;}}if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a QueryTranResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof QueryTranResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {QueryTranResponse} QueryTranResponse
     */QueryTranResponse.fromObject=function fromObject(object){if(object instanceof $root.QueryTranResponse)return object;var message=new $root.QueryTranResponse();if(object.items){if(!Array.isArray(object.items))throw TypeError(".QueryTranResponse.items: array expected");message.items=[];for(var i=0;i<object.items.length;++i){if(typeof object.items[i]!=="object")throw TypeError(".QueryTranResponse.items: object expected");message.items[i]=$root.NItem.fromObject(object.items[i]);}}switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a QueryTranResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof QueryTranResponse
     * @static
     * @param {QueryTranResponse} message QueryTranResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */QueryTranResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.items=[];if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.items&&message.items.length){object.items=[];for(var j=0;j<message.items.length;++j){object.items[j]=$root.NItem.toObject(message.items[j],options);}}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this QueryTranResponse to JSON.
     * @function toJSON
     * @memberof QueryTranResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */QueryTranResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return QueryTranResponse;}();$root.BuyTranRequest=function(){/**
     * Properties of a BuyTranRequest.
     * @exports IBuyTranRequest
     * @interface IBuyTranRequest
     * @property {number|null} [userId] BuyTranRequest userId
     * @property {number|null} [itemId] BuyTranRequest itemId
     */ /**
     * Constructs a new BuyTranRequest.
     * @exports BuyTranRequest
     * @classdesc Represents a BuyTranRequest.
     * @implements IBuyTranRequest
     * @constructor
     * @param {IBuyTranRequest=} [properties] Properties to set
     */function BuyTranRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * BuyTranRequest userId.
     * @member {number} userId
     * @memberof BuyTranRequest
     * @instance
     */BuyTranRequest.prototype.userId=0;/**
     * BuyTranRequest itemId.
     * @member {number} itemId
     * @memberof BuyTranRequest
     * @instance
     */BuyTranRequest.prototype.itemId=0;/**
     * Creates a new BuyTranRequest instance using the specified properties.
     * @function create
     * @memberof BuyTranRequest
     * @static
     * @param {IBuyTranRequest=} [properties] Properties to set
     * @returns {BuyTranRequest} BuyTranRequest instance
     */BuyTranRequest.create=function create(properties){return new BuyTranRequest(properties);};/**
     * Encodes the specified BuyTranRequest message. Does not implicitly {@link BuyTranRequest.verify|verify} messages.
     * @function encode
     * @memberof BuyTranRequest
     * @static
     * @param {IBuyTranRequest} message BuyTranRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BuyTranRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.itemId);return writer;};/**
     * Encodes the specified BuyTranRequest message, length delimited. Does not implicitly {@link BuyTranRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BuyTranRequest
     * @static
     * @param {IBuyTranRequest} message BuyTranRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BuyTranRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a BuyTranRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BuyTranRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BuyTranRequest} BuyTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BuyTranRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.BuyTranRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;case 2:message.itemId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a BuyTranRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BuyTranRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BuyTranRequest} BuyTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BuyTranRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a BuyTranRequest message.
     * @function verify
     * @memberof BuyTranRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BuyTranRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";return null;};/**
     * Creates a BuyTranRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BuyTranRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BuyTranRequest} BuyTranRequest
     */BuyTranRequest.fromObject=function fromObject(object){if(object instanceof $root.BuyTranRequest)return object;var message=new $root.BuyTranRequest();if(object.userId!=null)message.userId=object.userId|0;if(object.itemId!=null)message.itemId=object.itemId|0;return message;};/**
     * Creates a plain object from a BuyTranRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BuyTranRequest
     * @static
     * @param {BuyTranRequest} message BuyTranRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BuyTranRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId=0;object.itemId=0;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;return object;};/**
     * Converts this BuyTranRequest to JSON.
     * @function toJSON
     * @memberof BuyTranRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BuyTranRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return BuyTranRequest;}();$root.BuyTranResponse=function(){/**
     * Properties of a BuyTranResponse.
     * @exports IBuyTranResponse
     * @interface IBuyTranResponse
     * @property {Result|null} [result] BuyTranResponse result
     * @property {string|null} [errormsg] BuyTranResponse errormsg
     */ /**
     * Constructs a new BuyTranResponse.
     * @exports BuyTranResponse
     * @classdesc Represents a BuyTranResponse.
     * @implements IBuyTranResponse
     * @constructor
     * @param {IBuyTranResponse=} [properties] Properties to set
     */function BuyTranResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * BuyTranResponse result.
     * @member {Result} result
     * @memberof BuyTranResponse
     * @instance
     */BuyTranResponse.prototype.result=0;/**
     * BuyTranResponse errormsg.
     * @member {string} errormsg
     * @memberof BuyTranResponse
     * @instance
     */BuyTranResponse.prototype.errormsg="";/**
     * Creates a new BuyTranResponse instance using the specified properties.
     * @function create
     * @memberof BuyTranResponse
     * @static
     * @param {IBuyTranResponse=} [properties] Properties to set
     * @returns {BuyTranResponse} BuyTranResponse instance
     */BuyTranResponse.create=function create(properties){return new BuyTranResponse(properties);};/**
     * Encodes the specified BuyTranResponse message. Does not implicitly {@link BuyTranResponse.verify|verify} messages.
     * @function encode
     * @memberof BuyTranResponse
     * @static
     * @param {IBuyTranResponse} message BuyTranResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BuyTranResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified BuyTranResponse message, length delimited. Does not implicitly {@link BuyTranResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BuyTranResponse
     * @static
     * @param {IBuyTranResponse} message BuyTranResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */BuyTranResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a BuyTranResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BuyTranResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BuyTranResponse} BuyTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BuyTranResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.BuyTranResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a BuyTranResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BuyTranResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BuyTranResponse} BuyTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */BuyTranResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a BuyTranResponse message.
     * @function verify
     * @memberof BuyTranResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */BuyTranResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a BuyTranResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BuyTranResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BuyTranResponse} BuyTranResponse
     */BuyTranResponse.fromObject=function fromObject(object){if(object instanceof $root.BuyTranResponse)return object;var message=new $root.BuyTranResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a BuyTranResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BuyTranResponse
     * @static
     * @param {BuyTranResponse} message BuyTranResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */BuyTranResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this BuyTranResponse to JSON.
     * @function toJSON
     * @memberof BuyTranResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */BuyTranResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return BuyTranResponse;}();$root.HeartBeatRequest=function(){/**
     * Properties of a HeartBeatRequest.
     * @exports IHeartBeatRequest
     * @interface IHeartBeatRequest
     */ /**
     * Constructs a new HeartBeatRequest.
     * @exports HeartBeatRequest
     * @classdesc Represents a HeartBeatRequest.
     * @implements IHeartBeatRequest
     * @constructor
     * @param {IHeartBeatRequest=} [properties] Properties to set
     */function HeartBeatRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new HeartBeatRequest instance using the specified properties.
     * @function create
     * @memberof HeartBeatRequest
     * @static
     * @param {IHeartBeatRequest=} [properties] Properties to set
     * @returns {HeartBeatRequest} HeartBeatRequest instance
     */HeartBeatRequest.create=function create(properties){return new HeartBeatRequest(properties);};/**
     * Encodes the specified HeartBeatRequest message. Does not implicitly {@link HeartBeatRequest.verify|verify} messages.
     * @function encode
     * @memberof HeartBeatRequest
     * @static
     * @param {IHeartBeatRequest} message HeartBeatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */HeartBeatRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified HeartBeatRequest message, length delimited. Does not implicitly {@link HeartBeatRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeatRequest
     * @static
     * @param {IHeartBeatRequest} message HeartBeatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */HeartBeatRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a HeartBeatRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeatRequest} HeartBeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */HeartBeatRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.HeartBeatRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a HeartBeatRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeatRequest} HeartBeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */HeartBeatRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a HeartBeatRequest message.
     * @function verify
     * @memberof HeartBeatRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */HeartBeatRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a HeartBeatRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeatRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeatRequest} HeartBeatRequest
     */HeartBeatRequest.fromObject=function fromObject(object){if(object instanceof $root.HeartBeatRequest)return object;return new $root.HeartBeatRequest();};/**
     * Creates a plain object from a HeartBeatRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeatRequest
     * @static
     * @param {HeartBeatRequest} message HeartBeatRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */HeartBeatRequest.toObject=function toObject(){return{};};/**
     * Converts this HeartBeatRequest to JSON.
     * @function toJSON
     * @memberof HeartBeatRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */HeartBeatRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return HeartBeatRequest;}();$root.HeartBeatResponse=function(){/**
     * Properties of a HeartBeatResponse.
     * @exports IHeartBeatResponse
     * @interface IHeartBeatResponse
     * @property {number|null} [liveFenSiCount] HeartBeatResponse liveFenSiCount
     */ /**
     * Constructs a new HeartBeatResponse.
     * @exports HeartBeatResponse
     * @classdesc Represents a HeartBeatResponse.
     * @implements IHeartBeatResponse
     * @constructor
     * @param {IHeartBeatResponse=} [properties] Properties to set
     */function HeartBeatResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * HeartBeatResponse liveFenSiCount.
     * @member {number} liveFenSiCount
     * @memberof HeartBeatResponse
     * @instance
     */HeartBeatResponse.prototype.liveFenSiCount=0;/**
     * Creates a new HeartBeatResponse instance using the specified properties.
     * @function create
     * @memberof HeartBeatResponse
     * @static
     * @param {IHeartBeatResponse=} [properties] Properties to set
     * @returns {HeartBeatResponse} HeartBeatResponse instance
     */HeartBeatResponse.create=function create(properties){return new HeartBeatResponse(properties);};/**
     * Encodes the specified HeartBeatResponse message. Does not implicitly {@link HeartBeatResponse.verify|verify} messages.
     * @function encode
     * @memberof HeartBeatResponse
     * @static
     * @param {IHeartBeatResponse} message HeartBeatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */HeartBeatResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.liveFenSiCount!=null&&message.hasOwnProperty("liveFenSiCount"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.liveFenSiCount);return writer;};/**
     * Encodes the specified HeartBeatResponse message, length delimited. Does not implicitly {@link HeartBeatResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeatResponse
     * @static
     * @param {IHeartBeatResponse} message HeartBeatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */HeartBeatResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a HeartBeatResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeatResponse} HeartBeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */HeartBeatResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.HeartBeatResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.liveFenSiCount=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a HeartBeatResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeatResponse} HeartBeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */HeartBeatResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a HeartBeatResponse message.
     * @function verify
     * @memberof HeartBeatResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */HeartBeatResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.liveFenSiCount!=null&&message.hasOwnProperty("liveFenSiCount"))if(!$util.isInteger(message.liveFenSiCount))return"liveFenSiCount: integer expected";return null;};/**
     * Creates a HeartBeatResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeatResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeatResponse} HeartBeatResponse
     */HeartBeatResponse.fromObject=function fromObject(object){if(object instanceof $root.HeartBeatResponse)return object;var message=new $root.HeartBeatResponse();if(object.liveFenSiCount!=null)message.liveFenSiCount=object.liveFenSiCount|0;return message;};/**
     * Creates a plain object from a HeartBeatResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeatResponse
     * @static
     * @param {HeartBeatResponse} message HeartBeatResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */HeartBeatResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.liveFenSiCount=0;if(message.liveFenSiCount!=null&&message.hasOwnProperty("liveFenSiCount"))object.liveFenSiCount=message.liveFenSiCount;return object;};/**
     * Converts this HeartBeatResponse to JSON.
     * @function toJSON
     * @memberof HeartBeatResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */HeartBeatResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return HeartBeatResponse;}();$root.OfferPriceRequest=function(){/**
     * Properties of an OfferPriceRequest.
     * @exports IOfferPriceRequest
     * @interface IOfferPriceRequest
     * @property {number|null} [id] OfferPriceRequest id
     * @property {number|Long|null} [money] OfferPriceRequest money
     */ /**
     * Constructs a new OfferPriceRequest.
     * @exports OfferPriceRequest
     * @classdesc Represents an OfferPriceRequest.
     * @implements IOfferPriceRequest
     * @constructor
     * @param {IOfferPriceRequest=} [properties] Properties to set
     */function OfferPriceRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * OfferPriceRequest id.
     * @member {number} id
     * @memberof OfferPriceRequest
     * @instance
     */OfferPriceRequest.prototype.id=0;/**
     * OfferPriceRequest money.
     * @member {number|Long} money
     * @memberof OfferPriceRequest
     * @instance
     */OfferPriceRequest.prototype.money=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new OfferPriceRequest instance using the specified properties.
     * @function create
     * @memberof OfferPriceRequest
     * @static
     * @param {IOfferPriceRequest=} [properties] Properties to set
     * @returns {OfferPriceRequest} OfferPriceRequest instance
     */OfferPriceRequest.create=function create(properties){return new OfferPriceRequest(properties);};/**
     * Encodes the specified OfferPriceRequest message. Does not implicitly {@link OfferPriceRequest.verify|verify} messages.
     * @function encode
     * @memberof OfferPriceRequest
     * @static
     * @param {IOfferPriceRequest} message OfferPriceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OfferPriceRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.id!=null&&message.hasOwnProperty("id"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);if(message.money!=null&&message.hasOwnProperty("money"))writer.uint32(/* id 2, wireType 0 =*/16).int64(message.money);return writer;};/**
     * Encodes the specified OfferPriceRequest message, length delimited. Does not implicitly {@link OfferPriceRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OfferPriceRequest
     * @static
     * @param {IOfferPriceRequest} message OfferPriceRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OfferPriceRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an OfferPriceRequest message from the specified reader or buffer.
     * @function decode
     * @memberof OfferPriceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OfferPriceRequest} OfferPriceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OfferPriceRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.OfferPriceRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.id=reader.int32();break;case 2:message.money=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an OfferPriceRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OfferPriceRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OfferPriceRequest} OfferPriceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OfferPriceRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an OfferPriceRequest message.
     * @function verify
     * @memberof OfferPriceRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */OfferPriceRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.id!=null&&message.hasOwnProperty("id"))if(!$util.isInteger(message.id))return"id: integer expected";if(message.money!=null&&message.hasOwnProperty("money"))if(!$util.isInteger(message.money)&&!(message.money&&$util.isInteger(message.money.low)&&$util.isInteger(message.money.high)))return"money: integer|Long expected";return null;};/**
     * Creates an OfferPriceRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OfferPriceRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OfferPriceRequest} OfferPriceRequest
     */OfferPriceRequest.fromObject=function fromObject(object){if(object instanceof $root.OfferPriceRequest)return object;var message=new $root.OfferPriceRequest();if(object.id!=null)message.id=object.id|0;if(object.money!=null)if($util.Long)(message.money=$util.Long.fromValue(object.money)).unsigned=false;else if(typeof object.money==="string")message.money=parseInt(object.money,10);else if(typeof object.money==="number")message.money=object.money;else if(typeof object.money==="object")message.money=new $util.LongBits(object.money.low>>>0,object.money.high>>>0).toNumber();return message;};/**
     * Creates a plain object from an OfferPriceRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OfferPriceRequest
     * @static
     * @param {OfferPriceRequest} message OfferPriceRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */OfferPriceRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.id=0;if($util.Long){var long=new $util.Long(0,0,false);object.money=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.money=options.longs===String?"0":0;}if(message.id!=null&&message.hasOwnProperty("id"))object.id=message.id;if(message.money!=null&&message.hasOwnProperty("money"))if(typeof message.money==="number")object.money=options.longs===String?String(message.money):message.money;else object.money=options.longs===String?$util.Long.prototype.toString.call(message.money):options.longs===Number?new $util.LongBits(message.money.low>>>0,message.money.high>>>0).toNumber():message.money;return object;};/**
     * Converts this OfferPriceRequest to JSON.
     * @function toJSON
     * @memberof OfferPriceRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */OfferPriceRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return OfferPriceRequest;}();$root.OfferPriceResponse=function(){/**
     * Properties of an OfferPriceResponse.
     * @exports IOfferPriceResponse
     * @interface IOfferPriceResponse
     * @property {Result|null} [result] OfferPriceResponse result
     * @property {string|null} [errormsg] OfferPriceResponse errormsg
     */ /**
     * Constructs a new OfferPriceResponse.
     * @exports OfferPriceResponse
     * @classdesc Represents an OfferPriceResponse.
     * @implements IOfferPriceResponse
     * @constructor
     * @param {IOfferPriceResponse=} [properties] Properties to set
     */function OfferPriceResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * OfferPriceResponse result.
     * @member {Result} result
     * @memberof OfferPriceResponse
     * @instance
     */OfferPriceResponse.prototype.result=0;/**
     * OfferPriceResponse errormsg.
     * @member {string} errormsg
     * @memberof OfferPriceResponse
     * @instance
     */OfferPriceResponse.prototype.errormsg="";/**
     * Creates a new OfferPriceResponse instance using the specified properties.
     * @function create
     * @memberof OfferPriceResponse
     * @static
     * @param {IOfferPriceResponse=} [properties] Properties to set
     * @returns {OfferPriceResponse} OfferPriceResponse instance
     */OfferPriceResponse.create=function create(properties){return new OfferPriceResponse(properties);};/**
     * Encodes the specified OfferPriceResponse message. Does not implicitly {@link OfferPriceResponse.verify|verify} messages.
     * @function encode
     * @memberof OfferPriceResponse
     * @static
     * @param {IOfferPriceResponse} message OfferPriceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OfferPriceResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified OfferPriceResponse message, length delimited. Does not implicitly {@link OfferPriceResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OfferPriceResponse
     * @static
     * @param {IOfferPriceResponse} message OfferPriceResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OfferPriceResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an OfferPriceResponse message from the specified reader or buffer.
     * @function decode
     * @memberof OfferPriceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OfferPriceResponse} OfferPriceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OfferPriceResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.OfferPriceResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an OfferPriceResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OfferPriceResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OfferPriceResponse} OfferPriceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OfferPriceResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an OfferPriceResponse message.
     * @function verify
     * @memberof OfferPriceResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */OfferPriceResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates an OfferPriceResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OfferPriceResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OfferPriceResponse} OfferPriceResponse
     */OfferPriceResponse.fromObject=function fromObject(object){if(object instanceof $root.OfferPriceResponse)return object;var message=new $root.OfferPriceResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from an OfferPriceResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OfferPriceResponse
     * @static
     * @param {OfferPriceResponse} message OfferPriceResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */OfferPriceResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this OfferPriceResponse to JSON.
     * @function toJSON
     * @memberof OfferPriceResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */OfferPriceResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return OfferPriceResponse;}();$root.AuctionRequest=function(){/**
     * Properties of an AuctionRequest.
     * @exports IAuctionRequest
     * @interface IAuctionRequest
     * @property {number|null} [itemId] AuctionRequest itemId
     * @property {number|Long|null} [money] AuctionRequest money
     */ /**
     * Constructs a new AuctionRequest.
     * @exports AuctionRequest
     * @classdesc Represents an AuctionRequest.
     * @implements IAuctionRequest
     * @constructor
     * @param {IAuctionRequest=} [properties] Properties to set
     */function AuctionRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AuctionRequest itemId.
     * @member {number} itemId
     * @memberof AuctionRequest
     * @instance
     */AuctionRequest.prototype.itemId=0;/**
     * AuctionRequest money.
     * @member {number|Long} money
     * @memberof AuctionRequest
     * @instance
     */AuctionRequest.prototype.money=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * Creates a new AuctionRequest instance using the specified properties.
     * @function create
     * @memberof AuctionRequest
     * @static
     * @param {IAuctionRequest=} [properties] Properties to set
     * @returns {AuctionRequest} AuctionRequest instance
     */AuctionRequest.create=function create(properties){return new AuctionRequest(properties);};/**
     * Encodes the specified AuctionRequest message. Does not implicitly {@link AuctionRequest.verify|verify} messages.
     * @function encode
     * @memberof AuctionRequest
     * @static
     * @param {IAuctionRequest} message AuctionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AuctionRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.itemId!=null&&message.hasOwnProperty("itemId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);if(message.money!=null&&message.hasOwnProperty("money"))writer.uint32(/* id 2, wireType 0 =*/16).int64(message.money);return writer;};/**
     * Encodes the specified AuctionRequest message, length delimited. Does not implicitly {@link AuctionRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuctionRequest
     * @static
     * @param {IAuctionRequest} message AuctionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AuctionRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AuctionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AuctionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuctionRequest} AuctionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AuctionRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AuctionRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.itemId=reader.int32();break;case 2:message.money=reader.int64();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AuctionRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuctionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuctionRequest} AuctionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AuctionRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AuctionRequest message.
     * @function verify
     * @memberof AuctionRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AuctionRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.itemId!=null&&message.hasOwnProperty("itemId"))if(!$util.isInteger(message.itemId))return"itemId: integer expected";if(message.money!=null&&message.hasOwnProperty("money"))if(!$util.isInteger(message.money)&&!(message.money&&$util.isInteger(message.money.low)&&$util.isInteger(message.money.high)))return"money: integer|Long expected";return null;};/**
     * Creates an AuctionRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuctionRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuctionRequest} AuctionRequest
     */AuctionRequest.fromObject=function fromObject(object){if(object instanceof $root.AuctionRequest)return object;var message=new $root.AuctionRequest();if(object.itemId!=null)message.itemId=object.itemId|0;if(object.money!=null)if($util.Long)(message.money=$util.Long.fromValue(object.money)).unsigned=false;else if(typeof object.money==="string")message.money=parseInt(object.money,10);else if(typeof object.money==="number")message.money=object.money;else if(typeof object.money==="object")message.money=new $util.LongBits(object.money.low>>>0,object.money.high>>>0).toNumber();return message;};/**
     * Creates a plain object from an AuctionRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuctionRequest
     * @static
     * @param {AuctionRequest} message AuctionRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AuctionRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.itemId=0;if($util.Long){var long=new $util.Long(0,0,false);object.money=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.money=options.longs===String?"0":0;}if(message.itemId!=null&&message.hasOwnProperty("itemId"))object.itemId=message.itemId;if(message.money!=null&&message.hasOwnProperty("money"))if(typeof message.money==="number")object.money=options.longs===String?String(message.money):message.money;else object.money=options.longs===String?$util.Long.prototype.toString.call(message.money):options.longs===Number?new $util.LongBits(message.money.low>>>0,message.money.high>>>0).toNumber():message.money;return object;};/**
     * Converts this AuctionRequest to JSON.
     * @function toJSON
     * @memberof AuctionRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AuctionRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AuctionRequest;}();$root.AuctionResponse=function(){/**
     * Properties of an AuctionResponse.
     * @exports IAuctionResponse
     * @interface IAuctionResponse
     * @property {Result|null} [result] AuctionResponse result
     * @property {string|null} [errormsg] AuctionResponse errormsg
     */ /**
     * Constructs a new AuctionResponse.
     * @exports AuctionResponse
     * @classdesc Represents an AuctionResponse.
     * @implements IAuctionResponse
     * @constructor
     * @param {IAuctionResponse=} [properties] Properties to set
     */function AuctionResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AuctionResponse result.
     * @member {Result} result
     * @memberof AuctionResponse
     * @instance
     */AuctionResponse.prototype.result=0;/**
     * AuctionResponse errormsg.
     * @member {string} errormsg
     * @memberof AuctionResponse
     * @instance
     */AuctionResponse.prototype.errormsg="";/**
     * Creates a new AuctionResponse instance using the specified properties.
     * @function create
     * @memberof AuctionResponse
     * @static
     * @param {IAuctionResponse=} [properties] Properties to set
     * @returns {AuctionResponse} AuctionResponse instance
     */AuctionResponse.create=function create(properties){return new AuctionResponse(properties);};/**
     * Encodes the specified AuctionResponse message. Does not implicitly {@link AuctionResponse.verify|verify} messages.
     * @function encode
     * @memberof AuctionResponse
     * @static
     * @param {IAuctionResponse} message AuctionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AuctionResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified AuctionResponse message, length delimited. Does not implicitly {@link AuctionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AuctionResponse
     * @static
     * @param {IAuctionResponse} message AuctionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AuctionResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AuctionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AuctionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AuctionResponse} AuctionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AuctionResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AuctionResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AuctionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AuctionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AuctionResponse} AuctionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AuctionResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AuctionResponse message.
     * @function verify
     * @memberof AuctionResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AuctionResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates an AuctionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AuctionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AuctionResponse} AuctionResponse
     */AuctionResponse.fromObject=function fromObject(object){if(object instanceof $root.AuctionResponse)return object;var message=new $root.AuctionResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from an AuctionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AuctionResponse
     * @static
     * @param {AuctionResponse} message AuctionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AuctionResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this AuctionResponse to JSON.
     * @function toJSON
     * @memberof AuctionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AuctionResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AuctionResponse;}();$root.GetAuctionListRequest=function(){/**
     * Properties of a GetAuctionListRequest.
     * @exports IGetAuctionListRequest
     * @interface IGetAuctionListRequest
     */ /**
     * Constructs a new GetAuctionListRequest.
     * @exports GetAuctionListRequest
     * @classdesc Represents a GetAuctionListRequest.
     * @implements IGetAuctionListRequest
     * @constructor
     * @param {IGetAuctionListRequest=} [properties] Properties to set
     */function GetAuctionListRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new GetAuctionListRequest instance using the specified properties.
     * @function create
     * @memberof GetAuctionListRequest
     * @static
     * @param {IGetAuctionListRequest=} [properties] Properties to set
     * @returns {GetAuctionListRequest} GetAuctionListRequest instance
     */GetAuctionListRequest.create=function create(properties){return new GetAuctionListRequest(properties);};/**
     * Encodes the specified GetAuctionListRequest message. Does not implicitly {@link GetAuctionListRequest.verify|verify} messages.
     * @function encode
     * @memberof GetAuctionListRequest
     * @static
     * @param {IGetAuctionListRequest} message GetAuctionListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GetAuctionListRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified GetAuctionListRequest message, length delimited. Does not implicitly {@link GetAuctionListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAuctionListRequest
     * @static
     * @param {IGetAuctionListRequest} message GetAuctionListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GetAuctionListRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a GetAuctionListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetAuctionListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAuctionListRequest} GetAuctionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GetAuctionListRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.GetAuctionListRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a GetAuctionListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAuctionListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAuctionListRequest} GetAuctionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GetAuctionListRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a GetAuctionListRequest message.
     * @function verify
     * @memberof GetAuctionListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */GetAuctionListRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a GetAuctionListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAuctionListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAuctionListRequest} GetAuctionListRequest
     */GetAuctionListRequest.fromObject=function fromObject(object){if(object instanceof $root.GetAuctionListRequest)return object;return new $root.GetAuctionListRequest();};/**
     * Creates a plain object from a GetAuctionListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAuctionListRequest
     * @static
     * @param {GetAuctionListRequest} message GetAuctionListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */GetAuctionListRequest.toObject=function toObject(){return{};};/**
     * Converts this GetAuctionListRequest to JSON.
     * @function toJSON
     * @memberof GetAuctionListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */GetAuctionListRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return GetAuctionListRequest;}();$root.GetAuctionListResponse=function(){/**
     * Properties of a GetAuctionListResponse.
     * @exports IGetAuctionListResponse
     * @interface IGetAuctionListResponse
     * @property {Array.<INAuctionItem>|null} [auctionItems] GetAuctionListResponse auctionItems
     */ /**
     * Constructs a new GetAuctionListResponse.
     * @exports GetAuctionListResponse
     * @classdesc Represents a GetAuctionListResponse.
     * @implements IGetAuctionListResponse
     * @constructor
     * @param {IGetAuctionListResponse=} [properties] Properties to set
     */function GetAuctionListResponse(properties){this.auctionItems=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * GetAuctionListResponse auctionItems.
     * @member {Array.<INAuctionItem>} auctionItems
     * @memberof GetAuctionListResponse
     * @instance
     */GetAuctionListResponse.prototype.auctionItems=$util.emptyArray;/**
     * Creates a new GetAuctionListResponse instance using the specified properties.
     * @function create
     * @memberof GetAuctionListResponse
     * @static
     * @param {IGetAuctionListResponse=} [properties] Properties to set
     * @returns {GetAuctionListResponse} GetAuctionListResponse instance
     */GetAuctionListResponse.create=function create(properties){return new GetAuctionListResponse(properties);};/**
     * Encodes the specified GetAuctionListResponse message. Does not implicitly {@link GetAuctionListResponse.verify|verify} messages.
     * @function encode
     * @memberof GetAuctionListResponse
     * @static
     * @param {IGetAuctionListResponse} message GetAuctionListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GetAuctionListResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.auctionItems!=null&&message.auctionItems.length)for(var i=0;i<message.auctionItems.length;++i){$root.NAuctionItem.encode(message.auctionItems[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}return writer;};/**
     * Encodes the specified GetAuctionListResponse message, length delimited. Does not implicitly {@link GetAuctionListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetAuctionListResponse
     * @static
     * @param {IGetAuctionListResponse} message GetAuctionListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GetAuctionListResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a GetAuctionListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetAuctionListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetAuctionListResponse} GetAuctionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GetAuctionListResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.GetAuctionListResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.auctionItems&&message.auctionItems.length))message.auctionItems=[];message.auctionItems.push($root.NAuctionItem.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a GetAuctionListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetAuctionListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetAuctionListResponse} GetAuctionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GetAuctionListResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a GetAuctionListResponse message.
     * @function verify
     * @memberof GetAuctionListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */GetAuctionListResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.auctionItems!=null&&message.hasOwnProperty("auctionItems")){if(!Array.isArray(message.auctionItems))return"auctionItems: array expected";for(var i=0;i<message.auctionItems.length;++i){var error=$root.NAuctionItem.verify(message.auctionItems[i]);if(error)return"auctionItems."+error;}}return null;};/**
     * Creates a GetAuctionListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetAuctionListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetAuctionListResponse} GetAuctionListResponse
     */GetAuctionListResponse.fromObject=function fromObject(object){if(object instanceof $root.GetAuctionListResponse)return object;var message=new $root.GetAuctionListResponse();if(object.auctionItems){if(!Array.isArray(object.auctionItems))throw TypeError(".GetAuctionListResponse.auctionItems: array expected");message.auctionItems=[];for(var i=0;i<object.auctionItems.length;++i){if(typeof object.auctionItems[i]!=="object")throw TypeError(".GetAuctionListResponse.auctionItems: object expected");message.auctionItems[i]=$root.NAuctionItem.fromObject(object.auctionItems[i]);}}return message;};/**
     * Creates a plain object from a GetAuctionListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetAuctionListResponse
     * @static
     * @param {GetAuctionListResponse} message GetAuctionListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */GetAuctionListResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.auctionItems=[];if(message.auctionItems&&message.auctionItems.length){object.auctionItems=[];for(var j=0;j<message.auctionItems.length;++j){object.auctionItems[j]=$root.NAuctionItem.toObject(message.auctionItems[j],options);}}return object;};/**
     * Converts this GetAuctionListResponse to JSON.
     * @function toJSON
     * @memberof GetAuctionListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */GetAuctionListResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return GetAuctionListResponse;}();/**
 * TipsWorkType enum.
 * @exports TipsWorkType
 * @enum {string}
 * @property {number} None=0 None value
 * @property {number} AuctionResult=1 AuctionResult value
 * @property {number} DismissRoom=2 DismissRoom value
 * @property {number} KickOutRoom=3 KickOutRoom value
 * @property {number} OutRoom=4 OutRoom value
 */$root.TipsWorkType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="None"]=0;values[valuesById[1]="AuctionResult"]=1;values[valuesById[2]="DismissRoom"]=2;values[valuesById[3]="KickOutRoom"]=3;values[valuesById[4]="OutRoom"]=4;return values;}();$root.TipsResponse=function(){/**
     * Properties of a TipsResponse.
     * @exports ITipsResponse
     * @interface ITipsResponse
     * @property {TipsType|null} [tipsType] TipsResponse tipsType
     * @property {string|null} [content] TipsResponse content
     * @property {TipsWorkType|null} [tipsWorkType] TipsResponse tipsWorkType
     */ /**
     * Constructs a new TipsResponse.
     * @exports TipsResponse
     * @classdesc Represents a TipsResponse.
     * @implements ITipsResponse
     * @constructor
     * @param {ITipsResponse=} [properties] Properties to set
     */function TipsResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * TipsResponse tipsType.
     * @member {TipsType} tipsType
     * @memberof TipsResponse
     * @instance
     */TipsResponse.prototype.tipsType=0;/**
     * TipsResponse content.
     * @member {string} content
     * @memberof TipsResponse
     * @instance
     */TipsResponse.prototype.content="";/**
     * TipsResponse tipsWorkType.
     * @member {TipsWorkType} tipsWorkType
     * @memberof TipsResponse
     * @instance
     */TipsResponse.prototype.tipsWorkType=0;/**
     * Creates a new TipsResponse instance using the specified properties.
     * @function create
     * @memberof TipsResponse
     * @static
     * @param {ITipsResponse=} [properties] Properties to set
     * @returns {TipsResponse} TipsResponse instance
     */TipsResponse.create=function create(properties){return new TipsResponse(properties);};/**
     * Encodes the specified TipsResponse message. Does not implicitly {@link TipsResponse.verify|verify} messages.
     * @function encode
     * @memberof TipsResponse
     * @static
     * @param {ITipsResponse} message TipsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */TipsResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.tipsType!=null&&message.hasOwnProperty("tipsType"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tipsType);if(message.content!=null&&message.hasOwnProperty("content"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);if(message.tipsWorkType!=null&&message.hasOwnProperty("tipsWorkType"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.tipsWorkType);return writer;};/**
     * Encodes the specified TipsResponse message, length delimited. Does not implicitly {@link TipsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TipsResponse
     * @static
     * @param {ITipsResponse} message TipsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */TipsResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a TipsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof TipsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TipsResponse} TipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */TipsResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.TipsResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.tipsType=reader.int32();break;case 2:message.content=reader.string();break;case 3:message.tipsWorkType=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a TipsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TipsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TipsResponse} TipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */TipsResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a TipsResponse message.
     * @function verify
     * @memberof TipsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */TipsResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.tipsType!=null&&message.hasOwnProperty("tipsType"))switch(message.tipsType){default:return"tipsType: enum value expected";case 0:case 1:break;}if(message.content!=null&&message.hasOwnProperty("content"))if(!$util.isString(message.content))return"content: string expected";if(message.tipsWorkType!=null&&message.hasOwnProperty("tipsWorkType"))switch(message.tipsWorkType){default:return"tipsWorkType: enum value expected";case 0:case 1:case 2:case 3:case 4:break;}return null;};/**
     * Creates a TipsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TipsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TipsResponse} TipsResponse
     */TipsResponse.fromObject=function fromObject(object){if(object instanceof $root.TipsResponse)return object;var message=new $root.TipsResponse();switch(object.tipsType){case"Tips":case 0:message.tipsType=0;break;case"Popup":case 1:message.tipsType=1;break;}if(object.content!=null)message.content=String(object.content);switch(object.tipsWorkType){case"None":case 0:message.tipsWorkType=0;break;case"AuctionResult":case 1:message.tipsWorkType=1;break;case"DismissRoom":case 2:message.tipsWorkType=2;break;case"KickOutRoom":case 3:message.tipsWorkType=3;break;case"OutRoom":case 4:message.tipsWorkType=4;break;}return message;};/**
     * Creates a plain object from a TipsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TipsResponse
     * @static
     * @param {TipsResponse} message TipsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */TipsResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.tipsType=options.enums===String?"Tips":0;object.content="";object.tipsWorkType=options.enums===String?"None":0;}if(message.tipsType!=null&&message.hasOwnProperty("tipsType"))object.tipsType=options.enums===String?$root.TipsType[message.tipsType]:message.tipsType;if(message.content!=null&&message.hasOwnProperty("content"))object.content=message.content;if(message.tipsWorkType!=null&&message.hasOwnProperty("tipsWorkType"))object.tipsWorkType=options.enums===String?$root.TipsWorkType[message.tipsWorkType]:message.tipsWorkType;return object;};/**
     * Converts this TipsResponse to JSON.
     * @function toJSON
     * @memberof TipsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */TipsResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return TipsResponse;}();$root.RoomUser=function(){/**
     * Properties of a RoomUser.
     * @exports IRoomUser
     * @interface IRoomUser
     * @property {number|null} [userId] RoomUser userId
     * @property {string|null} [nickName] RoomUser nickName
     * @property {number|null} [cCharacterId] RoomUser cCharacterId
     * @property {INUser|null} [user] RoomUser user
     */ /**
     * Constructs a new RoomUser.
     * @exports RoomUser
     * @classdesc Represents a RoomUser.
     * @implements IRoomUser
     * @constructor
     * @param {IRoomUser=} [properties] Properties to set
     */function RoomUser(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * RoomUser userId.
     * @member {number} userId
     * @memberof RoomUser
     * @instance
     */RoomUser.prototype.userId=0;/**
     * RoomUser nickName.
     * @member {string} nickName
     * @memberof RoomUser
     * @instance
     */RoomUser.prototype.nickName="";/**
     * RoomUser cCharacterId.
     * @member {number} cCharacterId
     * @memberof RoomUser
     * @instance
     */RoomUser.prototype.cCharacterId=0;/**
     * RoomUser user.
     * @member {INUser|null|undefined} user
     * @memberof RoomUser
     * @instance
     */RoomUser.prototype.user=null;/**
     * Creates a new RoomUser instance using the specified properties.
     * @function create
     * @memberof RoomUser
     * @static
     * @param {IRoomUser=} [properties] Properties to set
     * @returns {RoomUser} RoomUser instance
     */RoomUser.create=function create(properties){return new RoomUser(properties);};/**
     * Encodes the specified RoomUser message. Does not implicitly {@link RoomUser.verify|verify} messages.
     * @function encode
     * @memberof RoomUser
     * @static
     * @param {IRoomUser} message RoomUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomUser.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);if(message.nickName!=null&&message.hasOwnProperty("nickName"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cCharacterId);if(message.user!=null&&message.hasOwnProperty("user"))$root.NUser.encode(message.user,writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();return writer;};/**
     * Encodes the specified RoomUser message, length delimited. Does not implicitly {@link RoomUser.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomUser
     * @static
     * @param {IRoomUser} message RoomUser message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomUser.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a RoomUser message from the specified reader or buffer.
     * @function decode
     * @memberof RoomUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomUser} RoomUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomUser.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.RoomUser();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;case 2:message.nickName=reader.string();break;case 3:message.cCharacterId=reader.int32();break;case 4:message.user=$root.NUser.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a RoomUser message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomUser
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomUser} RoomUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomUser.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a RoomUser message.
     * @function verify
     * @memberof RoomUser
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */RoomUser.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.nickName!=null&&message.hasOwnProperty("nickName"))if(!$util.isString(message.nickName))return"nickName: string expected";if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))if(!$util.isInteger(message.cCharacterId))return"cCharacterId: integer expected";if(message.user!=null&&message.hasOwnProperty("user")){var error=$root.NUser.verify(message.user);if(error)return"user."+error;}return null;};/**
     * Creates a RoomUser message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomUser
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomUser} RoomUser
     */RoomUser.fromObject=function fromObject(object){if(object instanceof $root.RoomUser)return object;var message=new $root.RoomUser();if(object.userId!=null)message.userId=object.userId|0;if(object.nickName!=null)message.nickName=String(object.nickName);if(object.cCharacterId!=null)message.cCharacterId=object.cCharacterId|0;if(object.user!=null){if(typeof object.user!=="object")throw TypeError(".RoomUser.user: object expected");message.user=$root.NUser.fromObject(object.user);}return message;};/**
     * Creates a plain object from a RoomUser message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomUser
     * @static
     * @param {RoomUser} message RoomUser
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */RoomUser.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.userId=0;object.nickName="";object.cCharacterId=0;object.user=null;}if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.nickName!=null&&message.hasOwnProperty("nickName"))object.nickName=message.nickName;if(message.cCharacterId!=null&&message.hasOwnProperty("cCharacterId"))object.cCharacterId=message.cCharacterId;if(message.user!=null&&message.hasOwnProperty("user"))object.user=$root.NUser.toObject(message.user,options);return object;};/**
     * Converts this RoomUser to JSON.
     * @function toJSON
     * @memberof RoomUser
     * @instance
     * @returns {Object.<string,*>} JSON object
     */RoomUser.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return RoomUser;}();/**
 * TeamType enum.
 * @exports TeamType
 * @enum {string}
 * @property {number} My=0 My value
 * @property {number} Enemy=1 Enemy value
 */$root.TeamType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="My"]=0;values[valuesById[1]="Enemy"]=1;return values;}();/**
 * RoomStatus enum.
 * @exports RoomStatus
 * @enum {string}
 * @property {number} Normal_=0 Normal_ value
 * @property {number} GameIn=1 GameIn value
 */$root.RoomStatus=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Normal_"]=0;values[valuesById[1]="GameIn"]=1;return values;}();$root.NRoom=function(){/**
     * Properties of a NRoom.
     * @exports INRoom
     * @interface INRoom
     * @property {number|null} [roomId] NRoom roomId
     * @property {number|null} [userId] NRoom userId
     * @property {Array.<IRoomUser>|null} [my] NRoom my
     * @property {Array.<IRoomUser>|null} [enemy] NRoom enemy
     * @property {RoomStatus|null} [roomStatus] NRoom roomStatus
     * @property {string|null} [ipPortStr] NRoom ipPortStr
     * @property {number|null} [randomSeed] NRoom randomSeed
     * @property {string|null} [biFen] NRoom biFen
     */ /**
     * Constructs a new NRoom.
     * @exports NRoom
     * @classdesc Represents a NRoom.
     * @implements INRoom
     * @constructor
     * @param {INRoom=} [properties] Properties to set
     */function NRoom(properties){this.my=[];this.enemy=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NRoom roomId.
     * @member {number} roomId
     * @memberof NRoom
     * @instance
     */NRoom.prototype.roomId=0;/**
     * NRoom userId.
     * @member {number} userId
     * @memberof NRoom
     * @instance
     */NRoom.prototype.userId=0;/**
     * NRoom my.
     * @member {Array.<IRoomUser>} my
     * @memberof NRoom
     * @instance
     */NRoom.prototype.my=$util.emptyArray;/**
     * NRoom enemy.
     * @member {Array.<IRoomUser>} enemy
     * @memberof NRoom
     * @instance
     */NRoom.prototype.enemy=$util.emptyArray;/**
     * NRoom roomStatus.
     * @member {RoomStatus} roomStatus
     * @memberof NRoom
     * @instance
     */NRoom.prototype.roomStatus=0;/**
     * NRoom ipPortStr.
     * @member {string} ipPortStr
     * @memberof NRoom
     * @instance
     */NRoom.prototype.ipPortStr="";/**
     * NRoom randomSeed.
     * @member {number} randomSeed
     * @memberof NRoom
     * @instance
     */NRoom.prototype.randomSeed=0;/**
     * NRoom biFen.
     * @member {string} biFen
     * @memberof NRoom
     * @instance
     */NRoom.prototype.biFen="";/**
     * Creates a new NRoom instance using the specified properties.
     * @function create
     * @memberof NRoom
     * @static
     * @param {INRoom=} [properties] Properties to set
     * @returns {NRoom} NRoom instance
     */NRoom.create=function create(properties){return new NRoom(properties);};/**
     * Encodes the specified NRoom message. Does not implicitly {@link NRoom.verify|verify} messages.
     * @function encode
     * @memberof NRoom
     * @static
     * @param {INRoom} message NRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NRoom.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.roomId!=null&&message.hasOwnProperty("roomId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);if(message.my!=null&&message.my.length)for(var i=0;i<message.my.length;++i){$root.RoomUser.encode(message.my[i],writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();}if(message.enemy!=null&&message.enemy.length)for(var i=0;i<message.enemy.length;++i){$root.RoomUser.encode(message.enemy[i],writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();}if(message.roomStatus!=null&&message.hasOwnProperty("roomStatus"))writer.uint32(/* id 5, wireType 0 =*/40).int32(message.roomStatus);if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))writer.uint32(/* id 6, wireType 2 =*/50).string(message.ipPortStr);if(message.randomSeed!=null&&message.hasOwnProperty("randomSeed"))writer.uint32(/* id 7, wireType 0 =*/56).int32(message.randomSeed);if(message.biFen!=null&&message.hasOwnProperty("biFen"))writer.uint32(/* id 8, wireType 2 =*/66).string(message.biFen);return writer;};/**
     * Encodes the specified NRoom message, length delimited. Does not implicitly {@link NRoom.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NRoom
     * @static
     * @param {INRoom} message NRoom message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NRoom.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NRoom message from the specified reader or buffer.
     * @function decode
     * @memberof NRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NRoom} NRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NRoom.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NRoom();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.roomId=reader.int32();break;case 2:message.userId=reader.int32();break;case 3:if(!(message.my&&message.my.length))message.my=[];message.my.push($root.RoomUser.decode(reader,reader.uint32()));break;case 4:if(!(message.enemy&&message.enemy.length))message.enemy=[];message.enemy.push($root.RoomUser.decode(reader,reader.uint32()));break;case 5:message.roomStatus=reader.int32();break;case 6:message.ipPortStr=reader.string();break;case 7:message.randomSeed=reader.int32();break;case 8:message.biFen=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NRoom message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NRoom
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NRoom} NRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NRoom.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NRoom message.
     * @function verify
     * @memberof NRoom
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NRoom.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.roomId!=null&&message.hasOwnProperty("roomId"))if(!$util.isInteger(message.roomId))return"roomId: integer expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";if(message.my!=null&&message.hasOwnProperty("my")){if(!Array.isArray(message.my))return"my: array expected";for(var i=0;i<message.my.length;++i){var error=$root.RoomUser.verify(message.my[i]);if(error)return"my."+error;}}if(message.enemy!=null&&message.hasOwnProperty("enemy")){if(!Array.isArray(message.enemy))return"enemy: array expected";for(var i=0;i<message.enemy.length;++i){var error=$root.RoomUser.verify(message.enemy[i]);if(error)return"enemy."+error;}}if(message.roomStatus!=null&&message.hasOwnProperty("roomStatus"))switch(message.roomStatus){default:return"roomStatus: enum value expected";case 0:case 1:break;}if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))if(!$util.isString(message.ipPortStr))return"ipPortStr: string expected";if(message.randomSeed!=null&&message.hasOwnProperty("randomSeed"))if(!$util.isInteger(message.randomSeed))return"randomSeed: integer expected";if(message.biFen!=null&&message.hasOwnProperty("biFen"))if(!$util.isString(message.biFen))return"biFen: string expected";return null;};/**
     * Creates a NRoom message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NRoom
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NRoom} NRoom
     */NRoom.fromObject=function fromObject(object){if(object instanceof $root.NRoom)return object;var message=new $root.NRoom();if(object.roomId!=null)message.roomId=object.roomId|0;if(object.userId!=null)message.userId=object.userId|0;if(object.my){if(!Array.isArray(object.my))throw TypeError(".NRoom.my: array expected");message.my=[];for(var i=0;i<object.my.length;++i){if(typeof object.my[i]!=="object")throw TypeError(".NRoom.my: object expected");message.my[i]=$root.RoomUser.fromObject(object.my[i]);}}if(object.enemy){if(!Array.isArray(object.enemy))throw TypeError(".NRoom.enemy: array expected");message.enemy=[];for(var i=0;i<object.enemy.length;++i){if(typeof object.enemy[i]!=="object")throw TypeError(".NRoom.enemy: object expected");message.enemy[i]=$root.RoomUser.fromObject(object.enemy[i]);}}switch(object.roomStatus){case"Normal_":case 0:message.roomStatus=0;break;case"GameIn":case 1:message.roomStatus=1;break;}if(object.ipPortStr!=null)message.ipPortStr=String(object.ipPortStr);if(object.randomSeed!=null)message.randomSeed=object.randomSeed|0;if(object.biFen!=null)message.biFen=String(object.biFen);return message;};/**
     * Creates a plain object from a NRoom message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NRoom
     * @static
     * @param {NRoom} message NRoom
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NRoom.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults){object.my=[];object.enemy=[];}if(options.defaults){object.roomId=0;object.userId=0;object.roomStatus=options.enums===String?"Normal_":0;object.ipPortStr="";object.randomSeed=0;object.biFen="";}if(message.roomId!=null&&message.hasOwnProperty("roomId"))object.roomId=message.roomId;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;if(message.my&&message.my.length){object.my=[];for(var j=0;j<message.my.length;++j){object.my[j]=$root.RoomUser.toObject(message.my[j],options);}}if(message.enemy&&message.enemy.length){object.enemy=[];for(var j=0;j<message.enemy.length;++j){object.enemy[j]=$root.RoomUser.toObject(message.enemy[j],options);}}if(message.roomStatus!=null&&message.hasOwnProperty("roomStatus"))object.roomStatus=options.enums===String?$root.RoomStatus[message.roomStatus]:message.roomStatus;if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))object.ipPortStr=message.ipPortStr;if(message.randomSeed!=null&&message.hasOwnProperty("randomSeed"))object.randomSeed=message.randomSeed;if(message.biFen!=null&&message.hasOwnProperty("biFen"))object.biFen=message.biFen;return object;};/**
     * Converts this NRoom to JSON.
     * @function toJSON
     * @memberof NRoom
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NRoom.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NRoom;}();$root.MyRoomRequest=function(){/**
     * Properties of a MyRoomRequest.
     * @exports IMyRoomRequest
     * @interface IMyRoomRequest
     */ /**
     * Constructs a new MyRoomRequest.
     * @exports MyRoomRequest
     * @classdesc Represents a MyRoomRequest.
     * @implements IMyRoomRequest
     * @constructor
     * @param {IMyRoomRequest=} [properties] Properties to set
     */function MyRoomRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new MyRoomRequest instance using the specified properties.
     * @function create
     * @memberof MyRoomRequest
     * @static
     * @param {IMyRoomRequest=} [properties] Properties to set
     * @returns {MyRoomRequest} MyRoomRequest instance
     */MyRoomRequest.create=function create(properties){return new MyRoomRequest(properties);};/**
     * Encodes the specified MyRoomRequest message. Does not implicitly {@link MyRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof MyRoomRequest
     * @static
     * @param {IMyRoomRequest} message MyRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MyRoomRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified MyRoomRequest message, length delimited. Does not implicitly {@link MyRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MyRoomRequest
     * @static
     * @param {IMyRoomRequest} message MyRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MyRoomRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a MyRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MyRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MyRoomRequest} MyRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MyRoomRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.MyRoomRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a MyRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MyRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MyRoomRequest} MyRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MyRoomRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a MyRoomRequest message.
     * @function verify
     * @memberof MyRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */MyRoomRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a MyRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MyRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MyRoomRequest} MyRoomRequest
     */MyRoomRequest.fromObject=function fromObject(object){if(object instanceof $root.MyRoomRequest)return object;return new $root.MyRoomRequest();};/**
     * Creates a plain object from a MyRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MyRoomRequest
     * @static
     * @param {MyRoomRequest} message MyRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */MyRoomRequest.toObject=function toObject(){return{};};/**
     * Converts this MyRoomRequest to JSON.
     * @function toJSON
     * @memberof MyRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */MyRoomRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return MyRoomRequest;}();$root.MyRoomResponse=function(){/**
     * Properties of a MyRoomResponse.
     * @exports IMyRoomResponse
     * @interface IMyRoomResponse
     * @property {INRoom|null} [room] MyRoomResponse room
     */ /**
     * Constructs a new MyRoomResponse.
     * @exports MyRoomResponse
     * @classdesc Represents a MyRoomResponse.
     * @implements IMyRoomResponse
     * @constructor
     * @param {IMyRoomResponse=} [properties] Properties to set
     */function MyRoomResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * MyRoomResponse room.
     * @member {INRoom|null|undefined} room
     * @memberof MyRoomResponse
     * @instance
     */MyRoomResponse.prototype.room=null;/**
     * Creates a new MyRoomResponse instance using the specified properties.
     * @function create
     * @memberof MyRoomResponse
     * @static
     * @param {IMyRoomResponse=} [properties] Properties to set
     * @returns {MyRoomResponse} MyRoomResponse instance
     */MyRoomResponse.create=function create(properties){return new MyRoomResponse(properties);};/**
     * Encodes the specified MyRoomResponse message. Does not implicitly {@link MyRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof MyRoomResponse
     * @static
     * @param {IMyRoomResponse} message MyRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MyRoomResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.room!=null&&message.hasOwnProperty("room"))$root.NRoom.encode(message.room,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();return writer;};/**
     * Encodes the specified MyRoomResponse message, length delimited. Does not implicitly {@link MyRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MyRoomResponse
     * @static
     * @param {IMyRoomResponse} message MyRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MyRoomResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a MyRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MyRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MyRoomResponse} MyRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MyRoomResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.MyRoomResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.room=$root.NRoom.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a MyRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MyRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MyRoomResponse} MyRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MyRoomResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a MyRoomResponse message.
     * @function verify
     * @memberof MyRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */MyRoomResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.room!=null&&message.hasOwnProperty("room")){var error=$root.NRoom.verify(message.room);if(error)return"room."+error;}return null;};/**
     * Creates a MyRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MyRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MyRoomResponse} MyRoomResponse
     */MyRoomResponse.fromObject=function fromObject(object){if(object instanceof $root.MyRoomResponse)return object;var message=new $root.MyRoomResponse();if(object.room!=null){if(typeof object.room!=="object")throw TypeError(".MyRoomResponse.room: object expected");message.room=$root.NRoom.fromObject(object.room);}return message;};/**
     * Creates a plain object from a MyRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MyRoomResponse
     * @static
     * @param {MyRoomResponse} message MyRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */MyRoomResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.room=null;if(message.room!=null&&message.hasOwnProperty("room"))object.room=$root.NRoom.toObject(message.room,options);return object;};/**
     * Converts this MyRoomResponse to JSON.
     * @function toJSON
     * @memberof MyRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */MyRoomResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return MyRoomResponse;}();$root.InviteRequest=function(){/**
     * Properties of an InviteRequest.
     * @exports IInviteRequest
     * @interface IInviteRequest
     * @property {number|null} [fromUserId] InviteRequest fromUserId
     * @property {string|null} [fromNickName] InviteRequest fromNickName
     * @property {number|null} [toUserId] InviteRequest toUserId
     * @property {string|null} [toNickName] InviteRequest toNickName
     * @property {TeamType|null} [teamType] InviteRequest teamType
     */ /**
     * Constructs a new InviteRequest.
     * @exports InviteRequest
     * @classdesc Represents an InviteRequest.
     * @implements IInviteRequest
     * @constructor
     * @param {IInviteRequest=} [properties] Properties to set
     */function InviteRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * InviteRequest fromUserId.
     * @member {number} fromUserId
     * @memberof InviteRequest
     * @instance
     */InviteRequest.prototype.fromUserId=0;/**
     * InviteRequest fromNickName.
     * @member {string} fromNickName
     * @memberof InviteRequest
     * @instance
     */InviteRequest.prototype.fromNickName="";/**
     * InviteRequest toUserId.
     * @member {number} toUserId
     * @memberof InviteRequest
     * @instance
     */InviteRequest.prototype.toUserId=0;/**
     * InviteRequest toNickName.
     * @member {string} toNickName
     * @memberof InviteRequest
     * @instance
     */InviteRequest.prototype.toNickName="";/**
     * InviteRequest teamType.
     * @member {TeamType} teamType
     * @memberof InviteRequest
     * @instance
     */InviteRequest.prototype.teamType=0;/**
     * Creates a new InviteRequest instance using the specified properties.
     * @function create
     * @memberof InviteRequest
     * @static
     * @param {IInviteRequest=} [properties] Properties to set
     * @returns {InviteRequest} InviteRequest instance
     */InviteRequest.create=function create(properties){return new InviteRequest(properties);};/**
     * Encodes the specified InviteRequest message. Does not implicitly {@link InviteRequest.verify|verify} messages.
     * @function encode
     * @memberof InviteRequest
     * @static
     * @param {IInviteRequest} message InviteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InviteRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.fromUserId);if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromNickName);if(message.toUserId!=null&&message.hasOwnProperty("toUserId"))writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toUserId);if(message.toNickName!=null&&message.hasOwnProperty("toNickName"))writer.uint32(/* id 4, wireType 2 =*/34).string(message.toNickName);if(message.teamType!=null&&message.hasOwnProperty("teamType"))writer.uint32(/* id 5, wireType 0 =*/40).int32(message.teamType);return writer;};/**
     * Encodes the specified InviteRequest message, length delimited. Does not implicitly {@link InviteRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InviteRequest
     * @static
     * @param {IInviteRequest} message InviteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InviteRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an InviteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof InviteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InviteRequest} InviteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InviteRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.InviteRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.fromUserId=reader.int32();break;case 2:message.fromNickName=reader.string();break;case 3:message.toUserId=reader.int32();break;case 4:message.toNickName=reader.string();break;case 5:message.teamType=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an InviteRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InviteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InviteRequest} InviteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InviteRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an InviteRequest message.
     * @function verify
     * @memberof InviteRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */InviteRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))if(!$util.isInteger(message.fromUserId))return"fromUserId: integer expected";if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))if(!$util.isString(message.fromNickName))return"fromNickName: string expected";if(message.toUserId!=null&&message.hasOwnProperty("toUserId"))if(!$util.isInteger(message.toUserId))return"toUserId: integer expected";if(message.toNickName!=null&&message.hasOwnProperty("toNickName"))if(!$util.isString(message.toNickName))return"toNickName: string expected";if(message.teamType!=null&&message.hasOwnProperty("teamType"))switch(message.teamType){default:return"teamType: enum value expected";case 0:case 1:break;}return null;};/**
     * Creates an InviteRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InviteRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InviteRequest} InviteRequest
     */InviteRequest.fromObject=function fromObject(object){if(object instanceof $root.InviteRequest)return object;var message=new $root.InviteRequest();if(object.fromUserId!=null)message.fromUserId=object.fromUserId|0;if(object.fromNickName!=null)message.fromNickName=String(object.fromNickName);if(object.toUserId!=null)message.toUserId=object.toUserId|0;if(object.toNickName!=null)message.toNickName=String(object.toNickName);switch(object.teamType){case"My":case 0:message.teamType=0;break;case"Enemy":case 1:message.teamType=1;break;}return message;};/**
     * Creates a plain object from an InviteRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InviteRequest
     * @static
     * @param {InviteRequest} message InviteRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */InviteRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.fromUserId=0;object.fromNickName="";object.toUserId=0;object.toNickName="";object.teamType=options.enums===String?"My":0;}if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))object.fromUserId=message.fromUserId;if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))object.fromNickName=message.fromNickName;if(message.toUserId!=null&&message.hasOwnProperty("toUserId"))object.toUserId=message.toUserId;if(message.toNickName!=null&&message.hasOwnProperty("toNickName"))object.toNickName=message.toNickName;if(message.teamType!=null&&message.hasOwnProperty("teamType"))object.teamType=options.enums===String?$root.TeamType[message.teamType]:message.teamType;return object;};/**
     * Converts this InviteRequest to JSON.
     * @function toJSON
     * @memberof InviteRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */InviteRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return InviteRequest;}();$root.InviteResponse=function(){/**
     * Properties of an InviteResponse.
     * @exports IInviteResponse
     * @interface IInviteResponse
     * @property {Result|null} [result] InviteResponse result
     * @property {string|null} [errormsg] InviteResponse errormsg
     * @property {IInviteRequest|null} [inviteRequest] InviteResponse inviteRequest
     */ /**
     * Constructs a new InviteResponse.
     * @exports InviteResponse
     * @classdesc Represents an InviteResponse.
     * @implements IInviteResponse
     * @constructor
     * @param {IInviteResponse=} [properties] Properties to set
     */function InviteResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * InviteResponse result.
     * @member {Result} result
     * @memberof InviteResponse
     * @instance
     */InviteResponse.prototype.result=0;/**
     * InviteResponse errormsg.
     * @member {string} errormsg
     * @memberof InviteResponse
     * @instance
     */InviteResponse.prototype.errormsg="";/**
     * InviteResponse inviteRequest.
     * @member {IInviteRequest|null|undefined} inviteRequest
     * @memberof InviteResponse
     * @instance
     */InviteResponse.prototype.inviteRequest=null;/**
     * Creates a new InviteResponse instance using the specified properties.
     * @function create
     * @memberof InviteResponse
     * @static
     * @param {IInviteResponse=} [properties] Properties to set
     * @returns {InviteResponse} InviteResponse instance
     */InviteResponse.create=function create(properties){return new InviteResponse(properties);};/**
     * Encodes the specified InviteResponse message. Does not implicitly {@link InviteResponse.verify|verify} messages.
     * @function encode
     * @memberof InviteResponse
     * @static
     * @param {IInviteResponse} message InviteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InviteResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.inviteRequest!=null&&message.hasOwnProperty("inviteRequest"))$root.InviteRequest.encode(message.inviteRequest,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified InviteResponse message, length delimited. Does not implicitly {@link InviteResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof InviteResponse
     * @static
     * @param {IInviteResponse} message InviteResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */InviteResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an InviteResponse message from the specified reader or buffer.
     * @function decode
     * @memberof InviteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {InviteResponse} InviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InviteResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.InviteResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.inviteRequest=$root.InviteRequest.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an InviteResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof InviteResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {InviteResponse} InviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */InviteResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an InviteResponse message.
     * @function verify
     * @memberof InviteResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */InviteResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.inviteRequest!=null&&message.hasOwnProperty("inviteRequest")){var error=$root.InviteRequest.verify(message.inviteRequest);if(error)return"inviteRequest."+error;}return null;};/**
     * Creates an InviteResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof InviteResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {InviteResponse} InviteResponse
     */InviteResponse.fromObject=function fromObject(object){if(object instanceof $root.InviteResponse)return object;var message=new $root.InviteResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.inviteRequest!=null){if(typeof object.inviteRequest!=="object")throw TypeError(".InviteResponse.inviteRequest: object expected");message.inviteRequest=$root.InviteRequest.fromObject(object.inviteRequest);}return message;};/**
     * Creates a plain object from an InviteResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof InviteResponse
     * @static
     * @param {InviteResponse} message InviteResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */InviteResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.inviteRequest=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.inviteRequest!=null&&message.hasOwnProperty("inviteRequest"))object.inviteRequest=$root.InviteRequest.toObject(message.inviteRequest,options);return object;};/**
     * Converts this InviteResponse to JSON.
     * @function toJSON
     * @memberof InviteResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */InviteResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return InviteResponse;}();$root.KickOutRequest=function(){/**
     * Properties of a KickOutRequest.
     * @exports IKickOutRequest
     * @interface IKickOutRequest
     * @property {number|null} [userId] KickOutRequest userId
     */ /**
     * Constructs a new KickOutRequest.
     * @exports KickOutRequest
     * @classdesc Represents a KickOutRequest.
     * @implements IKickOutRequest
     * @constructor
     * @param {IKickOutRequest=} [properties] Properties to set
     */function KickOutRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * KickOutRequest userId.
     * @member {number} userId
     * @memberof KickOutRequest
     * @instance
     */KickOutRequest.prototype.userId=0;/**
     * Creates a new KickOutRequest instance using the specified properties.
     * @function create
     * @memberof KickOutRequest
     * @static
     * @param {IKickOutRequest=} [properties] Properties to set
     * @returns {KickOutRequest} KickOutRequest instance
     */KickOutRequest.create=function create(properties){return new KickOutRequest(properties);};/**
     * Encodes the specified KickOutRequest message. Does not implicitly {@link KickOutRequest.verify|verify} messages.
     * @function encode
     * @memberof KickOutRequest
     * @static
     * @param {IKickOutRequest} message KickOutRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */KickOutRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);return writer;};/**
     * Encodes the specified KickOutRequest message, length delimited. Does not implicitly {@link KickOutRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KickOutRequest
     * @static
     * @param {IKickOutRequest} message KickOutRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */KickOutRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a KickOutRequest message from the specified reader or buffer.
     * @function decode
     * @memberof KickOutRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KickOutRequest} KickOutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */KickOutRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.KickOutRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a KickOutRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KickOutRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KickOutRequest} KickOutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */KickOutRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a KickOutRequest message.
     * @function verify
     * @memberof KickOutRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */KickOutRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";return null;};/**
     * Creates a KickOutRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KickOutRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KickOutRequest} KickOutRequest
     */KickOutRequest.fromObject=function fromObject(object){if(object instanceof $root.KickOutRequest)return object;var message=new $root.KickOutRequest();if(object.userId!=null)message.userId=object.userId|0;return message;};/**
     * Creates a plain object from a KickOutRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KickOutRequest
     * @static
     * @param {KickOutRequest} message KickOutRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */KickOutRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.userId=0;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;return object;};/**
     * Converts this KickOutRequest to JSON.
     * @function toJSON
     * @memberof KickOutRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */KickOutRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return KickOutRequest;}();$root.KickOutResponse=function(){/**
     * Properties of a KickOutResponse.
     * @exports IKickOutResponse
     * @interface IKickOutResponse
     * @property {Result|null} [result] KickOutResponse result
     * @property {string|null} [errormsg] KickOutResponse errormsg
     */ /**
     * Constructs a new KickOutResponse.
     * @exports KickOutResponse
     * @classdesc Represents a KickOutResponse.
     * @implements IKickOutResponse
     * @constructor
     * @param {IKickOutResponse=} [properties] Properties to set
     */function KickOutResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * KickOutResponse result.
     * @member {Result} result
     * @memberof KickOutResponse
     * @instance
     */KickOutResponse.prototype.result=0;/**
     * KickOutResponse errormsg.
     * @member {string} errormsg
     * @memberof KickOutResponse
     * @instance
     */KickOutResponse.prototype.errormsg="";/**
     * Creates a new KickOutResponse instance using the specified properties.
     * @function create
     * @memberof KickOutResponse
     * @static
     * @param {IKickOutResponse=} [properties] Properties to set
     * @returns {KickOutResponse} KickOutResponse instance
     */KickOutResponse.create=function create(properties){return new KickOutResponse(properties);};/**
     * Encodes the specified KickOutResponse message. Does not implicitly {@link KickOutResponse.verify|verify} messages.
     * @function encode
     * @memberof KickOutResponse
     * @static
     * @param {IKickOutResponse} message KickOutResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */KickOutResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified KickOutResponse message, length delimited. Does not implicitly {@link KickOutResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof KickOutResponse
     * @static
     * @param {IKickOutResponse} message KickOutResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */KickOutResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a KickOutResponse message from the specified reader or buffer.
     * @function decode
     * @memberof KickOutResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {KickOutResponse} KickOutResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */KickOutResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.KickOutResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a KickOutResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof KickOutResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {KickOutResponse} KickOutResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */KickOutResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a KickOutResponse message.
     * @function verify
     * @memberof KickOutResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */KickOutResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a KickOutResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof KickOutResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {KickOutResponse} KickOutResponse
     */KickOutResponse.fromObject=function fromObject(object){if(object instanceof $root.KickOutResponse)return object;var message=new $root.KickOutResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a KickOutResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof KickOutResponse
     * @static
     * @param {KickOutResponse} message KickOutResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */KickOutResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this KickOutResponse to JSON.
     * @function toJSON
     * @memberof KickOutResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */KickOutResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return KickOutResponse;}();$root.RoomStartGameRequest=function(){/**
     * Properties of a RoomStartGameRequest.
     * @exports IRoomStartGameRequest
     * @interface IRoomStartGameRequest
     */ /**
     * Constructs a new RoomStartGameRequest.
     * @exports RoomStartGameRequest
     * @classdesc Represents a RoomStartGameRequest.
     * @implements IRoomStartGameRequest
     * @constructor
     * @param {IRoomStartGameRequest=} [properties] Properties to set
     */function RoomStartGameRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new RoomStartGameRequest instance using the specified properties.
     * @function create
     * @memberof RoomStartGameRequest
     * @static
     * @param {IRoomStartGameRequest=} [properties] Properties to set
     * @returns {RoomStartGameRequest} RoomStartGameRequest instance
     */RoomStartGameRequest.create=function create(properties){return new RoomStartGameRequest(properties);};/**
     * Encodes the specified RoomStartGameRequest message. Does not implicitly {@link RoomStartGameRequest.verify|verify} messages.
     * @function encode
     * @memberof RoomStartGameRequest
     * @static
     * @param {IRoomStartGameRequest} message RoomStartGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomStartGameRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified RoomStartGameRequest message, length delimited. Does not implicitly {@link RoomStartGameRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomStartGameRequest
     * @static
     * @param {IRoomStartGameRequest} message RoomStartGameRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomStartGameRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a RoomStartGameRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RoomStartGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomStartGameRequest} RoomStartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomStartGameRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.RoomStartGameRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a RoomStartGameRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomStartGameRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomStartGameRequest} RoomStartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomStartGameRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a RoomStartGameRequest message.
     * @function verify
     * @memberof RoomStartGameRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */RoomStartGameRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a RoomStartGameRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomStartGameRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomStartGameRequest} RoomStartGameRequest
     */RoomStartGameRequest.fromObject=function fromObject(object){if(object instanceof $root.RoomStartGameRequest)return object;return new $root.RoomStartGameRequest();};/**
     * Creates a plain object from a RoomStartGameRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomStartGameRequest
     * @static
     * @param {RoomStartGameRequest} message RoomStartGameRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */RoomStartGameRequest.toObject=function toObject(){return{};};/**
     * Converts this RoomStartGameRequest to JSON.
     * @function toJSON
     * @memberof RoomStartGameRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */RoomStartGameRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return RoomStartGameRequest;}();$root.RoomStartGameResponse=function(){/**
     * Properties of a RoomStartGameResponse.
     * @exports IRoomStartGameResponse
     * @interface IRoomStartGameResponse
     * @property {Result|null} [result] RoomStartGameResponse result
     * @property {string|null} [errormsg] RoomStartGameResponse errormsg
     */ /**
     * Constructs a new RoomStartGameResponse.
     * @exports RoomStartGameResponse
     * @classdesc Represents a RoomStartGameResponse.
     * @implements IRoomStartGameResponse
     * @constructor
     * @param {IRoomStartGameResponse=} [properties] Properties to set
     */function RoomStartGameResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * RoomStartGameResponse result.
     * @member {Result} result
     * @memberof RoomStartGameResponse
     * @instance
     */RoomStartGameResponse.prototype.result=0;/**
     * RoomStartGameResponse errormsg.
     * @member {string} errormsg
     * @memberof RoomStartGameResponse
     * @instance
     */RoomStartGameResponse.prototype.errormsg="";/**
     * Creates a new RoomStartGameResponse instance using the specified properties.
     * @function create
     * @memberof RoomStartGameResponse
     * @static
     * @param {IRoomStartGameResponse=} [properties] Properties to set
     * @returns {RoomStartGameResponse} RoomStartGameResponse instance
     */RoomStartGameResponse.create=function create(properties){return new RoomStartGameResponse(properties);};/**
     * Encodes the specified RoomStartGameResponse message. Does not implicitly {@link RoomStartGameResponse.verify|verify} messages.
     * @function encode
     * @memberof RoomStartGameResponse
     * @static
     * @param {IRoomStartGameResponse} message RoomStartGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomStartGameResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified RoomStartGameResponse message, length delimited. Does not implicitly {@link RoomStartGameResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomStartGameResponse
     * @static
     * @param {IRoomStartGameResponse} message RoomStartGameResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */RoomStartGameResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a RoomStartGameResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RoomStartGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomStartGameResponse} RoomStartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomStartGameResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.RoomStartGameResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a RoomStartGameResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomStartGameResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomStartGameResponse} RoomStartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */RoomStartGameResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a RoomStartGameResponse message.
     * @function verify
     * @memberof RoomStartGameResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */RoomStartGameResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a RoomStartGameResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomStartGameResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomStartGameResponse} RoomStartGameResponse
     */RoomStartGameResponse.fromObject=function fromObject(object){if(object instanceof $root.RoomStartGameResponse)return object;var message=new $root.RoomStartGameResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a RoomStartGameResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomStartGameResponse
     * @static
     * @param {RoomStartGameResponse} message RoomStartGameResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */RoomStartGameResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this RoomStartGameResponse to JSON.
     * @function toJSON
     * @memberof RoomStartGameResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */RoomStartGameResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return RoomStartGameResponse;}();$root.NickNameSearchRequest=function(){/**
     * Properties of a NickNameSearchRequest.
     * @exports INickNameSearchRequest
     * @interface INickNameSearchRequest
     * @property {string|null} [nickName] NickNameSearchRequest nickName
     */ /**
     * Constructs a new NickNameSearchRequest.
     * @exports NickNameSearchRequest
     * @classdesc Represents a NickNameSearchRequest.
     * @implements INickNameSearchRequest
     * @constructor
     * @param {INickNameSearchRequest=} [properties] Properties to set
     */function NickNameSearchRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NickNameSearchRequest nickName.
     * @member {string} nickName
     * @memberof NickNameSearchRequest
     * @instance
     */NickNameSearchRequest.prototype.nickName="";/**
     * Creates a new NickNameSearchRequest instance using the specified properties.
     * @function create
     * @memberof NickNameSearchRequest
     * @static
     * @param {INickNameSearchRequest=} [properties] Properties to set
     * @returns {NickNameSearchRequest} NickNameSearchRequest instance
     */NickNameSearchRequest.create=function create(properties){return new NickNameSearchRequest(properties);};/**
     * Encodes the specified NickNameSearchRequest message. Does not implicitly {@link NickNameSearchRequest.verify|verify} messages.
     * @function encode
     * @memberof NickNameSearchRequest
     * @static
     * @param {INickNameSearchRequest} message NickNameSearchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NickNameSearchRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.nickName!=null&&message.hasOwnProperty("nickName"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.nickName);return writer;};/**
     * Encodes the specified NickNameSearchRequest message, length delimited. Does not implicitly {@link NickNameSearchRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NickNameSearchRequest
     * @static
     * @param {INickNameSearchRequest} message NickNameSearchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NickNameSearchRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NickNameSearchRequest message from the specified reader or buffer.
     * @function decode
     * @memberof NickNameSearchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NickNameSearchRequest} NickNameSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NickNameSearchRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NickNameSearchRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.nickName=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NickNameSearchRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NickNameSearchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NickNameSearchRequest} NickNameSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NickNameSearchRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NickNameSearchRequest message.
     * @function verify
     * @memberof NickNameSearchRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NickNameSearchRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.nickName!=null&&message.hasOwnProperty("nickName"))if(!$util.isString(message.nickName))return"nickName: string expected";return null;};/**
     * Creates a NickNameSearchRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NickNameSearchRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NickNameSearchRequest} NickNameSearchRequest
     */NickNameSearchRequest.fromObject=function fromObject(object){if(object instanceof $root.NickNameSearchRequest)return object;var message=new $root.NickNameSearchRequest();if(object.nickName!=null)message.nickName=String(object.nickName);return message;};/**
     * Creates a plain object from a NickNameSearchRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NickNameSearchRequest
     * @static
     * @param {NickNameSearchRequest} message NickNameSearchRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NickNameSearchRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.nickName="";if(message.nickName!=null&&message.hasOwnProperty("nickName"))object.nickName=message.nickName;return object;};/**
     * Converts this NickNameSearchRequest to JSON.
     * @function toJSON
     * @memberof NickNameSearchRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NickNameSearchRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NickNameSearchRequest;}();$root.NickNameSearchResponse=function(){/**
     * Properties of a NickNameSearchResponse.
     * @exports INickNameSearchResponse
     * @interface INickNameSearchResponse
     * @property {Array.<IRoomUser>|null} [roomUser] NickNameSearchResponse roomUser
     */ /**
     * Constructs a new NickNameSearchResponse.
     * @exports NickNameSearchResponse
     * @classdesc Represents a NickNameSearchResponse.
     * @implements INickNameSearchResponse
     * @constructor
     * @param {INickNameSearchResponse=} [properties] Properties to set
     */function NickNameSearchResponse(properties){this.roomUser=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * NickNameSearchResponse roomUser.
     * @member {Array.<IRoomUser>} roomUser
     * @memberof NickNameSearchResponse
     * @instance
     */NickNameSearchResponse.prototype.roomUser=$util.emptyArray;/**
     * Creates a new NickNameSearchResponse instance using the specified properties.
     * @function create
     * @memberof NickNameSearchResponse
     * @static
     * @param {INickNameSearchResponse=} [properties] Properties to set
     * @returns {NickNameSearchResponse} NickNameSearchResponse instance
     */NickNameSearchResponse.create=function create(properties){return new NickNameSearchResponse(properties);};/**
     * Encodes the specified NickNameSearchResponse message. Does not implicitly {@link NickNameSearchResponse.verify|verify} messages.
     * @function encode
     * @memberof NickNameSearchResponse
     * @static
     * @param {INickNameSearchResponse} message NickNameSearchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NickNameSearchResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.roomUser!=null&&message.roomUser.length)for(var i=0;i<message.roomUser.length;++i){$root.RoomUser.encode(message.roomUser[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}return writer;};/**
     * Encodes the specified NickNameSearchResponse message, length delimited. Does not implicitly {@link NickNameSearchResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NickNameSearchResponse
     * @static
     * @param {INickNameSearchResponse} message NickNameSearchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */NickNameSearchResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a NickNameSearchResponse message from the specified reader or buffer.
     * @function decode
     * @memberof NickNameSearchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NickNameSearchResponse} NickNameSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NickNameSearchResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.NickNameSearchResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.roomUser&&message.roomUser.length))message.roomUser=[];message.roomUser.push($root.RoomUser.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a NickNameSearchResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NickNameSearchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NickNameSearchResponse} NickNameSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */NickNameSearchResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a NickNameSearchResponse message.
     * @function verify
     * @memberof NickNameSearchResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */NickNameSearchResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.roomUser!=null&&message.hasOwnProperty("roomUser")){if(!Array.isArray(message.roomUser))return"roomUser: array expected";for(var i=0;i<message.roomUser.length;++i){var error=$root.RoomUser.verify(message.roomUser[i]);if(error)return"roomUser."+error;}}return null;};/**
     * Creates a NickNameSearchResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NickNameSearchResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NickNameSearchResponse} NickNameSearchResponse
     */NickNameSearchResponse.fromObject=function fromObject(object){if(object instanceof $root.NickNameSearchResponse)return object;var message=new $root.NickNameSearchResponse();if(object.roomUser){if(!Array.isArray(object.roomUser))throw TypeError(".NickNameSearchResponse.roomUser: array expected");message.roomUser=[];for(var i=0;i<object.roomUser.length;++i){if(typeof object.roomUser[i]!=="object")throw TypeError(".NickNameSearchResponse.roomUser: object expected");message.roomUser[i]=$root.RoomUser.fromObject(object.roomUser[i]);}}return message;};/**
     * Creates a plain object from a NickNameSearchResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NickNameSearchResponse
     * @static
     * @param {NickNameSearchResponse} message NickNameSearchResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */NickNameSearchResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.roomUser=[];if(message.roomUser&&message.roomUser.length){object.roomUser=[];for(var j=0;j<message.roomUser.length;++j){object.roomUser[j]=$root.RoomUser.toObject(message.roomUser[j],options);}}return object;};/**
     * Converts this NickNameSearchResponse to JSON.
     * @function toJSON
     * @memberof NickNameSearchResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */NickNameSearchResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return NickNameSearchResponse;}();$root.AddRoomRequest=function(){/**
     * Properties of an AddRoomRequest.
     * @exports IAddRoomRequest
     * @interface IAddRoomRequest
     * @property {number|null} [roomId] AddRoomRequest roomId
     * @property {number|null} [fromUserId] AddRoomRequest fromUserId
     * @property {string|null} [fromNickName] AddRoomRequest fromNickName
     */ /**
     * Constructs a new AddRoomRequest.
     * @exports AddRoomRequest
     * @classdesc Represents an AddRoomRequest.
     * @implements IAddRoomRequest
     * @constructor
     * @param {IAddRoomRequest=} [properties] Properties to set
     */function AddRoomRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AddRoomRequest roomId.
     * @member {number} roomId
     * @memberof AddRoomRequest
     * @instance
     */AddRoomRequest.prototype.roomId=0;/**
     * AddRoomRequest fromUserId.
     * @member {number} fromUserId
     * @memberof AddRoomRequest
     * @instance
     */AddRoomRequest.prototype.fromUserId=0;/**
     * AddRoomRequest fromNickName.
     * @member {string} fromNickName
     * @memberof AddRoomRequest
     * @instance
     */AddRoomRequest.prototype.fromNickName="";/**
     * Creates a new AddRoomRequest instance using the specified properties.
     * @function create
     * @memberof AddRoomRequest
     * @static
     * @param {IAddRoomRequest=} [properties] Properties to set
     * @returns {AddRoomRequest} AddRoomRequest instance
     */AddRoomRequest.create=function create(properties){return new AddRoomRequest(properties);};/**
     * Encodes the specified AddRoomRequest message. Does not implicitly {@link AddRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof AddRoomRequest
     * @static
     * @param {IAddRoomRequest} message AddRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddRoomRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.roomId!=null&&message.hasOwnProperty("roomId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromUserId);if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromNickName);return writer;};/**
     * Encodes the specified AddRoomRequest message, length delimited. Does not implicitly {@link AddRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddRoomRequest
     * @static
     * @param {IAddRoomRequest} message AddRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddRoomRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AddRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AddRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddRoomRequest} AddRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddRoomRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AddRoomRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.roomId=reader.int32();break;case 2:message.fromUserId=reader.int32();break;case 3:message.fromNickName=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AddRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddRoomRequest} AddRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddRoomRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AddRoomRequest message.
     * @function verify
     * @memberof AddRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AddRoomRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.roomId!=null&&message.hasOwnProperty("roomId"))if(!$util.isInteger(message.roomId))return"roomId: integer expected";if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))if(!$util.isInteger(message.fromUserId))return"fromUserId: integer expected";if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))if(!$util.isString(message.fromNickName))return"fromNickName: string expected";return null;};/**
     * Creates an AddRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddRoomRequest} AddRoomRequest
     */AddRoomRequest.fromObject=function fromObject(object){if(object instanceof $root.AddRoomRequest)return object;var message=new $root.AddRoomRequest();if(object.roomId!=null)message.roomId=object.roomId|0;if(object.fromUserId!=null)message.fromUserId=object.fromUserId|0;if(object.fromNickName!=null)message.fromNickName=String(object.fromNickName);return message;};/**
     * Creates a plain object from an AddRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddRoomRequest
     * @static
     * @param {AddRoomRequest} message AddRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AddRoomRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.roomId=0;object.fromUserId=0;object.fromNickName="";}if(message.roomId!=null&&message.hasOwnProperty("roomId"))object.roomId=message.roomId;if(message.fromUserId!=null&&message.hasOwnProperty("fromUserId"))object.fromUserId=message.fromUserId;if(message.fromNickName!=null&&message.hasOwnProperty("fromNickName"))object.fromNickName=message.fromNickName;return object;};/**
     * Converts this AddRoomRequest to JSON.
     * @function toJSON
     * @memberof AddRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AddRoomRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AddRoomRequest;}();$root.AddRoomResponse=function(){/**
     * Properties of an AddRoomResponse.
     * @exports IAddRoomResponse
     * @interface IAddRoomResponse
     * @property {Result|null} [result] AddRoomResponse result
     * @property {string|null} [errormsg] AddRoomResponse errormsg
     * @property {IAddRoomRequest|null} [addRoomRequest] AddRoomResponse addRoomRequest
     * @property {TeamType|null} [teamType] AddRoomResponse teamType
     */ /**
     * Constructs a new AddRoomResponse.
     * @exports AddRoomResponse
     * @classdesc Represents an AddRoomResponse.
     * @implements IAddRoomResponse
     * @constructor
     * @param {IAddRoomResponse=} [properties] Properties to set
     */function AddRoomResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AddRoomResponse result.
     * @member {Result} result
     * @memberof AddRoomResponse
     * @instance
     */AddRoomResponse.prototype.result=0;/**
     * AddRoomResponse errormsg.
     * @member {string} errormsg
     * @memberof AddRoomResponse
     * @instance
     */AddRoomResponse.prototype.errormsg="";/**
     * AddRoomResponse addRoomRequest.
     * @member {IAddRoomRequest|null|undefined} addRoomRequest
     * @memberof AddRoomResponse
     * @instance
     */AddRoomResponse.prototype.addRoomRequest=null;/**
     * AddRoomResponse teamType.
     * @member {TeamType} teamType
     * @memberof AddRoomResponse
     * @instance
     */AddRoomResponse.prototype.teamType=0;/**
     * Creates a new AddRoomResponse instance using the specified properties.
     * @function create
     * @memberof AddRoomResponse
     * @static
     * @param {IAddRoomResponse=} [properties] Properties to set
     * @returns {AddRoomResponse} AddRoomResponse instance
     */AddRoomResponse.create=function create(properties){return new AddRoomResponse(properties);};/**
     * Encodes the specified AddRoomResponse message. Does not implicitly {@link AddRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof AddRoomResponse
     * @static
     * @param {IAddRoomResponse} message AddRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddRoomResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.addRoomRequest!=null&&message.hasOwnProperty("addRoomRequest"))$root.AddRoomRequest.encode(message.addRoomRequest,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();if(message.teamType!=null&&message.hasOwnProperty("teamType"))writer.uint32(/* id 4, wireType 0 =*/32).int32(message.teamType);return writer;};/**
     * Encodes the specified AddRoomResponse message, length delimited. Does not implicitly {@link AddRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddRoomResponse
     * @static
     * @param {IAddRoomResponse} message AddRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddRoomResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AddRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AddRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddRoomResponse} AddRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddRoomResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AddRoomResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.addRoomRequest=$root.AddRoomRequest.decode(reader,reader.uint32());break;case 4:message.teamType=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AddRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddRoomResponse} AddRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddRoomResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AddRoomResponse message.
     * @function verify
     * @memberof AddRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AddRoomResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.addRoomRequest!=null&&message.hasOwnProperty("addRoomRequest")){var error=$root.AddRoomRequest.verify(message.addRoomRequest);if(error)return"addRoomRequest."+error;}if(message.teamType!=null&&message.hasOwnProperty("teamType"))switch(message.teamType){default:return"teamType: enum value expected";case 0:case 1:break;}return null;};/**
     * Creates an AddRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddRoomResponse} AddRoomResponse
     */AddRoomResponse.fromObject=function fromObject(object){if(object instanceof $root.AddRoomResponse)return object;var message=new $root.AddRoomResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.addRoomRequest!=null){if(typeof object.addRoomRequest!=="object")throw TypeError(".AddRoomResponse.addRoomRequest: object expected");message.addRoomRequest=$root.AddRoomRequest.fromObject(object.addRoomRequest);}switch(object.teamType){case"My":case 0:message.teamType=0;break;case"Enemy":case 1:message.teamType=1;break;}return message;};/**
     * Creates a plain object from an AddRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddRoomResponse
     * @static
     * @param {AddRoomResponse} message AddRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AddRoomResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.addRoomRequest=null;object.teamType=options.enums===String?"My":0;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.addRoomRequest!=null&&message.hasOwnProperty("addRoomRequest"))object.addRoomRequest=$root.AddRoomRequest.toObject(message.addRoomRequest,options);if(message.teamType!=null&&message.hasOwnProperty("teamType"))object.teamType=options.enums===String?$root.TeamType[message.teamType]:message.teamType;return object;};/**
     * Converts this AddRoomResponse to JSON.
     * @function toJSON
     * @memberof AddRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AddRoomResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AddRoomResponse;}();$root.OutRoomRequest=function(){/**
     * Properties of an OutRoomRequest.
     * @exports IOutRoomRequest
     * @interface IOutRoomRequest
     */ /**
     * Constructs a new OutRoomRequest.
     * @exports OutRoomRequest
     * @classdesc Represents an OutRoomRequest.
     * @implements IOutRoomRequest
     * @constructor
     * @param {IOutRoomRequest=} [properties] Properties to set
     */function OutRoomRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new OutRoomRequest instance using the specified properties.
     * @function create
     * @memberof OutRoomRequest
     * @static
     * @param {IOutRoomRequest=} [properties] Properties to set
     * @returns {OutRoomRequest} OutRoomRequest instance
     */OutRoomRequest.create=function create(properties){return new OutRoomRequest(properties);};/**
     * Encodes the specified OutRoomRequest message. Does not implicitly {@link OutRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof OutRoomRequest
     * @static
     * @param {IOutRoomRequest} message OutRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OutRoomRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified OutRoomRequest message, length delimited. Does not implicitly {@link OutRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OutRoomRequest
     * @static
     * @param {IOutRoomRequest} message OutRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OutRoomRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an OutRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof OutRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OutRoomRequest} OutRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OutRoomRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.OutRoomRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an OutRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OutRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OutRoomRequest} OutRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OutRoomRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an OutRoomRequest message.
     * @function verify
     * @memberof OutRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */OutRoomRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates an OutRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OutRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OutRoomRequest} OutRoomRequest
     */OutRoomRequest.fromObject=function fromObject(object){if(object instanceof $root.OutRoomRequest)return object;return new $root.OutRoomRequest();};/**
     * Creates a plain object from an OutRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OutRoomRequest
     * @static
     * @param {OutRoomRequest} message OutRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */OutRoomRequest.toObject=function toObject(){return{};};/**
     * Converts this OutRoomRequest to JSON.
     * @function toJSON
     * @memberof OutRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */OutRoomRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return OutRoomRequest;}();$root.OutRoomResponse=function(){/**
     * Properties of an OutRoomResponse.
     * @exports IOutRoomResponse
     * @interface IOutRoomResponse
     * @property {Result|null} [result] OutRoomResponse result
     * @property {string|null} [errormsg] OutRoomResponse errormsg
     */ /**
     * Constructs a new OutRoomResponse.
     * @exports OutRoomResponse
     * @classdesc Represents an OutRoomResponse.
     * @implements IOutRoomResponse
     * @constructor
     * @param {IOutRoomResponse=} [properties] Properties to set
     */function OutRoomResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * OutRoomResponse result.
     * @member {Result} result
     * @memberof OutRoomResponse
     * @instance
     */OutRoomResponse.prototype.result=0;/**
     * OutRoomResponse errormsg.
     * @member {string} errormsg
     * @memberof OutRoomResponse
     * @instance
     */OutRoomResponse.prototype.errormsg="";/**
     * Creates a new OutRoomResponse instance using the specified properties.
     * @function create
     * @memberof OutRoomResponse
     * @static
     * @param {IOutRoomResponse=} [properties] Properties to set
     * @returns {OutRoomResponse} OutRoomResponse instance
     */OutRoomResponse.create=function create(properties){return new OutRoomResponse(properties);};/**
     * Encodes the specified OutRoomResponse message. Does not implicitly {@link OutRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof OutRoomResponse
     * @static
     * @param {IOutRoomResponse} message OutRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OutRoomResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified OutRoomResponse message, length delimited. Does not implicitly {@link OutRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OutRoomResponse
     * @static
     * @param {IOutRoomResponse} message OutRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */OutRoomResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an OutRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof OutRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OutRoomResponse} OutRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OutRoomResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.OutRoomResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an OutRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OutRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OutRoomResponse} OutRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */OutRoomResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an OutRoomResponse message.
     * @function verify
     * @memberof OutRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */OutRoomResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates an OutRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OutRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OutRoomResponse} OutRoomResponse
     */OutRoomResponse.fromObject=function fromObject(object){if(object instanceof $root.OutRoomResponse)return object;var message=new $root.OutRoomResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from an OutRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OutRoomResponse
     * @static
     * @param {OutRoomResponse} message OutRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */OutRoomResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this OutRoomResponse to JSON.
     * @function toJSON
     * @memberof OutRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */OutRoomResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return OutRoomResponse;}();$root.FollowListRequest=function(){/**
     * Properties of a FollowListRequest.
     * @exports IFollowListRequest
     * @interface IFollowListRequest
     */ /**
     * Constructs a new FollowListRequest.
     * @exports FollowListRequest
     * @classdesc Represents a FollowListRequest.
     * @implements IFollowListRequest
     * @constructor
     * @param {IFollowListRequest=} [properties] Properties to set
     */function FollowListRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new FollowListRequest instance using the specified properties.
     * @function create
     * @memberof FollowListRequest
     * @static
     * @param {IFollowListRequest=} [properties] Properties to set
     * @returns {FollowListRequest} FollowListRequest instance
     */FollowListRequest.create=function create(properties){return new FollowListRequest(properties);};/**
     * Encodes the specified FollowListRequest message. Does not implicitly {@link FollowListRequest.verify|verify} messages.
     * @function encode
     * @memberof FollowListRequest
     * @static
     * @param {IFollowListRequest} message FollowListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowListRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified FollowListRequest message, length delimited. Does not implicitly {@link FollowListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FollowListRequest
     * @static
     * @param {IFollowListRequest} message FollowListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowListRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a FollowListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FollowListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FollowListRequest} FollowListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowListRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.FollowListRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a FollowListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FollowListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FollowListRequest} FollowListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowListRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a FollowListRequest message.
     * @function verify
     * @memberof FollowListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */FollowListRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a FollowListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FollowListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FollowListRequest} FollowListRequest
     */FollowListRequest.fromObject=function fromObject(object){if(object instanceof $root.FollowListRequest)return object;return new $root.FollowListRequest();};/**
     * Creates a plain object from a FollowListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FollowListRequest
     * @static
     * @param {FollowListRequest} message FollowListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */FollowListRequest.toObject=function toObject(){return{};};/**
     * Converts this FollowListRequest to JSON.
     * @function toJSON
     * @memberof FollowListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */FollowListRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return FollowListRequest;}();$root.FollowListResponse=function(){/**
     * Properties of a FollowListResponse.
     * @exports IFollowListResponse
     * @interface IFollowListResponse
     * @property {Array.<INUser>|null} [follows] FollowListResponse follows
     */ /**
     * Constructs a new FollowListResponse.
     * @exports FollowListResponse
     * @classdesc Represents a FollowListResponse.
     * @implements IFollowListResponse
     * @constructor
     * @param {IFollowListResponse=} [properties] Properties to set
     */function FollowListResponse(properties){this.follows=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * FollowListResponse follows.
     * @member {Array.<INUser>} follows
     * @memberof FollowListResponse
     * @instance
     */FollowListResponse.prototype.follows=$util.emptyArray;/**
     * Creates a new FollowListResponse instance using the specified properties.
     * @function create
     * @memberof FollowListResponse
     * @static
     * @param {IFollowListResponse=} [properties] Properties to set
     * @returns {FollowListResponse} FollowListResponse instance
     */FollowListResponse.create=function create(properties){return new FollowListResponse(properties);};/**
     * Encodes the specified FollowListResponse message. Does not implicitly {@link FollowListResponse.verify|verify} messages.
     * @function encode
     * @memberof FollowListResponse
     * @static
     * @param {IFollowListResponse} message FollowListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowListResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.follows!=null&&message.follows.length)for(var i=0;i<message.follows.length;++i){$root.NUser.encode(message.follows[i],writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();}return writer;};/**
     * Encodes the specified FollowListResponse message, length delimited. Does not implicitly {@link FollowListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FollowListResponse
     * @static
     * @param {IFollowListResponse} message FollowListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */FollowListResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a FollowListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FollowListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FollowListResponse} FollowListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowListResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.FollowListResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.follows&&message.follows.length))message.follows=[];message.follows.push($root.NUser.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a FollowListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FollowListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FollowListResponse} FollowListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */FollowListResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a FollowListResponse message.
     * @function verify
     * @memberof FollowListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */FollowListResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.follows!=null&&message.hasOwnProperty("follows")){if(!Array.isArray(message.follows))return"follows: array expected";for(var i=0;i<message.follows.length;++i){var error=$root.NUser.verify(message.follows[i]);if(error)return"follows."+error;}}return null;};/**
     * Creates a FollowListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FollowListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FollowListResponse} FollowListResponse
     */FollowListResponse.fromObject=function fromObject(object){if(object instanceof $root.FollowListResponse)return object;var message=new $root.FollowListResponse();if(object.follows){if(!Array.isArray(object.follows))throw TypeError(".FollowListResponse.follows: array expected");message.follows=[];for(var i=0;i<object.follows.length;++i){if(typeof object.follows[i]!=="object")throw TypeError(".FollowListResponse.follows: object expected");message.follows[i]=$root.NUser.fromObject(object.follows[i]);}}return message;};/**
     * Creates a plain object from a FollowListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FollowListResponse
     * @static
     * @param {FollowListResponse} message FollowListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */FollowListResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.follows=[];if(message.follows&&message.follows.length){object.follows=[];for(var j=0;j<message.follows.length;++j){object.follows[j]=$root.NUser.toObject(message.follows[j],options);}}return object;};/**
     * Converts this FollowListResponse to JSON.
     * @function toJSON
     * @memberof FollowListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */FollowListResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return FollowListResponse;}();/**
 * ChatChannel enum.
 * @exports ChatChannel
 * @enum {string}
 * @property {number} Comp=0 Comp value
 * @property {number} Private=1 Private value
 * @property {number} RoomChat=2 RoomChat value
 */$root.ChatChannel=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Comp"]=0;values[valuesById[1]="Private"]=1;values[valuesById[2]="RoomChat"]=2;return values;}();$root.ChatMessage=function(){/**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {ChatChannel|null} [chatChannel] ChatMessage chatChannel
     * @property {number|null} [fromId] ChatMessage fromId
     * @property {string|null} [fromName] ChatMessage fromName
     * @property {number|null} [fromLevel] ChatMessage fromLevel
     * @property {number|null} [fromCCharacterId] ChatMessage fromCCharacterId
     * @property {number|null} [toId] ChatMessage toId
     * @property {string|null} [toName] ChatMessage toName
     * @property {number|null} [toLevel] ChatMessage toLevel
     * @property {number|null} [toCCharacterId] ChatMessage toCCharacterId
     * @property {string|null} [msg] ChatMessage msg
     * @property {number|Long|null} [time] ChatMessage time
     * @property {ChatRoomType|null} [chatRoomType] ChatMessage chatRoomType
     * @property {number|null} [enterLiveUserId] ChatMessage enterLiveUserId
     */ /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */function ChatMessage(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ChatMessage chatChannel.
     * @member {ChatChannel} chatChannel
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.chatChannel=0;/**
     * ChatMessage fromId.
     * @member {number} fromId
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.fromId=0;/**
     * ChatMessage fromName.
     * @member {string} fromName
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.fromName="";/**
     * ChatMessage fromLevel.
     * @member {number} fromLevel
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.fromLevel=0;/**
     * ChatMessage fromCCharacterId.
     * @member {number} fromCCharacterId
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.fromCCharacterId=0;/**
     * ChatMessage toId.
     * @member {number} toId
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.toId=0;/**
     * ChatMessage toName.
     * @member {string} toName
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.toName="";/**
     * ChatMessage toLevel.
     * @member {number} toLevel
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.toLevel=0;/**
     * ChatMessage toCCharacterId.
     * @member {number} toCCharacterId
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.toCCharacterId=0;/**
     * ChatMessage msg.
     * @member {string} msg
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.msg="";/**
     * ChatMessage time.
     * @member {number|Long} time
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.time=$util.Long?$util.Long.fromBits(0,0,false):0;/**
     * ChatMessage chatRoomType.
     * @member {ChatRoomType} chatRoomType
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.chatRoomType=0;/**
     * ChatMessage enterLiveUserId.
     * @member {number} enterLiveUserId
     * @memberof ChatMessage
     * @instance
     */ChatMessage.prototype.enterLiveUserId=0;/**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */ChatMessage.create=function create(properties){return new ChatMessage(properties);};/**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatMessage.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.chatChannel!=null&&message.hasOwnProperty("chatChannel"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatChannel);if(message.fromId!=null&&message.hasOwnProperty("fromId"))writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fromId);if(message.fromName!=null&&message.hasOwnProperty("fromName"))writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromName);if(message.fromLevel!=null&&message.hasOwnProperty("fromLevel"))writer.uint32(/* id 4, wireType 0 =*/32).int32(message.fromLevel);if(message.fromCCharacterId!=null&&message.hasOwnProperty("fromCCharacterId"))writer.uint32(/* id 5, wireType 0 =*/40).int32(message.fromCCharacterId);if(message.toId!=null&&message.hasOwnProperty("toId"))writer.uint32(/* id 6, wireType 0 =*/48).int32(message.toId);if(message.toName!=null&&message.hasOwnProperty("toName"))writer.uint32(/* id 7, wireType 2 =*/58).string(message.toName);if(message.toLevel!=null&&message.hasOwnProperty("toLevel"))writer.uint32(/* id 8, wireType 0 =*/64).int32(message.toLevel);if(message.toCCharacterId!=null&&message.hasOwnProperty("toCCharacterId"))writer.uint32(/* id 9, wireType 0 =*/72).int32(message.toCCharacterId);if(message.msg!=null&&message.hasOwnProperty("msg"))writer.uint32(/* id 10, wireType 2 =*/82).string(message.msg);if(message.time!=null&&message.hasOwnProperty("time"))writer.uint32(/* id 11, wireType 0 =*/88).int64(message.time);if(message.chatRoomType!=null&&message.hasOwnProperty("chatRoomType"))writer.uint32(/* id 12, wireType 0 =*/96).int32(message.chatRoomType);if(message.enterLiveUserId!=null&&message.hasOwnProperty("enterLiveUserId"))writer.uint32(/* id 13, wireType 0 =*/104).int32(message.enterLiveUserId);return writer;};/**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatMessage.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatMessage.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ChatMessage();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.chatChannel=reader.int32();break;case 2:message.fromId=reader.int32();break;case 3:message.fromName=reader.string();break;case 4:message.fromLevel=reader.int32();break;case 5:message.fromCCharacterId=reader.int32();break;case 6:message.toId=reader.int32();break;case 7:message.toName=reader.string();break;case 8:message.toLevel=reader.int32();break;case 9:message.toCCharacterId=reader.int32();break;case 10:message.msg=reader.string();break;case 11:message.time=reader.int64();break;case 12:message.chatRoomType=reader.int32();break;case 13:message.enterLiveUserId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatMessage.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ChatMessage.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.chatChannel!=null&&message.hasOwnProperty("chatChannel"))switch(message.chatChannel){default:return"chatChannel: enum value expected";case 0:case 1:case 2:break;}if(message.fromId!=null&&message.hasOwnProperty("fromId"))if(!$util.isInteger(message.fromId))return"fromId: integer expected";if(message.fromName!=null&&message.hasOwnProperty("fromName"))if(!$util.isString(message.fromName))return"fromName: string expected";if(message.fromLevel!=null&&message.hasOwnProperty("fromLevel"))if(!$util.isInteger(message.fromLevel))return"fromLevel: integer expected";if(message.fromCCharacterId!=null&&message.hasOwnProperty("fromCCharacterId"))if(!$util.isInteger(message.fromCCharacterId))return"fromCCharacterId: integer expected";if(message.toId!=null&&message.hasOwnProperty("toId"))if(!$util.isInteger(message.toId))return"toId: integer expected";if(message.toName!=null&&message.hasOwnProperty("toName"))if(!$util.isString(message.toName))return"toName: string expected";if(message.toLevel!=null&&message.hasOwnProperty("toLevel"))if(!$util.isInteger(message.toLevel))return"toLevel: integer expected";if(message.toCCharacterId!=null&&message.hasOwnProperty("toCCharacterId"))if(!$util.isInteger(message.toCCharacterId))return"toCCharacterId: integer expected";if(message.msg!=null&&message.hasOwnProperty("msg"))if(!$util.isString(message.msg))return"msg: string expected";if(message.time!=null&&message.hasOwnProperty("time"))if(!$util.isInteger(message.time)&&!(message.time&&$util.isInteger(message.time.low)&&$util.isInteger(message.time.high)))return"time: integer|Long expected";if(message.chatRoomType!=null&&message.hasOwnProperty("chatRoomType"))switch(message.chatRoomType){default:return"chatRoomType: enum value expected";case 0:case 1:case 2:break;}if(message.enterLiveUserId!=null&&message.hasOwnProperty("enterLiveUserId"))if(!$util.isInteger(message.enterLiveUserId))return"enterLiveUserId: integer expected";return null;};/**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */ChatMessage.fromObject=function fromObject(object){if(object instanceof $root.ChatMessage)return object;var message=new $root.ChatMessage();switch(object.chatChannel){case"Comp":case 0:message.chatChannel=0;break;case"Private":case 1:message.chatChannel=1;break;case"RoomChat":case 2:message.chatChannel=2;break;}if(object.fromId!=null)message.fromId=object.fromId|0;if(object.fromName!=null)message.fromName=String(object.fromName);if(object.fromLevel!=null)message.fromLevel=object.fromLevel|0;if(object.fromCCharacterId!=null)message.fromCCharacterId=object.fromCCharacterId|0;if(object.toId!=null)message.toId=object.toId|0;if(object.toName!=null)message.toName=String(object.toName);if(object.toLevel!=null)message.toLevel=object.toLevel|0;if(object.toCCharacterId!=null)message.toCCharacterId=object.toCCharacterId|0;if(object.msg!=null)message.msg=String(object.msg);if(object.time!=null)if($util.Long)(message.time=$util.Long.fromValue(object.time)).unsigned=false;else if(typeof object.time==="string")message.time=parseInt(object.time,10);else if(typeof object.time==="number")message.time=object.time;else if(typeof object.time==="object")message.time=new $util.LongBits(object.time.low>>>0,object.time.high>>>0).toNumber();switch(object.chatRoomType){case"Room_":case 0:message.chatRoomType=0;break;case"Game_":case 1:message.chatRoomType=1;break;case"Live_":case 2:message.chatRoomType=2;break;}if(object.enterLiveUserId!=null)message.enterLiveUserId=object.enterLiveUserId|0;return message;};/**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ChatMessage.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.chatChannel=options.enums===String?"Comp":0;object.fromId=0;object.fromName="";object.fromLevel=0;object.fromCCharacterId=0;object.toId=0;object.toName="";object.toLevel=0;object.toCCharacterId=0;object.msg="";if($util.Long){var long=new $util.Long(0,0,false);object.time=options.longs===String?long.toString():options.longs===Number?long.toNumber():long;}else object.time=options.longs===String?"0":0;object.chatRoomType=options.enums===String?"Room_":0;object.enterLiveUserId=0;}if(message.chatChannel!=null&&message.hasOwnProperty("chatChannel"))object.chatChannel=options.enums===String?$root.ChatChannel[message.chatChannel]:message.chatChannel;if(message.fromId!=null&&message.hasOwnProperty("fromId"))object.fromId=message.fromId;if(message.fromName!=null&&message.hasOwnProperty("fromName"))object.fromName=message.fromName;if(message.fromLevel!=null&&message.hasOwnProperty("fromLevel"))object.fromLevel=message.fromLevel;if(message.fromCCharacterId!=null&&message.hasOwnProperty("fromCCharacterId"))object.fromCCharacterId=message.fromCCharacterId;if(message.toId!=null&&message.hasOwnProperty("toId"))object.toId=message.toId;if(message.toName!=null&&message.hasOwnProperty("toName"))object.toName=message.toName;if(message.toLevel!=null&&message.hasOwnProperty("toLevel"))object.toLevel=message.toLevel;if(message.toCCharacterId!=null&&message.hasOwnProperty("toCCharacterId"))object.toCCharacterId=message.toCCharacterId;if(message.msg!=null&&message.hasOwnProperty("msg"))object.msg=message.msg;if(message.time!=null&&message.hasOwnProperty("time"))if(typeof message.time==="number")object.time=options.longs===String?String(message.time):message.time;else object.time=options.longs===String?$util.Long.prototype.toString.call(message.time):options.longs===Number?new $util.LongBits(message.time.low>>>0,message.time.high>>>0).toNumber():message.time;if(message.chatRoomType!=null&&message.hasOwnProperty("chatRoomType"))object.chatRoomType=options.enums===String?$root.ChatRoomType[message.chatRoomType]:message.chatRoomType;if(message.enterLiveUserId!=null&&message.hasOwnProperty("enterLiveUserId"))object.enterLiveUserId=message.enterLiveUserId;return object;};/**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ChatMessage.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ChatMessage;}();/**
 * ChatRoomType enum.
 * @exports ChatRoomType
 * @enum {string}
 * @property {number} Room_=0 Room_ value
 * @property {number} Game_=1 Game_ value
 * @property {number} Live_=2 Live_ value
 */$root.ChatRoomType=function(){var valuesById={},values=Object.create(valuesById);values[valuesById[0]="Room_"]=0;values[valuesById[1]="Game_"]=1;values[valuesById[2]="Live_"]=2;return values;}();$root.ChatRequest=function(){/**
     * Properties of a ChatRequest.
     * @exports IChatRequest
     * @interface IChatRequest
     * @property {IChatMessage|null} [chatMessage] ChatRequest chatMessage
     */ /**
     * Constructs a new ChatRequest.
     * @exports ChatRequest
     * @classdesc Represents a ChatRequest.
     * @implements IChatRequest
     * @constructor
     * @param {IChatRequest=} [properties] Properties to set
     */function ChatRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ChatRequest chatMessage.
     * @member {IChatMessage|null|undefined} chatMessage
     * @memberof ChatRequest
     * @instance
     */ChatRequest.prototype.chatMessage=null;/**
     * Creates a new ChatRequest instance using the specified properties.
     * @function create
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest=} [properties] Properties to set
     * @returns {ChatRequest} ChatRequest instance
     */ChatRequest.create=function create(properties){return new ChatRequest(properties);};/**
     * Encodes the specified ChatRequest message. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @function encode
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest} message ChatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.chatMessage!=null&&message.hasOwnProperty("chatMessage"))$root.ChatMessage.encode(message.chatMessage,writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();return writer;};/**
     * Encodes the specified ChatRequest message, length delimited. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatRequest
     * @static
     * @param {IChatRequest} message ChatRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a ChatRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ChatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatRequest} ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ChatRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.chatMessage=$root.ChatMessage.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a ChatRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatRequest} ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a ChatRequest message.
     * @function verify
     * @memberof ChatRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ChatRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.chatMessage!=null&&message.hasOwnProperty("chatMessage")){var error=$root.ChatMessage.verify(message.chatMessage);if(error)return"chatMessage."+error;}return null;};/**
     * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatRequest} ChatRequest
     */ChatRequest.fromObject=function fromObject(object){if(object instanceof $root.ChatRequest)return object;var message=new $root.ChatRequest();if(object.chatMessage!=null){if(typeof object.chatMessage!=="object")throw TypeError(".ChatRequest.chatMessage: object expected");message.chatMessage=$root.ChatMessage.fromObject(object.chatMessage);}return message;};/**
     * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatRequest
     * @static
     * @param {ChatRequest} message ChatRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ChatRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.chatMessage=null;if(message.chatMessage!=null&&message.hasOwnProperty("chatMessage"))object.chatMessage=$root.ChatMessage.toObject(message.chatMessage,options);return object;};/**
     * Converts this ChatRequest to JSON.
     * @function toJSON
     * @memberof ChatRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ChatRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ChatRequest;}();$root.ChatResponse=function(){/**
     * Properties of a ChatResponse.
     * @exports IChatResponse
     * @interface IChatResponse
     * @property {Result|null} [result] ChatResponse result
     * @property {string|null} [errormsg] ChatResponse errormsg
     * @property {Array.<IChatMessage>|null} [compMessages] ChatResponse compMessages
     * @property {Array.<IChatMessage>|null} [privateMessages] ChatResponse privateMessages
     * @property {Array.<IChatMessage>|null} [roomMessages] ChatResponse roomMessages
     */ /**
     * Constructs a new ChatResponse.
     * @exports ChatResponse
     * @classdesc Represents a ChatResponse.
     * @implements IChatResponse
     * @constructor
     * @param {IChatResponse=} [properties] Properties to set
     */function ChatResponse(properties){this.compMessages=[];this.privateMessages=[];this.roomMessages=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ChatResponse result.
     * @member {Result} result
     * @memberof ChatResponse
     * @instance
     */ChatResponse.prototype.result=0;/**
     * ChatResponse errormsg.
     * @member {string} errormsg
     * @memberof ChatResponse
     * @instance
     */ChatResponse.prototype.errormsg="";/**
     * ChatResponse compMessages.
     * @member {Array.<IChatMessage>} compMessages
     * @memberof ChatResponse
     * @instance
     */ChatResponse.prototype.compMessages=$util.emptyArray;/**
     * ChatResponse privateMessages.
     * @member {Array.<IChatMessage>} privateMessages
     * @memberof ChatResponse
     * @instance
     */ChatResponse.prototype.privateMessages=$util.emptyArray;/**
     * ChatResponse roomMessages.
     * @member {Array.<IChatMessage>} roomMessages
     * @memberof ChatResponse
     * @instance
     */ChatResponse.prototype.roomMessages=$util.emptyArray;/**
     * Creates a new ChatResponse instance using the specified properties.
     * @function create
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse=} [properties] Properties to set
     * @returns {ChatResponse} ChatResponse instance
     */ChatResponse.create=function create(properties){return new ChatResponse(properties);};/**
     * Encodes the specified ChatResponse message. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @function encode
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse} message ChatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.compMessages!=null&&message.compMessages.length)for(var i=0;i<message.compMessages.length;++i){$root.ChatMessage.encode(message.compMessages[i],writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();}if(message.privateMessages!=null&&message.privateMessages.length)for(var i=0;i<message.privateMessages.length;++i){$root.ChatMessage.encode(message.privateMessages[i],writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();}if(message.roomMessages!=null&&message.roomMessages.length)for(var i=0;i<message.roomMessages.length;++i){$root.ChatMessage.encode(message.roomMessages[i],writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();}return writer;};/**
     * Encodes the specified ChatResponse message, length delimited. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatResponse
     * @static
     * @param {IChatResponse} message ChatResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ChatResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a ChatResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ChatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatResponse} ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ChatResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:if(!(message.compMessages&&message.compMessages.length))message.compMessages=[];message.compMessages.push($root.ChatMessage.decode(reader,reader.uint32()));break;case 4:if(!(message.privateMessages&&message.privateMessages.length))message.privateMessages=[];message.privateMessages.push($root.ChatMessage.decode(reader,reader.uint32()));break;case 5:if(!(message.roomMessages&&message.roomMessages.length))message.roomMessages=[];message.roomMessages.push($root.ChatMessage.decode(reader,reader.uint32()));break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a ChatResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatResponse} ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ChatResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a ChatResponse message.
     * @function verify
     * @memberof ChatResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ChatResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.compMessages!=null&&message.hasOwnProperty("compMessages")){if(!Array.isArray(message.compMessages))return"compMessages: array expected";for(var i=0;i<message.compMessages.length;++i){var error=$root.ChatMessage.verify(message.compMessages[i]);if(error)return"compMessages."+error;}}if(message.privateMessages!=null&&message.hasOwnProperty("privateMessages")){if(!Array.isArray(message.privateMessages))return"privateMessages: array expected";for(var i=0;i<message.privateMessages.length;++i){var error=$root.ChatMessage.verify(message.privateMessages[i]);if(error)return"privateMessages."+error;}}if(message.roomMessages!=null&&message.hasOwnProperty("roomMessages")){if(!Array.isArray(message.roomMessages))return"roomMessages: array expected";for(var i=0;i<message.roomMessages.length;++i){var error=$root.ChatMessage.verify(message.roomMessages[i]);if(error)return"roomMessages."+error;}}return null;};/**
     * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatResponse} ChatResponse
     */ChatResponse.fromObject=function fromObject(object){if(object instanceof $root.ChatResponse)return object;var message=new $root.ChatResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.compMessages){if(!Array.isArray(object.compMessages))throw TypeError(".ChatResponse.compMessages: array expected");message.compMessages=[];for(var i=0;i<object.compMessages.length;++i){if(typeof object.compMessages[i]!=="object")throw TypeError(".ChatResponse.compMessages: object expected");message.compMessages[i]=$root.ChatMessage.fromObject(object.compMessages[i]);}}if(object.privateMessages){if(!Array.isArray(object.privateMessages))throw TypeError(".ChatResponse.privateMessages: array expected");message.privateMessages=[];for(var i=0;i<object.privateMessages.length;++i){if(typeof object.privateMessages[i]!=="object")throw TypeError(".ChatResponse.privateMessages: object expected");message.privateMessages[i]=$root.ChatMessage.fromObject(object.privateMessages[i]);}}if(object.roomMessages){if(!Array.isArray(object.roomMessages))throw TypeError(".ChatResponse.roomMessages: array expected");message.roomMessages=[];for(var i=0;i<object.roomMessages.length;++i){if(typeof object.roomMessages[i]!=="object")throw TypeError(".ChatResponse.roomMessages: object expected");message.roomMessages[i]=$root.ChatMessage.fromObject(object.roomMessages[i]);}}return message;};/**
     * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatResponse
     * @static
     * @param {ChatResponse} message ChatResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ChatResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults){object.compMessages=[];object.privateMessages=[];object.roomMessages=[];}if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.compMessages&&message.compMessages.length){object.compMessages=[];for(var j=0;j<message.compMessages.length;++j){object.compMessages[j]=$root.ChatMessage.toObject(message.compMessages[j],options);}}if(message.privateMessages&&message.privateMessages.length){object.privateMessages=[];for(var j=0;j<message.privateMessages.length;++j){object.privateMessages[j]=$root.ChatMessage.toObject(message.privateMessages[j],options);}}if(message.roomMessages&&message.roomMessages.length){object.roomMessages=[];for(var j=0;j<message.roomMessages.length;++j){object.roomMessages[j]=$root.ChatMessage.toObject(message.roomMessages[j],options);}}return object;};/**
     * Converts this ChatResponse to JSON.
     * @function toJSON
     * @memberof ChatResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ChatResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ChatResponse;}();$root.UserStatusQueryRequest=function(){/**
     * Properties of a UserStatusQueryRequest.
     * @exports IUserStatusQueryRequest
     * @interface IUserStatusQueryRequest
     * @property {Array.<number>|null} [userIds] UserStatusQueryRequest userIds
     */ /**
     * Constructs a new UserStatusQueryRequest.
     * @exports UserStatusQueryRequest
     * @classdesc Represents a UserStatusQueryRequest.
     * @implements IUserStatusQueryRequest
     * @constructor
     * @param {IUserStatusQueryRequest=} [properties] Properties to set
     */function UserStatusQueryRequest(properties){this.userIds=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserStatusQueryRequest userIds.
     * @member {Array.<number>} userIds
     * @memberof UserStatusQueryRequest
     * @instance
     */UserStatusQueryRequest.prototype.userIds=$util.emptyArray;/**
     * Creates a new UserStatusQueryRequest instance using the specified properties.
     * @function create
     * @memberof UserStatusQueryRequest
     * @static
     * @param {IUserStatusQueryRequest=} [properties] Properties to set
     * @returns {UserStatusQueryRequest} UserStatusQueryRequest instance
     */UserStatusQueryRequest.create=function create(properties){return new UserStatusQueryRequest(properties);};/**
     * Encodes the specified UserStatusQueryRequest message. Does not implicitly {@link UserStatusQueryRequest.verify|verify} messages.
     * @function encode
     * @memberof UserStatusQueryRequest
     * @static
     * @param {IUserStatusQueryRequest} message UserStatusQueryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusQueryRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userIds!=null&&message.userIds.length){writer.uint32(/* id 1, wireType 2 =*/10).fork();for(var i=0;i<message.userIds.length;++i){writer.int32(message.userIds[i]);}writer.ldelim();}return writer;};/**
     * Encodes the specified UserStatusQueryRequest message, length delimited. Does not implicitly {@link UserStatusQueryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserStatusQueryRequest
     * @static
     * @param {IUserStatusQueryRequest} message UserStatusQueryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusQueryRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserStatusQueryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserStatusQueryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserStatusQueryRequest} UserStatusQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusQueryRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserStatusQueryRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.userIds&&message.userIds.length))message.userIds=[];if((tag&7)===2){var end2=reader.uint32()+reader.pos;while(reader.pos<end2){message.userIds.push(reader.int32());}}else message.userIds.push(reader.int32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserStatusQueryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserStatusQueryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserStatusQueryRequest} UserStatusQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusQueryRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserStatusQueryRequest message.
     * @function verify
     * @memberof UserStatusQueryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserStatusQueryRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userIds!=null&&message.hasOwnProperty("userIds")){if(!Array.isArray(message.userIds))return"userIds: array expected";for(var i=0;i<message.userIds.length;++i){if(!$util.isInteger(message.userIds[i]))return"userIds: integer[] expected";}}return null;};/**
     * Creates a UserStatusQueryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserStatusQueryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserStatusQueryRequest} UserStatusQueryRequest
     */UserStatusQueryRequest.fromObject=function fromObject(object){if(object instanceof $root.UserStatusQueryRequest)return object;var message=new $root.UserStatusQueryRequest();if(object.userIds){if(!Array.isArray(object.userIds))throw TypeError(".UserStatusQueryRequest.userIds: array expected");message.userIds=[];for(var i=0;i<object.userIds.length;++i){message.userIds[i]=object.userIds[i]|0;}}return message;};/**
     * Creates a plain object from a UserStatusQueryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserStatusQueryRequest
     * @static
     * @param {UserStatusQueryRequest} message UserStatusQueryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserStatusQueryRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.userIds=[];if(message.userIds&&message.userIds.length){object.userIds=[];for(var j=0;j<message.userIds.length;++j){object.userIds[j]=message.userIds[j];}}return object;};/**
     * Converts this UserStatusQueryRequest to JSON.
     * @function toJSON
     * @memberof UserStatusQueryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserStatusQueryRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserStatusQueryRequest;}();$root.UserStatusQueryResponse=function(){/**
     * Properties of a UserStatusQueryResponse.
     * @exports IUserStatusQueryResponse
     * @interface IUserStatusQueryResponse
     * @property {Array.<boolean>|null} [status] UserStatusQueryResponse status
     */ /**
     * Constructs a new UserStatusQueryResponse.
     * @exports UserStatusQueryResponse
     * @classdesc Represents a UserStatusQueryResponse.
     * @implements IUserStatusQueryResponse
     * @constructor
     * @param {IUserStatusQueryResponse=} [properties] Properties to set
     */function UserStatusQueryResponse(properties){this.status=[];if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UserStatusQueryResponse status.
     * @member {Array.<boolean>} status
     * @memberof UserStatusQueryResponse
     * @instance
     */UserStatusQueryResponse.prototype.status=$util.emptyArray;/**
     * Creates a new UserStatusQueryResponse instance using the specified properties.
     * @function create
     * @memberof UserStatusQueryResponse
     * @static
     * @param {IUserStatusQueryResponse=} [properties] Properties to set
     * @returns {UserStatusQueryResponse} UserStatusQueryResponse instance
     */UserStatusQueryResponse.create=function create(properties){return new UserStatusQueryResponse(properties);};/**
     * Encodes the specified UserStatusQueryResponse message. Does not implicitly {@link UserStatusQueryResponse.verify|verify} messages.
     * @function encode
     * @memberof UserStatusQueryResponse
     * @static
     * @param {IUserStatusQueryResponse} message UserStatusQueryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusQueryResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.status!=null&&message.status.length){writer.uint32(/* id 1, wireType 2 =*/10).fork();for(var i=0;i<message.status.length;++i){writer.bool(message.status[i]);}writer.ldelim();}return writer;};/**
     * Encodes the specified UserStatusQueryResponse message, length delimited. Does not implicitly {@link UserStatusQueryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserStatusQueryResponse
     * @static
     * @param {IUserStatusQueryResponse} message UserStatusQueryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UserStatusQueryResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a UserStatusQueryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof UserStatusQueryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserStatusQueryResponse} UserStatusQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusQueryResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UserStatusQueryResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:if(!(message.status&&message.status.length))message.status=[];if((tag&7)===2){var end2=reader.uint32()+reader.pos;while(reader.pos<end2){message.status.push(reader.bool());}}else message.status.push(reader.bool());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a UserStatusQueryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserStatusQueryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserStatusQueryResponse} UserStatusQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UserStatusQueryResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a UserStatusQueryResponse message.
     * @function verify
     * @memberof UserStatusQueryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UserStatusQueryResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.status!=null&&message.hasOwnProperty("status")){if(!Array.isArray(message.status))return"status: array expected";for(var i=0;i<message.status.length;++i){if(typeof message.status[i]!=="boolean")return"status: boolean[] expected";}}return null;};/**
     * Creates a UserStatusQueryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserStatusQueryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserStatusQueryResponse} UserStatusQueryResponse
     */UserStatusQueryResponse.fromObject=function fromObject(object){if(object instanceof $root.UserStatusQueryResponse)return object;var message=new $root.UserStatusQueryResponse();if(object.status){if(!Array.isArray(object.status))throw TypeError(".UserStatusQueryResponse.status: array expected");message.status=[];for(var i=0;i<object.status.length;++i){message.status[i]=Boolean(object.status[i]);}}return message;};/**
     * Creates a plain object from a UserStatusQueryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserStatusQueryResponse
     * @static
     * @param {UserStatusQueryResponse} message UserStatusQueryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UserStatusQueryResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.arrays||options.defaults)object.status=[];if(message.status&&message.status.length){object.status=[];for(var j=0;j<message.status.length;++j){object.status[j]=message.status[j];}}return object;};/**
     * Converts this UserStatusQueryResponse to JSON.
     * @function toJSON
     * @memberof UserStatusQueryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UserStatusQueryResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UserStatusQueryResponse;}();$root.StartMatchRequest=function(){/**
     * Properties of a StartMatchRequest.
     * @exports IStartMatchRequest
     * @interface IStartMatchRequest
     */ /**
     * Constructs a new StartMatchRequest.
     * @exports StartMatchRequest
     * @classdesc Represents a StartMatchRequest.
     * @implements IStartMatchRequest
     * @constructor
     * @param {IStartMatchRequest=} [properties] Properties to set
     */function StartMatchRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new StartMatchRequest instance using the specified properties.
     * @function create
     * @memberof StartMatchRequest
     * @static
     * @param {IStartMatchRequest=} [properties] Properties to set
     * @returns {StartMatchRequest} StartMatchRequest instance
     */StartMatchRequest.create=function create(properties){return new StartMatchRequest(properties);};/**
     * Encodes the specified StartMatchRequest message. Does not implicitly {@link StartMatchRequest.verify|verify} messages.
     * @function encode
     * @memberof StartMatchRequest
     * @static
     * @param {IStartMatchRequest} message StartMatchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StartMatchRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified StartMatchRequest message, length delimited. Does not implicitly {@link StartMatchRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartMatchRequest
     * @static
     * @param {IStartMatchRequest} message StartMatchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StartMatchRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a StartMatchRequest message from the specified reader or buffer.
     * @function decode
     * @memberof StartMatchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartMatchRequest} StartMatchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StartMatchRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.StartMatchRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a StartMatchRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartMatchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartMatchRequest} StartMatchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StartMatchRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a StartMatchRequest message.
     * @function verify
     * @memberof StartMatchRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */StartMatchRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a StartMatchRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartMatchRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartMatchRequest} StartMatchRequest
     */StartMatchRequest.fromObject=function fromObject(object){if(object instanceof $root.StartMatchRequest)return object;return new $root.StartMatchRequest();};/**
     * Creates a plain object from a StartMatchRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartMatchRequest
     * @static
     * @param {StartMatchRequest} message StartMatchRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */StartMatchRequest.toObject=function toObject(){return{};};/**
     * Converts this StartMatchRequest to JSON.
     * @function toJSON
     * @memberof StartMatchRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */StartMatchRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return StartMatchRequest;}();$root.StartMatchResponse=function(){/**
     * Properties of a StartMatchResponse.
     * @exports IStartMatchResponse
     * @interface IStartMatchResponse
     * @property {Result|null} [result] StartMatchResponse result
     * @property {string|null} [errormsg] StartMatchResponse errormsg
     */ /**
     * Constructs a new StartMatchResponse.
     * @exports StartMatchResponse
     * @classdesc Represents a StartMatchResponse.
     * @implements IStartMatchResponse
     * @constructor
     * @param {IStartMatchResponse=} [properties] Properties to set
     */function StartMatchResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * StartMatchResponse result.
     * @member {Result} result
     * @memberof StartMatchResponse
     * @instance
     */StartMatchResponse.prototype.result=0;/**
     * StartMatchResponse errormsg.
     * @member {string} errormsg
     * @memberof StartMatchResponse
     * @instance
     */StartMatchResponse.prototype.errormsg="";/**
     * Creates a new StartMatchResponse instance using the specified properties.
     * @function create
     * @memberof StartMatchResponse
     * @static
     * @param {IStartMatchResponse=} [properties] Properties to set
     * @returns {StartMatchResponse} StartMatchResponse instance
     */StartMatchResponse.create=function create(properties){return new StartMatchResponse(properties);};/**
     * Encodes the specified StartMatchResponse message. Does not implicitly {@link StartMatchResponse.verify|verify} messages.
     * @function encode
     * @memberof StartMatchResponse
     * @static
     * @param {IStartMatchResponse} message StartMatchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StartMatchResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified StartMatchResponse message, length delimited. Does not implicitly {@link StartMatchResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartMatchResponse
     * @static
     * @param {IStartMatchResponse} message StartMatchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */StartMatchResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a StartMatchResponse message from the specified reader or buffer.
     * @function decode
     * @memberof StartMatchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartMatchResponse} StartMatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StartMatchResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.StartMatchResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a StartMatchResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartMatchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartMatchResponse} StartMatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */StartMatchResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a StartMatchResponse message.
     * @function verify
     * @memberof StartMatchResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */StartMatchResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a StartMatchResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartMatchResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartMatchResponse} StartMatchResponse
     */StartMatchResponse.fromObject=function fromObject(object){if(object instanceof $root.StartMatchResponse)return object;var message=new $root.StartMatchResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a StartMatchResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartMatchResponse
     * @static
     * @param {StartMatchResponse} message StartMatchResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */StartMatchResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this StartMatchResponse to JSON.
     * @function toJSON
     * @memberof StartMatchResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */StartMatchResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return StartMatchResponse;}();$root.MatchResponse=function(){/**
     * Properties of a MatchResponse.
     * @exports IMatchResponse
     * @interface IMatchResponse
     * @property {Result|null} [result] MatchResponse result
     * @property {string|null} [errormsg] MatchResponse errormsg
     * @property {INRoom|null} [room] MatchResponse room
     */ /**
     * Constructs a new MatchResponse.
     * @exports MatchResponse
     * @classdesc Represents a MatchResponse.
     * @implements IMatchResponse
     * @constructor
     * @param {IMatchResponse=} [properties] Properties to set
     */function MatchResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * MatchResponse result.
     * @member {Result} result
     * @memberof MatchResponse
     * @instance
     */MatchResponse.prototype.result=0;/**
     * MatchResponse errormsg.
     * @member {string} errormsg
     * @memberof MatchResponse
     * @instance
     */MatchResponse.prototype.errormsg="";/**
     * MatchResponse room.
     * @member {INRoom|null|undefined} room
     * @memberof MatchResponse
     * @instance
     */MatchResponse.prototype.room=null;/**
     * Creates a new MatchResponse instance using the specified properties.
     * @function create
     * @memberof MatchResponse
     * @static
     * @param {IMatchResponse=} [properties] Properties to set
     * @returns {MatchResponse} MatchResponse instance
     */MatchResponse.create=function create(properties){return new MatchResponse(properties);};/**
     * Encodes the specified MatchResponse message. Does not implicitly {@link MatchResponse.verify|verify} messages.
     * @function encode
     * @memberof MatchResponse
     * @static
     * @param {IMatchResponse} message MatchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MatchResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.room!=null&&message.hasOwnProperty("room"))$root.NRoom.encode(message.room,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified MatchResponse message, length delimited. Does not implicitly {@link MatchResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MatchResponse
     * @static
     * @param {IMatchResponse} message MatchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */MatchResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a MatchResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MatchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MatchResponse} MatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MatchResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.MatchResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.room=$root.NRoom.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a MatchResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MatchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MatchResponse} MatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */MatchResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a MatchResponse message.
     * @function verify
     * @memberof MatchResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */MatchResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.room!=null&&message.hasOwnProperty("room")){var error=$root.NRoom.verify(message.room);if(error)return"room."+error;}return null;};/**
     * Creates a MatchResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MatchResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MatchResponse} MatchResponse
     */MatchResponse.fromObject=function fromObject(object){if(object instanceof $root.MatchResponse)return object;var message=new $root.MatchResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.room!=null){if(typeof object.room!=="object")throw TypeError(".MatchResponse.room: object expected");message.room=$root.NRoom.fromObject(object.room);}return message;};/**
     * Creates a plain object from a MatchResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MatchResponse
     * @static
     * @param {MatchResponse} message MatchResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */MatchResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.room=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.room!=null&&message.hasOwnProperty("room"))object.room=$root.NRoom.toObject(message.room,options);return object;};/**
     * Converts this MatchResponse to JSON.
     * @function toJSON
     * @memberof MatchResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */MatchResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return MatchResponse;}();$root.GameOver2Request=function(){/**
     * Properties of a GameOver2Request.
     * @exports IGameOver2Request
     * @interface IGameOver2Request
     * @property {string|null} [ipPortStr] GameOver2Request ipPortStr
     */ /**
     * Constructs a new GameOver2Request.
     * @exports GameOver2Request
     * @classdesc Represents a GameOver2Request.
     * @implements IGameOver2Request
     * @constructor
     * @param {IGameOver2Request=} [properties] Properties to set
     */function GameOver2Request(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * GameOver2Request ipPortStr.
     * @member {string} ipPortStr
     * @memberof GameOver2Request
     * @instance
     */GameOver2Request.prototype.ipPortStr="";/**
     * Creates a new GameOver2Request instance using the specified properties.
     * @function create
     * @memberof GameOver2Request
     * @static
     * @param {IGameOver2Request=} [properties] Properties to set
     * @returns {GameOver2Request} GameOver2Request instance
     */GameOver2Request.create=function create(properties){return new GameOver2Request(properties);};/**
     * Encodes the specified GameOver2Request message. Does not implicitly {@link GameOver2Request.verify|verify} messages.
     * @function encode
     * @memberof GameOver2Request
     * @static
     * @param {IGameOver2Request} message GameOver2Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GameOver2Request.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.ipPortStr);return writer;};/**
     * Encodes the specified GameOver2Request message, length delimited. Does not implicitly {@link GameOver2Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameOver2Request
     * @static
     * @param {IGameOver2Request} message GameOver2Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */GameOver2Request.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a GameOver2Request message from the specified reader or buffer.
     * @function decode
     * @memberof GameOver2Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameOver2Request} GameOver2Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GameOver2Request.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.GameOver2Request();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.ipPortStr=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a GameOver2Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameOver2Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameOver2Request} GameOver2Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */GameOver2Request.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a GameOver2Request message.
     * @function verify
     * @memberof GameOver2Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */GameOver2Request.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))if(!$util.isString(message.ipPortStr))return"ipPortStr: string expected";return null;};/**
     * Creates a GameOver2Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameOver2Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameOver2Request} GameOver2Request
     */GameOver2Request.fromObject=function fromObject(object){if(object instanceof $root.GameOver2Request)return object;var message=new $root.GameOver2Request();if(object.ipPortStr!=null)message.ipPortStr=String(object.ipPortStr);return message;};/**
     * Creates a plain object from a GameOver2Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameOver2Request
     * @static
     * @param {GameOver2Request} message GameOver2Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */GameOver2Request.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.ipPortStr="";if(message.ipPortStr!=null&&message.hasOwnProperty("ipPortStr"))object.ipPortStr=message.ipPortStr;return object;};/**
     * Converts this GameOver2Request to JSON.
     * @function toJSON
     * @memberof GameOver2Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */GameOver2Request.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return GameOver2Request;}();$root.AddLiveRequest=function(){/**
     * Properties of an AddLiveRequest.
     * @exports IAddLiveRequest
     * @interface IAddLiveRequest
     * @property {number|null} [userId] AddLiveRequest userId
     */ /**
     * Constructs a new AddLiveRequest.
     * @exports AddLiveRequest
     * @classdesc Represents an AddLiveRequest.
     * @implements IAddLiveRequest
     * @constructor
     * @param {IAddLiveRequest=} [properties] Properties to set
     */function AddLiveRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AddLiveRequest userId.
     * @member {number} userId
     * @memberof AddLiveRequest
     * @instance
     */AddLiveRequest.prototype.userId=0;/**
     * Creates a new AddLiveRequest instance using the specified properties.
     * @function create
     * @memberof AddLiveRequest
     * @static
     * @param {IAddLiveRequest=} [properties] Properties to set
     * @returns {AddLiveRequest} AddLiveRequest instance
     */AddLiveRequest.create=function create(properties){return new AddLiveRequest(properties);};/**
     * Encodes the specified AddLiveRequest message. Does not implicitly {@link AddLiveRequest.verify|verify} messages.
     * @function encode
     * @memberof AddLiveRequest
     * @static
     * @param {IAddLiveRequest} message AddLiveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddLiveRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.userId!=null&&message.hasOwnProperty("userId"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);return writer;};/**
     * Encodes the specified AddLiveRequest message, length delimited. Does not implicitly {@link AddLiveRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddLiveRequest
     * @static
     * @param {IAddLiveRequest} message AddLiveRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddLiveRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AddLiveRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AddLiveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddLiveRequest} AddLiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddLiveRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AddLiveRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.userId=reader.int32();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AddLiveRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddLiveRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddLiveRequest} AddLiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddLiveRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AddLiveRequest message.
     * @function verify
     * @memberof AddLiveRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AddLiveRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.userId!=null&&message.hasOwnProperty("userId"))if(!$util.isInteger(message.userId))return"userId: integer expected";return null;};/**
     * Creates an AddLiveRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddLiveRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddLiveRequest} AddLiveRequest
     */AddLiveRequest.fromObject=function fromObject(object){if(object instanceof $root.AddLiveRequest)return object;var message=new $root.AddLiveRequest();if(object.userId!=null)message.userId=object.userId|0;return message;};/**
     * Creates a plain object from an AddLiveRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddLiveRequest
     * @static
     * @param {AddLiveRequest} message AddLiveRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AddLiveRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.userId=0;if(message.userId!=null&&message.hasOwnProperty("userId"))object.userId=message.userId;return object;};/**
     * Converts this AddLiveRequest to JSON.
     * @function toJSON
     * @memberof AddLiveRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AddLiveRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AddLiveRequest;}();$root.AddLiveResponse=function(){/**
     * Properties of an AddLiveResponse.
     * @exports IAddLiveResponse
     * @interface IAddLiveResponse
     * @property {Result|null} [result] AddLiveResponse result
     * @property {string|null} [errormsg] AddLiveResponse errormsg
     * @property {INRoom|null} [room] AddLiveResponse room
     */ /**
     * Constructs a new AddLiveResponse.
     * @exports AddLiveResponse
     * @classdesc Represents an AddLiveResponse.
     * @implements IAddLiveResponse
     * @constructor
     * @param {IAddLiveResponse=} [properties] Properties to set
     */function AddLiveResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * AddLiveResponse result.
     * @member {Result} result
     * @memberof AddLiveResponse
     * @instance
     */AddLiveResponse.prototype.result=0;/**
     * AddLiveResponse errormsg.
     * @member {string} errormsg
     * @memberof AddLiveResponse
     * @instance
     */AddLiveResponse.prototype.errormsg="";/**
     * AddLiveResponse room.
     * @member {INRoom|null|undefined} room
     * @memberof AddLiveResponse
     * @instance
     */AddLiveResponse.prototype.room=null;/**
     * Creates a new AddLiveResponse instance using the specified properties.
     * @function create
     * @memberof AddLiveResponse
     * @static
     * @param {IAddLiveResponse=} [properties] Properties to set
     * @returns {AddLiveResponse} AddLiveResponse instance
     */AddLiveResponse.create=function create(properties){return new AddLiveResponse(properties);};/**
     * Encodes the specified AddLiveResponse message. Does not implicitly {@link AddLiveResponse.verify|verify} messages.
     * @function encode
     * @memberof AddLiveResponse
     * @static
     * @param {IAddLiveResponse} message AddLiveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddLiveResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);if(message.room!=null&&message.hasOwnProperty("room"))$root.NRoom.encode(message.room,writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();return writer;};/**
     * Encodes the specified AddLiveResponse message, length delimited. Does not implicitly {@link AddLiveResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AddLiveResponse
     * @static
     * @param {IAddLiveResponse} message AddLiveResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */AddLiveResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an AddLiveResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AddLiveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AddLiveResponse} AddLiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddLiveResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.AddLiveResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;case 3:message.room=$root.NRoom.decode(reader,reader.uint32());break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an AddLiveResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AddLiveResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AddLiveResponse} AddLiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */AddLiveResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an AddLiveResponse message.
     * @function verify
     * @memberof AddLiveResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */AddLiveResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";if(message.room!=null&&message.hasOwnProperty("room")){var error=$root.NRoom.verify(message.room);if(error)return"room."+error;}return null;};/**
     * Creates an AddLiveResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AddLiveResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AddLiveResponse} AddLiveResponse
     */AddLiveResponse.fromObject=function fromObject(object){if(object instanceof $root.AddLiveResponse)return object;var message=new $root.AddLiveResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);if(object.room!=null){if(typeof object.room!=="object")throw TypeError(".AddLiveResponse.room: object expected");message.room=$root.NRoom.fromObject(object.room);}return message;};/**
     * Creates a plain object from an AddLiveResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AddLiveResponse
     * @static
     * @param {AddLiveResponse} message AddLiveResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */AddLiveResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";object.room=null;}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;if(message.room!=null&&message.hasOwnProperty("room"))object.room=$root.NRoom.toObject(message.room,options);return object;};/**
     * Converts this AddLiveResponse to JSON.
     * @function toJSON
     * @memberof AddLiveResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */AddLiveResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return AddLiveResponse;}();$root.UploadBiFenRequest=function(){/**
     * Properties of an UploadBiFenRequest.
     * @exports IUploadBiFenRequest
     * @interface IUploadBiFenRequest
     * @property {string|null} [biFen] UploadBiFenRequest biFen
     */ /**
     * Constructs a new UploadBiFenRequest.
     * @exports UploadBiFenRequest
     * @classdesc Represents an UploadBiFenRequest.
     * @implements IUploadBiFenRequest
     * @constructor
     * @param {IUploadBiFenRequest=} [properties] Properties to set
     */function UploadBiFenRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * UploadBiFenRequest biFen.
     * @member {string} biFen
     * @memberof UploadBiFenRequest
     * @instance
     */UploadBiFenRequest.prototype.biFen="";/**
     * Creates a new UploadBiFenRequest instance using the specified properties.
     * @function create
     * @memberof UploadBiFenRequest
     * @static
     * @param {IUploadBiFenRequest=} [properties] Properties to set
     * @returns {UploadBiFenRequest} UploadBiFenRequest instance
     */UploadBiFenRequest.create=function create(properties){return new UploadBiFenRequest(properties);};/**
     * Encodes the specified UploadBiFenRequest message. Does not implicitly {@link UploadBiFenRequest.verify|verify} messages.
     * @function encode
     * @memberof UploadBiFenRequest
     * @static
     * @param {IUploadBiFenRequest} message UploadBiFenRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UploadBiFenRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.biFen!=null&&message.hasOwnProperty("biFen"))writer.uint32(/* id 1, wireType 2 =*/10).string(message.biFen);return writer;};/**
     * Encodes the specified UploadBiFenRequest message, length delimited. Does not implicitly {@link UploadBiFenRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UploadBiFenRequest
     * @static
     * @param {IUploadBiFenRequest} message UploadBiFenRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */UploadBiFenRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes an UploadBiFenRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UploadBiFenRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UploadBiFenRequest} UploadBiFenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UploadBiFenRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.UploadBiFenRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.biFen=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes an UploadBiFenRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UploadBiFenRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UploadBiFenRequest} UploadBiFenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */UploadBiFenRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies an UploadBiFenRequest message.
     * @function verify
     * @memberof UploadBiFenRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */UploadBiFenRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.biFen!=null&&message.hasOwnProperty("biFen"))if(!$util.isString(message.biFen))return"biFen: string expected";return null;};/**
     * Creates an UploadBiFenRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UploadBiFenRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UploadBiFenRequest} UploadBiFenRequest
     */UploadBiFenRequest.fromObject=function fromObject(object){if(object instanceof $root.UploadBiFenRequest)return object;var message=new $root.UploadBiFenRequest();if(object.biFen!=null)message.biFen=String(object.biFen);return message;};/**
     * Creates a plain object from an UploadBiFenRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UploadBiFenRequest
     * @static
     * @param {UploadBiFenRequest} message UploadBiFenRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */UploadBiFenRequest.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults)object.biFen="";if(message.biFen!=null&&message.hasOwnProperty("biFen"))object.biFen=message.biFen;return object;};/**
     * Converts this UploadBiFenRequest to JSON.
     * @function toJSON
     * @memberof UploadBiFenRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */UploadBiFenRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return UploadBiFenRequest;}();$root.ValidateOpenRoomRequest=function(){/**
     * Properties of a ValidateOpenRoomRequest.
     * @exports IValidateOpenRoomRequest
     * @interface IValidateOpenRoomRequest
     */ /**
     * Constructs a new ValidateOpenRoomRequest.
     * @exports ValidateOpenRoomRequest
     * @classdesc Represents a ValidateOpenRoomRequest.
     * @implements IValidateOpenRoomRequest
     * @constructor
     * @param {IValidateOpenRoomRequest=} [properties] Properties to set
     */function ValidateOpenRoomRequest(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * Creates a new ValidateOpenRoomRequest instance using the specified properties.
     * @function create
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {IValidateOpenRoomRequest=} [properties] Properties to set
     * @returns {ValidateOpenRoomRequest} ValidateOpenRoomRequest instance
     */ValidateOpenRoomRequest.create=function create(properties){return new ValidateOpenRoomRequest(properties);};/**
     * Encodes the specified ValidateOpenRoomRequest message. Does not implicitly {@link ValidateOpenRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {IValidateOpenRoomRequest} message ValidateOpenRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ValidateOpenRoomRequest.encode=function encode(message,writer){if(!writer)writer=$Writer.create();return writer;};/**
     * Encodes the specified ValidateOpenRoomRequest message, length delimited. Does not implicitly {@link ValidateOpenRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {IValidateOpenRoomRequest} message ValidateOpenRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ValidateOpenRoomRequest.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a ValidateOpenRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ValidateOpenRoomRequest} ValidateOpenRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ValidateOpenRoomRequest.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ValidateOpenRoomRequest();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a ValidateOpenRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ValidateOpenRoomRequest} ValidateOpenRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ValidateOpenRoomRequest.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a ValidateOpenRoomRequest message.
     * @function verify
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ValidateOpenRoomRequest.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";return null;};/**
     * Creates a ValidateOpenRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ValidateOpenRoomRequest} ValidateOpenRoomRequest
     */ValidateOpenRoomRequest.fromObject=function fromObject(object){if(object instanceof $root.ValidateOpenRoomRequest)return object;return new $root.ValidateOpenRoomRequest();};/**
     * Creates a plain object from a ValidateOpenRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ValidateOpenRoomRequest
     * @static
     * @param {ValidateOpenRoomRequest} message ValidateOpenRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ValidateOpenRoomRequest.toObject=function toObject(){return{};};/**
     * Converts this ValidateOpenRoomRequest to JSON.
     * @function toJSON
     * @memberof ValidateOpenRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ValidateOpenRoomRequest.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ValidateOpenRoomRequest;}();$root.ValidateOpenRoomResponse=function(){/**
     * Properties of a ValidateOpenRoomResponse.
     * @exports IValidateOpenRoomResponse
     * @interface IValidateOpenRoomResponse
     * @property {Result|null} [result] ValidateOpenRoomResponse result
     * @property {string|null} [errormsg] ValidateOpenRoomResponse errormsg
     */ /**
     * Constructs a new ValidateOpenRoomResponse.
     * @exports ValidateOpenRoomResponse
     * @classdesc Represents a ValidateOpenRoomResponse.
     * @implements IValidateOpenRoomResponse
     * @constructor
     * @param {IValidateOpenRoomResponse=} [properties] Properties to set
     */function ValidateOpenRoomResponse(properties){if(properties)for(var keys=Object.keys(properties),i=0;i<keys.length;++i){if(properties[keys[i]]!=null)this[keys[i]]=properties[keys[i]];}}/**
     * ValidateOpenRoomResponse result.
     * @member {Result} result
     * @memberof ValidateOpenRoomResponse
     * @instance
     */ValidateOpenRoomResponse.prototype.result=0;/**
     * ValidateOpenRoomResponse errormsg.
     * @member {string} errormsg
     * @memberof ValidateOpenRoomResponse
     * @instance
     */ValidateOpenRoomResponse.prototype.errormsg="";/**
     * Creates a new ValidateOpenRoomResponse instance using the specified properties.
     * @function create
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {IValidateOpenRoomResponse=} [properties] Properties to set
     * @returns {ValidateOpenRoomResponse} ValidateOpenRoomResponse instance
     */ValidateOpenRoomResponse.create=function create(properties){return new ValidateOpenRoomResponse(properties);};/**
     * Encodes the specified ValidateOpenRoomResponse message. Does not implicitly {@link ValidateOpenRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {IValidateOpenRoomResponse} message ValidateOpenRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ValidateOpenRoomResponse.encode=function encode(message,writer){if(!writer)writer=$Writer.create();if(message.result!=null&&message.hasOwnProperty("result"))writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))writer.uint32(/* id 2, wireType 2 =*/18).string(message.errormsg);return writer;};/**
     * Encodes the specified ValidateOpenRoomResponse message, length delimited. Does not implicitly {@link ValidateOpenRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {IValidateOpenRoomResponse} message ValidateOpenRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ValidateOpenRoomResponse.encodeDelimited=function encodeDelimited(message,writer){return this.encode(message,writer).ldelim();};/**
     * Decodes a ValidateOpenRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ValidateOpenRoomResponse} ValidateOpenRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ValidateOpenRoomResponse.decode=function decode(reader,length){if(!(reader instanceof $Reader))reader=$Reader.create(reader);var end=length===undefined?reader.len:reader.pos+length,message=new $root.ValidateOpenRoomResponse();while(reader.pos<end){var tag=reader.uint32();switch(tag>>>3){case 1:message.result=reader.int32();break;case 2:message.errormsg=reader.string();break;default:reader.skipType(tag&7);break;}}return message;};/**
     * Decodes a ValidateOpenRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ValidateOpenRoomResponse} ValidateOpenRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ValidateOpenRoomResponse.decodeDelimited=function decodeDelimited(reader){if(!(reader instanceof $Reader))reader=new $Reader(reader);return this.decode(reader,reader.uint32());};/**
     * Verifies a ValidateOpenRoomResponse message.
     * @function verify
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ValidateOpenRoomResponse.verify=function verify(message){if(typeof message!=="object"||message===null)return"object expected";if(message.result!=null&&message.hasOwnProperty("result"))switch(message.result){default:return"result: enum value expected";case 0:case 1:break;}if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))if(!$util.isString(message.errormsg))return"errormsg: string expected";return null;};/**
     * Creates a ValidateOpenRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ValidateOpenRoomResponse} ValidateOpenRoomResponse
     */ValidateOpenRoomResponse.fromObject=function fromObject(object){if(object instanceof $root.ValidateOpenRoomResponse)return object;var message=new $root.ValidateOpenRoomResponse();switch(object.result){case"Success":case 0:message.result=0;break;case"Failed":case 1:message.result=1;break;}if(object.errormsg!=null)message.errormsg=String(object.errormsg);return message;};/**
     * Creates a plain object from a ValidateOpenRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ValidateOpenRoomResponse
     * @static
     * @param {ValidateOpenRoomResponse} message ValidateOpenRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ValidateOpenRoomResponse.toObject=function toObject(message,options){if(!options)options={};var object={};if(options.defaults){object.result=options.enums===String?"Success":0;object.errormsg="";}if(message.result!=null&&message.hasOwnProperty("result"))object.result=options.enums===String?$root.Result[message.result]:message.result;if(message.errormsg!=null&&message.hasOwnProperty("errormsg"))object.errormsg=message.errormsg;return object;};/**
     * Converts this ValidateOpenRoomResponse to JSON.
     * @function toJSON
     * @memberof ValidateOpenRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ValidateOpenRoomResponse.prototype.toJSON=function toJSON(){return this.constructor.toObject(this,$protobuf.util.toJSONOptions);};return ValidateOpenRoomResponse;}();module.exports=$root;})();_export("default",_cjsExports=module.exports);});_export("__cjsMetaURL",__cjsMetaURL=_context.meta.url);}};});
//# sourceMappingURL=proto.js.map