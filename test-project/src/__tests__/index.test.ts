import { LoggerConfig } from "lcherukuri-logger/types/custom-types";
import { ArrayLogger } from "lcherukuri-logger";

describe('Logger Test', () => {
    it('should pass', () => {
        const config: LoggerConfig = {
            size: 10
        };
        const logger = new ArrayLogger(config);
        logger.log('Hello World!');
        expect(logger.messages.length).toBe(1);
    });
});
