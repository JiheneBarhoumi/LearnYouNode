let fs=require('fs')
fs.readdir(process.argv[2],function(err,data){
    if(err){
        return console.error(err)
    }
    let regexTest=new RegExp('.+\.' +process.argv[3] +'$')
    data.filter(function(elem){
        return regexTest.test(elem);
    }).forEach(function(elem){
        console.log(elem)
    })
})