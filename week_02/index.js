// Bytes to ascii
function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes1 = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
  const asciiString1 = bytesToAscii(bytes1);
  console.log(asciiString1); // Output: "Hello"






// ascii to bytes 

function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }
  
  // Example usage:
  const ascii2 = "Hello";
  const byteArray2 = asciiToBytes(ascii2);
  console.log(byteArray2); // Output: [72, 101, 108, 108, 111]



// Uint8Array to ascii

function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
  }
  
  // Example usage:
  const bytes3 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiString3 = bytesToAscii(bytes3);
  console.log(asciiString3); // Output: "Hello"
  


//   ascii to Uint8Array


function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const ascii4 = "Hello";
  const byteArray4 = asciiToBytes(ascii4);
  console.log(byteArray4); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  