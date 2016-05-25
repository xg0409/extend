var extend = (function(){
	function object(o,props){
		function Fun(){};
		Fun.prototype = o;
		var fun = new Fun();
		$.extend(fun,props);
		return fun;
	}
	
	function extend(props){
	//	console.log(typeof (function(){}))
		var extendObj = object(this.prototype,props);
		var child = function(){}
		$.extend(child,this);
		child.prototype = extendObj;
		child.prototype.constructor = child;
		return child;
	}
	return extend;
})();
