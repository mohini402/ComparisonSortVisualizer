var data1=[];
function generateRandomArray() {
    data1=[];
    const data = [];
    const len = 30;
  
    // Generate random data for bar heights
    for (let i = 0; i < len; i++) {
      var n=(Math.floor(Math.random() * 100) + 1);
      data.push(n);
      data1.push(n);
    }
    return data;
  }

  export {generateRandomArray}
  export {data1}