import 'fitzeach';

const consoleSpy = jest.spyOn(console, 'log');

describe('fitz each - the saga to fitzjs', () => {

    it('lfg fitzseach was called correctly', () => {
        Number(6).each(()=>{
            console.log('lfg');
            expect(consoleSpy).toHaveBeenCalledWith('lfg');
        });
    });

    it('lfg fitzeach was called the correct amount of times', () => {
        expect(consoleSpy).toHaveBeenCalledTimes(6);
    });
});