package com.lorrilanig.artmission_api.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.lorrilanig.artmission_api.models.User;

import java.util.List;
import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    //finds username and ignores case
    Optional<List<User>> findByUsernameContainingIgnoreCase(String username);
}
