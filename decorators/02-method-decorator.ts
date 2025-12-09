
export enum LoggingLevel {
    // ERROR = "ERROR",
    // INFO ="INFO",
    // WARN ="WARN",
    // DEBUG ="DEBUG",
    // TRACE = "TRACE"

    ERROR ,
    INFO ,
    WARN ,
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.DEBUG; // sẽ log tất cả các mức từ DEBUG trở lên

export function Log(level: LoggingLevel): MethodDecorator {
    console.log(`applying @Log Decorator`)
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const originalFunction = descriptor.value;
        
        descriptor.value = function (...args: any []) {

            if (level <= appMaxLoggingLevel) {
                console.log (`>> Log: ${String(propertyKey)}, ${JSON.stringify(args)}`)
            }

            originalFunction.apply(this, args);
  }
}
}

export function Perf(): MethodDecorator{
    return (target:any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const originalFunction:Function  = descriptor.value;

        descriptor.value = function (...args: any []) {
            console.log (`started at ${new Date().getTime()}`)

            originalFunction.apply(this, args);
            
            console.log (`ended at ${new Date().getTime()}`)
        }
    }
}