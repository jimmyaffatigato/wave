export default class Wave {
    static saw(x: number, period?: number, amplitude?: number, offset?: number): number;
    static sine(x: number, period?: number, amplitude?: number, offset?: number): number;
    static square(x: number, period?: number, amplitude?: number, offset?: number): number;
    static triangle(x: number, period?: number, amplitude?: number, offset?: number): number;
}
