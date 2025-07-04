module.exports = ( sequelize , DataTypes ) => {
  const Comment = sequelize.define('Comment',{
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci'
  });
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User);
    db.Comment.belongsTo(db.Comment, {as:'Recomment'});
  };
  return Comment;
};