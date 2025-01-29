<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

$routes->group('api',  function ($routes) {
    $routes->resource('cards');
});
// $routes->get('/', 'Home::index');
$routes->options('(:any)', function () {
    return service('response')->setStatusCode(200);
});

