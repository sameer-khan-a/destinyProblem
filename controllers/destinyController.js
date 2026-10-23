import Destination from "../models/Destination.js";

export const showAllDestinations = async (req, res) => {
    // code for showing all destinations
    res.status(200).json(destinations);
}

export const destinationById = async (req, res) => {
    // code for finding a specific destination
    res.status(200).json(destination);
}

export const addDestination = async (req, res) => {
    // code for creating a new destination
    res.status(201).json(destination);
}