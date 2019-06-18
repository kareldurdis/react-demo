module.exports = {
  client: {
    include: ['src/**/*.js'],
    addTypename: false,
    service: {
      name: 'local-schema',
      localSchemaFile: './schema.graphql',
    },
  },
};
