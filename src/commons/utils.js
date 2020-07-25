import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export function sortList(list) {
      return list.sort(function (a, b) {
            return a.name.localeCompare(b.name);
      });
}