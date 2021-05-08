export default function (Countries) {
  const locationResolvers = {
    Locations: {
      country: (location) => {
        return Countries.find({ query: { _id: location.country } }).then(
          (result) => result[0]
        );
      },
    },
  };

  return locationResolvers;
}
