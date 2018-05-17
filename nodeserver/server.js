const app = require("express")();

app.use((req,res)=>{

	res.set("Content-Type","text/html");
	res.send("<h1>Congratulation You Have Successfully Completed Docker Community Vellore Challenge Series (#image01)</h1>");

});

app.listen(3000,(err)=>{
	if(err){
		console.log(err);
		process.exit(1);
	}
	console.log(`Listening On Port: 3000`);
});