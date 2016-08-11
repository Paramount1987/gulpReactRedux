//-----------------------------------------filter products
export function filterProduct(filterType) {
  return {
    type: 'FILTER_PRODUCTS',
    filterType
  }
}

//------------------------------------------get products
export function getProducts(){

  return function(dispatch){

    dispatch({
      type: 'PRODUCTS_REQUEST'
    });

    setTimeout(function(){
      dispatch({
        type: 'PRODUCTS_GOT',
        catalog: [
          {name: 'хлопья 1'},
          {name: 'хлопья 2'},
          {name: 'хлопья 3'}
        ]
      });
    }, 2000);

  }

}