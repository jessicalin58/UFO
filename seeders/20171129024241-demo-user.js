var async = require('async')
  , fs = require('fs');

module.exports = {
  up: function (migration, DataTypes, done) {
    var db = migration.migrator.sequelize;

    async.waterfall([
      function (cb) {
        fs.readFile(__dirname + '/seed.sql', function (err, data) {
          if (err) throw err;
          cb(null, data.toString());
        });
      },

      function (initialSchema, cb) {
        // need to split on ';' to get the individual CREATE TABLE sql
        // as db.query can execute on query at a time
        var tables = initialSchema.split(';');

        function createTable(tableSql, doneCreate) {
          db.query(tableSql).complete(doneCreate);
        }

        async.each(tables, createTable, cb);
      }
    ], done);
  },

  down: function (migration, DataTypes, done) {
    migration.showAllTables().success(function (tableNames) {

      // Dont drop the SequelizeMeta table
      var tables = tableNames.filter(function (name) {
        return name.toLowerCase() !== 'sequelizemeta';
      });

      function dropTable(tableName, cb) {
        migration.dropTable(tableName).complete(cb);
      }

      async.each(tables, dropTable, done);
    });
  }
}