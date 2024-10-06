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
        // Load the department relationship
        return TeamsResource::collection(Teams::with('department')->get());
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeamsRequest $request)
    {
        $team = Teams::create($request->validated());
        return TeamsResource::make($team);
    }

    public function show(Teams $team)
    {
        // Load the department relationship
        $team->load('department');
        return TeamsResource::make($team);
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
