package com.busbooking.service;

import com.busbooking.model.Booking;
import com.busbooking.repository.BookingRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class BookingServiceTest {

    @Mock
    private BookingRepository bookingRepository;

    @InjectMocks
    private BookingService bookingService;

    public BookingServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetBookingsByUserId() {
        Long userId = 1L;
        List<Booking> mockBookings = new ArrayList<>();
        Booking booking = new Booking();
        booking.setPassengerName("John Doe");
        mockBookings.add(booking);

        when(bookingRepository.findAllByUserId(userId)).thenReturn(mockBookings);

        List<Booking> bookings = bookingService.getBookingsByUserId(userId);

        assertEquals(1, bookings.size());
        assertEquals("John Doe", bookings.get(0).getPassengerName());
    }
}
