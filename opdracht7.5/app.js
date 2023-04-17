function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    console.log(product);
  }
  
  multiply([1, 2, 3, 4, 5, 6], 3);