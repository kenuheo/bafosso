package com.example.oauthdemo.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
@Tag(name = "Test Controller", description = "Test endpoints for public access")
public class TestController {

    @Operation(summary = "Test endpoint", description = "Returns a hello message")
    @GetMapping("/hello")
    public String hello() {
        return "Hello from OAuth2 Demo!";
    }
}
