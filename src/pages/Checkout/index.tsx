import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import {
  AddressContainer,
  AddressFormContainer,
  AddressHeader,
  CheckoutContainer,
  OrderCompleteContainer,
  OrderSelectContainer,
  PaymentContainer,
  PaymentMethods,
  PaymentButton,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderCompleteContainer>
        <h2>Complete o seu Pedido</h2>

        <form action="">
          <AddressContainer>
            <AddressHeader>
              <MapPinLine />
              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeader>
            <AddressFormContainer></AddressFormContainer>
          </AddressContainer>
          <PaymentContainer>
            <div>
              <CurrencyDollar />
              <span>Pagamento</span>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>

            <PaymentMethods>
              <PaymentButton>
                <CreditCard size={32} />
                <span>Cartão de crédito</span>
              </PaymentButton>
              <PaymentButton>
                <Bank size={32} />
                <span>cartão de débito</span>
              </PaymentButton>
              <PaymentButton>
                <Money size={32} />
                <span>dinheiro</span>
              </PaymentButton>
            </PaymentMethods>
          </PaymentContainer>
        </form>
      </OrderCompleteContainer>
      <OrderSelectContainer></OrderSelectContainer>
    </CheckoutContainer>
  );
}
