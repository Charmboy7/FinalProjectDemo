package com.app.springbootInvoice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.springbootInvoice.model.FeePayment;
import com.app.springbootInvoice.model.PaymentDetailsDTO;

public interface FeePaymentRepository extends JpaRepository<FeePayment, Long> {
//	  
	@Query("SELECT fp.regId, fp.fullName, fp.courseId, cd.courseName, cd.courseDuration, cd.startDate, cd.endDate, fp.totalCourseFee, fp.paymentType, fp.amountPay, fp.pendingAmount, fp.paymentOption " +
            "FROM FeePayment fp " +
            "JOIN CourseDetails cd ON fp.courseId = cd.courseId " +
            "WHERE fp.regId = :regId")
    List<Object[]> findPaymentDetailsByRegId(Long regId);
	
}

