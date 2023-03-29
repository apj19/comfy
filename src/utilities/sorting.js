function sortProduct(ProductList,type){
    switch (type) {
        case 'sortA_Z':
            ProductList.sort(
                (str1, str2) => str2.name - str1.name
              );
          break;
        case 'sortZ_A':
            ProductList.sort(
                (str1, str2) => str2.name - str1.name
              );
              ProductList.reverse();

          break;

          case 'PriceLow_High':
            ProductList.sort((str1, str2) => str2.price - str1.price);
            ProductList.reverse();
          break;
          case 'PriceHigh_Low':
            ProductList.sort((str1, str2) => str2.price - str1.price);
          break;
      }


      return ProductList;
}

export {sortProduct}