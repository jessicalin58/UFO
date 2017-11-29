module.exports = function (sequelize, DataTypes) {
    var UFO = sequelize.define("UFO", {
        // datetime: DataType.STRING,
        // city: DataTypes.STRING,
        // state: DataTypes.STRING,
        // country: DataTypes.STRING,
        // shape: DataTypes.STRING,
        // duration_sec: DataTypes.INTEGER,
        // duration_hours: DataTypes.INTEGER,
        // comments: DataTypes.STRING,
        // dateposted: DataTypes.INTEGER,
        // latitude: DataTypes.INTEGER,
        // longitude: DataTypes.INTEGER

        datetime: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        city: {
            type: DataTypes.STRING,
            allowNull: false

        },
        state: {
            type: DataTypes.STRING,
            allowNull: true

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
            type: DataTypes.STRING,
            allowNull: false

        },
        vote: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
            timestamps: false
        });
    return UFO;
};

