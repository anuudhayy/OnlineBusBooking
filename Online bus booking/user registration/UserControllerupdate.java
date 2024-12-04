package com.busbooking.controller;

import com.busbooking.model.User;
import com.busbooking.service.UserService;
import com.busbooking.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // Register User
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Authenticate User and Generate JWT
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        User authenticatedUser = userService.authenticateUser(user.getEmail(), user.getPassword());
        if (authenticatedUser != null) {
            String token = jwtUtil.generateToken(user.getEmail());
            return ResponseEntity.ok(token); // Return the JWT
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
