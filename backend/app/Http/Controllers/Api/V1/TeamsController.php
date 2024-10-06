<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Teams;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTeamsRequest;
use App\Http\Requests\UpdateTeamsRequest;
use App\Http\Resources\TeamsResource;

class TeamsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TeamsResource::collection(Teams::all());
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
    public function store(StoreTeamsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Teams $teams)
    {
        return TeamsResource::make($teams);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teams $teams)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTeamsRequest $request, Teams $teams)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teams $teams)
    {
        //
    }
}
