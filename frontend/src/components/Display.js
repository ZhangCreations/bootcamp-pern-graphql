import React from 'react';
import { useQuery, gql } from '@apollo/client';

import BasicTable from './BasicTable';
import './Display.scss';
import  { removeTypeName } from '../utilities';

const restaurantsQuery = gql`
  {
    restaurants {
      id
      name
      address
      type
      budget
      description
      rating
    }
  }
`;

const restaurantGroupsQuery = gql`
  {
    restaurantGroups {
      id
      name
      description
      restaurantIds
    }
  }
`;

const Display = (props) => {
  /**
   * useQuery is a React Hook (refer to accompanying slides for a quick explanation).
   * when this component renders, it executes the provided GraphQL query using our
   * Apollo client, obtaining the data we need
   */
  const { loading, error, data } = useQuery(restaurantsQuery, {
    onCompleted: data => { props.loadData(removeTypeName(data.restaurants)) }
  });

  const { loading: loadingGroups, error: errorGroups, data: dataGroups } = useQuery(restaurantGroupsQuery, {
    onCompleted: dataGroups => { props.loadData(removeTypeName(dataGroups.restaurantGroups)) }
  });

  if (loading) return <p>Loading restaurants...</p>;
  if (loadingGroups) return <p>Loading restaurant groups...</p>;

  if (error) return <p>Error loading restaurants!</p>;
  if (errorGroups) return <p>Error loading restaurant groups!</p>;


  return (
    <div className="display-container">
      <h2>Local Data Handling</h2>
      <h3>Restaurants</h3>
      <BasicTable data={removeTypeName(data.restaurants)} />
      <h3>Restaurant Groups</h3>
      <BasicTable  data={removeTypeName(dataGroups.restaurantGroups)} />
      <h2>Global Data Handling</h2>
      <BasicTable  data={props.storeData} />
    </div>
  );
}

export default Display;

Display.propTypes = {};
