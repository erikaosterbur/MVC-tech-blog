const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comment };
