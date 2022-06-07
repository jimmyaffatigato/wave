export default class Wave {
    static saw(x, period = 1, amplitude = 1, offset = 0) {
        return 2 * (x / period - Math.floor(x / period + 1 / 2)) * amplitude + offset;
    }
    static sine(x, period = 1, amplitude = 1, offset = 0) {
        return Math.sin((x * Math.PI) / period) * amplitude + offset;
    }
    static square(x, period = 1, amplitude = 1, offset = 0) {
        return (Math.floor(x * 2 * period - 1) % 2) * amplitude - amplitude / 2 - offset;
    }
    static triangle(x, period = 1, amplitude = 1, offset = 0) {
        return 2 * amplitude * Math.abs(2 * (x / period + 0.25 - Math.floor(x / period + 0.75))) - amplitude + offset;
    }
}
//# sourceMappingURL=index.js.map