export class Validate{
    /**
     * 效验整数并且是否大于0
     * @param content 
     */
    public static isIntegerLarge0(content:string) {
        let reg = /^[-+]?\d+$/;
        if (!reg.test(content) || parseInt(content) <= 0) {
            return false;
        } else {
            return true;
        }
    }
}