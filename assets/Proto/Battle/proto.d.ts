
/** Result enum. */
export enum Result {
    Success = 0,
    Failed = 1
}

/** Properties of a NetMessageRequest2. */
export interface INetMessageRequest2 {

    /** NetMessageRequest2 userId */
    userId?: (number|null);

    /** NetMessageRequest2 frameHandle */
    frameHandle?: (IFrameHandle|null);

    /** NetMessageRequest2 percentForward */
    percentForward?: (IPercentForward|null);

    /** NetMessageRequest2 gameOverReq */
    gameOverReq?: (IGameOverRequest|null);

    /** NetMessageRequest2 repairFrameReq */
    repairFrameReq?: (IRepairFrameRequest|null);
}

/** Represents a NetMessageRequest2. */
export class NetMessageRequest2 implements INetMessageRequest2 {

    /**
     * Constructs a new NetMessageRequest2.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageRequest2);

    /** NetMessageRequest2 userId. */
    public userId: number;

    /** NetMessageRequest2 frameHandle. */
    public frameHandle?: (IFrameHandle|null);

    /** NetMessageRequest2 percentForward. */
    public percentForward?: (IPercentForward|null);

    /** NetMessageRequest2 gameOverReq. */
    public gameOverReq?: (IGameOverRequest|null);

    /** NetMessageRequest2 repairFrameReq. */
    public repairFrameReq?: (IRepairFrameRequest|null);

    /**
     * Creates a new NetMessageRequest2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageRequest2 instance
     */
    public static create(properties?: INetMessageRequest2): NetMessageRequest2;

    /**
     * Encodes the specified NetMessageRequest2 message. Does not implicitly {@link NetMessageRequest2.verify|verify} messages.
     * @param message NetMessageRequest2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageRequest2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageRequest2 message, length delimited. Does not implicitly {@link NetMessageRequest2.verify|verify} messages.
     * @param message NetMessageRequest2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageRequest2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageRequest2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageRequest2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageRequest2;

    /**
     * Decodes a NetMessageRequest2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageRequest2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageRequest2;

    /**
     * Verifies a NetMessageRequest2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NetMessageRequest2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageRequest2
     */
    public static fromObject(object: [ 'object' ].<string, any>): NetMessageRequest2;

    /**
     * Creates a plain object from a NetMessageRequest2 message. Also converts values to other types if specified.
     * @param message NetMessageRequest2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageRequest2, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NetMessageRequest2 to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NetMessageResponse2. */
export interface INetMessageResponse2 {

    /** NetMessageResponse2 frameHandleRes */
    frameHandleRes?: (IFrameHandleResponse|null);

    /** NetMessageResponse2 percentForwardRes */
    percentForwardRes?: (IPercentForwardResponse|null);

    /** NetMessageResponse2 repairFrameRes */
    repairFrameRes?: (IRepairFrameResponse|null);

    /** NetMessageResponse2 liveFrameRes */
    liveFrameRes?: (ILiveFrameResponse|null);
}

/** Represents a NetMessageResponse2. */
export class NetMessageResponse2 implements INetMessageResponse2 {

    /**
     * Constructs a new NetMessageResponse2.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageResponse2);

    /** NetMessageResponse2 frameHandleRes. */
    public frameHandleRes?: (IFrameHandleResponse|null);

    /** NetMessageResponse2 percentForwardRes. */
    public percentForwardRes?: (IPercentForwardResponse|null);

    /** NetMessageResponse2 repairFrameRes. */
    public repairFrameRes?: (IRepairFrameResponse|null);

    /** NetMessageResponse2 liveFrameRes. */
    public liveFrameRes?: (ILiveFrameResponse|null);

    /**
     * Creates a new NetMessageResponse2 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageResponse2 instance
     */
    public static create(properties?: INetMessageResponse2): NetMessageResponse2;

    /**
     * Encodes the specified NetMessageResponse2 message. Does not implicitly {@link NetMessageResponse2.verify|verify} messages.
     * @param message NetMessageResponse2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageResponse2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageResponse2 message, length delimited. Does not implicitly {@link NetMessageResponse2.verify|verify} messages.
     * @param message NetMessageResponse2 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageResponse2, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageResponse2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageResponse2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageResponse2;

    /**
     * Decodes a NetMessageResponse2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageResponse2
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageResponse2;

    /**
     * Verifies a NetMessageResponse2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NetMessageResponse2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageResponse2
     */
    public static fromObject(object: [ 'object' ].<string, any>): NetMessageResponse2;

