const GEOLOCATION_DEFAULT_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 30 * 1000,
  maximymAge: 60 * 60 * 1000
};

const getLocation = (opts = {}) => {
  const options = {
    ...GEOLOCATION_DEFAULT_OPTIONS,
    ...opts
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export default getLocation;
