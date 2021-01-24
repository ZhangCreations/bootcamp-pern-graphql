/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurant PostgreSQL table */
    const RestaurantGroup = sequelize.define("restaurantGroup", {
        /* sequelize automatically defines an id column as primary key */
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget: {
            type: DataTypes.ENUM,
            values: ["LOW", "MEDIUM", "HIGH"]
        },
        description: {
            type: DataTypes.STRING,
        },
        restaurantIds: {
            type: DataTypes.ARRAY,
        },
    },
        {
            timestamps: false
        });

    return RestaurantGroup;
}
