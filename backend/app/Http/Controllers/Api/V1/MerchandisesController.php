<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Merchandises;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMerchandisesRequest;
use App\Http\Requests\UpdateMerchandisesRequest;
use App\Http\Resources\MerchandisesResource;

class MerchandisesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return MerchandisesResource::collection(Merchandises::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMerchandisesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Merchandises $merchandise)
    {
        return MerchandisesResource::make($merchandise);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Merchandises $merchandises)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMerchandisesRequest $request, Merchandises $merchandises)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Merchandises $merchandises)
    {
        //
    }
}
