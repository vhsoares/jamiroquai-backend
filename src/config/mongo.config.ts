export default () => ({
  mongo_connection_string: process.env.MONGO_CONNECTION_STRING,
  mongo_cluster_users: process.env.MONGO_CLUSTER_USERS,
  mongo_cluster_classes: process.env.MONGO_CLUSTER_CLASSES,
});
