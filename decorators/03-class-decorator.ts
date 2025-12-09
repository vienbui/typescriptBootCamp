
export function SealClass(): ClassDecorator{
    return (constructor: Function) => {

        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

}