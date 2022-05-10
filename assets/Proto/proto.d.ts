
/** Result enum. */
export enum Result {
    Success = 0,
    Failed = 1
}

/** CharacterClass enum. */
export enum CharacterClass {
    NONE = 0,
    WARRIOR = 1,
    WIZARD = 2,
    ASSASSIN = 3,
    NoticeMonsters = 4,
    Monsters = 5,
    Soldier = 6,
    Cart = 7
}

/** ItemType enum. */
export enum ItemType {
    SPORTS = 0,
    ATTSTONE = 1,
    DEFSTONE = 2,
    RESUSTONE = 3,
    HPSTONE = 4,
    CDSTONE = 5,
    CRISTONE = 6,
    SPEEDSTONE = 7
}

/** AddAttrType enum. */
export enum AddAttrType {
    GEM = 0,
    SPAR = 1
}

/** ItemFunction enum. */
export enum ItemFunction {
    RecoverHP = 0,
    RecoverMP = 1,
    AddBuf = 2,
    AddExp = 3,
    AddMoney = 4,
    AddItem = 5,
    AddBuff = 6,
    AddSkillPoint = 7
}

/** BagHandleType enum. */
export enum BagHandleType {
    SELL = 0,
    TRAN = 1,
    CANCELTRAN = 2
}

/** TipsType enum. */
export enum TipsType {
    Tips = 0,
    Popup = 1
}

/** Properties of a NUser. */
export interface INUser {

    /** NUser id */
    id?: (number|null);

    /** NUser nickname */
    nickname?: (string|null);

    /** NUser coin */
    coin?: (number|Long|null);

    /** NUser character */
    character?: (INCharacter|null);

    /** NUser unLockCharacters */
    unLockCharacters?: (IUnLockCharacter[]|null);

    /** NUser isFollow */
    isFollow?: (boolean|null);

    /** NUser bag */
    bag?: (INItem[]|null);

    /** NUser status */
    status?: (boolean|null);

    /** NUser fenSiCount */
    fenSiCount?: (number|null);

    /** NUser userStatus */
    userStatus?: (UserStatus|null);

    /** NUser biFen */
    biFen?: (string|null);

    /** NUser teamType */
    teamType?: (TeamType|null);

    /** NUser roomNum */
    roomNum?: (number|null);
}

/** Represents a NUser. */
export class NUser implements INUser {

    /**
     * Constructs a new NUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: INUser);

    /** NUser id. */
    public id: number;

    /** NUser nickname. */
    public nickname: string;

    /** NUser coin. */
    public coin: (number|Long);

    /** NUser character. */
    public character?: (INCharacter|null);

    /** NUser unLockCharacters. */
    public unLockCharacters: [ 'Array' ].<IUnLockCharacter>;

    /** NUser isFollow. */
    public isFollow: boolean;

    /** NUser bag. */
    public bag: [ 'Array' ].<INItem>;

    /** NUser status. */
    public status: boolean;

    /** NUser fenSiCount. */
    public fenSiCount: number;

    /** NUser userStatus. */
    public userStatus: UserStatus;

    /** NUser biFen. */
    public biFen: string;

    /** NUser teamType. */
    public teamType: TeamType;

    /** NUser roomNum. */
    public roomNum: number;

    /**
     * Creates a new NUser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NUser instance
     */
    public static create(properties?: INUser): NUser;

    /**
     * Encodes the specified NUser message. Does not implicitly {@link NUser.verify|verify} messages.
     * @param message NUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NUser message, length delimited. Does not implicitly {@link NUser.verify|verify} messages.
     * @param message NUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NUser;

    /**
     * Decodes a NUser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NUser;

    /**
     * Verifies a NUser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NUser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NUser
     */
    public static fromObject(object: [ 'object' ].<string, any>): NUser;

    /**
     * Creates a plain object from a NUser message. Also converts values to other types if specified.
     * @param message NUser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NUser, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NUser to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UnLockCharacter. */
export interface IUnLockCharacter {

    /** UnLockCharacter tid */
    tid?: (number|null);

    /** UnLockCharacter cid */
    cid?: (number|null);
}

/** Represents an UnLockCharacter. */
export class UnLockCharacter implements IUnLockCharacter {

    /**
     * Constructs a new UnLockCharacter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnLockCharacter);

    /** UnLockCharacter tid. */
    public tid: number;

    /** UnLockCharacter cid. */
    public cid: number;

    /**
     * Creates a new UnLockCharacter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnLockCharacter instance
     */
    public static create(properties?: IUnLockCharacter): UnLockCharacter;

    /**
     * Encodes the specified UnLockCharacter message. Does not implicitly {@link UnLockCharacter.verify|verify} messages.
     * @param message UnLockCharacter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnLockCharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnLockCharacter message, length delimited. Does not implicitly {@link UnLockCharacter.verify|verify} messages.
     * @param message UnLockCharacter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnLockCharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnLockCharacter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnLockCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnLockCharacter;

    /**
     * Decodes an UnLockCharacter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnLockCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnLockCharacter;

    /**
     * Verifies an UnLockCharacter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UnLockCharacter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnLockCharacter
     */
    public static fromObject(object: [ 'object' ].<string, any>): UnLockCharacter;

    /**
     * Creates a plain object from an UnLockCharacter message. Also converts values to other types if specified.
     * @param message UnLockCharacter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnLockCharacter, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UnLockCharacter to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NCharacter. */
export interface INCharacter {

    /** NCharacter tid */
    tid?: (number|null);

    /** NCharacter cid */
    cid?: (number|null);

    /** NCharacter level */
    level?: (number|null);

    /** NCharacter exp */
    exp?: (number|Long|null);

    /** NCharacter userId */
    userId?: (number|null);

    /** NCharacter att */
    att?: (number|null);

    /** NCharacter def */
    def?: (number|null);

    /** NCharacter hp */
    hp?: (number|null);

    /** NCharacter cri */
    cri?: (number|null);

    /** NCharacter resu */
    resu?: (number|null);

    /** NCharacter speed */
    speed?: (number|null);

    /** NCharacter cd */
    cd?: (number|null);

    /** NCharacter attSpot */
    attSpot?: (number|null);

    /** NCharacter defSpot */
    defSpot?: (number|null);

    /** NCharacter hpSpot */
    hpSpot?: (number|null);

    /** NCharacter criSpot */
    criSpot?: (number|null);

    /** NCharacter resuSpot */
    resuSpot?: (number|null);

    /** NCharacter speedSpot */
    speedSpot?: (number|null);

    /** NCharacter cdSpot */
    cdSpot?: (number|null);

    /** NCharacter levelExp */
    levelExp?: (number|Long|null);

    /** NCharacter speedValue */
    speedValue?: (number|null);
}

/** Represents a NCharacter. */
export class NCharacter implements INCharacter {

    /**
     * Constructs a new NCharacter.
     * @param [properties] Properties to set
     */
    constructor(properties?: INCharacter);

    /** NCharacter tid. */
    public tid: number;

    /** NCharacter cid. */
    public cid: number;

    /** NCharacter level. */
    public level: number;

    /** NCharacter exp. */
    public exp: (number|Long);

    /** NCharacter userId. */
    public userId: number;

    /** NCharacter att. */
    public att: number;

    /** NCharacter def. */
    public def: number;

    /** NCharacter hp. */
    public hp: number;

    /** NCharacter cri. */
    public cri: number;

    /** NCharacter resu. */
    public resu: number;

    /** NCharacter speed. */
    public speed: number;

    /** NCharacter cd. */
    public cd: number;

    /** NCharacter attSpot. */
    public attSpot: number;

    /** NCharacter defSpot. */
    public defSpot: number;

    /** NCharacter hpSpot. */
    public hpSpot: number;

    /** NCharacter criSpot. */
    public criSpot: number;

    /** NCharacter resuSpot. */
    public resuSpot: number;

    /** NCharacter speedSpot. */
    public speedSpot: number;

    /** NCharacter cdSpot. */
    public cdSpot: number;

    /** NCharacter levelExp. */
    public levelExp: (number|Long);

    /** NCharacter speedValue. */
    public speedValue: number;

    /**
     * Creates a new NCharacter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NCharacter instance
     */
    public static create(properties?: INCharacter): NCharacter;

    /**
     * Encodes the specified NCharacter message. Does not implicitly {@link NCharacter.verify|verify} messages.
     * @param message NCharacter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INCharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NCharacter message, length delimited. Does not implicitly {@link NCharacter.verify|verify} messages.
     * @param message NCharacter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INCharacter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NCharacter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NCharacter;

    /**
     * Decodes a NCharacter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NCharacter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NCharacter;

    /**
     * Verifies a NCharacter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NCharacter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NCharacter
     */
    public static fromObject(object: [ 'object' ].<string, any>): NCharacter;

    /**
     * Creates a plain object from a NCharacter message. Also converts values to other types if specified.
     * @param message NCharacter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NCharacter, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NCharacter to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NItem. */
export interface INItem {

    /** NItem itemId */
    itemId?: (number|null);

    /** NItem count */
    count?: (number|null);

    /** NItem isTran */
    isTran?: (boolean|null);

    /** NItem money */
    money?: (number|Long|null);
}

/** Represents a NItem. */
export class NItem implements INItem {

    /**
     * Constructs a new NItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: INItem);

    /** NItem itemId. */
    public itemId: number;

    /** NItem count. */
    public count: number;

    /** NItem isTran. */
    public isTran: boolean;

    /** NItem money. */
    public money: (number|Long);

    /**
     * Creates a new NItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NItem instance
     */
    public static create(properties?: INItem): NItem;

    /**
     * Encodes the specified NItem message. Does not implicitly {@link NItem.verify|verify} messages.
     * @param message NItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NItem message, length delimited. Does not implicitly {@link NItem.verify|verify} messages.
     * @param message NItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NItem;

    /**
     * Decodes a NItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NItem;

    /**
     * Verifies a NItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): NItem;

    /**
     * Creates a plain object from a NItem message. Also converts values to other types if specified.
     * @param message NItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** StatusAction enum. */
export enum StatusAction {
    UPDATE = 0,
    ADD = 1,
    DELETE = 2
}

/** StatusType enum. */
export enum StatusType {
    MONEY = 0,
    EXP = 1,
    SKILL_POINT = 2,
    ITEM = 3
}

/** Properties of a NStatus. */
export interface INStatus {

    /** NStatus type */
    type?: (StatusType|null);

    /** NStatus action */
    action?: (StatusAction|null);

    /** NStatus id */
    id?: (number|null);

    /** NStatus value */
    value?: (number|Long|null);
}

/** Represents a NStatus. */
export class NStatus implements INStatus {

    /**
     * Constructs a new NStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: INStatus);

    /** NStatus type. */
    public type: StatusType;

    /** NStatus action. */
    public action: StatusAction;

    /** NStatus id. */
    public id: number;

    /** NStatus value. */
    public value: (number|Long);

    /**
     * Creates a new NStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NStatus instance
     */
    public static create(properties?: INStatus): NStatus;

    /**
     * Encodes the specified NStatus message. Does not implicitly {@link NStatus.verify|verify} messages.
     * @param message NStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NStatus message, length delimited. Does not implicitly {@link NStatus.verify|verify} messages.
     * @param message NStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NStatus;

    /**
     * Decodes a NStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NStatus;

    /**
     * Verifies a NStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NStatus
     */
    public static fromObject(object: [ 'object' ].<string, any>): NStatus;

    /**
     * Creates a plain object from a NStatus message. Also converts values to other types if specified.
     * @param message NStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NStatus, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a StatusNotify. */
export interface IStatusNotify {

    /** StatusNotify status */
    status?: (INStatus[]|null);
}

/** Represents a StatusNotify. */
export class StatusNotify implements IStatusNotify {

    /**
     * Constructs a new StatusNotify.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatusNotify);

    /** StatusNotify status. */
    public status: [ 'Array' ].<INStatus>;

    /**
     * Creates a new StatusNotify instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StatusNotify instance
     */
    public static create(properties?: IStatusNotify): StatusNotify;

    /**
     * Encodes the specified StatusNotify message. Does not implicitly {@link StatusNotify.verify|verify} messages.
     * @param message StatusNotify message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatusNotify, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StatusNotify message, length delimited. Does not implicitly {@link StatusNotify.verify|verify} messages.
     * @param message StatusNotify message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatusNotify, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StatusNotify message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StatusNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusNotify;

    /**
     * Decodes a StatusNotify message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StatusNotify
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusNotify;

    /**
     * Verifies a StatusNotify message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a StatusNotify message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StatusNotify
     */
    public static fromObject(object: [ 'object' ].<string, any>): StatusNotify;

    /**
     * Creates a plain object from a StatusNotify message. Also converts values to other types if specified.
     * @param message StatusNotify
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StatusNotify, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this StatusNotify to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NUserStatusChange. */
export interface INUserStatusChange {

    /** NUserStatusChange userId */
    userId?: (number|null);

    /** NUserStatusChange status */
    status?: (boolean|null);
}

/** Represents a NUserStatusChange. */
export class NUserStatusChange implements INUserStatusChange {

    /**
     * Constructs a new NUserStatusChange.
     * @param [properties] Properties to set
     */
    constructor(properties?: INUserStatusChange);

    /** NUserStatusChange userId. */
    public userId: number;

    /** NUserStatusChange status. */
    public status: boolean;

    /**
     * Creates a new NUserStatusChange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NUserStatusChange instance
     */
    public static create(properties?: INUserStatusChange): NUserStatusChange;

    /**
     * Encodes the specified NUserStatusChange message. Does not implicitly {@link NUserStatusChange.verify|verify} messages.
     * @param message NUserStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INUserStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NUserStatusChange message, length delimited. Does not implicitly {@link NUserStatusChange.verify|verify} messages.
     * @param message NUserStatusChange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INUserStatusChange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NUserStatusChange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NUserStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NUserStatusChange;

    /**
     * Decodes a NUserStatusChange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NUserStatusChange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NUserStatusChange;

    /**
     * Verifies a NUserStatusChange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NUserStatusChange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NUserStatusChange
     */
    public static fromObject(object: [ 'object' ].<string, any>): NUserStatusChange;

    /**
     * Creates a plain object from a NUserStatusChange message. Also converts values to other types if specified.
     * @param message NUserStatusChange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NUserStatusChange, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NUserStatusChange to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NAuctionItem. */
export interface INAuctionItem {

    /** NAuctionItem id */
    id?: (number|null);

    /** NAuctionItem userId */
    userId?: (number|null);

    /** NAuctionItem itemId */
    itemId?: (number|null);

    /** NAuctionItem count */
    count?: (number|null);

    /** NAuctionItem biddingPrice */
    biddingPrice?: (number|Long|null);

    /** NAuctionItem currentPrice */
    currentPrice?: (number|Long|null);

    /** NAuctionItem bidderUserId */
    bidderUserId?: (number|null);

    /** NAuctionItem bidderNickName */
    bidderNickName?: (string|null);

    /** NAuctionItem remainingTime */
    remainingTime?: (number|Long|null);
}

/** Represents a NAuctionItem. */
export class NAuctionItem implements INAuctionItem {

    /**
     * Constructs a new NAuctionItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: INAuctionItem);

    /** NAuctionItem id. */
    public id: number;

    /** NAuctionItem userId. */
    public userId: number;

    /** NAuctionItem itemId. */
    public itemId: number;

    /** NAuctionItem count. */
    public count: number;

    /** NAuctionItem biddingPrice. */
    public biddingPrice: (number|Long);

    /** NAuctionItem currentPrice. */
    public currentPrice: (number|Long);

    /** NAuctionItem bidderUserId. */
    public bidderUserId: number;

    /** NAuctionItem bidderNickName. */
    public bidderNickName: string;

    /** NAuctionItem remainingTime. */
    public remainingTime: (number|Long);

    /**
     * Creates a new NAuctionItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NAuctionItem instance
     */
    public static create(properties?: INAuctionItem): NAuctionItem;

