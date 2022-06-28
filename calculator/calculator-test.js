
it('should calculate the monthly rate correctly', function () {
  // ...
});


it("should return a result with 2 decimal places", function () {
  let cMPs = [calculateMonthlyPayment({ amount: 1000, years: 10, rate: 10 })
  ];
  for (cMP of cMPs) {
    expect(typeof cMP).toBe('string');
    expect(cMP).toContain('.');
    expect(cMP.substring(cMP.indexOf('.')).length).toEqual(3);
  }
});

/// etc
