package com.busbooking.model;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String phoneNumber;
    private String paymentMethod; // E.g., Credit Card, PayPal, etc.

    // Getters and Setters
}
