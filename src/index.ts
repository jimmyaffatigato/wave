export default class Wave {
    static saw(x: number, period: number = 1, amplitude: number = 1, offset: number = 0): number {
        return 2 * (x / period - Math.floor(x / period + 1 / 2)) * amplitude + offset;
    }
    static sine(x: number, period: number = 1, amplitude: number = 1, offset: number = 0): number {
        return Math.sin((x * Math.PI) / period) * amplitude + offset;
    }
    static square(x: number, period: number = 1, amplitude: number = 1, offset: number = 0): number {
        return (Math.floor(x * 2 * period - 1) % 2) * amplitude - amplitude / 2 - offset;
    }
    static triangle(x: number, period: number = 1, amplitude: number = 1, offset: number = 0): number {
        return 2 * amplitude * Math.abs(2 * (x / period + 0.25 - Math.floor(x / period + 0.75))) - amplitude + offset;
    }
}
