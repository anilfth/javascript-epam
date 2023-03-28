const fs = require('fs');
// creating a new file
//  fs.writeFileSync("read.txt", "welcome to LPU"); 
 fs.writeFileSync("read.txt", "welcome to lovely professional University punjab\n");
//  adding new content without removing previous content
 fs.appendFileSync("read.txt", "how are you !");
 // read a file 
//  fs.readFileSync('read.txt');
   const buf_data = fs.readFileSync("read.txt");
   console.log(buf_data);
   // convert binary to string
    org_data = buf_data.toString();
    console.log(org_data);
 // rename a file 

  fs.renameSync("read.txt", "readwrite.txt");