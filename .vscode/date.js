const d1 = new Date(2023, 2, 14);
console.log(d1);
 let now = (new Date(0)).getMilliseconds();
 console.log(now);
 console.log(now.toString());
 // creating a dateobjects at the unix epoch
 let epoch = new Date(0);
 console.log(epoch.toISOString());
  
 // creating a date objects 
 const currDate = Date.now();
 let mydate = new Date(currDate);
 document.write("Today the date is:" +mydate.getDate()+"/"+(mydate.getMonth()+1+"/"+mydate.getFullYear()+"<br/>"));
 document.write("Time is:"+mydate.getHours()+"/"+mydate.getMinutes()+":"+mydate.getSeconds()+"</br>");