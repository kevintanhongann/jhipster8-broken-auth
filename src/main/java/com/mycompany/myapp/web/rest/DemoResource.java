package com.mycompany.myapp.web.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DemoResource {

    @GetMapping("/demo")
    public ResponseEntity<String> testAuthPrincipal(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok().body(userDetails.getUsername());
    }
}
