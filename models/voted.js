module.exports = function (sequelize, DataTypes) {
  var VotedEntry = sequelize.define('VotedEntry', {
    datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shape: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mainId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
      timestamps: false
    });
  return VotedEntry;
};

// SHOULD keep association to first table....
// Set this up after getting the basic table with vote count working...