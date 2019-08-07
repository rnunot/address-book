import getters from '@/store/app/app.getters';

describe('app module getters', () => {
  describe('newContentAvailable', () => {
    it('should return true if SWRegistrationForNewContent is not null', () => {
      const result = getters.newContentAvailable(
        {
          SWRegistrationForNewContent: {},
        } as any,
        null,
        {},
        null,
      );

      expect(result).toBe(true);
    });

    it('should return false if SWRegistrationForNewContent is null', () => {
      const result = getters.newContentAvailable(
        {
          SWRegistrationForNewContent: undefined,
        } as any,
        null,
        {},
        null,
      );

      expect(result).toBe(false);
    });
  });
});
