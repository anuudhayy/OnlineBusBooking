package com.busbooking.controller;

import com.busbooking.model.BusRoute;
import com.busbooking.service.BusRouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routes")
@CrossOrigin("*")
public class BusRouteController {

    @Autowired
    private BusRouteService busRouteService;

    @GetMapping("/search")
    public List<BusRoute> searchRoutes(@RequestParam String departure, @RequestParam String arrival) {
        return busRouteService.findRoutes(departure, arrival);
    }
}
