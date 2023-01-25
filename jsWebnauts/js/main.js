function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
    function randomArray(arr, len) {
        arr.sort(function () {
            return Math.random() > 0.5
        });
        arr.length = len;
        return arr;
    }
    console.log(randomArray(features, getRandomInt(1, 7)));
    