module.exports = function (sequelize, DataTypes) {
  var VotedEntry = sequelize.define('VotedEntry', {
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shape: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
      timestamps: false
    });
  return VotedEntry;
};

// SHOULD keep association to first table....
// Set this up after getting the basic table with vote count working...