package com.busbooking.repository;

import com.busbooking.model.BusRoute;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusRouteRepository extends JpaRepository<BusRoute, Long> {
    List<BusRoute> findByDepartureLocationAndArrivalLocation(String departure, String arrival);
}
