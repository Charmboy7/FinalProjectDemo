package com.app.springbootInvoice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.springbootInvoice.repository.FeePaymentRepository;
import com.app.springbootInvoice.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payment")
public class PaymentController {

//    private final PaymentService paymentService;
//
//    @Autowired
//    public PaymentController(PaymentService paymentService) {
//        this.paymentService = paymentService;
//    }

    private final FeePaymentRepository feePaymentRepository;

    @Autowired
    public PaymentController(FeePaymentRepository feePaymentRepository) {
        this.feePaymentRepository = feePaymentRepository;
    }
    
    @GetMapping("/payment/details/{regId}")
    public List<Object[]> getPaymentDetailsByRegId(@PathVariable Long regId) {
        return feePaymentRepository.findPaymentDetailsByRegId(regId);
    }
}
