<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Partners;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePartnersRequest;
use App\Http\Requests\UpdatePartnersRequest;
use App\Http\Resources\PartnersResource;

class PartnersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PartnersResource::collection(Partners::all());
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
    public function store(StorePartnersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Partners $partner)
    {
        return PartnersResource::make($partner);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Partners $partners)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePartnersRequest $request, Partners $partners)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Partners $partners)
    {
        //
    }
}
