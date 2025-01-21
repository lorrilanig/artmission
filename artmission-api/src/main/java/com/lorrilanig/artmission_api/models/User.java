package com.lorrilanig.artmission_api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long user_id;

    @NotEmpty
    @NotNull
    private String username;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty
    @NotNull
    private String password;

    private LocalDateTime created_at;

    private LocalDateTime updated_at;

    //password encoder

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    //TODO 1: add profile connection

    public User() {
    }

    public User(Long user_id, String username, String email, String password, LocalDateTime created_at, LocalDateTime updated_at) {
        this.user_id = user_id;
        this.username = username;
        this.email = email;
        this.password = encoder.encode(password);
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //Removed Password Getter
    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }
    //TODO 2: verify what works before adding equals, hashcode and toString from get artsy.
}


