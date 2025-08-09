import { main } from './index';

describe('main function', () => {
    test('should return greeting', () => {
        expect(main()).toBe("Hello World");
    });
});