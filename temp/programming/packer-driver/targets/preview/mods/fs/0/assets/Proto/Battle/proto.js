System.register(["protobufjs/minimal.js", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _req, _loader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_protobufjsMinimalJs) {
      _req = _protobufjsMinimalJs.__cjsMetaURL;
    }, function (_unresolved_) {
      _loader = _unresolved_.default;
    }],
    execute: function () {
      _loader.define(_context.meta.url, function (exports, _require, module, __filename, __dirname) {
        var require = _loader.createRequireWithReqMap({
          "protobufjs/minimal.js": _req
        }, _require);

        (function () {
          var $protobuf = require("protobufjs/minimal.js"); // Common aliases


          var $Reader = $protobuf.Reader,
              $Writer = $protobuf.Writer,
              $util = $protobuf.util; // Exported root namespace

          var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
          /**
           * Result enum.
           * @exports Result
           * @enum {string}
           * @property {number} Success=0 Success value
           * @property {number} Failed=1 Failed value
           */

          $root.Result = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[0] = "Success"] = 0;
            values[valuesById[1] = "Failed"] = 1;
            return values;
          }();

          $root.NetMessageRequest2 = function () {
            /**
             * Properties of a NetMessageRequest2.
             * @exports INetMessageRequest2
             * @interface INetMessageRequest2
             * @property {number|null} [userId] NetMessageRequest2 userId
             * @property {IFrameHandle|null} [frameHandle] NetMessageRequest2 frameHandle
             * @property {IPercentForward|null} [percentForward] NetMessageRequest2 percentForward
             * @property {IGameOverRequest|null} [gameOverReq] NetMessageRequest2 gameOverReq
             * @property {IRepairFrameRequest|null} [repairFrameReq] NetMessageRequest2 repairFrameReq
             */

            /**
             * Constructs a new NetMessageRequest2.
             * @exports NetMessageRequest2
             * @classdesc Represents a NetMessageRequest2.
             * @implements INetMessageRequest2
             * @constructor
             * @param {INetMessageRequest2=} [properties] Properties to set
             */
            function NetMessageRequest2(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * NetMessageRequest2 userId.
             * @member {number} userId
             * @memberof NetMessageRequest2
             * @instance
             */


            NetMessageRequest2.prototype.userId = 0;
            /**
             * NetMessageRequest2 frameHandle.
             * @member {IFrameHandle|null|undefined} frameHandle
             * @memberof NetMessageRequest2
             * @instance
             */

            NetMessageRequest2.prototype.frameHandle = null;
            /**
             * NetMessageRequest2 percentForward.
             * @member {IPercentForward|null|undefined} percentForward
             * @memberof NetMessageRequest2
             * @instance
             */

            NetMessageRequest2.prototype.percentForward = null;
            /**
             * NetMessageRequest2 gameOverReq.
             * @member {IGameOverRequest|null|undefined} gameOverReq
             * @memberof NetMessageRequest2
             * @instance
             */

            NetMessageRequest2.prototype.gameOverReq = null;
            /**
             * NetMessageRequest2 repairFrameReq.
             * @member {IRepairFrameRequest|null|undefined} repairFrameReq
             * @memberof NetMessageRequest2
             * @instance
             */

            NetMessageRequest2.prototype.repairFrameReq = null;
            /**
             * Creates a new NetMessageRequest2 instance using the specified properties.
             * @function create
             * @memberof NetMessageRequest2
             * @static
             * @param {INetMessageRequest2=} [properties] Properties to set
             * @returns {NetMessageRequest2} NetMessageRequest2 instance
             */

            NetMessageRequest2.create = function create(properties) {
              return new NetMessageRequest2(properties);
            };
            /**
             * Encodes the specified NetMessageRequest2 message. Does not implicitly {@link NetMessageRequest2.verify|verify} messages.
             * @function encode
             * @memberof NetMessageRequest2
             * @static
             * @param {INetMessageRequest2} message NetMessageRequest2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            NetMessageRequest2.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.userId != null && message.hasOwnProperty("userId")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.userId);
              if (message.frameHandle != null && message.hasOwnProperty("frameHandle")) $root.FrameHandle.encode(message.frameHandle, writer.uint32(
              /* id 2, wireType 2 =*/
              18).fork()).ldelim();
              if (message.percentForward != null && message.hasOwnProperty("percentForward")) $root.PercentForward.encode(message.percentForward, writer.uint32(
              /* id 3, wireType 2 =*/
              26).fork()).ldelim();
              if (message.gameOverReq != null && message.hasOwnProperty("gameOverReq")) $root.GameOverRequest.encode(message.gameOverReq, writer.uint32(
              /* id 4, wireType 2 =*/
              34).fork()).ldelim();
              if (message.repairFrameReq != null && message.hasOwnProperty("repairFrameReq")) $root.RepairFrameRequest.encode(message.repairFrameReq, writer.uint32(
              /* id 5, wireType 2 =*/
              42).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified NetMessageRequest2 message, length delimited. Does not implicitly {@link NetMessageRequest2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof NetMessageRequest2
             * @static
             * @param {INetMessageRequest2} message NetMessageRequest2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            NetMessageRequest2.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a NetMessageRequest2 message from the specified reader or buffer.
             * @function decode
             * @memberof NetMessageRequest2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {NetMessageRequest2} NetMessageRequest2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            NetMessageRequest2.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.NetMessageRequest2();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.userId = reader.int32();
                    break;

                  case 2:
                    message.frameHandle = $root.FrameHandle.decode(reader, reader.uint32());
                    break;

                  case 3:
                    message.percentForward = $root.PercentForward.decode(reader, reader.uint32());
                    break;

                  case 4:
                    message.gameOverReq = $root.GameOverRequest.decode(reader, reader.uint32());
                    break;

                  case 5:
                    message.repairFrameReq = $root.RepairFrameRequest.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a NetMessageRequest2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof NetMessageRequest2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {NetMessageRequest2} NetMessageRequest2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            NetMessageRequest2.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a NetMessageRequest2 message.
             * @function verify
             * @memberof NetMessageRequest2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            NetMessageRequest2.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.userId != null && message.hasOwnProperty("userId")) if (!$util.isInteger(message.userId)) return "userId: integer expected";

              if (message.frameHandle != null && message.hasOwnProperty("frameHandle")) {
                var error = $root.FrameHandle.verify(message.frameHandle);
                if (error) return "frameHandle." + error;
              }

              if (message.percentForward != null && message.hasOwnProperty("percentForward")) {
                var error = $root.PercentForward.verify(message.percentForward);
                if (error) return "percentForward." + error;
              }

              if (message.gameOverReq != null && message.hasOwnProperty("gameOverReq")) {
                var error = $root.GameOverRequest.verify(message.gameOverReq);
                if (error) return "gameOverReq." + error;
              }

              if (message.repairFrameReq != null && message.hasOwnProperty("repairFrameReq")) {
                var error = $root.RepairFrameRequest.verify(message.repairFrameReq);
                if (error) return "repairFrameReq." + error;
              }

              return null;
            };
            /**
             * Creates a NetMessageRequest2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof NetMessageRequest2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {NetMessageRequest2} NetMessageRequest2
             */


            NetMessageRequest2.fromObject = function fromObject(object) {
              if (object instanceof $root.NetMessageRequest2) return object;
              var message = new $root.NetMessageRequest2();
              if (object.userId != null) message.userId = object.userId | 0;

              if (object.frameHandle != null) {
                if (typeof object.frameHandle !== "object") throw TypeError(".NetMessageRequest2.frameHandle: object expected");
                message.frameHandle = $root.FrameHandle.fromObject(object.frameHandle);
              }

              if (object.percentForward != null) {
                if (typeof object.percentForward !== "object") throw TypeError(".NetMessageRequest2.percentForward: object expected");
                message.percentForward = $root.PercentForward.fromObject(object.percentForward);
              }

              if (object.gameOverReq != null) {
                if (typeof object.gameOverReq !== "object") throw TypeError(".NetMessageRequest2.gameOverReq: object expected");
                message.gameOverReq = $root.GameOverRequest.fromObject(object.gameOverReq);
              }

              if (object.repairFrameReq != null) {
                if (typeof object.repairFrameReq !== "object") throw TypeError(".NetMessageRequest2.repairFrameReq: object expected");
                message.repairFrameReq = $root.RepairFrameRequest.fromObject(object.repairFrameReq);
              }

              return message;
            };
            /**
             * Creates a plain object from a NetMessageRequest2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof NetMessageRequest2
             * @static
             * @param {NetMessageRequest2} message NetMessageRequest2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            NetMessageRequest2.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.userId = 0;
                object.frameHandle = null;
                object.percentForward = null;
                object.gameOverReq = null;
                object.repairFrameReq = null;
              }

              if (message.userId != null && message.hasOwnProperty("userId")) object.userId = message.userId;
              if (message.frameHandle != null && message.hasOwnProperty("frameHandle")) object.frameHandle = $root.FrameHandle.toObject(message.frameHandle, options);
              if (message.percentForward != null && message.hasOwnProperty("percentForward")) object.percentForward = $root.PercentForward.toObject(message.percentForward, options);
              if (message.gameOverReq != null && message.hasOwnProperty("gameOverReq")) object.gameOverReq = $root.GameOverRequest.toObject(message.gameOverReq, options);
              if (message.repairFrameReq != null && message.hasOwnProperty("repairFrameReq")) object.repairFrameReq = $root.RepairFrameRequest.toObject(message.repairFrameReq, options);
              return object;
            };
            /**
             * Converts this NetMessageRequest2 to JSON.
             * @function toJSON
             * @memberof NetMessageRequest2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            NetMessageRequest2.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NetMessageRequest2;
          }();

          $root.NetMessageResponse2 = function () {
            /**
             * Properties of a NetMessageResponse2.
             * @exports INetMessageResponse2
             * @interface INetMessageResponse2
             * @property {IFrameHandleResponse|null} [frameHandleRes] NetMessageResponse2 frameHandleRes
             * @property {IPercentForwardResponse|null} [percentForwardRes] NetMessageResponse2 percentForwardRes
             * @property {IRepairFrameResponse|null} [repairFrameRes] NetMessageResponse2 repairFrameRes
             * @property {ILiveFrameResponse|null} [liveFrameRes] NetMessageResponse2 liveFrameRes
             */

            /**
             * Constructs a new NetMessageResponse2.
             * @exports NetMessageResponse2
             * @classdesc Represents a NetMessageResponse2.
             * @implements INetMessageResponse2
             * @constructor
             * @param {INetMessageResponse2=} [properties] Properties to set
             */
            function NetMessageResponse2(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * NetMessageResponse2 frameHandleRes.
             * @member {IFrameHandleResponse|null|undefined} frameHandleRes
             * @memberof NetMessageResponse2
             * @instance
             */


            NetMessageResponse2.prototype.frameHandleRes = null;
            /**
             * NetMessageResponse2 percentForwardRes.
             * @member {IPercentForwardResponse|null|undefined} percentForwardRes
             * @memberof NetMessageResponse2
             * @instance
             */

            NetMessageResponse2.prototype.percentForwardRes = null;
            /**
             * NetMessageResponse2 repairFrameRes.
             * @member {IRepairFrameResponse|null|undefined} repairFrameRes
             * @memberof NetMessageResponse2
             * @instance
             */

            NetMessageResponse2.prototype.repairFrameRes = null;
            /**
             * NetMessageResponse2 liveFrameRes.
             * @member {ILiveFrameResponse|null|undefined} liveFrameRes
             * @memberof NetMessageResponse2
             * @instance
             */

            NetMessageResponse2.prototype.liveFrameRes = null;
            /**
             * Creates a new NetMessageResponse2 instance using the specified properties.
             * @function create
             * @memberof NetMessageResponse2
             * @static
             * @param {INetMessageResponse2=} [properties] Properties to set
             * @returns {NetMessageResponse2} NetMessageResponse2 instance
             */

            NetMessageResponse2.create = function create(properties) {
              return new NetMessageResponse2(properties);
            };
            /**
             * Encodes the specified NetMessageResponse2 message. Does not implicitly {@link NetMessageResponse2.verify|verify} messages.
             * @function encode
             * @memberof NetMessageResponse2
             * @static
             * @param {INetMessageResponse2} message NetMessageResponse2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            NetMessageResponse2.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.frameHandleRes != null && message.hasOwnProperty("frameHandleRes")) $root.FrameHandleResponse.encode(message.frameHandleRes, writer.uint32(
              /* id 1, wireType 2 =*/
              10).fork()).ldelim();
              if (message.percentForwardRes != null && message.hasOwnProperty("percentForwardRes")) $root.PercentForwardResponse.encode(message.percentForwardRes, writer.uint32(
              /* id 2, wireType 2 =*/
              18).fork()).ldelim();
              if (message.repairFrameRes != null && message.hasOwnProperty("repairFrameRes")) $root.RepairFrameResponse.encode(message.repairFrameRes, writer.uint32(
              /* id 3, wireType 2 =*/
              26).fork()).ldelim();
              if (message.liveFrameRes != null && message.hasOwnProperty("liveFrameRes")) $root.LiveFrameResponse.encode(message.liveFrameRes, writer.uint32(
              /* id 4, wireType 2 =*/
              34).fork()).ldelim();
              return writer;
            };
            /**
             * Encodes the specified NetMessageResponse2 message, length delimited. Does not implicitly {@link NetMessageResponse2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof NetMessageResponse2
             * @static
             * @param {INetMessageResponse2} message NetMessageResponse2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            NetMessageResponse2.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a NetMessageResponse2 message from the specified reader or buffer.
             * @function decode
             * @memberof NetMessageResponse2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {NetMessageResponse2} NetMessageResponse2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            NetMessageResponse2.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.NetMessageResponse2();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.frameHandleRes = $root.FrameHandleResponse.decode(reader, reader.uint32());
                    break;

                  case 2:
                    message.percentForwardRes = $root.PercentForwardResponse.decode(reader, reader.uint32());
                    break;

                  case 3:
                    message.repairFrameRes = $root.RepairFrameResponse.decode(reader, reader.uint32());
                    break;

                  case 4:
                    message.liveFrameRes = $root.LiveFrameResponse.decode(reader, reader.uint32());
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a NetMessageResponse2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof NetMessageResponse2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {NetMessageResponse2} NetMessageResponse2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            NetMessageResponse2.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a NetMessageResponse2 message.
             * @function verify
             * @memberof NetMessageResponse2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            NetMessageResponse2.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.frameHandleRes != null && message.hasOwnProperty("frameHandleRes")) {
                var error = $root.FrameHandleResponse.verify(message.frameHandleRes);
                if (error) return "frameHandleRes." + error;
              }

              if (message.percentForwardRes != null && message.hasOwnProperty("percentForwardRes")) {
                var error = $root.PercentForwardResponse.verify(message.percentForwardRes);
                if (error) return "percentForwardRes." + error;
              }

              if (message.repairFrameRes != null && message.hasOwnProperty("repairFrameRes")) {
                var error = $root.RepairFrameResponse.verify(message.repairFrameRes);
                if (error) return "repairFrameRes." + error;
              }

              if (message.liveFrameRes != null && message.hasOwnProperty("liveFrameRes")) {
                var error = $root.LiveFrameResponse.verify(message.liveFrameRes);
                if (error) return "liveFrameRes." + error;
              }

              return null;
            };
            /**
             * Creates a NetMessageResponse2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof NetMessageResponse2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {NetMessageResponse2} NetMessageResponse2
             */


            NetMessageResponse2.fromObject = function fromObject(object) {
              if (object instanceof $root.NetMessageResponse2) return object;
              var message = new $root.NetMessageResponse2();

              if (object.frameHandleRes != null) {
                if (typeof object.frameHandleRes !== "object") throw TypeError(".NetMessageResponse2.frameHandleRes: object expected");
                message.frameHandleRes = $root.FrameHandleResponse.fromObject(object.frameHandleRes);
              }

              if (object.percentForwardRes != null) {
                if (typeof object.percentForwardRes !== "object") throw TypeError(".NetMessageResponse2.percentForwardRes: object expected");
                message.percentForwardRes = $root.PercentForwardResponse.fromObject(object.percentForwardRes);
              }

              if (object.repairFrameRes != null) {
                if (typeof object.repairFrameRes !== "object") throw TypeError(".NetMessageResponse2.repairFrameRes: object expected");
                message.repairFrameRes = $root.RepairFrameResponse.fromObject(object.repairFrameRes);
              }

              if (object.liveFrameRes != null) {
                if (typeof object.liveFrameRes !== "object") throw TypeError(".NetMessageResponse2.liveFrameRes: object expected");
                message.liveFrameRes = $root.LiveFrameResponse.fromObject(object.liveFrameRes);
              }

              return message;
            };
            /**
             * Creates a plain object from a NetMessageResponse2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof NetMessageResponse2
             * @static
             * @param {NetMessageResponse2} message NetMessageResponse2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            NetMessageResponse2.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.frameHandleRes = null;
                object.percentForwardRes = null;
                object.repairFrameRes = null;
                object.liveFrameRes = null;
              }

              if (message.frameHandleRes != null && message.hasOwnProperty("frameHandleRes")) object.frameHandleRes = $root.FrameHandleResponse.toObject(message.frameHandleRes, options);
              if (message.percentForwardRes != null && message.hasOwnProperty("percentForwardRes")) object.percentForwardRes = $root.PercentForwardResponse.toObject(message.percentForwardRes, options);
              if (message.repairFrameRes != null && message.hasOwnProperty("repairFrameRes")) object.repairFrameRes = $root.RepairFrameResponse.toObject(message.repairFrameRes, options);
              if (message.liveFrameRes != null && message.hasOwnProperty("liveFrameRes")) object.liveFrameRes = $root.LiveFrameResponse.toObject(message.liveFrameRes, options);
              return object;
            };
            /**
             * Converts this NetMessageResponse2 to JSON.
             * @function toJSON
             * @memberof NetMessageResponse2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            NetMessageResponse2.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return NetMessageResponse2;
          }();

          $root.FrameHandle = function () {
            /**
             * Properties of a FrameHandle.
             * @exports IFrameHandle
             * @interface IFrameHandle
             * @property {number|null} [userId] FrameHandle userId
             * @property {number|null} [opt] FrameHandle opt
             * @property {number|null} [optValue1] FrameHandle optValue1
             * @property {number|null} [optValue2] FrameHandle optValue2
             * @property {number|null} [optValue3] FrameHandle optValue3
             * @property {number|null} [optValue4] FrameHandle optValue4
             */

            /**
             * Constructs a new FrameHandle.
             * @exports FrameHandle
             * @classdesc Represents a FrameHandle.
             * @implements IFrameHandle
             * @constructor
             * @param {IFrameHandle=} [properties] Properties to set
             */
            function FrameHandle(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * FrameHandle userId.
             * @member {number} userId
             * @memberof FrameHandle
             * @instance
             */


            FrameHandle.prototype.userId = 0;
            /**
             * FrameHandle opt.
             * @member {number} opt
             * @memberof FrameHandle
             * @instance
             */

            FrameHandle.prototype.opt = 0;
            /**
             * FrameHandle optValue1.
             * @member {number} optValue1
             * @memberof FrameHandle
             * @instance
             */

            FrameHandle.prototype.optValue1 = 0;
            /**
             * FrameHandle optValue2.
             * @member {number} optValue2
             * @memberof FrameHandle
             * @instance
             */

            FrameHandle.prototype.optValue2 = 0;
            /**
             * FrameHandle optValue3.
             * @member {number} optValue3
             * @memberof FrameHandle
             * @instance
             */

            FrameHandle.prototype.optValue3 = 0;
            /**
             * FrameHandle optValue4.
             * @member {number} optValue4
             * @memberof FrameHandle
             * @instance
             */

            FrameHandle.prototype.optValue4 = 0;
            /**
             * Creates a new FrameHandle instance using the specified properties.
             * @function create
             * @memberof FrameHandle
             * @static
             * @param {IFrameHandle=} [properties] Properties to set
             * @returns {FrameHandle} FrameHandle instance
             */

            FrameHandle.create = function create(properties) {
              return new FrameHandle(properties);
            };
            /**
             * Encodes the specified FrameHandle message. Does not implicitly {@link FrameHandle.verify|verify} messages.
             * @function encode
             * @memberof FrameHandle
             * @static
             * @param {IFrameHandle} message FrameHandle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            FrameHandle.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.userId != null && message.hasOwnProperty("userId")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.userId);
              if (message.opt != null && message.hasOwnProperty("opt")) writer.uint32(
              /* id 2, wireType 0 =*/
              16).int32(message.opt);
              if (message.optValue1 != null && message.hasOwnProperty("optValue1")) writer.uint32(
              /* id 4, wireType 0 =*/
              32).int32(message.optValue1);
              if (message.optValue2 != null && message.hasOwnProperty("optValue2")) writer.uint32(
              /* id 5, wireType 0 =*/
              40).int32(message.optValue2);
              if (message.optValue3 != null && message.hasOwnProperty("optValue3")) writer.uint32(
              /* id 6, wireType 0 =*/
              48).int32(message.optValue3);
              if (message.optValue4 != null && message.hasOwnProperty("optValue4")) writer.uint32(
              /* id 7, wireType 0 =*/
              56).int32(message.optValue4);
              return writer;
            };
            /**
             * Encodes the specified FrameHandle message, length delimited. Does not implicitly {@link FrameHandle.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FrameHandle
             * @static
             * @param {IFrameHandle} message FrameHandle message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            FrameHandle.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a FrameHandle message from the specified reader or buffer.
             * @function decode
             * @memberof FrameHandle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FrameHandle} FrameHandle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            FrameHandle.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.FrameHandle();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.userId = reader.int32();
                    break;

                  case 2:
                    message.opt = reader.int32();
                    break;

                  case 4:
                    message.optValue1 = reader.int32();
                    break;

                  case 5:
                    message.optValue2 = reader.int32();
                    break;

                  case 6:
                    message.optValue3 = reader.int32();
                    break;

                  case 7:
                    message.optValue4 = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a FrameHandle message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FrameHandle
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FrameHandle} FrameHandle
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            FrameHandle.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a FrameHandle message.
             * @function verify
             * @memberof FrameHandle
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            FrameHandle.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.userId != null && message.hasOwnProperty("userId")) if (!$util.isInteger(message.userId)) return "userId: integer expected";
              if (message.opt != null && message.hasOwnProperty("opt")) if (!$util.isInteger(message.opt)) return "opt: integer expected";
              if (message.optValue1 != null && message.hasOwnProperty("optValue1")) if (!$util.isInteger(message.optValue1)) return "optValue1: integer expected";
              if (message.optValue2 != null && message.hasOwnProperty("optValue2")) if (!$util.isInteger(message.optValue2)) return "optValue2: integer expected";
              if (message.optValue3 != null && message.hasOwnProperty("optValue3")) if (!$util.isInteger(message.optValue3)) return "optValue3: integer expected";
              if (message.optValue4 != null && message.hasOwnProperty("optValue4")) if (!$util.isInteger(message.optValue4)) return "optValue4: integer expected";
              return null;
            };
            /**
             * Creates a FrameHandle message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FrameHandle
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FrameHandle} FrameHandle
             */


            FrameHandle.fromObject = function fromObject(object) {
              if (object instanceof $root.FrameHandle) return object;
              var message = new $root.FrameHandle();
              if (object.userId != null) message.userId = object.userId | 0;
              if (object.opt != null) message.opt = object.opt | 0;
              if (object.optValue1 != null) message.optValue1 = object.optValue1 | 0;
              if (object.optValue2 != null) message.optValue2 = object.optValue2 | 0;
              if (object.optValue3 != null) message.optValue3 = object.optValue3 | 0;
              if (object.optValue4 != null) message.optValue4 = object.optValue4 | 0;
              return message;
            };
            /**
             * Creates a plain object from a FrameHandle message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FrameHandle
             * @static
             * @param {FrameHandle} message FrameHandle
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            FrameHandle.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.userId = 0;
                object.opt = 0;
                object.optValue1 = 0;
                object.optValue2 = 0;
                object.optValue3 = 0;
                object.optValue4 = 0;
              }

              if (message.userId != null && message.hasOwnProperty("userId")) object.userId = message.userId;
              if (message.opt != null && message.hasOwnProperty("opt")) object.opt = message.opt;
              if (message.optValue1 != null && message.hasOwnProperty("optValue1")) object.optValue1 = message.optValue1;
              if (message.optValue2 != null && message.hasOwnProperty("optValue2")) object.optValue2 = message.optValue2;
              if (message.optValue3 != null && message.hasOwnProperty("optValue3")) object.optValue3 = message.optValue3;
              if (message.optValue4 != null && message.hasOwnProperty("optValue4")) object.optValue4 = message.optValue4;
              return object;
            };
            /**
             * Converts this FrameHandle to JSON.
             * @function toJSON
             * @memberof FrameHandle
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            FrameHandle.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FrameHandle;
          }();

          $root.FrameHandleResponse = function () {
            /**
             * Properties of a FrameHandleResponse.
             * @exports IFrameHandleResponse
             * @interface IFrameHandleResponse
             * @property {number|null} [frame] FrameHandleResponse frame
             * @property {Array.<IFrameHandle>|null} [frameHandles] FrameHandleResponse frameHandles
             */

            /**
             * Constructs a new FrameHandleResponse.
             * @exports FrameHandleResponse
             * @classdesc Represents a FrameHandleResponse.
             * @implements IFrameHandleResponse
             * @constructor
             * @param {IFrameHandleResponse=} [properties] Properties to set
             */
            function FrameHandleResponse(properties) {
              this.frameHandles = [];
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * FrameHandleResponse frame.
             * @member {number} frame
             * @memberof FrameHandleResponse
             * @instance
             */


            FrameHandleResponse.prototype.frame = 0;
            /**
             * FrameHandleResponse frameHandles.
             * @member {Array.<IFrameHandle>} frameHandles
             * @memberof FrameHandleResponse
             * @instance
             */

            FrameHandleResponse.prototype.frameHandles = $util.emptyArray;
            /**
             * Creates a new FrameHandleResponse instance using the specified properties.
             * @function create
             * @memberof FrameHandleResponse
             * @static
             * @param {IFrameHandleResponse=} [properties] Properties to set
             * @returns {FrameHandleResponse} FrameHandleResponse instance
             */

            FrameHandleResponse.create = function create(properties) {
              return new FrameHandleResponse(properties);
            };
            /**
             * Encodes the specified FrameHandleResponse message. Does not implicitly {@link FrameHandleResponse.verify|verify} messages.
             * @function encode
             * @memberof FrameHandleResponse
             * @static
             * @param {IFrameHandleResponse} message FrameHandleResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            FrameHandleResponse.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.frame != null && message.hasOwnProperty("frame")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.frame);
              if (message.frameHandles != null && message.frameHandles.length) for (var i = 0; i < message.frameHandles.length; ++i) {
                $root.FrameHandle.encode(message.frameHandles[i], writer.uint32(
                /* id 2, wireType 2 =*/
                18).fork()).ldelim();
              }
              return writer;
            };
            /**
             * Encodes the specified FrameHandleResponse message, length delimited. Does not implicitly {@link FrameHandleResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof FrameHandleResponse
             * @static
             * @param {IFrameHandleResponse} message FrameHandleResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            FrameHandleResponse.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a FrameHandleResponse message from the specified reader or buffer.
             * @function decode
             * @memberof FrameHandleResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {FrameHandleResponse} FrameHandleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            FrameHandleResponse.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.FrameHandleResponse();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.frame = reader.int32();
                    break;

                  case 2:
                    if (!(message.frameHandles && message.frameHandles.length)) message.frameHandles = [];
                    message.frameHandles.push($root.FrameHandle.decode(reader, reader.uint32()));
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a FrameHandleResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof FrameHandleResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {FrameHandleResponse} FrameHandleResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            FrameHandleResponse.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a FrameHandleResponse message.
             * @function verify
             * @memberof FrameHandleResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            FrameHandleResponse.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.frame != null && message.hasOwnProperty("frame")) if (!$util.isInteger(message.frame)) return "frame: integer expected";

              if (message.frameHandles != null && message.hasOwnProperty("frameHandles")) {
                if (!Array.isArray(message.frameHandles)) return "frameHandles: array expected";

                for (var i = 0; i < message.frameHandles.length; ++i) {
                  var error = $root.FrameHandle.verify(message.frameHandles[i]);
                  if (error) return "frameHandles." + error;
                }
              }

              return null;
            };
            /**
             * Creates a FrameHandleResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof FrameHandleResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {FrameHandleResponse} FrameHandleResponse
             */


            FrameHandleResponse.fromObject = function fromObject(object) {
              if (object instanceof $root.FrameHandleResponse) return object;
              var message = new $root.FrameHandleResponse();
              if (object.frame != null) message.frame = object.frame | 0;

              if (object.frameHandles) {
                if (!Array.isArray(object.frameHandles)) throw TypeError(".FrameHandleResponse.frameHandles: array expected");
                message.frameHandles = [];

                for (var i = 0; i < object.frameHandles.length; ++i) {
                  if (typeof object.frameHandles[i] !== "object") throw TypeError(".FrameHandleResponse.frameHandles: object expected");
                  message.frameHandles[i] = $root.FrameHandle.fromObject(object.frameHandles[i]);
                }
              }

              return message;
            };
            /**
             * Creates a plain object from a FrameHandleResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof FrameHandleResponse
             * @static
             * @param {FrameHandleResponse} message FrameHandleResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            FrameHandleResponse.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.arrays || options.defaults) object.frameHandles = [];
              if (options.defaults) object.frame = 0;
              if (message.frame != null && message.hasOwnProperty("frame")) object.frame = message.frame;

              if (message.frameHandles && message.frameHandles.length) {
                object.frameHandles = [];

                for (var j = 0; j < message.frameHandles.length; ++j) {
                  object.frameHandles[j] = $root.FrameHandle.toObject(message.frameHandles[j], options);
                }
              }

              return object;
            };
            /**
             * Converts this FrameHandleResponse to JSON.
             * @function toJSON
             * @memberof FrameHandleResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            FrameHandleResponse.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FrameHandleResponse;
          }();

          $root.PercentForward = function () {
            /**
             * Properties of a PercentForward.
             * @exports IPercentForward
             * @interface IPercentForward
             * @property {number|null} [userId] PercentForward userId
             * @property {number|null} [percent] PercentForward percent
             */

            /**
             * Constructs a new PercentForward.
             * @exports PercentForward
             * @classdesc Represents a PercentForward.
             * @implements IPercentForward
             * @constructor
             * @param {IPercentForward=} [properties] Properties to set
             */
            function PercentForward(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * PercentForward userId.
             * @member {number} userId
             * @memberof PercentForward
             * @instance
             */


            PercentForward.prototype.userId = 0;
            /**
             * PercentForward percent.
             * @member {number} percent
             * @memberof PercentForward
             * @instance
             */

            PercentForward.prototype.percent = 0;
            /**
             * Creates a new PercentForward instance using the specified properties.
             * @function create
             * @memberof PercentForward
             * @static
             * @param {IPercentForward=} [properties] Properties to set
             * @returns {PercentForward} PercentForward instance
             */

            PercentForward.create = function create(properties) {
              return new PercentForward(properties);
            };
            /**
             * Encodes the specified PercentForward message. Does not implicitly {@link PercentForward.verify|verify} messages.
             * @function encode
             * @memberof PercentForward
             * @static
             * @param {IPercentForward} message PercentForward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PercentForward.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.userId != null && message.hasOwnProperty("userId")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.userId);
              if (message.percent != null && message.hasOwnProperty("percent")) writer.uint32(
              /* id 2, wireType 0 =*/
              16).int32(message.percent);
              return writer;
            };
            /**
             * Encodes the specified PercentForward message, length delimited. Does not implicitly {@link PercentForward.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PercentForward
             * @static
             * @param {IPercentForward} message PercentForward message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PercentForward.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a PercentForward message from the specified reader or buffer.
             * @function decode
             * @memberof PercentForward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PercentForward} PercentForward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PercentForward.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.PercentForward();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.userId = reader.int32();
                    break;

                  case 2:
                    message.percent = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a PercentForward message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PercentForward
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PercentForward} PercentForward
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PercentForward.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PercentForward message.
             * @function verify
             * @memberof PercentForward
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            PercentForward.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.userId != null && message.hasOwnProperty("userId")) if (!$util.isInteger(message.userId)) return "userId: integer expected";
              if (message.percent != null && message.hasOwnProperty("percent")) if (!$util.isInteger(message.percent)) return "percent: integer expected";
              return null;
            };
            /**
             * Creates a PercentForward message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PercentForward
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PercentForward} PercentForward
             */


            PercentForward.fromObject = function fromObject(object) {
              if (object instanceof $root.PercentForward) return object;
              var message = new $root.PercentForward();
              if (object.userId != null) message.userId = object.userId | 0;
              if (object.percent != null) message.percent = object.percent | 0;
              return message;
            };
            /**
             * Creates a plain object from a PercentForward message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PercentForward
             * @static
             * @param {PercentForward} message PercentForward
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            PercentForward.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.userId = 0;
                object.percent = 0;
              }

              if (message.userId != null && message.hasOwnProperty("userId")) object.userId = message.userId;
              if (message.percent != null && message.hasOwnProperty("percent")) object.percent = message.percent;
              return object;
            };
            /**
             * Converts this PercentForward to JSON.
             * @function toJSON
             * @memberof PercentForward
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            PercentForward.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PercentForward;
          }();

          $root.PercentForwardResponse = function () {
            /**
             * Properties of a PercentForwardResponse.
             * @exports IPercentForwardResponse
             * @interface IPercentForwardResponse
             * @property {IPercentForward|null} [percentForward] PercentForwardResponse percentForward
             * @property {boolean|null} [allUserLoadSucess] PercentForwardResponse allUserLoadSucess
             */

            /**
             * Constructs a new PercentForwardResponse.
             * @exports PercentForwardResponse
             * @classdesc Represents a PercentForwardResponse.
             * @implements IPercentForwardResponse
             * @constructor
             * @param {IPercentForwardResponse=} [properties] Properties to set
             */
            function PercentForwardResponse(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * PercentForwardResponse percentForward.
             * @member {IPercentForward|null|undefined} percentForward
             * @memberof PercentForwardResponse
             * @instance
             */


            PercentForwardResponse.prototype.percentForward = null;
            /**
             * PercentForwardResponse allUserLoadSucess.
             * @member {boolean} allUserLoadSucess
             * @memberof PercentForwardResponse
             * @instance
             */

            PercentForwardResponse.prototype.allUserLoadSucess = false;
            /**
             * Creates a new PercentForwardResponse instance using the specified properties.
             * @function create
             * @memberof PercentForwardResponse
             * @static
             * @param {IPercentForwardResponse=} [properties] Properties to set
             * @returns {PercentForwardResponse} PercentForwardResponse instance
             */

            PercentForwardResponse.create = function create(properties) {
              return new PercentForwardResponse(properties);
            };
            /**
             * Encodes the specified PercentForwardResponse message. Does not implicitly {@link PercentForwardResponse.verify|verify} messages.
             * @function encode
             * @memberof PercentForwardResponse
             * @static
             * @param {IPercentForwardResponse} message PercentForwardResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PercentForwardResponse.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.percentForward != null && message.hasOwnProperty("percentForward")) $root.PercentForward.encode(message.percentForward, writer.uint32(
              /* id 1, wireType 2 =*/
              10).fork()).ldelim();
              if (message.allUserLoadSucess != null && message.hasOwnProperty("allUserLoadSucess")) writer.uint32(
              /* id 2, wireType 0 =*/
              16).bool(message.allUserLoadSucess);
              return writer;
            };
            /**
             * Encodes the specified PercentForwardResponse message, length delimited. Does not implicitly {@link PercentForwardResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PercentForwardResponse
             * @static
             * @param {IPercentForwardResponse} message PercentForwardResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            PercentForwardResponse.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a PercentForwardResponse message from the specified reader or buffer.
             * @function decode
             * @memberof PercentForwardResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PercentForwardResponse} PercentForwardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PercentForwardResponse.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.PercentForwardResponse();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.percentForward = $root.PercentForward.decode(reader, reader.uint32());
                    break;

                  case 2:
                    message.allUserLoadSucess = reader.bool();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a PercentForwardResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PercentForwardResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PercentForwardResponse} PercentForwardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            PercentForwardResponse.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a PercentForwardResponse message.
             * @function verify
             * @memberof PercentForwardResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            PercentForwardResponse.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.percentForward != null && message.hasOwnProperty("percentForward")) {
                var error = $root.PercentForward.verify(message.percentForward);
                if (error) return "percentForward." + error;
              }

              if (message.allUserLoadSucess != null && message.hasOwnProperty("allUserLoadSucess")) if (typeof message.allUserLoadSucess !== "boolean") return "allUserLoadSucess: boolean expected";
              return null;
            };
            /**
             * Creates a PercentForwardResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof PercentForwardResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {PercentForwardResponse} PercentForwardResponse
             */


            PercentForwardResponse.fromObject = function fromObject(object) {
              if (object instanceof $root.PercentForwardResponse) return object;
              var message = new $root.PercentForwardResponse();

              if (object.percentForward != null) {
                if (typeof object.percentForward !== "object") throw TypeError(".PercentForwardResponse.percentForward: object expected");
                message.percentForward = $root.PercentForward.fromObject(object.percentForward);
              }

              if (object.allUserLoadSucess != null) message.allUserLoadSucess = Boolean(object.allUserLoadSucess);
              return message;
            };
            /**
             * Creates a plain object from a PercentForwardResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof PercentForwardResponse
             * @static
             * @param {PercentForwardResponse} message PercentForwardResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            PercentForwardResponse.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.percentForward = null;
                object.allUserLoadSucess = false;
              }

              if (message.percentForward != null && message.hasOwnProperty("percentForward")) object.percentForward = $root.PercentForward.toObject(message.percentForward, options);
              if (message.allUserLoadSucess != null && message.hasOwnProperty("allUserLoadSucess")) object.allUserLoadSucess = message.allUserLoadSucess;
              return object;
            };
            /**
             * Converts this PercentForwardResponse to JSON.
             * @function toJSON
             * @memberof PercentForwardResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            PercentForwardResponse.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PercentForwardResponse;
          }();

          $root.GameOverRequest = function () {
            /**
             * Properties of a GameOverRequest.
             * @exports IGameOverRequest
             * @interface IGameOverRequest
             */

            /**
             * Constructs a new GameOverRequest.
             * @exports GameOverRequest
             * @classdesc Represents a GameOverRequest.
             * @implements IGameOverRequest
             * @constructor
             * @param {IGameOverRequest=} [properties] Properties to set
             */
            function GameOverRequest(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * Creates a new GameOverRequest instance using the specified properties.
             * @function create
             * @memberof GameOverRequest
             * @static
             * @param {IGameOverRequest=} [properties] Properties to set
             * @returns {GameOverRequest} GameOverRequest instance
             */


            GameOverRequest.create = function create(properties) {
              return new GameOverRequest(properties);
            };
            /**
             * Encodes the specified GameOverRequest message. Does not implicitly {@link GameOverRequest.verify|verify} messages.
             * @function encode
             * @memberof GameOverRequest
             * @static
             * @param {IGameOverRequest} message GameOverRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            GameOverRequest.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              return writer;
            };
            /**
             * Encodes the specified GameOverRequest message, length delimited. Does not implicitly {@link GameOverRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof GameOverRequest
             * @static
             * @param {IGameOverRequest} message GameOverRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            GameOverRequest.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GameOverRequest message from the specified reader or buffer.
             * @function decode
             * @memberof GameOverRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {GameOverRequest} GameOverRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            GameOverRequest.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.GameOverRequest();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a GameOverRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof GameOverRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {GameOverRequest} GameOverRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            GameOverRequest.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GameOverRequest message.
             * @function verify
             * @memberof GameOverRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            GameOverRequest.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              return null;
            };
            /**
             * Creates a GameOverRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof GameOverRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {GameOverRequest} GameOverRequest
             */


            GameOverRequest.fromObject = function fromObject(object) {
              if (object instanceof $root.GameOverRequest) return object;
              return new $root.GameOverRequest();
            };
            /**
             * Creates a plain object from a GameOverRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof GameOverRequest
             * @static
             * @param {GameOverRequest} message GameOverRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            GameOverRequest.toObject = function toObject() {
              return {};
            };
            /**
             * Converts this GameOverRequest to JSON.
             * @function toJSON
             * @memberof GameOverRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            GameOverRequest.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GameOverRequest;
          }();

          $root.RepairFrameRequest = function () {
            /**
             * Properties of a RepairFrameRequest.
             * @exports IRepairFrameRequest
             * @interface IRepairFrameRequest
             * @property {number|null} [startFrame] RepairFrameRequest startFrame
             * @property {number|null} [endFrame] RepairFrameRequest endFrame
             */

            /**
             * Constructs a new RepairFrameRequest.
             * @exports RepairFrameRequest
             * @classdesc Represents a RepairFrameRequest.
             * @implements IRepairFrameRequest
             * @constructor
             * @param {IRepairFrameRequest=} [properties] Properties to set
             */
            function RepairFrameRequest(properties) {
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * RepairFrameRequest startFrame.
             * @member {number} startFrame
             * @memberof RepairFrameRequest
             * @instance
             */


            RepairFrameRequest.prototype.startFrame = 0;
            /**
             * RepairFrameRequest endFrame.
             * @member {number} endFrame
             * @memberof RepairFrameRequest
             * @instance
             */

            RepairFrameRequest.prototype.endFrame = 0;
            /**
             * Creates a new RepairFrameRequest instance using the specified properties.
             * @function create
             * @memberof RepairFrameRequest
             * @static
             * @param {IRepairFrameRequest=} [properties] Properties to set
             * @returns {RepairFrameRequest} RepairFrameRequest instance
             */

            RepairFrameRequest.create = function create(properties) {
              return new RepairFrameRequest(properties);
            };
            /**
             * Encodes the specified RepairFrameRequest message. Does not implicitly {@link RepairFrameRequest.verify|verify} messages.
             * @function encode
             * @memberof RepairFrameRequest
             * @static
             * @param {IRepairFrameRequest} message RepairFrameRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrameRequest.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.startFrame != null && message.hasOwnProperty("startFrame")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.startFrame);
              if (message.endFrame != null && message.hasOwnProperty("endFrame")) writer.uint32(
              /* id 2, wireType 0 =*/
              16).int32(message.endFrame);
              return writer;
            };
            /**
             * Encodes the specified RepairFrameRequest message, length delimited. Does not implicitly {@link RepairFrameRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RepairFrameRequest
             * @static
             * @param {IRepairFrameRequest} message RepairFrameRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrameRequest.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RepairFrameRequest message from the specified reader or buffer.
             * @function decode
             * @memberof RepairFrameRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {RepairFrameRequest} RepairFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrameRequest.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.RepairFrameRequest();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.startFrame = reader.int32();
                    break;

                  case 2:
                    message.endFrame = reader.int32();
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RepairFrameRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RepairFrameRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {RepairFrameRequest} RepairFrameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrameRequest.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RepairFrameRequest message.
             * @function verify
             * @memberof RepairFrameRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RepairFrameRequest.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.startFrame != null && message.hasOwnProperty("startFrame")) if (!$util.isInteger(message.startFrame)) return "startFrame: integer expected";
              if (message.endFrame != null && message.hasOwnProperty("endFrame")) if (!$util.isInteger(message.endFrame)) return "endFrame: integer expected";
              return null;
            };
            /**
             * Creates a RepairFrameRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RepairFrameRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {RepairFrameRequest} RepairFrameRequest
             */


            RepairFrameRequest.fromObject = function fromObject(object) {
              if (object instanceof $root.RepairFrameRequest) return object;
              var message = new $root.RepairFrameRequest();
              if (object.startFrame != null) message.startFrame = object.startFrame | 0;
              if (object.endFrame != null) message.endFrame = object.endFrame | 0;
              return message;
            };
            /**
             * Creates a plain object from a RepairFrameRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RepairFrameRequest
             * @static
             * @param {RepairFrameRequest} message RepairFrameRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RepairFrameRequest.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};

              if (options.defaults) {
                object.startFrame = 0;
                object.endFrame = 0;
              }

              if (message.startFrame != null && message.hasOwnProperty("startFrame")) object.startFrame = message.startFrame;
              if (message.endFrame != null && message.hasOwnProperty("endFrame")) object.endFrame = message.endFrame;
              return object;
            };
            /**
             * Converts this RepairFrameRequest to JSON.
             * @function toJSON
             * @memberof RepairFrameRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RepairFrameRequest.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RepairFrameRequest;
          }();

          $root.RepairFrameResponse = function () {
            /**
             * Properties of a RepairFrameResponse.
             * @exports IRepairFrameResponse
             * @interface IRepairFrameResponse
             * @property {Array.<IRepairFrame>|null} [repairFrames] RepairFrameResponse repairFrames
             */

            /**
             * Constructs a new RepairFrameResponse.
             * @exports RepairFrameResponse
             * @classdesc Represents a RepairFrameResponse.
             * @implements IRepairFrameResponse
             * @constructor
             * @param {IRepairFrameResponse=} [properties] Properties to set
             */
            function RepairFrameResponse(properties) {
              this.repairFrames = [];
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * RepairFrameResponse repairFrames.
             * @member {Array.<IRepairFrame>} repairFrames
             * @memberof RepairFrameResponse
             * @instance
             */


            RepairFrameResponse.prototype.repairFrames = $util.emptyArray;
            /**
             * Creates a new RepairFrameResponse instance using the specified properties.
             * @function create
             * @memberof RepairFrameResponse
             * @static
             * @param {IRepairFrameResponse=} [properties] Properties to set
             * @returns {RepairFrameResponse} RepairFrameResponse instance
             */

            RepairFrameResponse.create = function create(properties) {
              return new RepairFrameResponse(properties);
            };
            /**
             * Encodes the specified RepairFrameResponse message. Does not implicitly {@link RepairFrameResponse.verify|verify} messages.
             * @function encode
             * @memberof RepairFrameResponse
             * @static
             * @param {IRepairFrameResponse} message RepairFrameResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrameResponse.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.repairFrames != null && message.repairFrames.length) for (var i = 0; i < message.repairFrames.length; ++i) {
                $root.RepairFrame.encode(message.repairFrames[i], writer.uint32(
                /* id 1, wireType 2 =*/
                10).fork()).ldelim();
              }
              return writer;
            };
            /**
             * Encodes the specified RepairFrameResponse message, length delimited. Does not implicitly {@link RepairFrameResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RepairFrameResponse
             * @static
             * @param {IRepairFrameResponse} message RepairFrameResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrameResponse.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RepairFrameResponse message from the specified reader or buffer.
             * @function decode
             * @memberof RepairFrameResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {RepairFrameResponse} RepairFrameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrameResponse.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.RepairFrameResponse();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    if (!(message.repairFrames && message.repairFrames.length)) message.repairFrames = [];
                    message.repairFrames.push($root.RepairFrame.decode(reader, reader.uint32()));
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RepairFrameResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RepairFrameResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {RepairFrameResponse} RepairFrameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrameResponse.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RepairFrameResponse message.
             * @function verify
             * @memberof RepairFrameResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RepairFrameResponse.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.repairFrames != null && message.hasOwnProperty("repairFrames")) {
                if (!Array.isArray(message.repairFrames)) return "repairFrames: array expected";

                for (var i = 0; i < message.repairFrames.length; ++i) {
                  var error = $root.RepairFrame.verify(message.repairFrames[i]);
                  if (error) return "repairFrames." + error;
                }
              }

              return null;
            };
            /**
             * Creates a RepairFrameResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RepairFrameResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {RepairFrameResponse} RepairFrameResponse
             */


            RepairFrameResponse.fromObject = function fromObject(object) {
              if (object instanceof $root.RepairFrameResponse) return object;
              var message = new $root.RepairFrameResponse();

              if (object.repairFrames) {
                if (!Array.isArray(object.repairFrames)) throw TypeError(".RepairFrameResponse.repairFrames: array expected");
                message.repairFrames = [];

                for (var i = 0; i < object.repairFrames.length; ++i) {
                  if (typeof object.repairFrames[i] !== "object") throw TypeError(".RepairFrameResponse.repairFrames: object expected");
                  message.repairFrames[i] = $root.RepairFrame.fromObject(object.repairFrames[i]);
                }
              }

              return message;
            };
            /**
             * Creates a plain object from a RepairFrameResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RepairFrameResponse
             * @static
             * @param {RepairFrameResponse} message RepairFrameResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RepairFrameResponse.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.arrays || options.defaults) object.repairFrames = [];

              if (message.repairFrames && message.repairFrames.length) {
                object.repairFrames = [];

                for (var j = 0; j < message.repairFrames.length; ++j) {
                  object.repairFrames[j] = $root.RepairFrame.toObject(message.repairFrames[j], options);
                }
              }

              return object;
            };
            /**
             * Converts this RepairFrameResponse to JSON.
             * @function toJSON
             * @memberof RepairFrameResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RepairFrameResponse.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RepairFrameResponse;
          }();

          $root.RepairFrame = function () {
            /**
             * Properties of a RepairFrame.
             * @exports IRepairFrame
             * @interface IRepairFrame
             * @property {number|null} [frame] RepairFrame frame
             * @property {Array.<IFrameHandle>|null} [frameHandles] RepairFrame frameHandles
             */

            /**
             * Constructs a new RepairFrame.
             * @exports RepairFrame
             * @classdesc Represents a RepairFrame.
             * @implements IRepairFrame
             * @constructor
             * @param {IRepairFrame=} [properties] Properties to set
             */
            function RepairFrame(properties) {
              this.frameHandles = [];
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * RepairFrame frame.
             * @member {number} frame
             * @memberof RepairFrame
             * @instance
             */


            RepairFrame.prototype.frame = 0;
            /**
             * RepairFrame frameHandles.
             * @member {Array.<IFrameHandle>} frameHandles
             * @memberof RepairFrame
             * @instance
             */

            RepairFrame.prototype.frameHandles = $util.emptyArray;
            /**
             * Creates a new RepairFrame instance using the specified properties.
             * @function create
             * @memberof RepairFrame
             * @static
             * @param {IRepairFrame=} [properties] Properties to set
             * @returns {RepairFrame} RepairFrame instance
             */

            RepairFrame.create = function create(properties) {
              return new RepairFrame(properties);
            };
            /**
             * Encodes the specified RepairFrame message. Does not implicitly {@link RepairFrame.verify|verify} messages.
             * @function encode
             * @memberof RepairFrame
             * @static
             * @param {IRepairFrame} message RepairFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrame.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.frame != null && message.hasOwnProperty("frame")) writer.uint32(
              /* id 1, wireType 0 =*/
              8).int32(message.frame);
              if (message.frameHandles != null && message.frameHandles.length) for (var i = 0; i < message.frameHandles.length; ++i) {
                $root.FrameHandle.encode(message.frameHandles[i], writer.uint32(
                /* id 2, wireType 2 =*/
                18).fork()).ldelim();
              }
              return writer;
            };
            /**
             * Encodes the specified RepairFrame message, length delimited. Does not implicitly {@link RepairFrame.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RepairFrame
             * @static
             * @param {IRepairFrame} message RepairFrame message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            RepairFrame.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a RepairFrame message from the specified reader or buffer.
             * @function decode
             * @memberof RepairFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {RepairFrame} RepairFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrame.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.RepairFrame();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    message.frame = reader.int32();
                    break;

                  case 2:
                    if (!(message.frameHandles && message.frameHandles.length)) message.frameHandles = [];
                    message.frameHandles.push($root.FrameHandle.decode(reader, reader.uint32()));
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a RepairFrame message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RepairFrame
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {RepairFrame} RepairFrame
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            RepairFrame.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a RepairFrame message.
             * @function verify
             * @memberof RepairFrame
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            RepairFrame.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";
              if (message.frame != null && message.hasOwnProperty("frame")) if (!$util.isInteger(message.frame)) return "frame: integer expected";

              if (message.frameHandles != null && message.hasOwnProperty("frameHandles")) {
                if (!Array.isArray(message.frameHandles)) return "frameHandles: array expected";

                for (var i = 0; i < message.frameHandles.length; ++i) {
                  var error = $root.FrameHandle.verify(message.frameHandles[i]);
                  if (error) return "frameHandles." + error;
                }
              }

              return null;
            };
            /**
             * Creates a RepairFrame message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RepairFrame
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {RepairFrame} RepairFrame
             */


            RepairFrame.fromObject = function fromObject(object) {
              if (object instanceof $root.RepairFrame) return object;
              var message = new $root.RepairFrame();
              if (object.frame != null) message.frame = object.frame | 0;

              if (object.frameHandles) {
                if (!Array.isArray(object.frameHandles)) throw TypeError(".RepairFrame.frameHandles: array expected");
                message.frameHandles = [];

                for (var i = 0; i < object.frameHandles.length; ++i) {
                  if (typeof object.frameHandles[i] !== "object") throw TypeError(".RepairFrame.frameHandles: object expected");
                  message.frameHandles[i] = $root.FrameHandle.fromObject(object.frameHandles[i]);
                }
              }

              return message;
            };
            /**
             * Creates a plain object from a RepairFrame message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RepairFrame
             * @static
             * @param {RepairFrame} message RepairFrame
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            RepairFrame.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.arrays || options.defaults) object.frameHandles = [];
              if (options.defaults) object.frame = 0;
              if (message.frame != null && message.hasOwnProperty("frame")) object.frame = message.frame;

              if (message.frameHandles && message.frameHandles.length) {
                object.frameHandles = [];

                for (var j = 0; j < message.frameHandles.length; ++j) {
                  object.frameHandles[j] = $root.FrameHandle.toObject(message.frameHandles[j], options);
                }
              }

              return object;
            };
            /**
             * Converts this RepairFrame to JSON.
             * @function toJSON
             * @memberof RepairFrame
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            RepairFrame.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RepairFrame;
          }();

          $root.LiveFrameResponse = function () {
            /**
             * Properties of a LiveFrameResponse.
             * @exports ILiveFrameResponse
             * @interface ILiveFrameResponse
             * @property {Array.<IRepairFrame>|null} [liveFrames] LiveFrameResponse liveFrames
             */

            /**
             * Constructs a new LiveFrameResponse.
             * @exports LiveFrameResponse
             * @classdesc Represents a LiveFrameResponse.
             * @implements ILiveFrameResponse
             * @constructor
             * @param {ILiveFrameResponse=} [properties] Properties to set
             */
            function LiveFrameResponse(properties) {
              this.liveFrames = [];
              if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
              }
            }
            /**
             * LiveFrameResponse liveFrames.
             * @member {Array.<IRepairFrame>} liveFrames
             * @memberof LiveFrameResponse
             * @instance
             */


            LiveFrameResponse.prototype.liveFrames = $util.emptyArray;
            /**
             * Creates a new LiveFrameResponse instance using the specified properties.
             * @function create
             * @memberof LiveFrameResponse
             * @static
             * @param {ILiveFrameResponse=} [properties] Properties to set
             * @returns {LiveFrameResponse} LiveFrameResponse instance
             */

            LiveFrameResponse.create = function create(properties) {
              return new LiveFrameResponse(properties);
            };
            /**
             * Encodes the specified LiveFrameResponse message. Does not implicitly {@link LiveFrameResponse.verify|verify} messages.
             * @function encode
             * @memberof LiveFrameResponse
             * @static
             * @param {ILiveFrameResponse} message LiveFrameResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            LiveFrameResponse.encode = function encode(message, writer) {
              if (!writer) writer = $Writer.create();
              if (message.liveFrames != null && message.liveFrames.length) for (var i = 0; i < message.liveFrames.length; ++i) {
                $root.RepairFrame.encode(message.liveFrames[i], writer.uint32(
                /* id 1, wireType 2 =*/
                10).fork()).ldelim();
              }
              return writer;
            };
            /**
             * Encodes the specified LiveFrameResponse message, length delimited. Does not implicitly {@link LiveFrameResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof LiveFrameResponse
             * @static
             * @param {ILiveFrameResponse} message LiveFrameResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */


            LiveFrameResponse.encodeDelimited = function encodeDelimited(message, writer) {
              return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a LiveFrameResponse message from the specified reader or buffer.
             * @function decode
             * @memberof LiveFrameResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {LiveFrameResponse} LiveFrameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            LiveFrameResponse.decode = function decode(reader, length) {
              if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
              var end = length === undefined ? reader.len : reader.pos + length,
                  message = new $root.LiveFrameResponse();

              while (reader.pos < end) {
                var tag = reader.uint32();

                switch (tag >>> 3) {
                  case 1:
                    if (!(message.liveFrames && message.liveFrames.length)) message.liveFrames = [];
                    message.liveFrames.push($root.RepairFrame.decode(reader, reader.uint32()));
                    break;

                  default:
                    reader.skipType(tag & 7);
                    break;
                }
              }

              return message;
            };
            /**
             * Decodes a LiveFrameResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof LiveFrameResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {LiveFrameResponse} LiveFrameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */


            LiveFrameResponse.decodeDelimited = function decodeDelimited(reader) {
              if (!(reader instanceof $Reader)) reader = new $Reader(reader);
              return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a LiveFrameResponse message.
             * @function verify
             * @memberof LiveFrameResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */


            LiveFrameResponse.verify = function verify(message) {
              if (typeof message !== "object" || message === null) return "object expected";

              if (message.liveFrames != null && message.hasOwnProperty("liveFrames")) {
                if (!Array.isArray(message.liveFrames)) return "liveFrames: array expected";

                for (var i = 0; i < message.liveFrames.length; ++i) {
                  var error = $root.RepairFrame.verify(message.liveFrames[i]);
                  if (error) return "liveFrames." + error;
                }
              }

              return null;
            };
            /**
             * Creates a LiveFrameResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof LiveFrameResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {LiveFrameResponse} LiveFrameResponse
             */


            LiveFrameResponse.fromObject = function fromObject(object) {
              if (object instanceof $root.LiveFrameResponse) return object;
              var message = new $root.LiveFrameResponse();

              if (object.liveFrames) {
                if (!Array.isArray(object.liveFrames)) throw TypeError(".LiveFrameResponse.liveFrames: array expected");
                message.liveFrames = [];

                for (var i = 0; i < object.liveFrames.length; ++i) {
                  if (typeof object.liveFrames[i] !== "object") throw TypeError(".LiveFrameResponse.liveFrames: object expected");
                  message.liveFrames[i] = $root.RepairFrame.fromObject(object.liveFrames[i]);
                }
              }

              return message;
            };
            /**
             * Creates a plain object from a LiveFrameResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof LiveFrameResponse
             * @static
             * @param {LiveFrameResponse} message LiveFrameResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */


            LiveFrameResponse.toObject = function toObject(message, options) {
              if (!options) options = {};
              var object = {};
              if (options.arrays || options.defaults) object.liveFrames = [];

              if (message.liveFrames && message.liveFrames.length) {
                object.liveFrames = [];

                for (var j = 0; j < message.liveFrames.length; ++j) {
                  object.liveFrames[j] = $root.RepairFrame.toObject(message.liveFrames[j], options);
                }
              }

              return object;
            };
            /**
             * Converts this LiveFrameResponse to JSON.
             * @function toJSON
             * @memberof LiveFrameResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */


            LiveFrameResponse.prototype.toJSON = function toJSON() {
              return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LiveFrameResponse;
          }();

          module.exports = $root;
        })();

        _export("default", _cjsExports = module.exports);
      });

      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);
    }
  };
});
//# sourceMappingURL=proto.js.map