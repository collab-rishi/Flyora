const { AirportService } = require('../services');

const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const airplane = require('../models/airport');


/*
    POST: /airports
    req body: {modelNumber, capacity}
*/
async function createAirport(req, res) {
    try {
       
        const airport = await AirportService.createAirport({
           name: req.body.name,
           code: req.body.code,
           address: req.body.address,
           cityId: req.body.cityId
        });
        
        SuccessResponse.data = airport;
        
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
       
        ErrorResponse.error = error;
        return res
                .status(error.statusCode || 500)
                .json({ErrorResponse})
    }
}

/*
    GET : /airplanes
     req-body {}
*/


async function getAirports(req, res) {
    try { 
        
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);       
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
/*
    GET : /airplanes/:id
    req-body {}
*/

async function getAirport(req, res) {
    try {
        
        
        const airport = await AirportService.getAirplane(req.params.id);
        SuccessResponse.data = airports;
        
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);       
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/*
    DELETE : /airplanes/:id
*/

async function destroyAirport(req, res) {
    try {
        
        
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
                
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);       
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


/*
    UPDATE : /airplanes/:id
*/

async function updateAirport(req, res) {
    try{
        const airport = await AirportService.updateAirport(req.params.id, {
            capacity: req.body.capacity
        });


        SuccessResponse.data = airport;
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
       
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json({ErrorResponse})
    }
}


async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


 
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}
