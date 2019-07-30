import { LoggerConfig } from "lcherukuri-logger/types/custom-types";
import { ArrayLogger } from "lcherukuri-logger";
import { LogLevel } from "lcherukuri-logger/types/LogLevel";

describe('Logger Test', () => {
    it('should pass', () => {
        const config: LoggerConfig = {
            size: 10
        };
        const logger = new ArrayLogger(config);
        logger.log(LogLevel.INFO, 'Hello World!');
        expect(logger.messages.length).toBe(1);
    });
});
