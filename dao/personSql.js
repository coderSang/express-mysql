let person = {
  insert:'INSERT INTO person(id, name, age) VALUES(0,?,?)',
  query: 'select * from person where id = ?',
  queryAll: 'select * from user'
};

module.exports = person;