let firstWords=["Giga","Unique","Popular","Star","Selective","Dandy","Zeropoint","Analytic","Trendsetter","HiTech"];
let secondWords=["Solutions","Limited","Corporations","Town","Globe","Valley","Blend","Corporate","Ways","Designs"];
let startupName,starupLength;
for(let i=0;i<10;i++)
    {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    startupName=firstWords[randomNumber1]+" "+secondWords[randomNumber2];
    starupLength=startupName.length;
    console.log("Name : "+startupName+"\t\tLength= "+starupLength);
    }
  