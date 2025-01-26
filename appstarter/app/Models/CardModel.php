<?php
namespace App\Models;

use CodeIgniter\Model;

class CardModel extends Model
{
    protected $table = 'cards';
    protected $primaryKey = 'id';
    protected $allowedFields = ['question', 'answer', 'category', 'created_at'];

    // Если нужно, можно добавить валидацию, колбэки и т.п.
}
