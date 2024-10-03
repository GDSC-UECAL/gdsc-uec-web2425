<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'date' => $this->date,
            'description' => $this->description,
            'contributor' => $this->contributor,
            'banner' => $this->banner,
            'link' => $this->link,
            'timestamps' => $this->timestamps

        ];
    }
}
