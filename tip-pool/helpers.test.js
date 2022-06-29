describe("Test Helper Functions:", function () {
    let tests = [
        calculateTipPercent(50, 10),
        calculateTipPercent(100, 10), 
        calculateTipPercent(200, 10),
    ];

    it ("should test tipPercent", function(){
        expect(tests[0]).toEqual(20);
        expect(tests[1]).toEqual(10);
        expect(tests[2]).toEqual(5);
    });
    it("should test our helper function", function () {
        allPayments = {
            payment1: { tipAmt: 10, billAmt: 50, tipPercent: tests[0] },
            payment2: { tipAmt: 10, billAmt: 100, tipPercent: tests[1] },
            payment3: { tipAmt: 10, billAmt: 200, tipPercent: tests[2] }
        };
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
        expect(sumPaymentTotal('billAmt')).toEqual(350);
        expect(sumPaymentTotal('tipPercent')).toEqual(35);
        allPayments = {};
    });
});