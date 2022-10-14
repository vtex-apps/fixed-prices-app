interface Args{
    skuId: string,
    tableName: string
}

export const getFixedPrice = async (
    _: any, 
    { skuId, tableName }: Args,
    { clients }: Context
) => {
    const { data } = await clients.prices.getFixedPricesFromTable( skuId, tableName )
    return data
}