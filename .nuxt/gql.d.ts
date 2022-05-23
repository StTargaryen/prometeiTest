declare module '#build/gql' {
  type GqlClients = ''
  type GqlFunc = ReturnType<typeof import('#imports')['useGql']>
  export const GqlCatalogMenu: (...params: Parameters<GqlFunc['CatalogMenu']>) => ReturnType<GqlFunc['CatalogMenu']>
  export const GqlProductByArticle: (...params: Parameters<GqlFunc['ProductByArticle']>) => ReturnType<GqlFunc['ProductByArticle']>
  export const GqlProductCardDataBySlug: (...params: Parameters<GqlFunc['ProductCardDataBySlug']>) => ReturnType<GqlFunc['ProductCardDataBySlug']>
  export const GqlProductsBySubcategorySlug: (...params: Parameters<GqlFunc['ProductsBySubcategorySlug']>) => ReturnType<GqlFunc['ProductsBySubcategorySlug']>
  export const GqlSubcategoryDataBySlug: (...params: Parameters<GqlFunc['SubcategoryDataBySlug']>) => ReturnType<GqlFunc['SubcategoryDataBySlug']>
  export const GqlGetCategoryBySlug: (...params: Parameters<GqlFunc['getCategoryBySlug']>) => ReturnType<GqlFunc['getCategoryBySlug']>
  export const GqlGetRootCategories: (...params: Parameters<GqlFunc['getRootCategories']>) => ReturnType<GqlFunc['getRootCategories']>
}