function sortProduct(list,type){
  let ProductList= [...list];
  let returnlist=[];
    switch (type) {
        case 'sortA_Z':
          returnlist= ProductList.sort(
                (str1, str2) => str2.name - str1.name
              );
          break;
        case 'sortZ_A':
            ProductList.sort(
                (str1, str2) => str2.name - str1.name
              );
              returnlist= ProductList.reverse();

          break;

          case 'PriceLow_High':
            ProductList.sort((str1, str2) => str2.price - str1.price);
            returnlist= ProductList.reverse();
          break;
          case 'PriceHigh_Low':
            returnlist=ProductList.sort((str1, str2) => str2.price - str1.price);
          break;
      }


      return returnlist;
}

export {sortProduct}