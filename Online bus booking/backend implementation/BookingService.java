package com.busbooking.service;

import com.busbooking.model.Booking;
import com.busbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findAllByUserId(userId);
    }
}
