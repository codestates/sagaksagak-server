'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.addColumn('rooms', 'userId', Sequelize.INTEGER);
    await queryInterface.addColumn('todos', 'userId', Sequelize.INTEGER);
    await queryInterface.addColumn('join_logs', 'roomId', Sequelize.INTEGER);
    await queryInterface.addColumn('join_logs', 'userId', Sequelize.INTEGER);

    await queryInterface.addConstraint('rooms',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'foreign key userId for rooms',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('todos',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'foreign key userId for todos',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('join_logs',{
      fields: ['userId'],
      type: 'foreign key',
      name: 'foreign key userId for logs',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('join_logs',{
      fields: ['roomId'],
      type: 'foreign key',
      name: 'foreign key roomId for logs',
      references: {
        table: 'rooms',
        field: 'id'
      },
      onDelete: 'cascade', 
      onUpdate: 'cascade'
    });

  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.removeConstraint('rooms', 'foreign key userId for rooms');
     await queryInterface.removeColumn('rooms', 'userId');
     await queryInterface.removeConstraint('todos', 'foreign key userId for todos');
     await queryInterface.removeColumn('todos', 'userId');
     await queryInterface.removeConstraint('join_logs', 'foreign key userId for logs');
     await queryInterface.removeColumn('join_logs', 'userId');
     await queryInterface.removeConstraint('join_logs', 'foreign key roomId for logs');
     await queryInterface.removeColumn('join_logs', 'roomId');
  }
};
