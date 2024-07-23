package org.example.spring_bootstrap.controller;

import lombok.RequiredArgsConstructor;
import org.example.spring_bootstrap.model.User;
import org.example.spring_bootstrap.service.UserService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/user")
@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping
    public String userPage(Model model, @AuthenticationPrincipal User user) {
        model.addAttribute("user", userService.findByEmail(user.getEmail()));
        return "user_page";
    }
}