    /**
     * Encodes the specified NAuctionItem message. Does not implicitly {@link NAuctionItem.verify|verify} messages.
     * @param message NAuctionItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INAuctionItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NAuctionItem message, length delimited. Does not implicitly {@link NAuctionItem.verify|verify} messages.
     * @param message NAuctionItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INAuctionItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NAuctionItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NAuctionItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NAuctionItem;

    /**
     * Decodes a NAuctionItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NAuctionItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NAuctionItem;

    /**
     * Verifies a NAuctionItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NAuctionItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NAuctionItem
     */
    public static fromObject(object: [ 'object' ].<string, any>): NAuctionItem;

    /**
     * Creates a plain object from a NAuctionItem message. Also converts values to other types if specified.
     * @param message NAuctionItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NAuctionItem, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NAuctionItem to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** UserStatus enum. */
export enum UserStatus {
    Normal = 0,
    Game = 1,
    Room = 2,
    Live = 3,
    GameOver = 4
}

/** Properties of a NetMessage. */
export interface INetMessage {

    /** NetMessage Request */
    Request?: (INetMessageRequest|null);

    /** NetMessage Response */
    Response?: (INetMessageResponse|null);
}

/** Represents a NetMessage. */
export class NetMessage implements INetMessage {

    /**
     * Constructs a new NetMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessage);

    /** NetMessage Request. */
    public Request?: (INetMessageRequest|null);

    /** NetMessage Response. */
    public Response?: (INetMessageResponse|null);

    /**
     * Creates a new NetMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessage instance
     */
    public static create(properties?: INetMessage): NetMessage;

    /**
     * Encodes the specified NetMessage message. Does not implicitly {@link NetMessage.verify|verify} messages.
     * @param message NetMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessage message, length delimited. Does not implicitly {@link NetMessage.verify|verify} messages.
     * @param message NetMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessage;

    /**
     * Decodes a NetMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessage;

    /**
     * Verifies a NetMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NetMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessage
     */
    public static fromObject(object: [ 'object' ].<string, any>): NetMessage;

    /**
     * Creates a plain object from a NetMessage message. Also converts values to other types if specified.
     * @param message NetMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NetMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NetMessageRequest. */
export interface INetMessageRequest {

    /** NetMessageRequest userRegister */
    userRegister?: (IUserRegisterRequest|null);

    /** NetMessageRequest userLogin */
    userLogin?: (IUserLoginRequest|null);

    /** NetMessageRequest characterDetail */
    characterDetail?: (ICharacterDetailRequest|null);

    /** NetMessageRequest updateNickName */
    updateNickName?: (IUpdateNickNameRequest|null);

    /** NetMessageRequest attrPromote */
    attrPromote?: (IAttrPromoteRequest|null);

    /** NetMessageRequest combatPowerRanking */
    combatPowerRanking?: (ICombatPowerRankingRequest|null);

    /** NetMessageRequest itemBuy */
    itemBuy?: (IItemBuyRequest|null);

    /** NetMessageRequest followReq */
    followReq?: (IFollowRequest|null);

    /** NetMessageRequest unLockReq */
    unLockReq?: (IUnLockRequest|null);

    /** NetMessageRequest switchCharacterReq */
    switchCharacterReq?: (ISwitchCharacterRequest|null);

    /** NetMessageRequest bagHandleReq */
    bagHandleReq?: (IBagHandleRequest|null);

    /** NetMessageRequest queryTranReq */
    queryTranReq?: (IQueryTranRequest|null);

    /** NetMessageRequest buyTranReq */
    buyTranReq?: (IBuyTranRequest|null);

    /** NetMessageRequest heartBeatReq */
    heartBeatReq?: (IHeartBeatRequest|null);

    /** NetMessageRequest offerPriceReq */
    offerPriceReq?: (IOfferPriceRequest|null);

    /** NetMessageRequest auctionReq */
    auctionReq?: (IAuctionRequest|null);

    /** NetMessageRequest getAuctionListReq */
    getAuctionListReq?: (IGetAuctionListRequest|null);

    /** NetMessageRequest myRoomReq */
    myRoomReq?: (IMyRoomRequest|null);

    /** NetMessageRequest inviteReq */
    inviteReq?: (IInviteRequest|null);

    /** NetMessageRequest inviteRes */
    inviteRes?: (IInviteResponse|null);

    /** NetMessageRequest kickOutReq */
    kickOutReq?: (IKickOutRequest|null);

    /** NetMessageRequest roomStartGameReq */
    roomStartGameReq?: (IRoomStartGameRequest|null);

    /** NetMessageRequest nickNameSearchReq */
    nickNameSearchReq?: (INickNameSearchRequest|null);

    /** NetMessageRequest addRoomReq */
    addRoomReq?: (IAddRoomRequest|null);

    /** NetMessageRequest addRoomRes */
    addRoomRes?: (IAddRoomResponse|null);

    /** NetMessageRequest outRoomReq */
    outRoomReq?: (IOutRoomRequest|null);

    /** NetMessageRequest chatReq */
    chatReq?: (IChatRequest|null);

    /** NetMessageRequest userStatusQueryReq */
    userStatusQueryReq?: (IUserStatusQueryRequest|null);

    /** NetMessageRequest startMatchReq */
    startMatchReq?: (IStartMatchRequest|null);

    /** NetMessageRequest gameOver2Req */
    gameOver2Req?: (IGameOver2Request|null);

    /** NetMessageRequest addLiveReq */
    addLiveReq?: (IAddLiveRequest|null);

    /** NetMessageRequest uploadBiFenReq */
    uploadBiFenReq?: (IUploadBiFenRequest|null);

    /** NetMessageRequest followListReq */
    followListReq?: (IFollowListRequest|null);

    /** NetMessageRequest validateOpenRoomReq */
    validateOpenRoomReq?: (IValidateOpenRoomRequest|null);
}

/** Represents a NetMessageRequest. */
export class NetMessageRequest implements INetMessageRequest {

    /**
     * Constructs a new NetMessageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageRequest);

    /** NetMessageRequest userRegister. */
    public userRegister?: (IUserRegisterRequest|null);

    /** NetMessageRequest userLogin. */
    public userLogin?: (IUserLoginRequest|null);

    /** NetMessageRequest characterDetail. */
    public characterDetail?: (ICharacterDetailRequest|null);

    /** NetMessageRequest updateNickName. */
    public updateNickName?: (IUpdateNickNameRequest|null);

    /** NetMessageRequest attrPromote. */
    public attrPromote?: (IAttrPromoteRequest|null);

    /** NetMessageRequest combatPowerRanking. */
    public combatPowerRanking?: (ICombatPowerRankingRequest|null);

    /** NetMessageRequest itemBuy. */
    public itemBuy?: (IItemBuyRequest|null);

    /** NetMessageRequest followReq. */
    public followReq?: (IFollowRequest|null);

    /** NetMessageRequest unLockReq. */
    public unLockReq?: (IUnLockRequest|null);

    /** NetMessageRequest switchCharacterReq. */
    public switchCharacterReq?: (ISwitchCharacterRequest|null);

    /** NetMessageRequest bagHandleReq. */
    public bagHandleReq?: (IBagHandleRequest|null);

    /** NetMessageRequest queryTranReq. */
    public queryTranReq?: (IQueryTranRequest|null);

    /** NetMessageRequest buyTranReq. */
    public buyTranReq?: (IBuyTranRequest|null);

    /** NetMessageRequest heartBeatReq. */
    public heartBeatReq?: (IHeartBeatRequest|null);

    /** NetMessageRequest offerPriceReq. */
    public offerPriceReq?: (IOfferPriceRequest|null);

    /** NetMessageRequest auctionReq. */
    public auctionReq?: (IAuctionRequest|null);

    /** NetMessageRequest getAuctionListReq. */
    public getAuctionListReq?: (IGetAuctionListRequest|null);

    /** NetMessageRequest myRoomReq. */
    public myRoomReq?: (IMyRoomRequest|null);

    /** NetMessageRequest inviteReq. */
    public inviteReq?: (IInviteRequest|null);

    /** NetMessageRequest inviteRes. */
    public inviteRes?: (IInviteResponse|null);

    /** NetMessageRequest kickOutReq. */
    public kickOutReq?: (IKickOutRequest|null);

    /** NetMessageRequest roomStartGameReq. */
    public roomStartGameReq?: (IRoomStartGameRequest|null);

    /** NetMessageRequest nickNameSearchReq. */
    public nickNameSearchReq?: (INickNameSearchRequest|null);

    /** NetMessageRequest addRoomReq. */
    public addRoomReq?: (IAddRoomRequest|null);

    /** NetMessageRequest addRoomRes. */
    public addRoomRes?: (IAddRoomResponse|null);

    /** NetMessageRequest outRoomReq. */
    public outRoomReq?: (IOutRoomRequest|null);

    /** NetMessageRequest chatReq. */
    public chatReq?: (IChatRequest|null);

    /** NetMessageRequest userStatusQueryReq. */
    public userStatusQueryReq?: (IUserStatusQueryRequest|null);

    /** NetMessageRequest startMatchReq. */
    public startMatchReq?: (IStartMatchRequest|null);

    /** NetMessageRequest gameOver2Req. */
    public gameOver2Req?: (IGameOver2Request|null);

    /** NetMessageRequest addLiveReq. */
    public addLiveReq?: (IAddLiveRequest|null);

    /** NetMessageRequest uploadBiFenReq. */
    public uploadBiFenReq?: (IUploadBiFenRequest|null);

    /** NetMessageRequest followListReq. */
    public followListReq?: (IFollowListRequest|null);

    /** NetMessageRequest validateOpenRoomReq. */
    public validateOpenRoomReq?: (IValidateOpenRoomRequest|null);

    /**
     * Creates a new NetMessageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageRequest instance
     */
    public static create(properties?: INetMessageRequest): NetMessageRequest;

    /**
     * Encodes the specified NetMessageRequest message. Does not implicitly {@link NetMessageRequest.verify|verify} messages.
     * @param message NetMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageRequest message, length delimited. Does not implicitly {@link NetMessageRequest.verify|verify} messages.
     * @param message NetMessageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageRequest;

    /**
     * Decodes a NetMessageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageRequest;

    /**
     * Verifies a NetMessageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NetMessageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): NetMessageRequest;

    /**
     * Creates a plain object from a NetMessageRequest message. Also converts values to other types if specified.
     * @param message NetMessageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NetMessageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NetMessageResponse. */
export interface INetMessageResponse {

    /** NetMessageResponse userRegister */
    userRegister?: (IUserRegisterResponse|null);

    /** NetMessageResponse userLogin */
    userLogin?: (IUserLoginResponse|null);

    /** NetMessageResponse characterDetail */
    characterDetail?: (ICharacterDetailResponse|null);

    /** NetMessageResponse updateNickName */
    updateNickName?: (IUpdateNickNameResponse|null);

    /** NetMessageResponse attrPromote */
    attrPromote?: (IAttrPromoteInfoResponse|null);

    /** NetMessageResponse combatPowerRanking */
    combatPowerRanking?: (ICombatPowerRankingResponse|null);

    /** NetMessageResponse itemBuy */
    itemBuy?: (IItemBuyResponse|null);

    /** NetMessageResponse followRes */
    followRes?: (IFollowResponse|null);

    /** NetMessageResponse unLockRes */
    unLockRes?: (IUnLockResponse|null);

    /** NetMessageResponse switchCharacterRes */
    switchCharacterRes?: (ISwitchCharacterResponse|null);

    /** NetMessageResponse bagHandleRes */
    bagHandleRes?: (IBagHandleResponse|null);

    /** NetMessageResponse userStatusChangeRes */
    userStatusChangeRes?: (IUserStatusChangeResponse|null);

    /** NetMessageResponse queryTranRes */
    queryTranRes?: (IQueryTranResponse|null);

    /** NetMessageResponse buyTranRes */
    buyTranRes?: (IBuyTranResponse|null);

    /** NetMessageResponse heartBeatRes */
    heartBeatRes?: (IHeartBeatResponse|null);

    /** NetMessageResponse offerPriceRes */
    offerPriceRes?: (IOfferPriceResponse|null);

    /** NetMessageResponse auctionRes */
    auctionRes?: (IAuctionResponse|null);

    /** NetMessageResponse getAuctionListRes */
    getAuctionListRes?: (IGetAuctionListResponse|null);

    /** NetMessageResponse tipsRes */
    tipsRes?: (ITipsResponse|null);

    /** NetMessageResponse myRoomRes */
    myRoomRes?: (IMyRoomResponse|null);

    /** NetMessageResponse inviteReq */
    inviteReq?: (IInviteRequest|null);

    /** NetMessageResponse inviteRes */
    inviteRes?: (IInviteResponse|null);

    /** NetMessageResponse kickOutRes */
    kickOutRes?: (IKickOutResponse|null);

    /** NetMessageResponse roomStartGameRes */
    roomStartGameRes?: (IRoomStartGameResponse|null);

    /** NetMessageResponse nickNameSearchRes */
    nickNameSearchRes?: (INickNameSearchResponse|null);

    /** NetMessageResponse followListRes */
    followListRes?: (IFollowListResponse|null);

    /** NetMessageResponse addRoomReq */
    addRoomReq?: (IAddRoomRequest|null);

    /** NetMessageResponse addRoomRes */
    addRoomRes?: (IAddRoomResponse|null);

    /** NetMessageResponse outRoomRes */
    outRoomRes?: (IOutRoomResponse|null);

    /** NetMessageResponse chatRes */
    chatRes?: (IChatResponse|null);

    /** NetMessageResponse userStatusQueryRes */
    userStatusQueryRes?: (IUserStatusQueryResponse|null);

    /** NetMessageResponse startMatchRes */
    startMatchRes?: (IStartMatchResponse|null);

    /** NetMessageResponse matchRes */
    matchRes?: (IMatchResponse|null);

    /** NetMessageResponse addLiveRes */
    addLiveRes?: (IAddLiveResponse|null);

    /** NetMessageResponse validateOpenRoomRes */
    validateOpenRoomRes?: (IValidateOpenRoomResponse|null);

    /** NetMessageResponse statusNotify */
    statusNotify?: (IStatusNotify|null);
}

/** Represents a NetMessageResponse. */
export class NetMessageResponse implements INetMessageResponse {

    /**
     * Constructs a new NetMessageResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetMessageResponse);

    /** NetMessageResponse userRegister. */
    public userRegister?: (IUserRegisterResponse|null);

    /** NetMessageResponse userLogin. */
    public userLogin?: (IUserLoginResponse|null);

    /** NetMessageResponse characterDetail. */
    public characterDetail?: (ICharacterDetailResponse|null);

    /** NetMessageResponse updateNickName. */
    public updateNickName?: (IUpdateNickNameResponse|null);

    /** NetMessageResponse attrPromote. */
    public attrPromote?: (IAttrPromoteInfoResponse|null);

    /** NetMessageResponse combatPowerRanking. */
    public combatPowerRanking?: (ICombatPowerRankingResponse|null);

    /** NetMessageResponse itemBuy. */
    public itemBuy?: (IItemBuyResponse|null);

    /** NetMessageResponse followRes. */
    public followRes?: (IFollowResponse|null);

    /** NetMessageResponse unLockRes. */
    public unLockRes?: (IUnLockResponse|null);

    /** NetMessageResponse switchCharacterRes. */
    public switchCharacterRes?: (ISwitchCharacterResponse|null);

    /** NetMessageResponse bagHandleRes. */
    public bagHandleRes?: (IBagHandleResponse|null);

    /** NetMessageResponse userStatusChangeRes. */
    public userStatusChangeRes?: (IUserStatusChangeResponse|null);

    /** NetMessageResponse queryTranRes. */
    public queryTranRes?: (IQueryTranResponse|null);

    /** NetMessageResponse buyTranRes. */
    public buyTranRes?: (IBuyTranResponse|null);

    /** NetMessageResponse heartBeatRes. */
    public heartBeatRes?: (IHeartBeatResponse|null);

    /** NetMessageResponse offerPriceRes. */
    public offerPriceRes?: (IOfferPriceResponse|null);

    /** NetMessageResponse auctionRes. */
    public auctionRes?: (IAuctionResponse|null);

    /** NetMessageResponse getAuctionListRes. */
    public getAuctionListRes?: (IGetAuctionListResponse|null);

    /** NetMessageResponse tipsRes. */
    public tipsRes?: (ITipsResponse|null);

