package com.app.springbootInvoice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.springbootInvoice.repository.FeePaymentRepository;

import java.util.List;

@Service
public class PaymentService {

    private final FeePaymentRepository feePaymentRepository;

    @Autowired
    public PaymentService(FeePaymentRepository feePaymentRepository) {
        this.feePaymentRepository = feePaymentRepository;
    }

    public List<Object[]> getPaymentDetailsByRegId(Long regId) {
        return feePaymentRepository.findPaymentDetailsByRegId(regId);
    }
}

