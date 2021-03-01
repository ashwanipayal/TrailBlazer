import SEARCH_PAGE_CONSTANTS from '../container/SearchPage.constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  searchedSeat:{},
  mapData: {
    "Himalayan":[20.120418614613282,-72.04696655273439],
    "G-10-201":[0,0],
    "Aravalli":[24.03893911689407,48.214874267578125],
    "G-10-202":[22.646967311123674,-28.44497680664063],
  },
});

const SearchPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PAGE_CONSTANTS.SET_SEARCH_DATA:
      const position = state.getIn(["mapData",action.payload]);
      return state.set('searchedSeat', { seatNumber: action.payload,position:position});
    default:
      return state;
  }
};

export default SearchPageReducer;
