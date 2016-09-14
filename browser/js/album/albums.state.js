angular.module('juke')
  .config(function($stateProvider){
  	$stateProvider.state('albumList', {
  		url: '/albums',
  		templateUrl: '../albums.html',
  		controller: 'AlbumsCtrl' 
  	});
  });