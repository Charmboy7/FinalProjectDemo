package com.app.springbootInvoice.model;

import java.math.BigDecimal;
import java.util.Date;

public class PaymentDetailsDTO {
    private Long regId;
    private String fullName;
    private Long courseId;
    private String courseName;
    private String courseDuration;
    private Date startDate;
    private Date endDate;
    private BigDecimal totalCourseFee;
    private String paymentType;
    private BigDecimal amountPay;
    private BigDecimal pendingAmount;
    private String paymentOption;
    
    public PaymentDetailsDTO() {
    	
    }
    
	public PaymentDetailsDTO(Long regId, String fullName, Long courseId, String courseName, String courseDuration,
			Date startDate, Date endDate, BigDecimal totalCourseFee, String paymentType, BigDecimal amountPay,
			BigDecimal pendingAmount, String paymentOption) {
		super();
		this.regId = regId;
		this.fullName = fullName;
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.startDate = startDate;
		this.endDate = endDate;
		this.totalCourseFee = totalCourseFee;
		this.paymentType = paymentType;
		this.amountPay = amountPay;
		this.pendingAmount = pendingAmount;
		this.paymentOption = paymentOption;
	}

	public Long getRegId() {
		return regId;
	}

	public void setRegId(Long regId) {
		this.regId = regId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
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

	public BigDecimal getTotalCourseFee() {
		return totalCourseFee;
	}

	public void setTotalCourseFee(BigDecimal totalCourseFee) {
		this.totalCourseFee = totalCourseFee;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public BigDecimal getAmountPay() {
		return amountPay;
	}

	public void setAmountPay(BigDecimal amountPay) {
		this.amountPay = amountPay;
	}

	public BigDecimal getPendingAmount() {
		return pendingAmount;
	}

	public void setPendingAmount(BigDecimal pendingAmount) {
		this.pendingAmount = pendingAmount;
	}

	public String getPaymentOption() {
		return paymentOption;
	}

	public void setPaymentOption(String paymentOption) {
		this.paymentOption = paymentOption;
	}

    // Constructors, getters, and setters...
}

