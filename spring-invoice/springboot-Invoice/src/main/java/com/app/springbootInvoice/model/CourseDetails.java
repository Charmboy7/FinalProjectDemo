package com.app.springbootInvoice.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "course_details_1") // Map to the specific table in the database
public class CourseDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "course_id") // Map to the specific column in the table
    private Long courseId;
    
    @Column(name = "course_name")
    private String courseName;
    
    @Column(name = "course_duration")
    private String courseDuration;
    
    @Column(name = "start_date")
    private Date startDate;
    
    @Column(name = "end_date")
    private Date endDate;

    
    public CourseDetails() {
    	
    }
    
    // Constructors, getters, and setters
    // Constructor without ID (if needed)
    public CourseDetails(String courseName, String courseDuration, Date startDate, Date endDate) {
        this.courseName = courseName;
        this.courseDuration = courseDuration;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDuration() {
        return courseDuration;
    }

    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

	@Override
	public String toString() {
		return "CourseDetails [courseId=" + courseId + ", courseName=" + courseName + ", courseDuration="
				+ courseDuration + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}
    
    
}


