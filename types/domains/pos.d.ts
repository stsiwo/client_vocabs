export declare enum PosEnum {
    NOUN = 0,
    VERB = 1,
    ADJUCTIVE = 2,
    ADVERB = 3,
    PREPOSITION = 4,
    PRONOUN = 5,
    CONJUNCTION = 6,
    INTERJECTION = 7,
    IDIOM = 8,
    ELSE = 9
}
export interface IPos {
    pos: string;
    value: string;
    abbr: string;
}
export declare const pos: IPos[];
