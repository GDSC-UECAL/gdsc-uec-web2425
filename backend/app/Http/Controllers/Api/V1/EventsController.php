<?php

namespace App\Http\Controllers\Api\V1;


use App\Http\Requests\StoreEventsRequest;
use App\Http\Requests\UpdateEventsRequest;
use App\Models\Events;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventsResource;


class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return EventsResource::collection(Events::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventsRequest $request)
    {
        $event = Events::create($request->validated());
        return EventsResource::make($event);
    }

    /**
     * Display the specified resource.
     */
    public function show(Events $event)
    {
        return EventsResource::make($event);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Events $events)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventsRequest $request, Events $events)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Events $events)
    {
        //
    }
}
