module.exports = function (sequelize, DataTypes) {
    var UFO = sequelize.define("UFO", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return UFO;
};
