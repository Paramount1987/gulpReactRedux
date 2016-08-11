const initialState = {
   catalog: [ {'name': 'хлопья777'} ],
   type: 'creker'
}

export default function product(state = initialState, action){
   switch(action.type){
      case 'PRODUCTS_REQUEST':
         console.log('PRODUCTS_REQUEST');
         return state;
      case 'PRODUCTS_GOT':
         console.log('PRODUCTS_GOT');
         return {...state, catalog: action.catalog};
      default:
         return state;
   }
}