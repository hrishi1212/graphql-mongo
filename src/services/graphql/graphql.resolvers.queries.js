export default function (Query, Service, GetServiceName, FindServiceName) {
  Object.assign(Query, {
    [`${GetServiceName}`]: (root, args, context) => {
      return Service.find(Object.assign({}, context, { query: args })).then(
        (result) => result[0]
      );
    },
  });
  Object.assign(Query, {
    [`${FindServiceName}`]: (root, args, context) => {
      const queryParams = {
        $limit: args.limit ? args.limit : 100,
        $skip: args.skip ? args.skip : 0,
      };
      return Service.find(
        Object.assign({}, context, { query: queryParams })
      ).then((result) => {
        return { total: result.length, items: result };
      });
    },
  });
}
