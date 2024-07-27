package org.example.spring_bootstrap.controller;

import lombok.RequiredArgsConstructor;
import org.example.spring_bootstrap.model.User;
import org.example.spring_bootstrap.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/getUser")
    public User userPage(@AuthenticationPrincipal User user) {
        return userService.findByEmail(user.getEmail());
    }
}
