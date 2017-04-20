// API Key 6c42a6265b88915f11e9bd1aad2d389d

function Request() {
  this.xhr = new XMLHttpRequest();
  
  this.xhr.onload = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(this.responseText);
      } else {
        console.error(this.statusText);
      }
    }
  };
  this.xhr.onerror = function () {
    console.error(this.statusText);
  };
}

Request.prototype.sendRequest = function () {
  this.xhr.open("GET", this.resource, true);
  this.xhr.send(null);
};
