'use strict';
var promise = new Promise((fulfill, reject)=>{
	fulfill('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

function onReject(error){
	console.log(error.messge);
}

promise.then(console.log, onReject);