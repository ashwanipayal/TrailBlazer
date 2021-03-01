import SEARCH_PAGE_CONSTANTS from './SearchPage.constants.js';

export const setSearchData = (payload) => {
    return {
      type: SEARCH_PAGE_CONSTANTS.SET_SEARCH_DATA,
      payload
    };
  };

export const setActiveSearch = (payload) => {
    return {
      type: SEARCH_PAGE_CONSTANTS.SET_ACTIVE_SEARCH,
      payload
    };
  };