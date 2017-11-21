module.exports = function (sequelize, DataTypes) {
  var UserEntry = sequelize.define("UserEntry", {
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },        
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return UserEntry;
};
