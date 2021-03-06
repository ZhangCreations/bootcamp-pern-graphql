import { gql } from "apollo-server-express";

/**
 * type definitions for a restaurantGroup entity
 * this should look pretty familiar if you've worked with statically typed object-oriented languages before
 * 
 * some things to note:
 * - an exclamation mark denotes a non-nullable type
 * - built-in primitive types like String, Int, ID, Float, and Boolean are called scalars. Custom scalars can be defined
 * - ID is a special type representing a unique identifier. It is serialized as a String in responses, but it is NOT actually a String
 * - nested under "extend type Query { ... }", we have signatures for 2 queries. They are like method declarations, with parameters and return types
 * - similarly, nested under "extend type Mutation { ... }", we have signatures for 3 mutations
 */
const restaurantGroupType = gql`

    type restaurantGroup {
        id: ID!
        name: String!
        description: String
        restaurantIds: [Int]
    }

    extend type Query {
        restaurantGroup(id: ID!): restaurantGroup
        restaurantGroups: [restaurantGroup!]!
    }

    extend type Mutation {
        createRestaurantGroup(name: String!, name: String!, description: String, restaurantIds: [Int]) : restaurantGroup
        updateRestaurantGroup(id: ID!, name: String!, description: String, restaurantIds: [Int]) : restaurantGroup
        deleteRestaurantGroup(id: ID!) : ID
    }
`;

export default restaurantGroupType;
