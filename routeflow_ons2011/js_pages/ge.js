// Google earth javascript

google.load("earth", "1");

var ge = null;

function init() {
  google.earth.createInstance("map3d", initCallback, failureCallback);
}

function initCallback(object) {
  ge = object;
  ge.getWindow().setVisibility(true);

  // Earth is ready, we can add features to it
  addKmlFromUrl('http://of-lab2.grnoc.iu.edu/rf_ons2011/html_pages/routeflow_ons2011.kml');
}

function addKmlFromUrl(kmlUrl) {
  var link = ge.createLink('');
  link.setHref(kmlUrl);
  
  var networkLink = ge.createNetworkLink('');
  networkLink.setLink(link);
  networkLink.setFlyToView(true);
  
  ge.getFeatures().appendChild(networkLink);
}
  
function failureCallback(object) {}
  
google.setOnLoadCallback(init);
