'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('users', {
    id: { type: 'string',
      primaryKey: true },
    name: { type: 'string',
      notNull: true }
  })
    .then(
      (result) => {
        db.insert('users', ['id', 'name'], ['32547dd7-617a-4985-a59a-91a176e55b83', 'Iván']),
        db.insert('users', ['id', 'name'], ['43ba0b24-4d0b-40f7-aa7f-1b2a3058f484', 'Nabby']);
      },
      (err) => {
        return;
      }
    );
};

exports.down = function(db) {
  return db.dropTable('users');
};

exports._meta = {
  version: 1
};