    /**
     * Creates a plain object from a NetMessageResponse2 message. Also converts values to other types if specified.
     * @param message NetMessageResponse2
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageResponse2, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NetMessageResponse2 to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FrameHandle. */
export interface IFrameHandle {

    /** FrameHandle userId */
    userId?: (number|null);

    /** FrameHandle opt */
    opt?: (number|null);

    /** FrameHandle optValue1 */
    optValue1?: (number|null);

    /** FrameHandle optValue2 */
    optValue2?: (number|null);

    /** FrameHandle optValue3 */
    optValue3?: (number|null);

    /** FrameHandle optValue4 */
    optValue4?: (number|null);
}

/** Represents a FrameHandle. */
export class FrameHandle implements IFrameHandle {

    /**
     * Constructs a new FrameHandle.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameHandle);

    /** FrameHandle userId. */
    public userId: number;

    /** FrameHandle opt. */
    public opt: number;

    /** FrameHandle optValue1. */
    public optValue1: number;

    /** FrameHandle optValue2. */
    public optValue2: number;

    /** FrameHandle optValue3. */
    public optValue3: number;

    /** FrameHandle optValue4. */
    public optValue4: number;

    /**
     * Creates a new FrameHandle instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameHandle instance
     */
    public static create(properties?: IFrameHandle): FrameHandle;

    /**
     * Encodes the specified FrameHandle message. Does not implicitly {@link FrameHandle.verify|verify} messages.
     * @param message FrameHandle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameHandle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameHandle message, length delimited. Does not implicitly {@link FrameHandle.verify|verify} messages.
     * @param message FrameHandle message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameHandle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameHandle message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameHandle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameHandle;

    /**
     * Decodes a FrameHandle message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameHandle
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameHandle;

    /**
     * Verifies a FrameHandle message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FrameHandle message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameHandle
     */
    public static fromObject(object: [ 'object' ].<string, any>): FrameHandle;

    /**
     * Creates a plain object from a FrameHandle message. Also converts values to other types if specified.
     * @param message FrameHandle
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameHandle, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FrameHandle to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FrameHandleResponse. */
export interface IFrameHandleResponse {

    /** FrameHandleResponse frame */
    frame?: (number|null);

    /** FrameHandleResponse frameHandles */
    frameHandles?: (IFrameHandle[]|null);
}

/** Represents a FrameHandleResponse. */
export class FrameHandleResponse implements IFrameHandleResponse {

    /**
     * Constructs a new FrameHandleResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFrameHandleResponse);

    /** FrameHandleResponse frame. */
    public frame: number;

    /** FrameHandleResponse frameHandles. */
    public frameHandles: [ 'Array' ].<IFrameHandle>;

    /**
     * Creates a new FrameHandleResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FrameHandleResponse instance
     */
    public static create(properties?: IFrameHandleResponse): FrameHandleResponse;

    /**
     * Encodes the specified FrameHandleResponse message. Does not implicitly {@link FrameHandleResponse.verify|verify} messages.
     * @param message FrameHandleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFrameHandleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FrameHandleResponse message, length delimited. Does not implicitly {@link FrameHandleResponse.verify|verify} messages.
     * @param message FrameHandleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFrameHandleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FrameHandleResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FrameHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FrameHandleResponse;

    /**
     * Decodes a FrameHandleResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FrameHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FrameHandleResponse;

    /**
     * Verifies a FrameHandleResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FrameHandleResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FrameHandleResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): FrameHandleResponse;

    /**
     * Creates a plain object from a FrameHandleResponse message. Also converts values to other types if specified.
     * @param message FrameHandleResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FrameHandleResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FrameHandleResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PercentForward. */
export interface IPercentForward {

    /** PercentForward userId */
    userId?: (number|null);

    /** PercentForward percent */
    percent?: (number|null);
}

/** Represents a PercentForward. */
export class PercentForward implements IPercentForward {

    /**
     * Constructs a new PercentForward.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPercentForward);

    /** PercentForward userId. */
    public userId: number;

    /** PercentForward percent. */
    public percent: number;

    /**
     * Creates a new PercentForward instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PercentForward instance
     */
    public static create(properties?: IPercentForward): PercentForward;

