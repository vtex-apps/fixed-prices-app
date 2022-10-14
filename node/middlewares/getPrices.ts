export async function getPrices(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },

  } = ctx

  console.info('Received params:', params)

  const { itemId,
    priceTableId } = params

  console.info('Received itemId:', itemId)
  console.info('Received priceTableId:', priceTableId)

  const response = await ctx.clients.prices.getFixedPricesFromTable(itemId, priceTableId)

  console.info('Status response:', response)

  if (response.status === 200){
    ctx.status = response.status
    ctx.body = response.data
  } else {
    ctx.body = 'Error'
  }
  
  await next()
}
