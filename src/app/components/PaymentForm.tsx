import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { StripeCheckoutProps, Token } from "react-stripe-checkout";

import {Card, CardBody, CardHeader,Divider,  CardFooter} from "@nextui-org/react";


export const PaymentForm = () => {
  const [cardDetails, setCardDetails] = useState({});

  const handleToken = (token: Token) => {
    console.log(token);
  };

  return (
    <Card>
        <CardHeader>
            Donate
        </CardHeader>
        <Divider/>
        <CardBody>
          
        </CardBody>
        <Divider/>
        <CardFooter className="flex justify-center">
            <StripeCheckout
              stripeKey="pk_test_51NPGvTIWTu7I8BFTiMa7VxCefbTLM1z3JIBEo8c0PvyMTOzYwUYLxYhDTflBcICoaYuu56rerspz1o9PFm65sONs005pSPZgyq"
              token={handleToken}
              name="Seafox"
              description="Donation"
              amount={1000}
              currency="USD"
              panelLabel="Donate"
              label="Donate Here"
            >
            </StripeCheckout>
        </CardFooter>
    </Card>
  );
};