    /** NetMessageResponse myRoomRes. */
    public myRoomRes?: (IMyRoomResponse|null);

    /** NetMessageResponse inviteReq. */
    public inviteReq?: (IInviteRequest|null);

    /** NetMessageResponse inviteRes. */
    public inviteRes?: (IInviteResponse|null);

    /** NetMessageResponse kickOutRes. */
    public kickOutRes?: (IKickOutResponse|null);

    /** NetMessageResponse roomStartGameRes. */
    public roomStartGameRes?: (IRoomStartGameResponse|null);

    /** NetMessageResponse nickNameSearchRes. */
    public nickNameSearchRes?: (INickNameSearchResponse|null);

    /** NetMessageResponse followListRes. */
    public followListRes?: (IFollowListResponse|null);

    /** NetMessageResponse addRoomReq. */
    public addRoomReq?: (IAddRoomRequest|null);

    /** NetMessageResponse addRoomRes. */
    public addRoomRes?: (IAddRoomResponse|null);

    /** NetMessageResponse outRoomRes. */
    public outRoomRes?: (IOutRoomResponse|null);

    /** NetMessageResponse chatRes. */
    public chatRes?: (IChatResponse|null);

    /** NetMessageResponse userStatusQueryRes. */
    public userStatusQueryRes?: (IUserStatusQueryResponse|null);

    /** NetMessageResponse startMatchRes. */
    public startMatchRes?: (IStartMatchResponse|null);

    /** NetMessageResponse matchRes. */
    public matchRes?: (IMatchResponse|null);

    /** NetMessageResponse addLiveRes. */
    public addLiveRes?: (IAddLiveResponse|null);

    /** NetMessageResponse validateOpenRoomRes. */
    public validateOpenRoomRes?: (IValidateOpenRoomResponse|null);

    /** NetMessageResponse statusNotify. */
    public statusNotify?: (IStatusNotify|null);

    /**
     * Creates a new NetMessageResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetMessageResponse instance
     */
    public static create(properties?: INetMessageResponse): NetMessageResponse;

    /**
     * Encodes the specified NetMessageResponse message. Does not implicitly {@link NetMessageResponse.verify|verify} messages.
     * @param message NetMessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetMessageResponse message, length delimited. Does not implicitly {@link NetMessageResponse.verify|verify} messages.
     * @param message NetMessageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetMessageResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetMessageResponse;

    /**
     * Decodes a NetMessageResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetMessageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetMessageResponse;

    /**
     * Verifies a NetMessageResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NetMessageResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetMessageResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): NetMessageResponse;

    /**
     * Creates a plain object from a NetMessageResponse message. Also converts values to other types if specified.
     * @param message NetMessageResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetMessageResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NetMessageResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserLoginRequest. */
export interface IUserLoginRequest {

    /** UserLoginRequest userName */
    userName?: (string|null);

    /** UserLoginRequest passward */
    passward?: (string|null);
}

/** Represents a UserLoginRequest. */
export class UserLoginRequest implements IUserLoginRequest {

    /**
     * Constructs a new UserLoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLoginRequest);

    /** UserLoginRequest userName. */
    public userName: string;

    /** UserLoginRequest passward. */
    public passward: string;

    /**
     * Creates a new UserLoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLoginRequest instance
     */
    public static create(properties?: IUserLoginRequest): UserLoginRequest;

    /**
     * Encodes the specified UserLoginRequest message. Does not implicitly {@link UserLoginRequest.verify|verify} messages.
     * @param message UserLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserLoginRequest message, length delimited. Does not implicitly {@link UserLoginRequest.verify|verify} messages.
     * @param message UserLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLoginRequest;

    /**
     * Decodes a UserLoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserLoginRequest;

    /**
     * Verifies a UserLoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserLoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserLoginRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserLoginRequest;

    /**
     * Creates a plain object from a UserLoginRequest message. Also converts values to other types if specified.
     * @param message UserLoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserLoginRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserLoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserLoginResponse. */
export interface IUserLoginResponse {

    /** UserLoginResponse result */
    result?: (Result|null);

    /** UserLoginResponse errormsg */
    errormsg?: (string|null);

    /** UserLoginResponse user */
    user?: (INUser|null);
}

/** Represents a UserLoginResponse. */
export class UserLoginResponse implements IUserLoginResponse {

    /**
     * Constructs a new UserLoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserLoginResponse);

    /** UserLoginResponse result. */
    public result: Result;

    /** UserLoginResponse errormsg. */
    public errormsg: string;

    /** UserLoginResponse user. */
    public user?: (INUser|null);

    /**
     * Creates a new UserLoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserLoginResponse instance
     */
    public static create(properties?: IUserLoginResponse): UserLoginResponse;

    /**
     * Encodes the specified UserLoginResponse message. Does not implicitly {@link UserLoginResponse.verify|verify} messages.
     * @param message UserLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserLoginResponse message, length delimited. Does not implicitly {@link UserLoginResponse.verify|verify} messages.
     * @param message UserLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserLoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserLoginResponse;

    /**
     * Decodes a UserLoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserLoginResponse;

    /**
     * Verifies a UserLoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserLoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserLoginResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserLoginResponse;

    /**
     * Creates a plain object from a UserLoginResponse message. Also converts values to other types if specified.
     * @param message UserLoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserLoginResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserLoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserRegisterRequest. */
export interface IUserRegisterRequest {

    /** UserRegisterRequest userName */
    userName?: (string|null);

    /** UserRegisterRequest password */
    password?: (string|null);
}

/** Represents a UserRegisterRequest. */
export class UserRegisterRequest implements IUserRegisterRequest {

    /**
     * Constructs a new UserRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRegisterRequest);

    /** UserRegisterRequest userName. */
    public userName: string;

    /** UserRegisterRequest password. */
    public password: string;

    /**
     * Creates a new UserRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRegisterRequest instance
     */
    public static create(properties?: IUserRegisterRequest): UserRegisterRequest;

    /**
     * Encodes the specified UserRegisterRequest message. Does not implicitly {@link UserRegisterRequest.verify|verify} messages.
     * @param message UserRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserRegisterRequest message, length delimited. Does not implicitly {@link UserRegisterRequest.verify|verify} messages.
     * @param message UserRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRegisterRequest;

    /**
     * Decodes a UserRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRegisterRequest;

    /**
     * Verifies a UserRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserRegisterRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserRegisterRequest;

    /**
     * Creates a plain object from a UserRegisterRequest message. Also converts values to other types if specified.
     * @param message UserRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserRegisterRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserRegisterResponse. */
export interface IUserRegisterResponse {

    /** UserRegisterResponse result */
    result?: (Result|null);

    /** UserRegisterResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a UserRegisterResponse. */
export class UserRegisterResponse implements IUserRegisterResponse {

    /**
     * Constructs a new UserRegisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRegisterResponse);

    /** UserRegisterResponse result. */
    public result: Result;

    /** UserRegisterResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new UserRegisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRegisterResponse instance
     */
    public static create(properties?: IUserRegisterResponse): UserRegisterResponse;

    /**
     * Encodes the specified UserRegisterResponse message. Does not implicitly {@link UserRegisterResponse.verify|verify} messages.
     * @param message UserRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserRegisterResponse message, length delimited. Does not implicitly {@link UserRegisterResponse.verify|verify} messages.
     * @param message UserRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRegisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRegisterResponse;

    /**
     * Decodes a UserRegisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRegisterResponse;

    /**
     * Verifies a UserRegisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserRegisterResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserRegisterResponse;

    /**
     * Creates a plain object from a UserRegisterResponse message. Also converts values to other types if specified.
     * @param message UserRegisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserRegisterResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserRegisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a CharacterDetailRequest. */
export interface ICharacterDetailRequest {

    /** CharacterDetailRequest userId */
    userId?: (number|null);

    /** CharacterDetailRequest tCharacterId */
    tCharacterId?: (number|null);
}

/** Represents a CharacterDetailRequest. */
export class CharacterDetailRequest implements ICharacterDetailRequest {

    /**
     * Constructs a new CharacterDetailRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterDetailRequest);

    /** CharacterDetailRequest userId. */
    public userId: number;

    /** CharacterDetailRequest tCharacterId. */
    public tCharacterId: number;

    /**
     * Creates a new CharacterDetailRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterDetailRequest instance
     */
    public static create(properties?: ICharacterDetailRequest): CharacterDetailRequest;

    /**
     * Encodes the specified CharacterDetailRequest message. Does not implicitly {@link CharacterDetailRequest.verify|verify} messages.
     * @param message CharacterDetailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterDetailRequest message, length delimited. Does not implicitly {@link CharacterDetailRequest.verify|verify} messages.
     * @param message CharacterDetailRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterDetailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterDetailRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterDetailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterDetailRequest;

    /**
     * Decodes a CharacterDetailRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterDetailRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterDetailRequest;

    /**
     * Verifies a CharacterDetailRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a CharacterDetailRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterDetailRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): CharacterDetailRequest;

    /**
     * Creates a plain object from a CharacterDetailRequest message. Also converts values to other types if specified.
     * @param message CharacterDetailRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterDetailRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this CharacterDetailRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a CharacterDetailResponse. */
export interface ICharacterDetailResponse {

    /** CharacterDetailResponse result */
    result?: (Result|null);

    /** CharacterDetailResponse errormsg */
    errormsg?: (string|null);

    /** CharacterDetailResponse user */
    user?: (INUser|null);
}

/** Represents a CharacterDetailResponse. */
export class CharacterDetailResponse implements ICharacterDetailResponse {

    /**
     * Constructs a new CharacterDetailResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterDetailResponse);

    /** CharacterDetailResponse result. */
    public result: Result;

    /** CharacterDetailResponse errormsg. */
    public errormsg: string;

    /** CharacterDetailResponse user. */
    public user?: (INUser|null);

    /**
     * Creates a new CharacterDetailResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterDetailResponse instance
     */
    public static create(properties?: ICharacterDetailResponse): CharacterDetailResponse;

    /**
     * Encodes the specified CharacterDetailResponse message. Does not implicitly {@link CharacterDetailResponse.verify|verify} messages.
     * @param message CharacterDetailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterDetailResponse message, length delimited. Does not implicitly {@link CharacterDetailResponse.verify|verify} messages.
     * @param message CharacterDetailResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterDetailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterDetailResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterDetailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterDetailResponse;

    /**
     * Decodes a CharacterDetailResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterDetailResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterDetailResponse;

    /**
     * Verifies a CharacterDetailResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a CharacterDetailResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterDetailResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): CharacterDetailResponse;

    /**
     * Creates a plain object from a CharacterDetailResponse message. Also converts values to other types if specified.
     * @param message CharacterDetailResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterDetailResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this CharacterDetailResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UpdateNickNameRequest. */
export interface IUpdateNickNameRequest {

    /** UpdateNickNameRequest nickname */
    nickname?: (string|null);
}

/** Represents an UpdateNickNameRequest. */
export class UpdateNickNameRequest implements IUpdateNickNameRequest {

    /**
     * Constructs a new UpdateNickNameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateNickNameRequest);

    /** UpdateNickNameRequest nickname. */
    public nickname: string;

    /**
     * Creates a new UpdateNickNameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateNickNameRequest instance
     */
    public static create(properties?: IUpdateNickNameRequest): UpdateNickNameRequest;

    /**
     * Encodes the specified UpdateNickNameRequest message. Does not implicitly {@link UpdateNickNameRequest.verify|verify} messages.
     * @param message UpdateNickNameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateNickNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateNickNameRequest message, length delimited. Does not implicitly {@link UpdateNickNameRequest.verify|verify} messages.
     * @param message UpdateNickNameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateNickNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateNickNameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateNickNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateNickNameRequest;

    /**
     * Decodes an UpdateNickNameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateNickNameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateNickNameRequest;

    /**
     * Verifies an UpdateNickNameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UpdateNickNameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateNickNameRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UpdateNickNameRequest;

    /**
     * Creates a plain object from an UpdateNickNameRequest message. Also converts values to other types if specified.
     * @param message UpdateNickNameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateNickNameRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UpdateNickNameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UpdateNickNameResponse. */
export interface IUpdateNickNameResponse {

    /** UpdateNickNameResponse result */
    result?: (Result|null);

    /** UpdateNickNameResponse errormsg */
    errormsg?: (string|null);
}

/** Represents an UpdateNickNameResponse. */
export class UpdateNickNameResponse implements IUpdateNickNameResponse {

    /**
     * Constructs a new UpdateNickNameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateNickNameResponse);

    /** UpdateNickNameResponse result. */
    public result: Result;

    /** UpdateNickNameResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new UpdateNickNameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateNickNameResponse instance
     */
    public static create(properties?: IUpdateNickNameResponse): UpdateNickNameResponse;

    /**
     * Encodes the specified UpdateNickNameResponse message. Does not implicitly {@link UpdateNickNameResponse.verify|verify} messages.
     * @param message UpdateNickNameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateNickNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateNickNameResponse message, length delimited. Does not implicitly {@link UpdateNickNameResponse.verify|verify} messages.
     * @param message UpdateNickNameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateNickNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateNickNameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateNickNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateNickNameResponse;

    /**
     * Decodes an UpdateNickNameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateNickNameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateNickNameResponse;

    /**
     * Verifies an UpdateNickNameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UpdateNickNameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateNickNameResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UpdateNickNameResponse;

    /**
     * Creates a plain object from an UpdateNickNameResponse message. Also converts values to other types if specified.
     * @param message UpdateNickNameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateNickNameResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UpdateNickNameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AttrPromoteInfoResponse. */
export interface IAttrPromoteInfoResponse {

    /** AttrPromoteInfoResponse result */
    result?: (Result|null);

    /** AttrPromoteInfoResponse errormsg */
    errormsg?: (string|null);

    /** AttrPromoteInfoResponse spot */
    spot?: (number|null);

    /** AttrPromoteInfoResponse attrValue */
    attrValue?: (number|null);
}

/** Represents an AttrPromoteInfoResponse. */
export class AttrPromoteInfoResponse implements IAttrPromoteInfoResponse {

    /**
     * Constructs a new AttrPromoteInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttrPromoteInfoResponse);

    /** AttrPromoteInfoResponse result. */
    public result: Result;

    /** AttrPromoteInfoResponse errormsg. */
    public errormsg: string;

    /** AttrPromoteInfoResponse spot. */
    public spot: number;

    /** AttrPromoteInfoResponse attrValue. */
    public attrValue: number;

    /**
     * Creates a new AttrPromoteInfoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttrPromoteInfoResponse instance
     */
    public static create(properties?: IAttrPromoteInfoResponse): AttrPromoteInfoResponse;

    /**
     * Encodes the specified AttrPromoteInfoResponse message. Does not implicitly {@link AttrPromoteInfoResponse.verify|verify} messages.
     * @param message AttrPromoteInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttrPromoteInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttrPromoteInfoResponse message, length delimited. Does not implicitly {@link AttrPromoteInfoResponse.verify|verify} messages.
     * @param message AttrPromoteInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttrPromoteInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttrPromoteInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttrPromoteInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AttrPromoteInfoResponse;

    /**
     * Decodes an AttrPromoteInfoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttrPromoteInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttrPromoteInfoResponse;

    /**
     * Verifies an AttrPromoteInfoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AttrPromoteInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttrPromoteInfoResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): AttrPromoteInfoResponse;

    /**
     * Creates a plain object from an AttrPromoteInfoResponse message. Also converts values to other types if specified.
     * @param message AttrPromoteInfoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AttrPromoteInfoResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AttrPromoteInfoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AttrPromoteRequest. */
export interface IAttrPromoteRequest {

    /** AttrPromoteRequest tCharacterId */
    tCharacterId?: (number|null);

    /** AttrPromoteRequest attrPromoteType */
    attrPromoteType?: (AttrPromoteType|null);
}

/** Represents an AttrPromoteRequest. */
export class AttrPromoteRequest implements IAttrPromoteRequest {

    /**
     * Constructs a new AttrPromoteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAttrPromoteRequest);

    /** AttrPromoteRequest tCharacterId. */
    public tCharacterId: number;

