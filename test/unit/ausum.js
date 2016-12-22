import osc from '../../src/ausum';

describe('osc', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(osc, 'greet');
      osc.greet();
    });

    it('should have been run once', () => {
      expect(osc.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(osc.greet).to.have.always.returned('hello');
    });
  });
});
