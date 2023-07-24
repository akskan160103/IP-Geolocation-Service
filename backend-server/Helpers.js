//Each IPv4 formatted IP address will be converted into a unique number:
function ConvertIPToNumber(ipAddress) 
{
  const ipSegments = ipAddress.split('.'); // Splits the IP address into its four segments
  let numericIP = 0;

  // Convert each segment and add it to numericIP
  for (let i = 0; i < ipSegments.length; i++) {
    numericIP = numericIP * 256;
    numericIP += Number(ipSegments[i]);
    /*Number(---) in JS is analogous to stoi in C++ */
  }

  return numericIP;
}


module.exports.ConvertIPToNumber=ConvertIPToNumber;