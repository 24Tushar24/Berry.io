import React, { useState } from 'react';

const TipCalculator = () => {
    let [bill, setBill] = useState('');
    let [tip, setTip] = useState(10);
    let [tipAmount, setTipAmount] = useState(0);
    let [total, setTotal] = useState(0);

    const Update = (e) => {
        const value = e.target.value;
        setBill(value);
        if (value !== '' && !isNaN(value)) {
            Calculatetip(value, tip);
        }
        else {
            setTipAmount(0);
            setTotal(0);
        }
    };

    const TipUpdate = (percentage) => {
        setTip(percentage);
        if (bill !== '' && !isNaN(bill)) {
            Calculatetip(bill, percentage);
        }
    }

    const Calculatetip = (bill, tip) => {
        const billNum = parseFloat(bill);
        const tipAmt = (billNum * tip) / 100;
        const totalAmt = billNum + tipAmt;
        setTotal(totalAmt);
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Tip Calculator</h2>
            <div className="mb-3">
                <label htmlFor="bill" className="form-label">Enter Bill Amount ₹:</label>
                <input
                    type="number"
                    className="form-control"
                    id="bill"
                    value={bill}
                    onChange={Update}
                    placeholder="Amount in Rupees"
                    min="0" />
            </div>
            <div className="mb-3">
                <p>Select Tip Percentage:</p>
                <div className="btn-group" role="group" aria-label="Tip Percentage">
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${tip === 10 ? 'active' : ''}`}
                        onClick={() => TipUpdate(10)}> 10%
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${tip === 15 ? 'active' : ''}`}
                        onClick={() => TipUpdate(15)}>15%
                    </button>
                    <button
                        type="button"
                        className={`btn btn-outline-primary ${tip === 20 ? 'active' : ''}`}
                        onClick={() => TipUpdate(20)}>20%
                    </button>
                </div>
            </div>
            <div className="mb-3">
                <p>Total Amount is: ₹{total}</p>
            </div>
        </div>
    );
};

export default TipCalculator;