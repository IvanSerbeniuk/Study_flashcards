<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Cards extends ResourceController
{
    protected $modelName = 'App\Models\CardModel';
    protected $format    = 'json';

    // GET /api/cards
    public function index()
    {

        $cards = $this->model->findAll();
        return $this->respond($cards);
    }

    // GET /api/cards/(:num)
    public function show($id = null)
    {
        $card = $this->model->find($id);
        if (!$card) {
            return $this->failNotFound('Card not found');
        }
        return $this->respond($card);
    }

    // POST /api/cards
    public function create()
    {
        $data = $this->request->getJSON(true); // Получаем JSON
        $this->model->insert($data);
        return $this->respondCreated($data);
    }

    // PUT /api/cards/(:num)
    public function update($id = null)
    {
        $data = $this->request->getJSON(true);
        $this->model->update($id, $data);
        return $this->respond($data);
    }

    // DELETE /api/cards/(:num)
    public function delete($id = null)
    {
        $this->model->delete($id);
        return $this->respondDeleted(['id' => $id]);
    }
}
