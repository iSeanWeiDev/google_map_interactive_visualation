'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    un_country_name: DataTypes.STRING,
    alpha: DataTypes.STRING,
    wb_code: DataTypes.STRING,
    wb_country_name: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.PeoplesInfo, {
      foreignKey: 'country_id',
      sourceKey: 'id'
    });
  };
  return Country;
};