    /**
     * Encodes the specified PercentForward message. Does not implicitly {@link PercentForward.verify|verify} messages.
     * @param message PercentForward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPercentForward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PercentForward message, length delimited. Does not implicitly {@link PercentForward.verify|verify} messages.
     * @param message PercentForward message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPercentForward, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PercentForward message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PercentForward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PercentForward;

    /**
     * Decodes a PercentForward message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PercentForward
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PercentForward;

    /**
     * Verifies a PercentForward message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PercentForward message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PercentForward
     */
    public static fromObject(object: [ 'object' ].<string, any>): PercentForward;

    /**
     * Creates a plain object from a PercentForward message. Also converts values to other types if specified.
     * @param message PercentForward
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PercentForward, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PercentForward to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a PercentForwardResponse. */
export interface IPercentForwardResponse {

    /** PercentForwardResponse percentForward */
    percentForward?: (IPercentForward|null);

    /** PercentForwardResponse allUserLoadSucess */
    allUserLoadSucess?: (boolean|null);
}

/** Represents a PercentForwardResponse. */
export class PercentForwardResponse implements IPercentForwardResponse {

    /**
     * Constructs a new PercentForwardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPercentForwardResponse);

    /** PercentForwardResponse percentForward. */
    public percentForward?: (IPercentForward|null);

    /** PercentForwardResponse allUserLoadSucess. */
    public allUserLoadSucess: boolean;

    /**
     * Creates a new PercentForwardResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PercentForwardResponse instance
     */
    public static create(properties?: IPercentForwardResponse): PercentForwardResponse;

    /**
     * Encodes the specified PercentForwardResponse message. Does not implicitly {@link PercentForwardResponse.verify|verify} messages.
     * @param message PercentForwardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPercentForwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PercentForwardResponse message, length delimited. Does not implicitly {@link PercentForwardResponse.verify|verify} messages.
     * @param message PercentForwardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPercentForwardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PercentForwardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PercentForwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PercentForwardResponse;

    /**
     * Decodes a PercentForwardResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PercentForwardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PercentForwardResponse;

    /**
     * Verifies a PercentForwardResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a PercentForwardResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PercentForwardResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): PercentForwardResponse;

    /**
     * Creates a plain object from a PercentForwardResponse message. Also converts values to other types if specified.
     * @param message PercentForwardResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PercentForwardResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this PercentForwardResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a GameOverRequest. */
export interface IGameOverRequest {
}

/** Represents a GameOverRequest. */
export class GameOverRequest implements IGameOverRequest {

    /**
     * Constructs a new GameOverRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameOverRequest);

    /**
     * Creates a new GameOverRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameOverRequest instance
     */
    public static create(properties?: IGameOverRequest): GameOverRequest;

    /**
     * Encodes the specified GameOverRequest message. Does not implicitly {@link GameOverRequest.verify|verify} messages.
     * @param message GameOverRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameOverRequest message, length delimited. Does not implicitly {@link GameOverRequest.verify|verify} messages.
     * @param message GameOverRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameOverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameOverRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameOverRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameOverRequest;

    /**
     * Decodes a GameOverRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameOverRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameOverRequest;

    /**
     * Verifies a GameOverRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a GameOverRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameOverRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): GameOverRequest;

    /**
     * Creates a plain object from a GameOverRequest message. Also converts values to other types if specified.
     * @param message GameOverRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameOverRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this GameOverRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RepairFrameRequest. */
export interface IRepairFrameRequest {

    /** RepairFrameRequest startFrame */
    startFrame?: (number|null);

    /** RepairFrameRequest endFrame */
    endFrame?: (number|null);
}

/** Represents a RepairFrameRequest. */
export class RepairFrameRequest implements IRepairFrameRequest {

    /**
     * Constructs a new RepairFrameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRepairFrameRequest);

    /** RepairFrameRequest startFrame. */
    public startFrame: number;

    /** RepairFrameRequest endFrame. */
    public endFrame: number;

    /**
     * Creates a new RepairFrameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RepairFrameRequest instance
     */
    public static create(properties?: IRepairFrameRequest): RepairFrameRequest;

    /**
     * Encodes the specified RepairFrameRequest message. Does not implicitly {@link RepairFrameRequest.verify|verify} messages.
     * @param message RepairFrameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRepairFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RepairFrameRequest message, length delimited. Does not implicitly {@link RepairFrameRequest.verify|verify} messages.
     * @param message RepairFrameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRepairFrameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RepairFrameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RepairFrameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RepairFrameRequest;

    /**
     * Decodes a RepairFrameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RepairFrameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RepairFrameRequest;

    /**
     * Verifies a RepairFrameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RepairFrameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RepairFrameRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): RepairFrameRequest;

    /**
     * Creates a plain object from a RepairFrameRequest message. Also converts values to other types if specified.
     * @param message RepairFrameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RepairFrameRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RepairFrameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RepairFrameResponse. */
export interface IRepairFrameResponse {

