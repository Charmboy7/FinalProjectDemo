package com.app.springbootInvoice.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.springbootInvoice.model.FeePayment;
import com.app.springbootInvoice.model.PaymentDetailsDTO;
import com.app.springbootInvoice.repository.FeePaymentRepository;
import com.app.springbootInvoice.service.FeePaymentService;

@RestController
@RequestMapping("/payments")
public class FeePaymentController {

	private final FeePaymentService feePaymentService;

   

    // Define endpoints to handle CRUD operations using HTTP methods
    // Example:

    @GetMapping
    public List<FeePayment> getAllFeePayments() {
        return feePaymentService.getAllFeePayments();
    }



    @PostMapping
    public FeePayment addFeePayment(@RequestBody FeePayment feePayment) {
        return feePaymentService.saveFeePayment(feePayment);
    }

    @DeleteMapping("/{id}")
    public void deleteFeePayment(@PathVariable Long id) {
        feePaymentService.deleteFeePayment(id);
    }
    
    
    private final FeePaymentRepository feePaymentRepository;

    @Autowired
    public FeePaymentController(
            FeePaymentService feePaymentService,
            FeePaymentRepository feePaymentRepository
    ) {
        this.feePaymentService = feePaymentService;
        this.feePaymentRepository = feePaymentRepository;
    }
    @GetMapping("/payment/details/{regId}")
    public List<Object[]> getPaymentDetailsByRegId(@PathVariable Long regId) {
        return feePaymentRepository.findPaymentDetailsByRegId(regId);
    }

    
}

