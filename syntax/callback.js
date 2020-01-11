var a = ()=>{
    console.log('A');
};

a();

var slowfunc = (callback)=>{
    callback();
};

slowfunc(a);