angular.service('Wine', function ($resource) {
    return $resource('api/wines/:wineId', {}, {
        update: {method:'PUT'}
    });
});
