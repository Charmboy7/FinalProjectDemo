package com.app.springbootInvoice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.springbootInvoice.model.FeePayment;
import com.app.springbootInvoice.model.PaymentDetailsDTO;
import com.app.springbootInvoice.repository.FeePaymentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FeePaymentService {

	private final FeePaymentRepository feePaymentRepository;

    @Autowired
    public FeePaymentService(FeePaymentRepository feePaymentRepository) {
        this.feePaymentRepository = feePaymentRepository;
    }

    public List<FeePayment> getAllFeePayments() {
        return feePaymentRepository.findAll();
    }

    public Optional<FeePayment> getFeePaymentById(Long regId) {
        return feePaymentRepository.findById(regId);
    }

    public FeePayment saveFeePayment(FeePayment feePayment) {
        return feePaymentRepository.save(feePayment);
    }

    public void deleteFeePayment(Long regId) {
        feePaymentRepository.deleteById(regId);
    }

    
}

