var MyApi = (function(){
	var myApi = BaseApi.extends({
		getProtocol:function(){
			console.log("getProtocol");
		}
	});
	return myApi;
})();
