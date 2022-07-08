export class CommonCode {
    codeKey: string;
	parentCodeKey: string;
	codeType: string;
	messageEn: string;
	messageHi: string;
	delYn: string;
    codes: CommonCode[]

    constructor(codeKey: string, parentCodeKey: string, codeType: string, 
        messageEn: string, messageHi: string, delYn: string, codes: CommonCode[]) {
        this.codeKey = codeKey;
        this.parentCodeKey = parentCodeKey;
        this.codeType = codeType;
        this.messageEn = messageEn;
        this.messageHi = messageHi;
        this.delYn = delYn;
        this.codes = codes;
    }
}