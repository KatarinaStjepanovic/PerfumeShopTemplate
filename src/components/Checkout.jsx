import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Checkout({ added }) {
  const [fullPrice, setFullPrice] = useState(0);
  const [payment, setPayment] = useState("");
  useEffect(() => {
    setFullPrice(() => {
      let sum = added.reduce(
        (acc, curr) => acc + curr.price * curr.numberOf,
        0
      );
      console.log(sum);
      return sum;
    });

    console.log(fullPrice);
  }, [added]);

  useEffect(() => {
    setPayment("PayPal");
  }, []);

  const clickedPay = (e) => {
    const name = e.currentTarget.getAttribute("name");
    console.log(name);
    setPayment(name);
  };

  return (
    <>
      <div className="checkoutDiv">
        <div className="checkPadd">
          <div className="checkTitle">Checkout Details</div>
          <form>
            <div className="inputDiv">
              <div className="text">Name:</div>{" "}
              <input type="text" name="name" />
            </div>
            <div className="inputDiv">
              <div className="text">Email:</div>{" "}
              <input type="mail" name="mail" required />
            </div>
            <div className="inputDiv">
              <div className="text">Phone:</div>
              <input type="text" name="phone" required />
            </div>
            <div className="shippTitle">Shipping Information</div>
            <input
              type="text"
              placeholder="address"
              className="inputAdd"
              name="address"
            />
            <div className="radioButtons">
              <div className="radioBlock">
                <input type="radio" name="radioBtn" className="radioBtn" />
                Standard ( 3-5 days )
              </div>
              <div className="radioBlock">
                <input type="radio" name="radioBtn" className="radioBtn" />
                Express ( 1-2 days )
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="paymentM">
                Payment Method{" "}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "var(--main-color)" }}
                />
                <div className="checkDrop">
                  <div
                    className="dropOpt"
                    name="PayPal"
                    onClick={clickedPay}
                    style={{ color: payment == "PayPal" && "white" }}
                  >
                    PayPal
                  </div>
                  <div
                    className="dropOpt"
                    name="Credit Card"
                    onClick={clickedPay}
                    style={{ color: payment == "Credit Card" && "white" }}
                  >
                    Credit Card
                  </div>
                  <div
                    className="dropOpt"
                    name="Debit Card"
                    onClick={clickedPay}
                    style={{ color: payment == "Debit Card" && "white" }}
                  >
                    Debit Card
                  </div>
                  <div
                    className="dropOpt"
                    name="Digital Wallet"
                    onClick={clickedPay}
                    style={{ color: payment == "Digital Wallet" && "white" }}
                  >
                    Digital Wallet
                  </div>
                </div>
              </div>
            </div>
            <div className="payment">{payment}</div>
            <div className="summedPrice">Summary: ${fullPrice}</div>
            <input type="submit" value="Place Order" className="pay" />
          </form>
        </div>
      </div>
      ;
    </>
  );
}

export default Checkout;
