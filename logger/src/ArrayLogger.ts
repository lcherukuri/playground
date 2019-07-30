import { LoggerConfig } from "./custom-types";

export default class ArrayLogger {
    public size: number;
    public messages: string[];

    constructor(config: LoggerConfig) {
        this.size = config.size;
    }

    log(message: string) {
        if (this.messages.length >= this.size) {
            return;
        }
        this.messages.push(message);
    }
}
