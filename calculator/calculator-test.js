
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 1000, years: 10, rate: 10})).toEqual('13.22');
  expect(calculateMonthlyPayment({ amount: 123456, years: 6, rate: 41})).toEqual('4630.26');
  expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 10})).toEqual('0.00');
  expect(calculateMonthlyPayment({ amount: 1000, years: 10, rate: 0})).toEqual('8.33');
});


it("should return a result with 2 decimal places", function () {
  let cMPs = [calculateMonthlyPayment({ amount: 1000, years: 10, rate: 10 }), 
    calculateMonthlyPayment({ amount: 1000, years: 10, rate: 0 }), 
    calculateMonthlyPayment({ amount: 0, years: 10, rate: 10 })
  ];
  for (cMP of cMPs) {
    expect(typeof cMP).toBe('string');
    expect(cMP).toContain('.');
    expect(cMP.substring(cMP.indexOf('.')).length).toEqual(3);
  }
});

/// etc
