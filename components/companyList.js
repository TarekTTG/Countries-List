// these components are used in the oroPan.html file 
//the proper way to call a component is just place it in the html doc ex: <company-list></company-list> 

angular.module('panaderiasApp')
		.component('companyList',{templateUrl:'html/companyList.html'});
angular.module('panaderiasApp')
		.component('oroPan',{templateUrl:'html/oroPan.html'});
angular.module('panaderiasApp')
		.component('sidebar',{templateUrl:'html/sidebar.html'});
