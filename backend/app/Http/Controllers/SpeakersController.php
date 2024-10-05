<?php

namespace App\Http\Controllers;

use App\Models\Speakers;
use App\Http\Requests\StoreSpeakersRequest;
use App\Http\Requests\UpdateSpeakersRequest;

class SpeakersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreSpeakersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Speakers $speakers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Speakers $speakers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpeakersRequest $request, Speakers $speakers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Speakers $speakers)
    {
        //
    }
}
