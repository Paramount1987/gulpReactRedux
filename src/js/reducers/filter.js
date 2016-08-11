const initialState = {
   filterType: 0
};

export default function filter(state = initialState, action){

   switch(action.type){
      case 'FILTER_PRODUCTS':
         return {...state, filterType: action.filter};
      default:
         return state;
   }

}