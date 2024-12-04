package com.busbooking.controller;

import com.busbooking.model.Booking;
import com.busbooking.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingHistoryController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/user/{userId}")
    public List<Booking> getBookingHistory(@PathVariable Long userId) {
        return bookingService.getBookingsByUserId(userId);
    }
}