    /** AttrPromoteRequest attrPromoteType. */
    public attrPromoteType: AttrPromoteType;

    /**
     * Creates a new AttrPromoteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AttrPromoteRequest instance
     */
    public static create(properties?: IAttrPromoteRequest): AttrPromoteRequest;

    /**
     * Encodes the specified AttrPromoteRequest message. Does not implicitly {@link AttrPromoteRequest.verify|verify} messages.
     * @param message AttrPromoteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAttrPromoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AttrPromoteRequest message, length delimited. Does not implicitly {@link AttrPromoteRequest.verify|verify} messages.
     * @param message AttrPromoteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAttrPromoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AttrPromoteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AttrPromoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AttrPromoteRequest;

    /**
     * Decodes an AttrPromoteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AttrPromoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AttrPromoteRequest;

    /**
     * Verifies an AttrPromoteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AttrPromoteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AttrPromoteRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): AttrPromoteRequest;

    /**
     * Creates a plain object from an AttrPromoteRequest message. Also converts values to other types if specified.
     * @param message AttrPromoteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AttrPromoteRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AttrPromoteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** AttrPromoteType enum. */
export enum AttrPromoteType {
    Att = 0,
    Def = 1,
    Hp = 2,
    Cri = 3,
    Resu = 4,
    Speed = 5,
    Cd = 6
}

/** Properties of a CombatPowerRankingRequest. */
export interface ICombatPowerRankingRequest {
}

/** Represents a CombatPowerRankingRequest. */
export class CombatPowerRankingRequest implements ICombatPowerRankingRequest {

    /**
     * Constructs a new CombatPowerRankingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICombatPowerRankingRequest);

    /**
     * Creates a new CombatPowerRankingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CombatPowerRankingRequest instance
     */
    public static create(properties?: ICombatPowerRankingRequest): CombatPowerRankingRequest;

    /**
     * Encodes the specified CombatPowerRankingRequest message. Does not implicitly {@link CombatPowerRankingRequest.verify|verify} messages.
     * @param message CombatPowerRankingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICombatPowerRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CombatPowerRankingRequest message, length delimited. Does not implicitly {@link CombatPowerRankingRequest.verify|verify} messages.
     * @param message CombatPowerRankingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICombatPowerRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CombatPowerRankingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CombatPowerRankingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CombatPowerRankingRequest;

    /**
     * Decodes a CombatPowerRankingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CombatPowerRankingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CombatPowerRankingRequest;

    /**
     * Verifies a CombatPowerRankingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a CombatPowerRankingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CombatPowerRankingRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): CombatPowerRankingRequest;

    /**
     * Creates a plain object from a CombatPowerRankingRequest message. Also converts values to other types if specified.
     * @param message CombatPowerRankingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CombatPowerRankingRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this CombatPowerRankingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a CombatPowerRankingResponse. */
export interface ICombatPowerRankingResponse {

    /** CombatPowerRankingResponse users */
    users?: (INUser[]|null);

    /** CombatPowerRankingResponse myRanking */
    myRanking?: (number|null);
}

/** Represents a CombatPowerRankingResponse. */
export class CombatPowerRankingResponse implements ICombatPowerRankingResponse {

    /**
     * Constructs a new CombatPowerRankingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICombatPowerRankingResponse);

    /** CombatPowerRankingResponse users. */
    public users: [ 'Array' ].<INUser>;

    /** CombatPowerRankingResponse myRanking. */
    public myRanking: number;

    /**
     * Creates a new CombatPowerRankingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CombatPowerRankingResponse instance
     */
    public static create(properties?: ICombatPowerRankingResponse): CombatPowerRankingResponse;

    /**
     * Encodes the specified CombatPowerRankingResponse message. Does not implicitly {@link CombatPowerRankingResponse.verify|verify} messages.
     * @param message CombatPowerRankingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICombatPowerRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CombatPowerRankingResponse message, length delimited. Does not implicitly {@link CombatPowerRankingResponse.verify|verify} messages.
     * @param message CombatPowerRankingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICombatPowerRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CombatPowerRankingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CombatPowerRankingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CombatPowerRankingResponse;

    /**
     * Decodes a CombatPowerRankingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CombatPowerRankingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CombatPowerRankingResponse;

    /**
     * Verifies a CombatPowerRankingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a CombatPowerRankingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CombatPowerRankingResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): CombatPowerRankingResponse;

    /**
     * Creates a plain object from a CombatPowerRankingResponse message. Also converts values to other types if specified.
     * @param message CombatPowerRankingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CombatPowerRankingResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this CombatPowerRankingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an ItemBuyRequest. */
export interface IItemBuyRequest {

    /** ItemBuyRequest shopId */
    shopId?: (number|null);

    /** ItemBuyRequest itemId */
    itemId?: (number|null);

    /** ItemBuyRequest count */
    count?: (number|null);
}

/** Represents an ItemBuyRequest. */
export class ItemBuyRequest implements IItemBuyRequest {

    /**
     * Constructs a new ItemBuyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemBuyRequest);

    /** ItemBuyRequest shopId. */
    public shopId: number;

    /** ItemBuyRequest itemId. */
    public itemId: number;

    /** ItemBuyRequest count. */
    public count: number;

    /**
     * Creates a new ItemBuyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemBuyRequest instance
     */
    public static create(properties?: IItemBuyRequest): ItemBuyRequest;

    /**
     * Encodes the specified ItemBuyRequest message. Does not implicitly {@link ItemBuyRequest.verify|verify} messages.
     * @param message ItemBuyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemBuyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemBuyRequest message, length delimited. Does not implicitly {@link ItemBuyRequest.verify|verify} messages.
     * @param message ItemBuyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemBuyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemBuyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemBuyRequest;

    /**
     * Decodes an ItemBuyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemBuyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemBuyRequest;

    /**
     * Verifies an ItemBuyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an ItemBuyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ItemBuyRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): ItemBuyRequest;

    /**
     * Creates a plain object from an ItemBuyRequest message. Also converts values to other types if specified.
     * @param message ItemBuyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemBuyRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ItemBuyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an ItemBuyResponse. */
export interface IItemBuyResponse {

    /** ItemBuyResponse result */
    result?: (Result|null);

    /** ItemBuyResponse errormsg */
    errormsg?: (string|null);
}

/** Represents an ItemBuyResponse. */
export class ItemBuyResponse implements IItemBuyResponse {

    /**
     * Constructs a new ItemBuyResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IItemBuyResponse);

    /** ItemBuyResponse result. */
    public result: Result;

    /** ItemBuyResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new ItemBuyResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ItemBuyResponse instance
     */
    public static create(properties?: IItemBuyResponse): ItemBuyResponse;

    /**
     * Encodes the specified ItemBuyResponse message. Does not implicitly {@link ItemBuyResponse.verify|verify} messages.
     * @param message ItemBuyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IItemBuyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ItemBuyResponse message, length delimited. Does not implicitly {@link ItemBuyResponse.verify|verify} messages.
     * @param message ItemBuyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IItemBuyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ItemBuyResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ItemBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ItemBuyResponse;

    /**
     * Decodes an ItemBuyResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ItemBuyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ItemBuyResponse;

    /**
     * Verifies an ItemBuyResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an ItemBuyResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ItemBuyResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): ItemBuyResponse;

    /**
     * Creates a plain object from an ItemBuyResponse message. Also converts values to other types if specified.
     * @param message ItemBuyResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ItemBuyResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ItemBuyResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FollowRequest. */
export interface IFollowRequest {

    /** FollowRequest userId */
    userId?: (number|null);

    /** FollowRequest isFollow */
    isFollow?: (boolean|null);
}

/** Represents a FollowRequest. */
export class FollowRequest implements IFollowRequest {

    /**
     * Constructs a new FollowRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFollowRequest);

    /** FollowRequest userId. */
    public userId: number;

    /** FollowRequest isFollow. */
    public isFollow: boolean;

    /**
     * Creates a new FollowRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FollowRequest instance
     */
    public static create(properties?: IFollowRequest): FollowRequest;

    /**
     * Encodes the specified FollowRequest message. Does not implicitly {@link FollowRequest.verify|verify} messages.
     * @param message FollowRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFollowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FollowRequest message, length delimited. Does not implicitly {@link FollowRequest.verify|verify} messages.
     * @param message FollowRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFollowRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FollowRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FollowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FollowRequest;

    /**
     * Decodes a FollowRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FollowRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FollowRequest;

    /**
     * Verifies a FollowRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FollowRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FollowRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): FollowRequest;

    /**
     * Creates a plain object from a FollowRequest message. Also converts values to other types if specified.
     * @param message FollowRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FollowRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FollowRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FollowResponse. */
export interface IFollowResponse {

    /** FollowResponse result */
    result?: (Result|null);

    /** FollowResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a FollowResponse. */
export class FollowResponse implements IFollowResponse {

    /**
     * Constructs a new FollowResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFollowResponse);

    /** FollowResponse result. */
    public result: Result;

    /** FollowResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new FollowResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FollowResponse instance
     */
    public static create(properties?: IFollowResponse): FollowResponse;

    /**
     * Encodes the specified FollowResponse message. Does not implicitly {@link FollowResponse.verify|verify} messages.
     * @param message FollowResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFollowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FollowResponse message, length delimited. Does not implicitly {@link FollowResponse.verify|verify} messages.
     * @param message FollowResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFollowResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FollowResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FollowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FollowResponse;

    /**
     * Decodes a FollowResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FollowResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FollowResponse;

    /**
     * Verifies a FollowResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FollowResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FollowResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): FollowResponse;

    /**
     * Creates a plain object from a FollowResponse message. Also converts values to other types if specified.
     * @param message FollowResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FollowResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FollowResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UnLockRequest. */
export interface IUnLockRequest {

    /** UnLockRequest cCharacterId */
    cCharacterId?: (number|null);
}

/** Represents an UnLockRequest. */
export class UnLockRequest implements IUnLockRequest {

    /**
     * Constructs a new UnLockRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnLockRequest);

    /** UnLockRequest cCharacterId. */
    public cCharacterId: number;

    /**
     * Creates a new UnLockRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnLockRequest instance
     */
    public static create(properties?: IUnLockRequest): UnLockRequest;

    /**
     * Encodes the specified UnLockRequest message. Does not implicitly {@link UnLockRequest.verify|verify} messages.
     * @param message UnLockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnLockRequest message, length delimited. Does not implicitly {@link UnLockRequest.verify|verify} messages.
     * @param message UnLockRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnLockRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnLockRequest;

    /**
     * Decodes an UnLockRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnLockRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnLockRequest;

    /**
     * Verifies an UnLockRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UnLockRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnLockRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UnLockRequest;

    /**
     * Creates a plain object from an UnLockRequest message. Also converts values to other types if specified.
     * @param message UnLockRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnLockRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UnLockRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UnLockResponse. */
export interface IUnLockResponse {

    /** UnLockResponse result */
    result?: (Result|null);

    /** UnLockResponse errormsg */
    errormsg?: (string|null);

    /** UnLockResponse unLockCharacter */
    unLockCharacter?: (IUnLockCharacter|null);
}

/** Represents an UnLockResponse. */
export class UnLockResponse implements IUnLockResponse {

    /**
     * Constructs a new UnLockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnLockResponse);

    /** UnLockResponse result. */
    public result: Result;

    /** UnLockResponse errormsg. */
    public errormsg: string;

    /** UnLockResponse unLockCharacter. */
    public unLockCharacter?: (IUnLockCharacter|null);

    /**
     * Creates a new UnLockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnLockResponse instance
     */
    public static create(properties?: IUnLockResponse): UnLockResponse;

    /**
     * Encodes the specified UnLockResponse message. Does not implicitly {@link UnLockResponse.verify|verify} messages.
     * @param message UnLockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnLockResponse message, length delimited. Does not implicitly {@link UnLockResponse.verify|verify} messages.
     * @param message UnLockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnLockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnLockResponse;

    /**
     * Decodes an UnLockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnLockResponse;

    /**
     * Verifies an UnLockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UnLockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnLockResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UnLockResponse;

    /**
     * Creates a plain object from an UnLockResponse message. Also converts values to other types if specified.
     * @param message UnLockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnLockResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UnLockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a SwitchCharacterRequest. */
export interface ISwitchCharacterRequest {

    /** SwitchCharacterRequest tCharacterId */
    tCharacterId?: (number|null);
}

/** Represents a SwitchCharacterRequest. */
export class SwitchCharacterRequest implements ISwitchCharacterRequest {

    /**
     * Constructs a new SwitchCharacterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISwitchCharacterRequest);

    /** SwitchCharacterRequest tCharacterId. */
    public tCharacterId: number;

    /**
     * Creates a new SwitchCharacterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SwitchCharacterRequest instance
     */
    public static create(properties?: ISwitchCharacterRequest): SwitchCharacterRequest;

    /**
     * Encodes the specified SwitchCharacterRequest message. Does not implicitly {@link SwitchCharacterRequest.verify|verify} messages.
     * @param message SwitchCharacterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISwitchCharacterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SwitchCharacterRequest message, length delimited. Does not implicitly {@link SwitchCharacterRequest.verify|verify} messages.
     * @param message SwitchCharacterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISwitchCharacterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SwitchCharacterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SwitchCharacterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchCharacterRequest;

    /**
     * Decodes a SwitchCharacterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SwitchCharacterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchCharacterRequest;

    /**
     * Verifies a SwitchCharacterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a SwitchCharacterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SwitchCharacterRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): SwitchCharacterRequest;

    /**
     * Creates a plain object from a SwitchCharacterRequest message. Also converts values to other types if specified.
     * @param message SwitchCharacterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SwitchCharacterRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this SwitchCharacterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a SwitchCharacterResponse. */
export interface ISwitchCharacterResponse {

    /** SwitchCharacterResponse result */
    result?: (Result|null);

    /** SwitchCharacterResponse errormsg */
    errormsg?: (string|null);

    /** SwitchCharacterResponse character */
    character?: (INCharacter|null);
}

/** Represents a SwitchCharacterResponse. */
export class SwitchCharacterResponse implements ISwitchCharacterResponse {

    /**
     * Constructs a new SwitchCharacterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISwitchCharacterResponse);

    /** SwitchCharacterResponse result. */
    public result: Result;

    /** SwitchCharacterResponse errormsg. */
    public errormsg: string;

    /** SwitchCharacterResponse character. */
    public character?: (INCharacter|null);

    /**
     * Creates a new SwitchCharacterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SwitchCharacterResponse instance
     */
    public static create(properties?: ISwitchCharacterResponse): SwitchCharacterResponse;

    /**
     * Encodes the specified SwitchCharacterResponse message. Does not implicitly {@link SwitchCharacterResponse.verify|verify} messages.
     * @param message SwitchCharacterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISwitchCharacterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SwitchCharacterResponse message, length delimited. Does not implicitly {@link SwitchCharacterResponse.verify|verify} messages.
     * @param message SwitchCharacterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISwitchCharacterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SwitchCharacterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SwitchCharacterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchCharacterResponse;

    /**
     * Decodes a SwitchCharacterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SwitchCharacterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchCharacterResponse;

    /**
     * Verifies a SwitchCharacterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a SwitchCharacterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SwitchCharacterResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): SwitchCharacterResponse;

    /**
     * Creates a plain object from a SwitchCharacterResponse message. Also converts values to other types if specified.
     * @param message SwitchCharacterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SwitchCharacterResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this SwitchCharacterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a BagHandleRequest. */
export interface IBagHandleRequest {

    /** BagHandleRequest itemId */
    itemId?: (number|null);

    /** BagHandleRequest bagHandleType */
    bagHandleType?: (BagHandleType|null);

    /** BagHandleRequest money */
    money?: (number|Long|null);
}

/** Represents a BagHandleRequest. */
export class BagHandleRequest implements IBagHandleRequest {

    /**
     * Constructs a new BagHandleRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBagHandleRequest);

    /** BagHandleRequest itemId. */
    public itemId: number;

    /** BagHandleRequest bagHandleType. */
    public bagHandleType: BagHandleType;

    /** BagHandleRequest money. */
    public money: (number|Long);

