import { gql } from '@apollo/client';

export const QUERY_HOME = gql`
  query HomePage($uid: String!, $lang: String!) {
    homepage(uid: $uid, lang: $lang) {
      title
      description
    }
  }
`;
