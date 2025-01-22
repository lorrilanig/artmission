package com.lorrilanig.artmission_api.controllers;

import com.lorrilanig.artmission_api.repos.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lorrilanig.artmission_api.models.User;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    //creates user session and matches user id with session key
    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getUser_id());
    }
    private static final String userSessionKey = "user";

    //gets user and user session key for user in session
    public User getUserFromSession(HttpSession session) {
        Long userInSession = (Long) session.getAttribute(userSessionKey);
        if (userInSession == null) {
            return null;
        }

        Optional<User> user = userRepository.findById(userInSession);

        return user.orElse(null);
    }
    //TODO create new user and save them to database


    //TODO logs existing user in

    //TODO logs user out
}