    /**
     * Creates a new BagHandleRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BagHandleRequest instance
     */
    public static create(properties?: IBagHandleRequest): BagHandleRequest;

    /**
     * Encodes the specified BagHandleRequest message. Does not implicitly {@link BagHandleRequest.verify|verify} messages.
     * @param message BagHandleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBagHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BagHandleRequest message, length delimited. Does not implicitly {@link BagHandleRequest.verify|verify} messages.
     * @param message BagHandleRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBagHandleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BagHandleRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BagHandleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BagHandleRequest;

    /**
     * Decodes a BagHandleRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BagHandleRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagHandleRequest;

    /**
     * Verifies a BagHandleRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a BagHandleRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BagHandleRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): BagHandleRequest;

    /**
     * Creates a plain object from a BagHandleRequest message. Also converts values to other types if specified.
     * @param message BagHandleRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BagHandleRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this BagHandleRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a BagHandleResponse. */
export interface IBagHandleResponse {

    /** BagHandleResponse result */
    result?: (Result|null);

    /** BagHandleResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a BagHandleResponse. */
export class BagHandleResponse implements IBagHandleResponse {

    /**
     * Constructs a new BagHandleResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBagHandleResponse);

    /** BagHandleResponse result. */
    public result: Result;

    /** BagHandleResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new BagHandleResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BagHandleResponse instance
     */
    public static create(properties?: IBagHandleResponse): BagHandleResponse;

    /**
     * Encodes the specified BagHandleResponse message. Does not implicitly {@link BagHandleResponse.verify|verify} messages.
     * @param message BagHandleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBagHandleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BagHandleResponse message, length delimited. Does not implicitly {@link BagHandleResponse.verify|verify} messages.
     * @param message BagHandleResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBagHandleResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BagHandleResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BagHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BagHandleResponse;

    /**
     * Decodes a BagHandleResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BagHandleResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BagHandleResponse;

    /**
     * Verifies a BagHandleResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a BagHandleResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BagHandleResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): BagHandleResponse;

    /**
     * Creates a plain object from a BagHandleResponse message. Also converts values to other types if specified.
     * @param message BagHandleResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BagHandleResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this BagHandleResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserStatusChangeResponse. */
export interface IUserStatusChangeResponse {

    /** UserStatusChangeResponse userStatusChanges */
    userStatusChanges?: (INUserStatusChange[]|null);
}

/** Represents a UserStatusChangeResponse. */
export class UserStatusChangeResponse implements IUserStatusChangeResponse {

    /**
     * Constructs a new UserStatusChangeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserStatusChangeResponse);

    /** UserStatusChangeResponse userStatusChanges. */
    public userStatusChanges: [ 'Array' ].<INUserStatusChange>;

    /**
     * Creates a new UserStatusChangeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserStatusChangeResponse instance
     */
    public static create(properties?: IUserStatusChangeResponse): UserStatusChangeResponse;

    /**
     * Encodes the specified UserStatusChangeResponse message. Does not implicitly {@link UserStatusChangeResponse.verify|verify} messages.
     * @param message UserStatusChangeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserStatusChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserStatusChangeResponse message, length delimited. Does not implicitly {@link UserStatusChangeResponse.verify|verify} messages.
     * @param message UserStatusChangeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserStatusChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserStatusChangeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserStatusChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserStatusChangeResponse;

    /**
     * Decodes a UserStatusChangeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserStatusChangeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserStatusChangeResponse;

    /**
     * Verifies a UserStatusChangeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserStatusChangeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserStatusChangeResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserStatusChangeResponse;

    /**
     * Creates a plain object from a UserStatusChangeResponse message. Also converts values to other types if specified.
     * @param message UserStatusChangeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserStatusChangeResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserStatusChangeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a QueryTranRequest. */
export interface IQueryTranRequest {

    /** QueryTranRequest userId */
    userId?: (number|null);
}

/** Represents a QueryTranRequest. */
export class QueryTranRequest implements IQueryTranRequest {

    /**
     * Constructs a new QueryTranRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTranRequest);

    /** QueryTranRequest userId. */
    public userId: number;

    /**
     * Creates a new QueryTranRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTranRequest instance
     */
    public static create(properties?: IQueryTranRequest): QueryTranRequest;

    /**
     * Encodes the specified QueryTranRequest message. Does not implicitly {@link QueryTranRequest.verify|verify} messages.
     * @param message QueryTranRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTranRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryTranRequest message, length delimited. Does not implicitly {@link QueryTranRequest.verify|verify} messages.
     * @param message QueryTranRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryTranRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTranRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTranRequest;

    /**
     * Decodes a QueryTranRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryTranRequest;

    /**
     * Verifies a QueryTranRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a QueryTranRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryTranRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): QueryTranRequest;

    /**
     * Creates a plain object from a QueryTranRequest message. Also converts values to other types if specified.
     * @param message QueryTranRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryTranRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this QueryTranRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a QueryTranResponse. */
export interface IQueryTranResponse {

    /** QueryTranResponse items */
    items?: (INItem[]|null);

    /** QueryTranResponse result */
    result?: (Result|null);

    /** QueryTranResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a QueryTranResponse. */
export class QueryTranResponse implements IQueryTranResponse {

    /**
     * Constructs a new QueryTranResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryTranResponse);

    /** QueryTranResponse items. */
    public items: [ 'Array' ].<INItem>;

    /** QueryTranResponse result. */
    public result: Result;

    /** QueryTranResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new QueryTranResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryTranResponse instance
     */
    public static create(properties?: IQueryTranResponse): QueryTranResponse;

    /**
     * Encodes the specified QueryTranResponse message. Does not implicitly {@link QueryTranResponse.verify|verify} messages.
     * @param message QueryTranResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryTranResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryTranResponse message, length delimited. Does not implicitly {@link QueryTranResponse.verify|verify} messages.
     * @param message QueryTranResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryTranResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryTranResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryTranResponse;

    /**
     * Decodes a QueryTranResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryTranResponse;

    /**
     * Verifies a QueryTranResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a QueryTranResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryTranResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): QueryTranResponse;

    /**
     * Creates a plain object from a QueryTranResponse message. Also converts values to other types if specified.
     * @param message QueryTranResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryTranResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this QueryTranResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a BuyTranRequest. */
export interface IBuyTranRequest {

    /** BuyTranRequest userId */
    userId?: (number|null);

    /** BuyTranRequest itemId */
    itemId?: (number|null);
}

/** Represents a BuyTranRequest. */
export class BuyTranRequest implements IBuyTranRequest {

    /**
     * Constructs a new BuyTranRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBuyTranRequest);

    /** BuyTranRequest userId. */
    public userId: number;

    /** BuyTranRequest itemId. */
    public itemId: number;

    /**
     * Creates a new BuyTranRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuyTranRequest instance
     */
    public static create(properties?: IBuyTranRequest): BuyTranRequest;

    /**
     * Encodes the specified BuyTranRequest message. Does not implicitly {@link BuyTranRequest.verify|verify} messages.
     * @param message BuyTranRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBuyTranRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BuyTranRequest message, length delimited. Does not implicitly {@link BuyTranRequest.verify|verify} messages.
     * @param message BuyTranRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBuyTranRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuyTranRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BuyTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyTranRequest;

    /**
     * Decodes a BuyTranRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BuyTranRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyTranRequest;

    /**
     * Verifies a BuyTranRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a BuyTranRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BuyTranRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): BuyTranRequest;

    /**
     * Creates a plain object from a BuyTranRequest message. Also converts values to other types if specified.
     * @param message BuyTranRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BuyTranRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this BuyTranRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a BuyTranResponse. */
export interface IBuyTranResponse {

    /** BuyTranResponse result */
    result?: (Result|null);

    /** BuyTranResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a BuyTranResponse. */
export class BuyTranResponse implements IBuyTranResponse {

    /**
     * Constructs a new BuyTranResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBuyTranResponse);

    /** BuyTranResponse result. */
    public result: Result;

    /** BuyTranResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new BuyTranResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BuyTranResponse instance
     */
    public static create(properties?: IBuyTranResponse): BuyTranResponse;

    /**
     * Encodes the specified BuyTranResponse message. Does not implicitly {@link BuyTranResponse.verify|verify} messages.
     * @param message BuyTranResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBuyTranResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BuyTranResponse message, length delimited. Does not implicitly {@link BuyTranResponse.verify|verify} messages.
     * @param message BuyTranResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBuyTranResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BuyTranResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BuyTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BuyTranResponse;

    /**
     * Decodes a BuyTranResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BuyTranResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BuyTranResponse;

    /**
     * Verifies a BuyTranResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a BuyTranResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BuyTranResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): BuyTranResponse;

    /**
     * Creates a plain object from a BuyTranResponse message. Also converts values to other types if specified.
     * @param message BuyTranResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BuyTranResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this BuyTranResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a HeartBeatRequest. */
export interface IHeartBeatRequest {
}

/** Represents a HeartBeatRequest. */
export class HeartBeatRequest implements IHeartBeatRequest {

    /**
     * Constructs a new HeartBeatRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartBeatRequest);

    /**
     * Creates a new HeartBeatRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartBeatRequest instance
     */
    public static create(properties?: IHeartBeatRequest): HeartBeatRequest;

    /**
     * Encodes the specified HeartBeatRequest message. Does not implicitly {@link HeartBeatRequest.verify|verify} messages.
     * @param message HeartBeatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartBeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartBeatRequest message, length delimited. Does not implicitly {@link HeartBeatRequest.verify|verify} messages.
     * @param message HeartBeatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartBeatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartBeatRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartBeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartBeatRequest;

    /**
     * Decodes a HeartBeatRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartBeatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartBeatRequest;

    /**
     * Verifies a HeartBeatRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a HeartBeatRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartBeatRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): HeartBeatRequest;

    /**
     * Creates a plain object from a HeartBeatRequest message. Also converts values to other types if specified.
     * @param message HeartBeatRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartBeatRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this HeartBeatRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a HeartBeatResponse. */
export interface IHeartBeatResponse {

    /** HeartBeatResponse liveFenSiCount */
    liveFenSiCount?: (number|null);
}

/** Represents a HeartBeatResponse. */
export class HeartBeatResponse implements IHeartBeatResponse {

    /**
     * Constructs a new HeartBeatResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartBeatResponse);

    /** HeartBeatResponse liveFenSiCount. */
    public liveFenSiCount: number;

    /**
     * Creates a new HeartBeatResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartBeatResponse instance
     */
    public static create(properties?: IHeartBeatResponse): HeartBeatResponse;

    /**
     * Encodes the specified HeartBeatResponse message. Does not implicitly {@link HeartBeatResponse.verify|verify} messages.
     * @param message HeartBeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartBeatResponse message, length delimited. Does not implicitly {@link HeartBeatResponse.verify|verify} messages.
     * @param message HeartBeatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartBeatResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartBeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartBeatResponse;

    /**
     * Decodes a HeartBeatResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartBeatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartBeatResponse;

    /**
     * Verifies a HeartBeatResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a HeartBeatResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartBeatResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): HeartBeatResponse;

    /**
     * Creates a plain object from a HeartBeatResponse message. Also converts values to other types if specified.
     * @param message HeartBeatResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartBeatResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this HeartBeatResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an OfferPriceRequest. */
export interface IOfferPriceRequest {

    /** OfferPriceRequest id */
    id?: (number|null);

    /** OfferPriceRequest money */
    money?: (number|Long|null);
}

/** Represents an OfferPriceRequest. */
export class OfferPriceRequest implements IOfferPriceRequest {

    /**
     * Constructs a new OfferPriceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferPriceRequest);

    /** OfferPriceRequest id. */
    public id: number;

    /** OfferPriceRequest money. */
    public money: (number|Long);

    /**
     * Creates a new OfferPriceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferPriceRequest instance
     */
    public static create(properties?: IOfferPriceRequest): OfferPriceRequest;

    /**
     * Encodes the specified OfferPriceRequest message. Does not implicitly {@link OfferPriceRequest.verify|verify} messages.
     * @param message OfferPriceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OfferPriceRequest message, length delimited. Does not implicitly {@link OfferPriceRequest.verify|verify} messages.
     * @param message OfferPriceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOfferPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferPriceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferPriceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferPriceRequest;

    /**
     * Decodes an OfferPriceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OfferPriceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OfferPriceRequest;

    /**
     * Verifies an OfferPriceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an OfferPriceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OfferPriceRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): OfferPriceRequest;

    /**
     * Creates a plain object from an OfferPriceRequest message. Also converts values to other types if specified.
     * @param message OfferPriceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OfferPriceRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this OfferPriceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an OfferPriceResponse. */
export interface IOfferPriceResponse {

    /** OfferPriceResponse result */
    result?: (Result|null);

    /** OfferPriceResponse errormsg */
    errormsg?: (string|null);
}

/** Represents an OfferPriceResponse. */
export class OfferPriceResponse implements IOfferPriceResponse {

    /**
     * Constructs a new OfferPriceResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOfferPriceResponse);

    /** OfferPriceResponse result. */
    public result: Result;

    /** OfferPriceResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new OfferPriceResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OfferPriceResponse instance
     */
    public static create(properties?: IOfferPriceResponse): OfferPriceResponse;

    /**
     * Encodes the specified OfferPriceResponse message. Does not implicitly {@link OfferPriceResponse.verify|verify} messages.
     * @param message OfferPriceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOfferPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OfferPriceResponse message, length delimited. Does not implicitly {@link OfferPriceResponse.verify|verify} messages.
     * @param message OfferPriceResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOfferPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OfferPriceResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OfferPriceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OfferPriceResponse;

    /**
     * Decodes an OfferPriceResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OfferPriceResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OfferPriceResponse;

    /**
     * Verifies an OfferPriceResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an OfferPriceResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OfferPriceResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): OfferPriceResponse;

    /**
     * Creates a plain object from an OfferPriceResponse message. Also converts values to other types if specified.
     * @param message OfferPriceResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OfferPriceResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this OfferPriceResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AuctionRequest. */
export interface IAuctionRequest {

    /** AuctionRequest itemId */
    itemId?: (number|null);

    /** AuctionRequest money */
    money?: (number|Long|null);
}

/** Represents an AuctionRequest. */
export class AuctionRequest implements IAuctionRequest {

    /**
     * Constructs a new AuctionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuctionRequest);

    /** AuctionRequest itemId. */
    public itemId: number;

    /** AuctionRequest money. */
    public money: (number|Long);

    /**
     * Creates a new AuctionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuctionRequest instance
     */
    public static create(properties?: IAuctionRequest): AuctionRequest;

    /**
     * Encodes the specified AuctionRequest message. Does not implicitly {@link AuctionRequest.verify|verify} messages.
     * @param message AuctionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuctionRequest message, length delimited. Does not implicitly {@link AuctionRequest.verify|verify} messages.
     * @param message AuctionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuctionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuctionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuctionRequest;

    /**
     * Decodes an AuctionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuctionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuctionRequest;

    /**
     * Verifies an AuctionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AuctionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuctionRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): AuctionRequest;

    /**
     * Creates a plain object from an AuctionRequest message. Also converts values to other types if specified.
     * @param message AuctionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuctionRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AuctionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AuctionResponse. */
export interface IAuctionResponse {

    /** AuctionResponse result */
    result?: (Result|null);

    /** AuctionResponse errormsg */
    errormsg?: (string|null);
}

/** Represents an AuctionResponse. */
export class AuctionResponse implements IAuctionResponse {

    /**
     * Constructs a new AuctionResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuctionResponse);

    /** AuctionResponse result. */
    public result: Result;

    /** AuctionResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new AuctionResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuctionResponse instance
     */
    public static create(properties?: IAuctionResponse): AuctionResponse;

