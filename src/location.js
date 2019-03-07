const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let failed = Math.random() > 0.5;

      failed ? reject('Error while getting location') : resolve('Ukraine');
    }, 500);
  });
};

export default getUserLocation;