    /** RepairFrameResponse repairFrames */
    repairFrames?: (IRepairFrame[]|null);
}

/** Represents a RepairFrameResponse. */
export class RepairFrameResponse implements IRepairFrameResponse {

    /**
     * Constructs a new RepairFrameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRepairFrameResponse);

    /** RepairFrameResponse repairFrames. */
    public repairFrames: [ 'Array' ].<IRepairFrame>;

    /**
     * Creates a new RepairFrameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RepairFrameResponse instance
     */
    public static create(properties?: IRepairFrameResponse): RepairFrameResponse;

    /**
     * Encodes the specified RepairFrameResponse message. Does not implicitly {@link RepairFrameResponse.verify|verify} messages.
     * @param message RepairFrameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRepairFrameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RepairFrameResponse message, length delimited. Does not implicitly {@link RepairFrameResponse.verify|verify} messages.
     * @param message RepairFrameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRepairFrameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RepairFrameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RepairFrameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RepairFrameResponse;

    /**
     * Decodes a RepairFrameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RepairFrameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RepairFrameResponse;

    /**
     * Verifies a RepairFrameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RepairFrameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RepairFrameResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): RepairFrameResponse;

    /**
     * Creates a plain object from a RepairFrameResponse message. Also converts values to other types if specified.
     * @param message RepairFrameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RepairFrameResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RepairFrameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RepairFrame. */
export interface IRepairFrame {

    /** RepairFrame frame */
    frame?: (number|null);

    /** RepairFrame frameHandles */
    frameHandles?: (IFrameHandle[]|null);
}

/** Represents a RepairFrame. */
export class RepairFrame implements IRepairFrame {

    /**
     * Constructs a new RepairFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRepairFrame);

    /** RepairFrame frame. */
    public frame: number;

    /** RepairFrame frameHandles. */
    public frameHandles: [ 'Array' ].<IFrameHandle>;

    /**
     * Creates a new RepairFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RepairFrame instance
     */
    public static create(properties?: IRepairFrame): RepairFrame;

    /**
     * Encodes the specified RepairFrame message. Does not implicitly {@link RepairFrame.verify|verify} messages.
     * @param message RepairFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRepairFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RepairFrame message, length delimited. Does not implicitly {@link RepairFrame.verify|verify} messages.
     * @param message RepairFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRepairFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RepairFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RepairFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RepairFrame;

    /**
     * Decodes a RepairFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RepairFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RepairFrame;

    /**
     * Verifies a RepairFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RepairFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RepairFrame
     */
    public static fromObject(object: [ 'object' ].<string, any>): RepairFrame;

    /**
     * Creates a plain object from a RepairFrame message. Also converts values to other types if specified.
     * @param message RepairFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RepairFrame, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RepairFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a LiveFrameResponse. */
export interface ILiveFrameResponse {

    /** LiveFrameResponse liveFrames */
    liveFrames?: (IRepairFrame[]|null);
}

/** Represents a LiveFrameResponse. */
export class LiveFrameResponse implements ILiveFrameResponse {

    /**
     * Constructs a new LiveFrameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILiveFrameResponse);

    /** LiveFrameResponse liveFrames. */
    public liveFrames: [ 'Array' ].<IRepairFrame>;

    /**
     * Creates a new LiveFrameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LiveFrameResponse instance
     */
    public static create(properties?: ILiveFrameResponse): LiveFrameResponse;

    /**
     * Encodes the specified LiveFrameResponse message. Does not implicitly {@link LiveFrameResponse.verify|verify} messages.
     * @param message LiveFrameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILiveFrameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LiveFrameResponse message, length delimited. Does not implicitly {@link LiveFrameResponse.verify|verify} messages.
     * @param message LiveFrameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILiveFrameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LiveFrameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LiveFrameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LiveFrameResponse;

    /**
     * Decodes a LiveFrameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LiveFrameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LiveFrameResponse;

    /**
     * Verifies a LiveFrameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a LiveFrameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LiveFrameResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): LiveFrameResponse;

    /**
     * Creates a plain object from a LiveFrameResponse message. Also converts values to other types if specified.
     * @param message LiveFrameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LiveFrameResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this LiveFrameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