    /**
     * Encodes the specified AuctionResponse message. Does not implicitly {@link AuctionResponse.verify|verify} messages.
     * @param message AuctionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuctionResponse message, length delimited. Does not implicitly {@link AuctionResponse.verify|verify} messages.
     * @param message AuctionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuctionResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuctionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuctionResponse;

    /**
     * Decodes an AuctionResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuctionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuctionResponse;

    /**
     * Verifies an AuctionResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AuctionResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuctionResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): AuctionResponse;

    /**
     * Creates a plain object from an AuctionResponse message. Also converts values to other types if specified.
     * @param message AuctionResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuctionResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AuctionResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a GetAuctionListRequest. */
export interface IGetAuctionListRequest {
}

/** Represents a GetAuctionListRequest. */
export class GetAuctionListRequest implements IGetAuctionListRequest {

    /**
     * Constructs a new GetAuctionListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAuctionListRequest);

    /**
     * Creates a new GetAuctionListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAuctionListRequest instance
     */
    public static create(properties?: IGetAuctionListRequest): GetAuctionListRequest;

    /**
     * Encodes the specified GetAuctionListRequest message. Does not implicitly {@link GetAuctionListRequest.verify|verify} messages.
     * @param message GetAuctionListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAuctionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAuctionListRequest message, length delimited. Does not implicitly {@link GetAuctionListRequest.verify|verify} messages.
     * @param message GetAuctionListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAuctionListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAuctionListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAuctionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAuctionListRequest;

    /**
     * Decodes a GetAuctionListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAuctionListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAuctionListRequest;

    /**
     * Verifies a GetAuctionListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a GetAuctionListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAuctionListRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): GetAuctionListRequest;

    /**
     * Creates a plain object from a GetAuctionListRequest message. Also converts values to other types if specified.
     * @param message GetAuctionListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAuctionListRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this GetAuctionListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a GetAuctionListResponse. */
export interface IGetAuctionListResponse {

    /** GetAuctionListResponse auctionItems */
    auctionItems?: (INAuctionItem[]|null);
}

/** Represents a GetAuctionListResponse. */
export class GetAuctionListResponse implements IGetAuctionListResponse {

    /**
     * Constructs a new GetAuctionListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetAuctionListResponse);

    /** GetAuctionListResponse auctionItems. */
    public auctionItems: [ 'Array' ].<INAuctionItem>;

    /**
     * Creates a new GetAuctionListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetAuctionListResponse instance
     */
    public static create(properties?: IGetAuctionListResponse): GetAuctionListResponse;

    /**
     * Encodes the specified GetAuctionListResponse message. Does not implicitly {@link GetAuctionListResponse.verify|verify} messages.
     * @param message GetAuctionListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetAuctionListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetAuctionListResponse message, length delimited. Does not implicitly {@link GetAuctionListResponse.verify|verify} messages.
     * @param message GetAuctionListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetAuctionListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetAuctionListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetAuctionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetAuctionListResponse;

    /**
     * Decodes a GetAuctionListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetAuctionListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetAuctionListResponse;

    /**
     * Verifies a GetAuctionListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a GetAuctionListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetAuctionListResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): GetAuctionListResponse;

    /**
     * Creates a plain object from a GetAuctionListResponse message. Also converts values to other types if specified.
     * @param message GetAuctionListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetAuctionListResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this GetAuctionListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** TipsWorkType enum. */
export enum TipsWorkType {
    None = 0,
    AuctionResult = 1,
    DismissRoom = 2,
    KickOutRoom = 3,
    OutRoom = 4
}

/** Properties of a TipsResponse. */
export interface ITipsResponse {

    /** TipsResponse tipsType */
    tipsType?: (TipsType|null);

    /** TipsResponse content */
    content?: (string|null);

    /** TipsResponse tipsWorkType */
    tipsWorkType?: (TipsWorkType|null);
}

/** Represents a TipsResponse. */
export class TipsResponse implements ITipsResponse {

    /**
     * Constructs a new TipsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITipsResponse);

    /** TipsResponse tipsType. */
    public tipsType: TipsType;

    /** TipsResponse content. */
    public content: string;

    /** TipsResponse tipsWorkType. */
    public tipsWorkType: TipsWorkType;

    /**
     * Creates a new TipsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TipsResponse instance
     */
    public static create(properties?: ITipsResponse): TipsResponse;

    /**
     * Encodes the specified TipsResponse message. Does not implicitly {@link TipsResponse.verify|verify} messages.
     * @param message TipsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TipsResponse message, length delimited. Does not implicitly {@link TipsResponse.verify|verify} messages.
     * @param message TipsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITipsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TipsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TipsResponse;

    /**
     * Decodes a TipsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TipsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TipsResponse;

    /**
     * Verifies a TipsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a TipsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TipsResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): TipsResponse;

    /**
     * Creates a plain object from a TipsResponse message. Also converts values to other types if specified.
     * @param message TipsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TipsResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this TipsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RoomUser. */
export interface IRoomUser {

    /** RoomUser userId */
    userId?: (number|null);

    /** RoomUser nickName */
    nickName?: (string|null);

    /** RoomUser cCharacterId */
    cCharacterId?: (number|null);

    /** RoomUser user */
    user?: (INUser|null);
}

/** Represents a RoomUser. */
export class RoomUser implements IRoomUser {

    /**
     * Constructs a new RoomUser.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomUser);

    /** RoomUser userId. */
    public userId: number;

    /** RoomUser nickName. */
    public nickName: string;

    /** RoomUser cCharacterId. */
    public cCharacterId: number;

    /** RoomUser user. */
    public user?: (INUser|null);

    /**
     * Creates a new RoomUser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomUser instance
     */
    public static create(properties?: IRoomUser): RoomUser;

    /**
     * Encodes the specified RoomUser message. Does not implicitly {@link RoomUser.verify|verify} messages.
     * @param message RoomUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomUser message, length delimited. Does not implicitly {@link RoomUser.verify|verify} messages.
     * @param message RoomUser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomUser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomUser;

    /**
     * Decodes a RoomUser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomUser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomUser;

    /**
     * Verifies a RoomUser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RoomUser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomUser
     */
    public static fromObject(object: [ 'object' ].<string, any>): RoomUser;

    /**
     * Creates a plain object from a RoomUser message. Also converts values to other types if specified.
     * @param message RoomUser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomUser, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RoomUser to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** TeamType enum. */
export enum TeamType {
    My = 0,
    Enemy = 1
}

/** RoomStatus enum. */
export enum RoomStatus {
    Normal_ = 0,
    GameIn = 1
}

/** Properties of a NRoom. */
export interface INRoom {

    /** NRoom roomId */
    roomId?: (number|null);

    /** NRoom userId */
    userId?: (number|null);

    /** NRoom my */
    my?: (IRoomUser[]|null);

    /** NRoom enemy */
    enemy?: (IRoomUser[]|null);

    /** NRoom roomStatus */
    roomStatus?: (RoomStatus|null);

    /** NRoom ipPortStr */
    ipPortStr?: (string|null);

    /** NRoom randomSeed */
    randomSeed?: (number|null);

    /** NRoom biFen */
    biFen?: (string|null);
}

/** Represents a NRoom. */
export class NRoom implements INRoom {

    /**
     * Constructs a new NRoom.
     * @param [properties] Properties to set
     */
    constructor(properties?: INRoom);

    /** NRoom roomId. */
    public roomId: number;

    /** NRoom userId. */
    public userId: number;

    /** NRoom my. */
    public my: [ 'Array' ].<IRoomUser>;

    /** NRoom enemy. */
    public enemy: [ 'Array' ].<IRoomUser>;

    /** NRoom roomStatus. */
    public roomStatus: RoomStatus;

    /** NRoom ipPortStr. */
    public ipPortStr: string;

    /** NRoom randomSeed. */
    public randomSeed: number;

    /** NRoom biFen. */
    public biFen: string;

    /**
     * Creates a new NRoom instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NRoom instance
     */
    public static create(properties?: INRoom): NRoom;

    /**
     * Encodes the specified NRoom message. Does not implicitly {@link NRoom.verify|verify} messages.
     * @param message NRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NRoom message, length delimited. Does not implicitly {@link NRoom.verify|verify} messages.
     * @param message NRoom message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INRoom, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NRoom message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NRoom;

    /**
     * Decodes a NRoom message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NRoom
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NRoom;

    /**
     * Verifies a NRoom message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NRoom message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NRoom
     */
    public static fromObject(object: [ 'object' ].<string, any>): NRoom;

    /**
     * Creates a plain object from a NRoom message. Also converts values to other types if specified.
     * @param message NRoom
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NRoom, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NRoom to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a MyRoomRequest. */
export interface IMyRoomRequest {
}

/** Represents a MyRoomRequest. */
export class MyRoomRequest implements IMyRoomRequest {

    /**
     * Constructs a new MyRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMyRoomRequest);

    /**
     * Creates a new MyRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MyRoomRequest instance
     */
    public static create(properties?: IMyRoomRequest): MyRoomRequest;

    /**
     * Encodes the specified MyRoomRequest message. Does not implicitly {@link MyRoomRequest.verify|verify} messages.
     * @param message MyRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMyRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MyRoomRequest message, length delimited. Does not implicitly {@link MyRoomRequest.verify|verify} messages.
     * @param message MyRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMyRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MyRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MyRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MyRoomRequest;

    /**
     * Decodes a MyRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MyRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MyRoomRequest;

    /**
     * Verifies a MyRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a MyRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MyRoomRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): MyRoomRequest;

    /**
     * Creates a plain object from a MyRoomRequest message. Also converts values to other types if specified.
     * @param message MyRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MyRoomRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this MyRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a MyRoomResponse. */
export interface IMyRoomResponse {

    /** MyRoomResponse room */
    room?: (INRoom|null);
}

/** Represents a MyRoomResponse. */
export class MyRoomResponse implements IMyRoomResponse {

    /**
     * Constructs a new MyRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMyRoomResponse);

    /** MyRoomResponse room. */
    public room?: (INRoom|null);

    /**
     * Creates a new MyRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MyRoomResponse instance
     */
    public static create(properties?: IMyRoomResponse): MyRoomResponse;

    /**
     * Encodes the specified MyRoomResponse message. Does not implicitly {@link MyRoomResponse.verify|verify} messages.
     * @param message MyRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMyRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MyRoomResponse message, length delimited. Does not implicitly {@link MyRoomResponse.verify|verify} messages.
     * @param message MyRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMyRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MyRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MyRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MyRoomResponse;

    /**
     * Decodes a MyRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MyRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MyRoomResponse;

    /**
     * Verifies a MyRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a MyRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MyRoomResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): MyRoomResponse;

    /**
     * Creates a plain object from a MyRoomResponse message. Also converts values to other types if specified.
     * @param message MyRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MyRoomResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this MyRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an InviteRequest. */
export interface IInviteRequest {

    /** InviteRequest fromUserId */
    fromUserId?: (number|null);

    /** InviteRequest fromNickName */
    fromNickName?: (string|null);

    /** InviteRequest toUserId */
    toUserId?: (number|null);

    /** InviteRequest toNickName */
    toNickName?: (string|null);

    /** InviteRequest teamType */
    teamType?: (TeamType|null);
}

/** Represents an InviteRequest. */
export class InviteRequest implements IInviteRequest {

    /**
     * Constructs a new InviteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInviteRequest);

    /** InviteRequest fromUserId. */
    public fromUserId: number;

    /** InviteRequest fromNickName. */
    public fromNickName: string;

    /** InviteRequest toUserId. */
    public toUserId: number;

    /** InviteRequest toNickName. */
    public toNickName: string;

    /** InviteRequest teamType. */
    public teamType: TeamType;

    /**
     * Creates a new InviteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InviteRequest instance
     */
    public static create(properties?: IInviteRequest): InviteRequest;

    /**
     * Encodes the specified InviteRequest message. Does not implicitly {@link InviteRequest.verify|verify} messages.
     * @param message InviteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInviteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InviteRequest message, length delimited. Does not implicitly {@link InviteRequest.verify|verify} messages.
     * @param message InviteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInviteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InviteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InviteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteRequest;

    /**
     * Decodes an InviteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InviteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteRequest;

    /**
     * Verifies an InviteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an InviteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InviteRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): InviteRequest;

    /**
     * Creates a plain object from an InviteRequest message. Also converts values to other types if specified.
     * @param message InviteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InviteRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this InviteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an InviteResponse. */
export interface IInviteResponse {

    /** InviteResponse result */
    result?: (Result|null);

    /** InviteResponse errormsg */
    errormsg?: (string|null);

    /** InviteResponse inviteRequest */
    inviteRequest?: (IInviteRequest|null);
}

/** Represents an InviteResponse. */
export class InviteResponse implements IInviteResponse {

    /**
     * Constructs a new InviteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInviteResponse);

    /** InviteResponse result. */
    public result: Result;

    /** InviteResponse errormsg. */
    public errormsg: string;

    /** InviteResponse inviteRequest. */
    public inviteRequest?: (IInviteRequest|null);

    /**
     * Creates a new InviteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InviteResponse instance
     */
    public static create(properties?: IInviteResponse): InviteResponse;

    /**
     * Encodes the specified InviteResponse message. Does not implicitly {@link InviteResponse.verify|verify} messages.
     * @param message InviteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInviteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified InviteResponse message, length delimited. Does not implicitly {@link InviteResponse.verify|verify} messages.
     * @param message InviteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInviteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InviteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns InviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): InviteResponse;

    /**
     * Decodes an InviteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns InviteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): InviteResponse;

    /**
     * Verifies an InviteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an InviteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns InviteResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): InviteResponse;

    /**
     * Creates a plain object from an InviteResponse message. Also converts values to other types if specified.
     * @param message InviteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: InviteResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this InviteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a KickOutRequest. */
export interface IKickOutRequest {

    /** KickOutRequest userId */
    userId?: (number|null);
}

/** Represents a KickOutRequest. */
export class KickOutRequest implements IKickOutRequest {

    /**
     * Constructs a new KickOutRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKickOutRequest);

    /** KickOutRequest userId. */
    public userId: number;

    /**
     * Creates a new KickOutRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickOutRequest instance
     */
    public static create(properties?: IKickOutRequest): KickOutRequest;

    /**
     * Encodes the specified KickOutRequest message. Does not implicitly {@link KickOutRequest.verify|verify} messages.
     * @param message KickOutRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKickOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KickOutRequest message, length delimited. Does not implicitly {@link KickOutRequest.verify|verify} messages.
     * @param message KickOutRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKickOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickOutRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KickOutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickOutRequest;

    /**
     * Decodes a KickOutRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KickOutRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickOutRequest;

    /**
     * Verifies a KickOutRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a KickOutRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KickOutRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): KickOutRequest;

    /**
     * Creates a plain object from a KickOutRequest message. Also converts values to other types if specified.
     * @param message KickOutRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KickOutRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this KickOutRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a KickOutResponse. */
export interface IKickOutResponse {

    /** KickOutResponse result */
    result?: (Result|null);

    /** KickOutResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a KickOutResponse. */
export class KickOutResponse implements IKickOutResponse {

    /**
     * Constructs a new KickOutResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKickOutResponse);

    /** KickOutResponse result. */
    public result: Result;

    /** KickOutResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new KickOutResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KickOutResponse instance
     */
    public static create(properties?: IKickOutResponse): KickOutResponse;

    /**
     * Encodes the specified KickOutResponse message. Does not implicitly {@link KickOutResponse.verify|verify} messages.
     * @param message KickOutResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKickOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KickOutResponse message, length delimited. Does not implicitly {@link KickOutResponse.verify|verify} messages.
     * @param message KickOutResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKickOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KickOutResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KickOutResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KickOutResponse;

    /**
     * Decodes a KickOutResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KickOutResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KickOutResponse;

    /**
     * Verifies a KickOutResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a KickOutResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KickOutResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): KickOutResponse;

    /**
     * Creates a plain object from a KickOutResponse message. Also converts values to other types if specified.
     * @param message KickOutResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KickOutResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this KickOutResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RoomStartGameRequest. */
export interface IRoomStartGameRequest {
}

/** Represents a RoomStartGameRequest. */
export class RoomStartGameRequest implements IRoomStartGameRequest {

    /**
     * Constructs a new RoomStartGameRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomStartGameRequest);

    /**
     * Creates a new RoomStartGameRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomStartGameRequest instance
     */
    public static create(properties?: IRoomStartGameRequest): RoomStartGameRequest;

