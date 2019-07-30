import { LoggerConfig } from "./custom-types";
import { LogLevel } from "./LogLevel";

export default class ArrayLogger {
    public size: number;
    public messages: string[];

    constructor(config: LoggerConfig) {
        this.size = config.size;
        this.messages = [];
    }

    log(logLevel: LogLevel, message: string) {
        if (this.messages.length >= this.size) {
            return;
        }
        this.messages.push(message);
    }
}
