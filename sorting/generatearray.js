var data1=[];
function generateRandomArray() {
  const Size=document.getElementById("arraySize");
  const size = parseInt(Size.value);
    let len=20;
    data1=[];
    const data = [];
    if(size>=4 && size<=70)
    {
      len=size;
    }
  
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