    /**
     * Encodes the specified RoomStartGameRequest message. Does not implicitly {@link RoomStartGameRequest.verify|verify} messages.
     * @param message RoomStartGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomStartGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomStartGameRequest message, length delimited. Does not implicitly {@link RoomStartGameRequest.verify|verify} messages.
     * @param message RoomStartGameRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomStartGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomStartGameRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomStartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomStartGameRequest;

    /**
     * Decodes a RoomStartGameRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomStartGameRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomStartGameRequest;

    /**
     * Verifies a RoomStartGameRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RoomStartGameRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomStartGameRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): RoomStartGameRequest;

    /**
     * Creates a plain object from a RoomStartGameRequest message. Also converts values to other types if specified.
     * @param message RoomStartGameRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomStartGameRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RoomStartGameRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a RoomStartGameResponse. */
export interface IRoomStartGameResponse {

    /** RoomStartGameResponse result */
    result?: (Result|null);

    /** RoomStartGameResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a RoomStartGameResponse. */
export class RoomStartGameResponse implements IRoomStartGameResponse {

    /**
     * Constructs a new RoomStartGameResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomStartGameResponse);

    /** RoomStartGameResponse result. */
    public result: Result;

    /** RoomStartGameResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new RoomStartGameResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomStartGameResponse instance
     */
    public static create(properties?: IRoomStartGameResponse): RoomStartGameResponse;

    /**
     * Encodes the specified RoomStartGameResponse message. Does not implicitly {@link RoomStartGameResponse.verify|verify} messages.
     * @param message RoomStartGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomStartGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomStartGameResponse message, length delimited. Does not implicitly {@link RoomStartGameResponse.verify|verify} messages.
     * @param message RoomStartGameResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomStartGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomStartGameResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomStartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomStartGameResponse;

    /**
     * Decodes a RoomStartGameResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomStartGameResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomStartGameResponse;

    /**
     * Verifies a RoomStartGameResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a RoomStartGameResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomStartGameResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): RoomStartGameResponse;

    /**
     * Creates a plain object from a RoomStartGameResponse message. Also converts values to other types if specified.
     * @param message RoomStartGameResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomStartGameResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this RoomStartGameResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NickNameSearchRequest. */
export interface INickNameSearchRequest {

    /** NickNameSearchRequest nickName */
    nickName?: (string|null);
}

/** Represents a NickNameSearchRequest. */
export class NickNameSearchRequest implements INickNameSearchRequest {

    /**
     * Constructs a new NickNameSearchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: INickNameSearchRequest);

    /** NickNameSearchRequest nickName. */
    public nickName: string;

    /**
     * Creates a new NickNameSearchRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NickNameSearchRequest instance
     */
    public static create(properties?: INickNameSearchRequest): NickNameSearchRequest;

    /**
     * Encodes the specified NickNameSearchRequest message. Does not implicitly {@link NickNameSearchRequest.verify|verify} messages.
     * @param message NickNameSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INickNameSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NickNameSearchRequest message, length delimited. Does not implicitly {@link NickNameSearchRequest.verify|verify} messages.
     * @param message NickNameSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INickNameSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NickNameSearchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NickNameSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NickNameSearchRequest;

    /**
     * Decodes a NickNameSearchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NickNameSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NickNameSearchRequest;

    /**
     * Verifies a NickNameSearchRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NickNameSearchRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NickNameSearchRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): NickNameSearchRequest;

    /**
     * Creates a plain object from a NickNameSearchRequest message. Also converts values to other types if specified.
     * @param message NickNameSearchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NickNameSearchRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NickNameSearchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a NickNameSearchResponse. */
export interface INickNameSearchResponse {

    /** NickNameSearchResponse roomUser */
    roomUser?: (IRoomUser[]|null);
}

/** Represents a NickNameSearchResponse. */
export class NickNameSearchResponse implements INickNameSearchResponse {

    /**
     * Constructs a new NickNameSearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INickNameSearchResponse);

    /** NickNameSearchResponse roomUser. */
    public roomUser: [ 'Array' ].<IRoomUser>;

    /**
     * Creates a new NickNameSearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NickNameSearchResponse instance
     */
    public static create(properties?: INickNameSearchResponse): NickNameSearchResponse;

    /**
     * Encodes the specified NickNameSearchResponse message. Does not implicitly {@link NickNameSearchResponse.verify|verify} messages.
     * @param message NickNameSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INickNameSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NickNameSearchResponse message, length delimited. Does not implicitly {@link NickNameSearchResponse.verify|verify} messages.
     * @param message NickNameSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INickNameSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NickNameSearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NickNameSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NickNameSearchResponse;

    /**
     * Decodes a NickNameSearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NickNameSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NickNameSearchResponse;

    /**
     * Verifies a NickNameSearchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a NickNameSearchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NickNameSearchResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): NickNameSearchResponse;

    /**
     * Creates a plain object from a NickNameSearchResponse message. Also converts values to other types if specified.
     * @param message NickNameSearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NickNameSearchResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this NickNameSearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AddRoomRequest. */
export interface IAddRoomRequest {

    /** AddRoomRequest roomId */
    roomId?: (number|null);

    /** AddRoomRequest fromUserId */
    fromUserId?: (number|null);

    /** AddRoomRequest fromNickName */
    fromNickName?: (string|null);
}

/** Represents an AddRoomRequest. */
export class AddRoomRequest implements IAddRoomRequest {

    /**
     * Constructs a new AddRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddRoomRequest);

    /** AddRoomRequest roomId. */
    public roomId: number;

    /** AddRoomRequest fromUserId. */
    public fromUserId: number;

    /** AddRoomRequest fromNickName. */
    public fromNickName: string;

    /**
     * Creates a new AddRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddRoomRequest instance
     */
    public static create(properties?: IAddRoomRequest): AddRoomRequest;

    /**
     * Encodes the specified AddRoomRequest message. Does not implicitly {@link AddRoomRequest.verify|verify} messages.
     * @param message AddRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddRoomRequest message, length delimited. Does not implicitly {@link AddRoomRequest.verify|verify} messages.
     * @param message AddRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddRoomRequest;

    /**
     * Decodes an AddRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddRoomRequest;

    /**
     * Verifies an AddRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AddRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddRoomRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): AddRoomRequest;

    /**
     * Creates a plain object from an AddRoomRequest message. Also converts values to other types if specified.
     * @param message AddRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddRoomRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AddRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AddRoomResponse. */
export interface IAddRoomResponse {

    /** AddRoomResponse result */
    result?: (Result|null);

    /** AddRoomResponse errormsg */
    errormsg?: (string|null);

    /** AddRoomResponse addRoomRequest */
    addRoomRequest?: (IAddRoomRequest|null);

    /** AddRoomResponse teamType */
    teamType?: (TeamType|null);
}

/** Represents an AddRoomResponse. */
export class AddRoomResponse implements IAddRoomResponse {

    /**
     * Constructs a new AddRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddRoomResponse);

    /** AddRoomResponse result. */
    public result: Result;

    /** AddRoomResponse errormsg. */
    public errormsg: string;

    /** AddRoomResponse addRoomRequest. */
    public addRoomRequest?: (IAddRoomRequest|null);

    /** AddRoomResponse teamType. */
    public teamType: TeamType;

    /**
     * Creates a new AddRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddRoomResponse instance
     */
    public static create(properties?: IAddRoomResponse): AddRoomResponse;

    /**
     * Encodes the specified AddRoomResponse message. Does not implicitly {@link AddRoomResponse.verify|verify} messages.
     * @param message AddRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddRoomResponse message, length delimited. Does not implicitly {@link AddRoomResponse.verify|verify} messages.
     * @param message AddRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddRoomResponse;

    /**
     * Decodes an AddRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddRoomResponse;

    /**
     * Verifies an AddRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AddRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddRoomResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): AddRoomResponse;

    /**
     * Creates a plain object from an AddRoomResponse message. Also converts values to other types if specified.
     * @param message AddRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddRoomResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AddRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an OutRoomRequest. */
export interface IOutRoomRequest {
}

/** Represents an OutRoomRequest. */
export class OutRoomRequest implements IOutRoomRequest {

    /**
     * Constructs a new OutRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOutRoomRequest);

    /**
     * Creates a new OutRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OutRoomRequest instance
     */
    public static create(properties?: IOutRoomRequest): OutRoomRequest;

    /**
     * Encodes the specified OutRoomRequest message. Does not implicitly {@link OutRoomRequest.verify|verify} messages.
     * @param message OutRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOutRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OutRoomRequest message, length delimited. Does not implicitly {@link OutRoomRequest.verify|verify} messages.
     * @param message OutRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOutRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OutRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OutRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OutRoomRequest;

    /**
     * Decodes an OutRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OutRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OutRoomRequest;

    /**
     * Verifies an OutRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an OutRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OutRoomRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): OutRoomRequest;

    /**
     * Creates a plain object from an OutRoomRequest message. Also converts values to other types if specified.
     * @param message OutRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OutRoomRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this OutRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an OutRoomResponse. */
export interface IOutRoomResponse {

    /** OutRoomResponse result */
    result?: (Result|null);

    /** OutRoomResponse errormsg */
    errormsg?: (string|null);
}

/** Represents an OutRoomResponse. */
export class OutRoomResponse implements IOutRoomResponse {

    /**
     * Constructs a new OutRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOutRoomResponse);

    /** OutRoomResponse result. */
    public result: Result;

    /** OutRoomResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new OutRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OutRoomResponse instance
     */
    public static create(properties?: IOutRoomResponse): OutRoomResponse;

    /**
     * Encodes the specified OutRoomResponse message. Does not implicitly {@link OutRoomResponse.verify|verify} messages.
     * @param message OutRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOutRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OutRoomResponse message, length delimited. Does not implicitly {@link OutRoomResponse.verify|verify} messages.
     * @param message OutRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOutRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OutRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OutRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OutRoomResponse;

    /**
     * Decodes an OutRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OutRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OutRoomResponse;

    /**
     * Verifies an OutRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an OutRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OutRoomResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): OutRoomResponse;

    /**
     * Creates a plain object from an OutRoomResponse message. Also converts values to other types if specified.
     * @param message OutRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OutRoomResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this OutRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FollowListRequest. */
export interface IFollowListRequest {
}

/** Represents a FollowListRequest. */
export class FollowListRequest implements IFollowListRequest {

    /**
     * Constructs a new FollowListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFollowListRequest);

    /**
     * Creates a new FollowListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FollowListRequest instance
     */
    public static create(properties?: IFollowListRequest): FollowListRequest;

    /**
     * Encodes the specified FollowListRequest message. Does not implicitly {@link FollowListRequest.verify|verify} messages.
     * @param message FollowListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFollowListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FollowListRequest message, length delimited. Does not implicitly {@link FollowListRequest.verify|verify} messages.
     * @param message FollowListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFollowListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FollowListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FollowListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FollowListRequest;

    /**
     * Decodes a FollowListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FollowListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FollowListRequest;

    /**
     * Verifies a FollowListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FollowListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FollowListRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): FollowListRequest;

    /**
     * Creates a plain object from a FollowListRequest message. Also converts values to other types if specified.
     * @param message FollowListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FollowListRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FollowListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a FollowListResponse. */
export interface IFollowListResponse {

    /** FollowListResponse follows */
    follows?: (INUser[]|null);
}

/** Represents a FollowListResponse. */
export class FollowListResponse implements IFollowListResponse {

    /**
     * Constructs a new FollowListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFollowListResponse);

    /** FollowListResponse follows. */
    public follows: [ 'Array' ].<INUser>;

    /**
     * Creates a new FollowListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FollowListResponse instance
     */
    public static create(properties?: IFollowListResponse): FollowListResponse;

    /**
     * Encodes the specified FollowListResponse message. Does not implicitly {@link FollowListResponse.verify|verify} messages.
     * @param message FollowListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFollowListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FollowListResponse message, length delimited. Does not implicitly {@link FollowListResponse.verify|verify} messages.
     * @param message FollowListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFollowListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FollowListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FollowListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FollowListResponse;

    /**
     * Decodes a FollowListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FollowListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FollowListResponse;

    /**
     * Verifies a FollowListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a FollowListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FollowListResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): FollowListResponse;

    /**
     * Creates a plain object from a FollowListResponse message. Also converts values to other types if specified.
     * @param message FollowListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FollowListResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this FollowListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** ChatChannel enum. */
export enum ChatChannel {
    Comp = 0,
    Private = 1,
    RoomChat = 2
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** ChatMessage chatChannel */
    chatChannel?: (ChatChannel|null);

    /** ChatMessage fromId */
    fromId?: (number|null);

    /** ChatMessage fromName */
    fromName?: (string|null);

    /** ChatMessage fromLevel */
    fromLevel?: (number|null);

    /** ChatMessage fromCCharacterId */
    fromCCharacterId?: (number|null);

    /** ChatMessage toId */
    toId?: (number|null);

    /** ChatMessage toName */
    toName?: (string|null);

    /** ChatMessage toLevel */
    toLevel?: (number|null);

    /** ChatMessage toCCharacterId */
    toCCharacterId?: (number|null);

    /** ChatMessage msg */
    msg?: (string|null);

    /** ChatMessage time */
    time?: (number|Long|null);

    /** ChatMessage chatRoomType */
    chatRoomType?: (ChatRoomType|null);

    /** ChatMessage enterLiveUserId */
    enterLiveUserId?: (number|null);
}

/** Represents a ChatMessage. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** ChatMessage chatChannel. */
    public chatChannel: ChatChannel;

    /** ChatMessage fromId. */
    public fromId: number;

    /** ChatMessage fromName. */
    public fromName: string;

    /** ChatMessage fromLevel. */
    public fromLevel: number;

    /** ChatMessage fromCCharacterId. */
    public fromCCharacterId: number;

    /** ChatMessage toId. */
    public toId: number;

    /** ChatMessage toName. */
    public toName: string;

    /** ChatMessage toLevel. */
    public toLevel: number;

    /** ChatMessage toCCharacterId. */
    public toCCharacterId: number;

    /** ChatMessage msg. */
    public msg: string;

    /** ChatMessage time. */
    public time: (number|Long);

    /** ChatMessage chatRoomType. */
    public chatRoomType: ChatRoomType;

    /** ChatMessage enterLiveUserId. */
    public enterLiveUserId: number;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: [ 'object' ].<string, any>): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** ChatRoomType enum. */
export enum ChatRoomType {
    Room_ = 0,
    Game_ = 1,
    Live_ = 2
}

/** Properties of a ChatRequest. */
export interface IChatRequest {

    /** ChatRequest chatMessage */
    chatMessage?: (IChatMessage|null);
}

/** Represents a ChatRequest. */
export class ChatRequest implements IChatRequest {

    /**
     * Constructs a new ChatRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatRequest);

    /** ChatRequest chatMessage. */
    public chatMessage?: (IChatMessage|null);

    /**
     * Creates a new ChatRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatRequest instance
     */
    public static create(properties?: IChatRequest): ChatRequest;

    /**
     * Encodes the specified ChatRequest message. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @param message ChatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatRequest message, length delimited. Does not implicitly {@link ChatRequest.verify|verify} messages.
     * @param message ChatRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatRequest;

    /**
     * Decodes a ChatRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatRequest;

    /**
     * Verifies a ChatRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a ChatRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): ChatRequest;

    /**
     * Creates a plain object from a ChatRequest message. Also converts values to other types if specified.
     * @param message ChatRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ChatRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a ChatResponse. */
export interface IChatResponse {

    /** ChatResponse result */
    result?: (Result|null);

    /** ChatResponse errormsg */
    errormsg?: (string|null);

    /** ChatResponse compMessages */
    compMessages?: (IChatMessage[]|null);

    /** ChatResponse privateMessages */
    privateMessages?: (IChatMessage[]|null);

    /** ChatResponse roomMessages */
    roomMessages?: (IChatMessage[]|null);
}

/** Represents a ChatResponse. */
export class ChatResponse implements IChatResponse {

    /**
     * Constructs a new ChatResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatResponse);

    /** ChatResponse result. */
    public result: Result;

    /** ChatResponse errormsg. */
    public errormsg: string;

    /** ChatResponse compMessages. */
    public compMessages: [ 'Array' ].<IChatMessage>;

