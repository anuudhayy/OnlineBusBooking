package com.busbooking.model;

import javax.persistence.*;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String passengerName;
    private String email;
    private String phoneNumber;
    private Long routeId; // Reference to BusRoute
    private String seatPreference;

    // Getters and Setters
}
