function calculatePrice(_count) {
        var count = _count;
        let oneRiceBox = count >= 10 ? 70 : 80;
        let price = oneRiceBox * count;
        return price
    }

exports.calculatePrice = calculatePrice