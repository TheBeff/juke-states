angular.module('juke')
  .config(function($stateProvider){
  	$stateProvider.state('artistList', {
  		url: '/artists',
  		templateUrl: '../artists.html',
  		controller: 'ArtistsCtrl'
  	});
  });