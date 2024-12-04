package com.busbooking.service;

import com.busbooking.model.BusRoute;
import com.busbooking.repository.BusRouteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BusRouteService {

    @Autowired
    private BusRouteRepository busRouteRepository;

    public List<BusRoute> findRoutes(String departure, String arrival) {
        return busRouteRepository.findByDepartureLocationAndArrivalLocation(departure, arrival);
    }
}
