import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  products?: InputMaybe<ProductCardFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  image?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<CategoryFiltersInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  parent?: InputMaybe<CategoryFiltersInput>;
  products?: InputMaybe<ProductCardFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  related?: InputMaybe<CategoryFiltersInput>;
  showInNav?: InputMaybe<BooleanFilterInput>;
  showProducts?: InputMaybe<BooleanFilterInput>;
  showRelated?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  image?: InputMaybe<Scalars['ID']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  navIcon?: InputMaybe<Scalars['ID']>;
  parent?: InputMaybe<Scalars['ID']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  showInNav?: InputMaybe<Scalars['Boolean']>;
  showProducts?: InputMaybe<Scalars['Boolean']>;
  showRelated?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Category_Type>;
};

export type ComponentProductSettingsColorInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ComponentProductSettingsDescriptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductSettingsDescriptionFiltersInput>>>;
  not?: InputMaybe<ComponentProductSettingsDescriptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductSettingsDescriptionFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentProductSettingsDescriptionInput = {
  id?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ComponentProductSettingsSizeInput = {
  id?: InputMaybe<Scalars['ID']>;
  value?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Category_Type {
  Category = 'category',
  Section = 'section',
  Subcategory = 'subcategory'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type ProductCardFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductCardFiltersInput>>>;
  brand?: InputMaybe<BrandFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<ProductFiltersInput>;
  not?: InputMaybe<ProductCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductCardFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showImages?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductCardInput = {
  brand?: InputMaybe<Scalars['ID']>;
  category?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  showImages?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ProductFiltersInput = {
  amount?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  article?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  parent?: InputMaybe<ProductCardFiltersInput>;
  price?: InputMaybe<IntFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  amount?: InputMaybe<Scalars['Int']>;
  article?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<ComponentProductSettingsColorInput>;
  description?: InputMaybe<Array<InputMaybe<ComponentProductSettingsDescriptionInput>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  parent?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  size?: InputMaybe<ComponentProductSettingsSizeInput>;
  title?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  LIVE = 'LIVE',
  PREVIEW = 'PREVIEW'
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type GetRootCategoriesQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']>;
}>;


export type GetRootCategoriesQuery = { categories?: { data: Array<{ attributes?: { slug: string, title: string, parent?: { data?: { attributes?: { title: string } | null } | null } | null, items?: { data: Array<{ attributes?: { title: string, slug: string, image?: { data?: { attributes?: { url: string } | null } | null } | null } | null }> } | null, image?: { data?: { attributes?: { url: string } | null } | null } | null } | null }> } | null };

export type GetCategoryBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetCategoryBySlugQuery = { categories?: { data: Array<{ attributes?: { slug: string, title: string, showProducts?: boolean | null, showRelated?: boolean | null, parent?: { data?: { attributes?: { title: string, slug: string } | null } | null } | null, items?: { data: Array<{ attributes?: { title: string, slug: string, image?: { data?: { attributes?: { url: string } | null } | null } | null } | null }> } | null, related?: { data: Array<{ attributes?: { title: string, slug: string, image?: { data?: { attributes?: { url: string } | null } | null } | null } | null }> } | null } | null }> } | null, brands?: { data: Array<{ id?: string | null, attributes?: { title: string } | null }> } | null };

export type CatalogMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type CatalogMenuQuery = { categories?: { data: Array<{ id?: string | null, attributes?: { title: string, navIcon?: { data?: { attributes?: { url: string } | null } | null } | null, items?: { data: Array<{ id?: string | null, attributes?: { title: string, slug: string, items?: { data: Array<{ id?: string | null, attributes?: { title: string, slug: string } | null }> } | null } | null }> } | null } | null }> } | null };

export type SearchEntitiesByTitleQueryVariables = Exact<{
  value?: InputMaybe<Scalars['String']>;
}>;


export type SearchEntitiesByTitleQuery = { categories?: { data: Array<{ id?: string | null, attributes?: { title: string, slug: string } | null }> } | null, products?: { data: Array<{ id?: string | null, attributes?: { title: string, article: string, parent?: { data?: { attributes?: { slug: string } | null } | null } | null } | null }> } | null };

export type MainSearchQueryVariables = Exact<{
  value?: InputMaybe<Scalars['String']>;
}>;


export type MainSearchQuery = { products?: { data: Array<{ attributes?: { article: string, parent?: { data?: { attributes?: { slug: string } | null } | null } | null } | null }> } | null, categories?: { data: Array<{ attributes?: { slug: string } | null }> } | null };

export type ProductByArticleQueryVariables = Exact<{
  article?: InputMaybe<Scalars['String']>;
}>;


export type ProductByArticleQuery = { products?: { data: Array<{ attributes?: { article: string, title: string, price: number, amount: number, description?: Array<{ value: string } | null> | null, color: { value: string, title: string }, size: { value: string }, images?: { data: Array<{ attributes?: { url: string } | null }> } | null } | null }> } | null };

export type ProductCardDataBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ProductCardDataBySlugQuery = { productCards?: { data: Array<{ attributes?: { title: string, slug: string, images?: { data: Array<{ id?: string | null, attributes?: { url: string } | null }> } | null, items?: { data: Array<{ attributes?: { article: string, color: { title: string, value: string }, size: { value: string } } | null }> } | null, category?: { data?: { attributes?: { title: string, slug: string } | null } | null } | null } | null }> } | null };

export type ProductsBySubcategorySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  priceFrom?: InputMaybe<Scalars['Int']>;
  priceTo?: InputMaybe<Scalars['Int']>;
}>;


export type ProductsBySubcategorySlugQuery = { products?: { data: Array<{ attributes?: { title: string, article: string, price: number, color: { title: string }, size: { value: string }, parent?: { data?: { attributes?: { slug: string, brand?: { data?: { id?: string | null, attributes?: { title: string } | null } | null } | null } | null } | null } | null, images?: { data: Array<{ id?: string | null, attributes?: { url: string } | null }> } | null } | null }> } | null };


export const GetRootCategoriesDocument = gql`
    query getRootCategories($type: String) {
  categories(filters: {type: {eq: $type}}) {
    data {
      attributes {
        slug
        title
        parent {
          data {
            attributes {
              title
            }
          }
        }
        items {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
export const GetCategoryBySlugDocument = gql`
    query getCategoryBySlug($slug: String) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        slug
        title
        showProducts
        showRelated
        parent {
          data {
            attributes {
              title
              slug
            }
          }
        }
        items {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        related {
          data {
            attributes {
              title
              slug
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  brands(filters: {products: {category: {slug: {eq: $slug}}}}) {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;
export const CatalogMenuDocument = gql`
    query CatalogMenu {
  categories(filters: {showInNav: {eq: true}, and: {type: {eq: "section"}}}) {
    data {
      id
      attributes {
        title
        navIcon {
          data {
            attributes {
              url
            }
          }
        }
        items(filters: {showInNav: {eq: true}, and: {type: {eq: "category"}}}) {
          data {
            id
            attributes {
              title
              slug
              items(filters: {showInNav: {eq: true}, and: {type: {eq: "subcategory"}}}) {
                data {
                  id
                  attributes {
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const SearchEntitiesByTitleDocument = gql`
    query SearchEntitiesByTitle($value: String) {
  categories(filters: {title: {contains: $value}}) {
    data {
      id
      attributes {
        title
        slug
      }
    }
  }
  products(filters: {title: {contains: $value}}) {
    data {
      id
      attributes {
        title
        article
        parent {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const MainSearchDocument = gql`
    query MainSearch($value: String) {
  products(filters: {article: {eq: $value}}) {
    data {
      attributes {
        article
        parent {
          data {
            attributes {
              slug
            }
          }
        }
      }
    }
  }
  categories(filters: {title: {contains: $value}}) {
    data {
      attributes {
        slug
      }
    }
  }
}
    `;
export const ProductByArticleDocument = gql`
    query ProductByArticle($article: String) {
  products(filters: {article: {eq: $article}}) {
    data {
      attributes {
        article
        title
        price
        amount
        description {
          value
        }
        color {
          value
          title
        }
        size {
          value
        }
        images {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;
export const ProductCardDataBySlugDocument = gql`
    query ProductCardDataBySlug($slug: String) {
  productCards(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
        slug
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
        items {
          data {
            attributes {
              article
              color {
                title
                value
              }
              size {
                value
              }
            }
          }
        }
        category {
          data {
            attributes {
              title
              slug
            }
          }
        }
      }
    }
  }
}
    `;
export const ProductsBySubcategorySlugDocument = gql`
    query ProductsBySubcategorySlug($slug: String, $brands: [ID], $priceFrom: Int, $priceTo: Int) {
  products(
    filters: {parent: {category: {slug: {eq: $slug}}, brand: {id: {in: $brands}}}, and: {price: {gte: $priceFrom, lte: $priceTo}}}
  ) {
    data {
      attributes {
        title
        article
        price
        color {
          title
        }
        size {
          value
        }
        parent {
          data {
            attributes {
              slug
              brand {
                data {
                  attributes {
                    title
                  }
                  id
                }
              }
            }
          }
        }
        images {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getRootCategories(variables?: GetRootCategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRootCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRootCategoriesQuery>(GetRootCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRootCategories', 'query');
    },
    getCategoryBySlug(variables?: GetCategoryBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCategoryBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCategoryBySlugQuery>(GetCategoryBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryBySlug', 'query');
    },
    CatalogMenu(variables?: CatalogMenuQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CatalogMenuQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CatalogMenuQuery>(CatalogMenuDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CatalogMenu', 'query');
    },
    SearchEntitiesByTitle(variables?: SearchEntitiesByTitleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchEntitiesByTitleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchEntitiesByTitleQuery>(SearchEntitiesByTitleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchEntitiesByTitle', 'query');
    },
    MainSearch(variables?: MainSearchQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MainSearchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MainSearchQuery>(MainSearchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MainSearch', 'query');
    },
    ProductByArticle(variables?: ProductByArticleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductByArticleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductByArticleQuery>(ProductByArticleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductByArticle', 'query');
    },
    ProductCardDataBySlug(variables?: ProductCardDataBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductCardDataBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductCardDataBySlugQuery>(ProductCardDataBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductCardDataBySlug', 'query');
    },
    ProductsBySubcategorySlug(variables?: ProductsBySubcategorySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductsBySubcategorySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductsBySubcategorySlugQuery>(ProductsBySubcategorySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductsBySubcategorySlug', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;