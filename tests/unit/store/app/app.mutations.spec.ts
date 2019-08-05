import mutations from '@/store/app/app.mutations';

describe('app module mutation', () => {
  describe('setNetworkOnline', () => {
    it('should set network online state to the value given in parameter', () => {
      const state = {
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      };

      mutations.setNetworkOnline(state, true);

      expect(state).toEqual({
        appTitle: '',
        appShortTitle: '',
        networkOnLine: true,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      });
    });
  });

  describe('setSWRegistrationForNewContent', () => {
    it('should set new content available state to the value given in parameter', () => {
      const state = {
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      };
      const newSW = { id: 'sw' };

      mutations.setSWRegistrationForNewContent(state, newSW);

      expect(state).toEqual({
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: newSW,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      });
    });
  });

  describe('setShowAddToHomeScreenModalForApple', () => {
    it('should set show add to home screen modal for apple state to the value given in parameter', () => {
      const state = {
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      };

      mutations.setShowAddToHomeScreenModalForApple(state, true);

      expect(state).toEqual({
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: true,
        refreshingApp: false,
        isSideMenuOpen: false,
      });
    });
  });

  describe('setRefreshingApp', () => {
    it('should set refreshingApp state to the value given in parameter', () => {
      const state = {
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      };

      mutations.setRefreshingApp(state, true);

      expect(state).toEqual({
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: true,
        isSideMenuOpen: false,
      });
    });
  });

  describe('setIsSideMenuOpen', () => {
    it('should set isSideMenuOpen state to the value given in parameter', () => {
      const state = {
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: false,
      };

      mutations.setIsSideMenuOpen(state, true);

      expect(state).toEqual({
        appTitle: '',
        appShortTitle: '',
        networkOnLine: false,
        SWRegistrationForNewContent: undefined,
        showAddToHomeScreenModalForApple: false,
        refreshingApp: false,
        isSideMenuOpen: true,
      });
    });
  });
});
