describe("Tests for payments.js", function(){
    it("should create a payment based on inputs", function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).not.toBeDefined();
        billAmtInput.value = '100';
        tipAmtInput.value = '10';
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '10', tipPercent: 10});
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});