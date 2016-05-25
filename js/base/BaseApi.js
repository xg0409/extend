var BaseApi = (function() {
  function BaseApi() {}
  $.extend(BaseApi.prototype, {
    constructor: BaseApi,
    getApiUrl: function() {
      console.log("getApiUrl");
    },
    getRequestData: function() {
      console.log("getRequestData");
    }
  });
  $.extend(BaseApi, {
    extends: extend
  });
  return BaseApi;
})();
