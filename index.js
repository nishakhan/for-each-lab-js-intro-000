function callback(index, element) {
  console.log(${index}: ${element});
}

function iterativeLog(array) {
  array.forEach(callback);
}
