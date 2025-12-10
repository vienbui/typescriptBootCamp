"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingLevel = void 0;
exports.Log = Log;
exports.Perf = Perf;
var LoggingLevel;
(function (LoggingLevel) {
    // ERROR = "ERROR",
    // INFO ="INFO",
    // WARN ="WARN",
    // DEBUG ="DEBUG",
    // TRACE = "TRACE"
    LoggingLevel[LoggingLevel["ERROR"] = 0] = "ERROR";
    LoggingLevel[LoggingLevel["INFO"] = 1] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 2] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 3] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 4] = "TRACE";
})(LoggingLevel || (exports.LoggingLevel = LoggingLevel = {}));
const appMaxLoggingLevel = LoggingLevel.DEBUG; // sẽ log tất cả các mức từ DEBUG trở lên
function Log(level) {
    console.log(`applying @Log Decorator`);
    return (target, propertyKey, descriptor) => {
        const originalFunction = descriptor.value;
        descriptor.value = function (...args) {
            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${String(propertyKey)}, ${JSON.stringify(args)}`);
            }
            originalFunction.apply(this, args);
        };
    };
}
function Perf() {
    return (target, propertyKey, descriptor) => {
        const originalFunction = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`started at ${new Date().getTime()}`);
            originalFunction.apply(this, args);
            console.log(`ended at ${new Date().getTime()}`);
        };
    };
}
