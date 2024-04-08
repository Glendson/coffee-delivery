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
  OrderCartContainer,
  PaymentContainer,
  PaymentMethods,
  PaymentButton,
  PaymentHeader,
  AddressCepInput,
  AddressInput,
  AddressLineGroup,
  AddressUFInput,
  OrderItemContainer,
  Divider,
  CartTotalContainer,
  TotalItens,
  DeliveryPrice,
  CartTotal,
  CheckOutButton,
} from "./styles";
import { CoffeeCardItem } from "./CoffeeCardItem/Index";

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
            <AddressFormContainer>
              <AddressCepInput
                id="cep"
                type="number"
                name="cep"
                placeholder="CEP"
              />

              <AddressLineGroup>
                <AddressInput id="rua" name="rua" placeholder="Rua" />
              </AddressLineGroup>
              <AddressLineGroup>
                <AddressCepInput
                  id="numero"
                  type="number"
                  name="numero"
                  placeholder="Numero"
                />
                <AddressInput
                  id="complemento"
                  name="complemento"
                  placeholder="Complemento"
                />
              </AddressLineGroup>
              <AddressLineGroup>
                <AddressCepInput
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                />
                <AddressInput id="Cidade" name="cidade" placeholder="Cidade" />
                <AddressUFInput id="UF" name="UF" maxLength={2} placeholder="UF" />
              </AddressLineGroup>
            </AddressFormContainer>
          </AddressContainer>
          <PaymentContainer>
            <PaymentHeader>
              <CurrencyDollar />

              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeader>

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

      <OrderCartContainer>
        <h2>Cafés selecionados</h2>

        <OrderItemContainer>
          <CoffeeCardItem />          
        
        <CartTotalContainer>
          <TotalItens>
            <span>Total de Itens</span>
            <p>Total</p>
          </TotalItens>
          <DeliveryPrice>
            <span>Entrega</span>
            <p>Valor</p>            
          </DeliveryPrice>
          <CartTotal>
            <span>total</span>
            <p>Valor</p>
          </CartTotal>
        </CartTotalContainer>
        <CheckOutButton>
          Confirmar Pedido
        </CheckOutButton>
        </OrderItemContainer>
      </OrderCartContainer>
    </CheckoutContainer>
  );
}
