import store from '@/store';

const isIosOnBrowser =
  ['iPhone', 'iPad', 'iPod'].includes(navigator.platform) &&
  !(window.navigator as any).standalone;

if (isIosOnBrowser) {
  const now = Date.now();
  let limitDate = null;
  const addToHomeIosPromptLastDate = localStorage.getItem(
    'addToHomeIosPromptLastDate',
  );

  if (addToHomeIosPromptLastDate) {
    limitDate = new Date(parseInt(addToHomeIosPromptLastDate, 10));
    limitDate.setMonth(limitDate.getMonth() + 1);
  }

  if (!limitDate || now >= limitDate.getTime()) {
    store.commit('app/setShowAddToHomeScreenModalForApple', true);
  }
}
