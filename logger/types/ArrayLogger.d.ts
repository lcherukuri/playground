import { LoggerConfig } from "./custom-types";
export default class ArrayLogger {
    size: number;
    messages: string[];
    constructor(config: LoggerConfig);
    log(message: string): void;
}
