module.exports = function (sequelize, DataTypes) {
    var UFO = sequelize.define("UFO", {
        datetime: DataType.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        shape: DataTypes.STRING,
        duration_sec: DataTypes.INTEGER,
        duration_hours: DataTypes.INTEGER,
        comments: DataTypes.STRING,
        dateposted: DataTypes.INTEGER,
        latitude: DataTypes.INTEGER,
        longitude: DataTypes.INTEGER
    });
    return UFO;
};
