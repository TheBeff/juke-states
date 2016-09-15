angular.module('juke')
  .config(function($stateProvider){
  	$stateProvider.state('albumView', {
  	  url: '/albums/:id',
  	  templateUrl: '/album.html',
  	  controller: 'AlbumCtrl'
  	});
  });