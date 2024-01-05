package com.app.springbootInvoice.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fee_payment") // Map to the specific table in the database
public class FeePayment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Regid") // Map to the specific column in the table
    private Long regId;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "course_id")
    private Long courseId;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "total_course_fee")
    private BigDecimal totalCourseFee;

    @Column(name = "payment_type")
    private String paymentType;

    @Column(name = "amount_pay")
    private BigDecimal amountPay;

    @Column(name = "pending_amount")
    private BigDecimal pendingAmount;

    @Column(name = "payment_option")
    private String paymentOption;

    // Constructors, getters, and setters...
    
    public FeePayment() {
    	
    }
    
    public FeePayment(String fullName, Long courseId, String courseName, BigDecimal totalCourseFee, String paymentType, BigDecimal amountPay, BigDecimal pendingAmount, String paymentOption) {
        this.fullName = fullName;
        this.courseId = courseId;
        this.courseName = courseName;
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

	@Override
	public String toString() {
		return "FeePayment [regId=" + regId + ", fullName=" + fullName + ", courseId=" + courseId + ", courseName="
				+ courseName + ", totalCourseFee=" + totalCourseFee + ", paymentType=" + paymentType + ", amountPay="
				+ amountPay + ", pendingAmount=" + pendingAmount + ", paymentOption=" + paymentOption + "]";
	}
    
    
}