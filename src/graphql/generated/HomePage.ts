/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePage
// ====================================================

export interface HomePage_homepage {
  __typename: 'Homepage';
  title: any | null;
  description: any | null;
}

export interface HomePage {
  homepage: HomePage_homepage | null;
}

export interface HomePageVariables {
  uid: string;
  lang: string;
}
