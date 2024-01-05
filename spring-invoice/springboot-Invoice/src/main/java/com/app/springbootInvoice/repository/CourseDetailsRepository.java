package com.app.springbootInvoice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.springbootInvoice.model.CourseDetails;

@Repository
public interface CourseDetailsRepository extends JpaRepository<CourseDetails, Long> {
    // You can add custom query methods here if needed
}
