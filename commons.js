//Metodos comunes para scripts de tampermonkey
this.getLocal=function (key,def) {
	var obj = localStorage[key]; 
	if(typeof obj !== "undefined"){
		return JSON.parse(obj);
	}else{
		return def;
	}
};
this.setLocal=function (key,value) {
	return localStorage[key]=JSON.stringify(value);
};
this.removeLocal=function (key) {
	return delete localStorage[key];
};
