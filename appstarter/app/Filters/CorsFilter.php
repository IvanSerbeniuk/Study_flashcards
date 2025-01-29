<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class CorsFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Разрешаем CORS
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE');
        header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
        
        log_message('debug', 'CorsFilter before() triggered');

        // Если это preflight-запрос (OPTIONS), можно сразу сказать браузеру, что всё ок
        if ($request->getMethod() === 'options') {
            // Останавливаем обработку и отдаем 200
            $response = service('response');
            $response->setStatusCode(200);
            // Можно добавить заголовок тоже
            $response->send();
            exit;
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Можем добавить заголовки и здесь, если нужно
    }
}
