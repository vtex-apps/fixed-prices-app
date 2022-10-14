import React from 'react'
import { useQuery } from 'react-apollo'
import getFixedPrice from '../graphql/getFixedPrice.gql'
import { useProduct } from 'vtex.product-context'

interface queryOpt {
  skuId: string,
  tableName: string
}

interface queryData {
  getFixedPrice: [
    {
      value: number,
      minQuantity: number
    }
  ]
}

function Prices() {

  // Get the product context value for the selected Sku
  const productContextValue = useProduct();
  const selectedItem = productContextValue?.selectedItem?.itemId || "";

  // CHANGE_HERE your table name
  const tableName = '2';

  const { data, loading, error } = useQuery<queryData, queryOpt>(getFixedPrice, {
    variables: {
      "skuId": selectedItem,
      "tableName": tableName
    }
  })

  if (selectedItem){
    if (loading){
      console.log("Loading");
    } else {
      if (error){
        console.log('----error----', error);
        return null;
      } else if (data){
        console.log('----data----', data.getFixedPrice);
      }
    }
  }

  // Customize the information to be displayed on the front here:
  return <div>
            <p>SkuId: {selectedItem}</p>
            <p>Fixed price: {data?.getFixedPrice[0].value}</p>
            <p>minQuantity: {data?.getFixedPrice[0].minQuantity}</p>
        </div>
}

export default Prices
