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
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { CartItem, CoffeeContext } from "../../contexts/CoffeeContext";

const newOrderFormValidationSchema = zod.object({
  cep: zod.string({ invalid_type_error: "Informe o CEP" }).regex(/^\d{8}$/),
  rua: zod.string().min(1, "Informe a rua"),
  numero: zod.number().int().min(1, "Informe o número"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF").max(2),
  pagamento: zod.enum(["credito", "debito", "dinheiro"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

type CreateNewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

interface Order extends CreateNewOrderFormData {
  id: string;
  items: CartItem[];
}

export function Checkout() {

  const {} = useContext(CoffeeContext)

  const { register, handleSubmit, reset } = useForm<CreateNewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      bairro: "",
      cep: "",
      cidade: "",
      complemento: "",
      numero: 0,
      pagamento: "dinheiro",
      rua: "",
      uf: "",
    },
  });

  function handleCreateNewOrder(data: CreateNewOrderFormData) {
    console.log(data);

    reset();
  }

  return (
    <CheckoutContainer>
      <OrderCompleteContainer>
        <h2>Complete o seu Pedido</h2>

        <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
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
                placeholder="CEP"
                {...register("cep", { valueAsNumber: true })}
              />

              <AddressLineGroup>
                <AddressInput id="rua" name="rua" placeholder="Rua" />
              </AddressLineGroup>
              <AddressLineGroup>
                <AddressCepInput
                  id="numero"
                  type="number"
                  placeholder="Numero"
                  {...register("numero", { valueAsNumber: true })}
                />
                <AddressInput
                  id="complemento"
                  placeholder="Complemento"
                  {...register("complemento")}
                />
              </AddressLineGroup>
              <AddressLineGroup>
                <AddressCepInput
                  id="bairro"
                  placeholder="Bairro"
                  {...register("bairro")}
                />
                <AddressInput
                  id="Cidade"
                  placeholder="Cidade"
                  {...register("cidade")}
                />
                <AddressUFInput
                  id="UF"
                  maxLength={2}
                  placeholder="UF"
                  {...register("uf")}
                />
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
          <CheckOutButton>Confirmar Pedido</CheckOutButton>
        </OrderItemContainer>
      </OrderCartContainer>
    </CheckoutContainer>
  );
}