    /** ChatResponse privateMessages. */
    public privateMessages: [ 'Array' ].<IChatMessage>;

    /** ChatResponse roomMessages. */
    public roomMessages: [ 'Array' ].<IChatMessage>;

    /**
     * Creates a new ChatResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatResponse instance
     */
    public static create(properties?: IChatResponse): ChatResponse;

    /**
     * Encodes the specified ChatResponse message. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @param message ChatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatResponse message, length delimited. Does not implicitly {@link ChatResponse.verify|verify} messages.
     * @param message ChatResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatResponse;

    /**
     * Decodes a ChatResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatResponse;

    /**
     * Verifies a ChatResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a ChatResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): ChatResponse;

    /**
     * Creates a plain object from a ChatResponse message. Also converts values to other types if specified.
     * @param message ChatResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ChatResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserStatusQueryRequest. */
export interface IUserStatusQueryRequest {

    /** UserStatusQueryRequest userIds */
    userIds?: (number[]|null);
}

/** Represents a UserStatusQueryRequest. */
export class UserStatusQueryRequest implements IUserStatusQueryRequest {

    /**
     * Constructs a new UserStatusQueryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserStatusQueryRequest);

    /** UserStatusQueryRequest userIds. */
    public userIds: [ 'Array' ].<number>;

    /**
     * Creates a new UserStatusQueryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserStatusQueryRequest instance
     */
    public static create(properties?: IUserStatusQueryRequest): UserStatusQueryRequest;

    /**
     * Encodes the specified UserStatusQueryRequest message. Does not implicitly {@link UserStatusQueryRequest.verify|verify} messages.
     * @param message UserStatusQueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserStatusQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserStatusQueryRequest message, length delimited. Does not implicitly {@link UserStatusQueryRequest.verify|verify} messages.
     * @param message UserStatusQueryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserStatusQueryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserStatusQueryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserStatusQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserStatusQueryRequest;

    /**
     * Decodes a UserStatusQueryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserStatusQueryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserStatusQueryRequest;

    /**
     * Verifies a UserStatusQueryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserStatusQueryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserStatusQueryRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserStatusQueryRequest;

    /**
     * Creates a plain object from a UserStatusQueryRequest message. Also converts values to other types if specified.
     * @param message UserStatusQueryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserStatusQueryRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserStatusQueryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a UserStatusQueryResponse. */
export interface IUserStatusQueryResponse {

    /** UserStatusQueryResponse status */
    status?: (boolean[]|null);
}

/** Represents a UserStatusQueryResponse. */
export class UserStatusQueryResponse implements IUserStatusQueryResponse {

    /**
     * Constructs a new UserStatusQueryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserStatusQueryResponse);

    /** UserStatusQueryResponse status. */
    public status: [ 'Array' ].<boolean>;

    /**
     * Creates a new UserStatusQueryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserStatusQueryResponse instance
     */
    public static create(properties?: IUserStatusQueryResponse): UserStatusQueryResponse;

    /**
     * Encodes the specified UserStatusQueryResponse message. Does not implicitly {@link UserStatusQueryResponse.verify|verify} messages.
     * @param message UserStatusQueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserStatusQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserStatusQueryResponse message, length delimited. Does not implicitly {@link UserStatusQueryResponse.verify|verify} messages.
     * @param message UserStatusQueryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserStatusQueryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserStatusQueryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserStatusQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserStatusQueryResponse;

    /**
     * Decodes a UserStatusQueryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserStatusQueryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserStatusQueryResponse;

    /**
     * Verifies a UserStatusQueryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a UserStatusQueryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserStatusQueryResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): UserStatusQueryResponse;

    /**
     * Creates a plain object from a UserStatusQueryResponse message. Also converts values to other types if specified.
     * @param message UserStatusQueryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserStatusQueryResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UserStatusQueryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a StartMatchRequest. */
export interface IStartMatchRequest {
}

/** Represents a StartMatchRequest. */
export class StartMatchRequest implements IStartMatchRequest {

    /**
     * Constructs a new StartMatchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartMatchRequest);

    /**
     * Creates a new StartMatchRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartMatchRequest instance
     */
    public static create(properties?: IStartMatchRequest): StartMatchRequest;

    /**
     * Encodes the specified StartMatchRequest message. Does not implicitly {@link StartMatchRequest.verify|verify} messages.
     * @param message StartMatchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartMatchRequest message, length delimited. Does not implicitly {@link StartMatchRequest.verify|verify} messages.
     * @param message StartMatchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartMatchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartMatchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartMatchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartMatchRequest;

    /**
     * Decodes a StartMatchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartMatchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartMatchRequest;

    /**
     * Verifies a StartMatchRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a StartMatchRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartMatchRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): StartMatchRequest;

    /**
     * Creates a plain object from a StartMatchRequest message. Also converts values to other types if specified.
     * @param message StartMatchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartMatchRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this StartMatchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a StartMatchResponse. */
export interface IStartMatchResponse {

    /** StartMatchResponse result */
    result?: (Result|null);

    /** StartMatchResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a StartMatchResponse. */
export class StartMatchResponse implements IStartMatchResponse {

    /**
     * Constructs a new StartMatchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartMatchResponse);

    /** StartMatchResponse result. */
    public result: Result;

    /** StartMatchResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new StartMatchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartMatchResponse instance
     */
    public static create(properties?: IStartMatchResponse): StartMatchResponse;

    /**
     * Encodes the specified StartMatchResponse message. Does not implicitly {@link StartMatchResponse.verify|verify} messages.
     * @param message StartMatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartMatchResponse message, length delimited. Does not implicitly {@link StartMatchResponse.verify|verify} messages.
     * @param message StartMatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartMatchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartMatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartMatchResponse;

    /**
     * Decodes a StartMatchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartMatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartMatchResponse;

    /**
     * Verifies a StartMatchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a StartMatchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartMatchResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): StartMatchResponse;

    /**
     * Creates a plain object from a StartMatchResponse message. Also converts values to other types if specified.
     * @param message StartMatchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartMatchResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this StartMatchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a MatchResponse. */
export interface IMatchResponse {

    /** MatchResponse result */
    result?: (Result|null);

    /** MatchResponse errormsg */
    errormsg?: (string|null);

    /** MatchResponse room */
    room?: (INRoom|null);
}

/** Represents a MatchResponse. */
export class MatchResponse implements IMatchResponse {

    /**
     * Constructs a new MatchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMatchResponse);

    /** MatchResponse result. */
    public result: Result;

    /** MatchResponse errormsg. */
    public errormsg: string;

    /** MatchResponse room. */
    public room?: (INRoom|null);

    /**
     * Creates a new MatchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MatchResponse instance
     */
    public static create(properties?: IMatchResponse): MatchResponse;

    /**
     * Encodes the specified MatchResponse message. Does not implicitly {@link MatchResponse.verify|verify} messages.
     * @param message MatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MatchResponse message, length delimited. Does not implicitly {@link MatchResponse.verify|verify} messages.
     * @param message MatchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMatchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MatchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MatchResponse;

    /**
     * Decodes a MatchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MatchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MatchResponse;

    /**
     * Verifies a MatchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a MatchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MatchResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): MatchResponse;

    /**
     * Creates a plain object from a MatchResponse message. Also converts values to other types if specified.
     * @param message MatchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MatchResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this MatchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a GameOver2Request. */
export interface IGameOver2Request {

    /** GameOver2Request ipPortStr */
    ipPortStr?: (string|null);
}

/** Represents a GameOver2Request. */
export class GameOver2Request implements IGameOver2Request {

    /**
     * Constructs a new GameOver2Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameOver2Request);

    /** GameOver2Request ipPortStr. */
    public ipPortStr: string;

    /**
     * Creates a new GameOver2Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameOver2Request instance
     */
    public static create(properties?: IGameOver2Request): GameOver2Request;

    /**
     * Encodes the specified GameOver2Request message. Does not implicitly {@link GameOver2Request.verify|verify} messages.
     * @param message GameOver2Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameOver2Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameOver2Request message, length delimited. Does not implicitly {@link GameOver2Request.verify|verify} messages.
     * @param message GameOver2Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameOver2Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameOver2Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameOver2Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameOver2Request;

    /**
     * Decodes a GameOver2Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameOver2Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameOver2Request;

    /**
     * Verifies a GameOver2Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a GameOver2Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameOver2Request
     */
    public static fromObject(object: [ 'object' ].<string, any>): GameOver2Request;

    /**
     * Creates a plain object from a GameOver2Request message. Also converts values to other types if specified.
     * @param message GameOver2Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameOver2Request, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this GameOver2Request to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AddLiveRequest. */
export interface IAddLiveRequest {

    /** AddLiveRequest userId */
    userId?: (number|null);
}

/** Represents an AddLiveRequest. */
export class AddLiveRequest implements IAddLiveRequest {

    /**
     * Constructs a new AddLiveRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddLiveRequest);

    /** AddLiveRequest userId. */
    public userId: number;

    /**
     * Creates a new AddLiveRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddLiveRequest instance
     */
    public static create(properties?: IAddLiveRequest): AddLiveRequest;

    /**
     * Encodes the specified AddLiveRequest message. Does not implicitly {@link AddLiveRequest.verify|verify} messages.
     * @param message AddLiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddLiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddLiveRequest message, length delimited. Does not implicitly {@link AddLiveRequest.verify|verify} messages.
     * @param message AddLiveRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddLiveRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddLiveRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddLiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddLiveRequest;

    /**
     * Decodes an AddLiveRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddLiveRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddLiveRequest;

    /**
     * Verifies an AddLiveRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AddLiveRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddLiveRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): AddLiveRequest;

    /**
     * Creates a plain object from an AddLiveRequest message. Also converts values to other types if specified.
     * @param message AddLiveRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddLiveRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AddLiveRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an AddLiveResponse. */
export interface IAddLiveResponse {

    /** AddLiveResponse result */
    result?: (Result|null);

    /** AddLiveResponse errormsg */
    errormsg?: (string|null);

    /** AddLiveResponse room */
    room?: (INRoom|null);
}

/** Represents an AddLiveResponse. */
export class AddLiveResponse implements IAddLiveResponse {

    /**
     * Constructs a new AddLiveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAddLiveResponse);

    /** AddLiveResponse result. */
    public result: Result;

    /** AddLiveResponse errormsg. */
    public errormsg: string;

    /** AddLiveResponse room. */
    public room?: (INRoom|null);

    /**
     * Creates a new AddLiveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddLiveResponse instance
     */
    public static create(properties?: IAddLiveResponse): AddLiveResponse;

    /**
     * Encodes the specified AddLiveResponse message. Does not implicitly {@link AddLiveResponse.verify|verify} messages.
     * @param message AddLiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAddLiveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AddLiveResponse message, length delimited. Does not implicitly {@link AddLiveResponse.verify|verify} messages.
     * @param message AddLiveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAddLiveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddLiveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddLiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AddLiveResponse;

    /**
     * Decodes an AddLiveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddLiveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AddLiveResponse;

    /**
     * Verifies an AddLiveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an AddLiveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddLiveResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): AddLiveResponse;

    /**
     * Creates a plain object from an AddLiveResponse message. Also converts values to other types if specified.
     * @param message AddLiveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AddLiveResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this AddLiveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of an UploadBiFenRequest. */
export interface IUploadBiFenRequest {

    /** UploadBiFenRequest biFen */
    biFen?: (string|null);
}

/** Represents an UploadBiFenRequest. */
export class UploadBiFenRequest implements IUploadBiFenRequest {

    /**
     * Constructs a new UploadBiFenRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUploadBiFenRequest);

    /** UploadBiFenRequest biFen. */
    public biFen: string;

    /**
     * Creates a new UploadBiFenRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UploadBiFenRequest instance
     */
    public static create(properties?: IUploadBiFenRequest): UploadBiFenRequest;

    /**
     * Encodes the specified UploadBiFenRequest message. Does not implicitly {@link UploadBiFenRequest.verify|verify} messages.
     * @param message UploadBiFenRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUploadBiFenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UploadBiFenRequest message, length delimited. Does not implicitly {@link UploadBiFenRequest.verify|verify} messages.
     * @param message UploadBiFenRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUploadBiFenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UploadBiFenRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UploadBiFenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UploadBiFenRequest;

    /**
     * Decodes an UploadBiFenRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UploadBiFenRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UploadBiFenRequest;

    /**
     * Verifies an UploadBiFenRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates an UploadBiFenRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UploadBiFenRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): UploadBiFenRequest;

    /**
     * Creates a plain object from an UploadBiFenRequest message. Also converts values to other types if specified.
     * @param message UploadBiFenRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UploadBiFenRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this UploadBiFenRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a ValidateOpenRoomRequest. */
export interface IValidateOpenRoomRequest {
}

/** Represents a ValidateOpenRoomRequest. */
export class ValidateOpenRoomRequest implements IValidateOpenRoomRequest {

    /**
     * Constructs a new ValidateOpenRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValidateOpenRoomRequest);

    /**
     * Creates a new ValidateOpenRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidateOpenRoomRequest instance
     */
    public static create(properties?: IValidateOpenRoomRequest): ValidateOpenRoomRequest;

    /**
     * Encodes the specified ValidateOpenRoomRequest message. Does not implicitly {@link ValidateOpenRoomRequest.verify|verify} messages.
     * @param message ValidateOpenRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValidateOpenRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValidateOpenRoomRequest message, length delimited. Does not implicitly {@link ValidateOpenRoomRequest.verify|verify} messages.
     * @param message ValidateOpenRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValidateOpenRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValidateOpenRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidateOpenRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValidateOpenRoomRequest;

    /**
     * Decodes a ValidateOpenRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidateOpenRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValidateOpenRoomRequest;

    /**
     * Verifies a ValidateOpenRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a ValidateOpenRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidateOpenRoomRequest
     */
    public static fromObject(object: [ 'object' ].<string, any>): ValidateOpenRoomRequest;

    /**
     * Creates a plain object from a ValidateOpenRoomRequest message. Also converts values to other types if specified.
     * @param message ValidateOpenRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValidateOpenRoomRequest, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ValidateOpenRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}

/** Properties of a ValidateOpenRoomResponse. */
export interface IValidateOpenRoomResponse {

    /** ValidateOpenRoomResponse result */
    result?: (Result|null);

    /** ValidateOpenRoomResponse errormsg */
    errormsg?: (string|null);
}

/** Represents a ValidateOpenRoomResponse. */
export class ValidateOpenRoomResponse implements IValidateOpenRoomResponse {

    /**
     * Constructs a new ValidateOpenRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValidateOpenRoomResponse);

    /** ValidateOpenRoomResponse result. */
    public result: Result;

    /** ValidateOpenRoomResponse errormsg. */
    public errormsg: string;

    /**
     * Creates a new ValidateOpenRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValidateOpenRoomResponse instance
     */
    public static create(properties?: IValidateOpenRoomResponse): ValidateOpenRoomResponse;

    /**
     * Encodes the specified ValidateOpenRoomResponse message. Does not implicitly {@link ValidateOpenRoomResponse.verify|verify} messages.
     * @param message ValidateOpenRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValidateOpenRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValidateOpenRoomResponse message, length delimited. Does not implicitly {@link ValidateOpenRoomResponse.verify|verify} messages.
     * @param message ValidateOpenRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValidateOpenRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValidateOpenRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValidateOpenRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValidateOpenRoomResponse;

    /**
     * Decodes a ValidateOpenRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValidateOpenRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValidateOpenRoomResponse;

    /**
     * Verifies a ValidateOpenRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: [ 'object' ].<string, any>): (string|null);

    /**
     * Creates a ValidateOpenRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValidateOpenRoomResponse
     */
    public static fromObject(object: [ 'object' ].<string, any>): ValidateOpenRoomResponse;

    /**
     * Creates a plain object from a ValidateOpenRoomResponse message. Also converts values to other types if specified.
     * @param message ValidateOpenRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValidateOpenRoomResponse, options?: $protobuf.IConversionOptions): [ 'object' ].<string, any>;

    /**
     * Converts this ValidateOpenRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): [ 'object' ].<string, any>;
}
