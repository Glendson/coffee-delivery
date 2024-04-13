import {
  Icon,
  OrderAddress,
  OrderPayment,
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
  SuccessImage,
  SuccessBody,
  SuccessOrderInfo,
  TimeDelivery,
  IconTimer,
  IconCash,
} from "./styles";

import deliveryImage from "../../../public/assets/delivery.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useParams } from "react-router-dom";

export function Success() {
  const { orders } = useContext(CoffeeContext);
  const { orderId } = useParams<{ orderId: string }>();

  const orderInfo = orders.find((order) => order.id === orderId);

  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>

        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessHeader>

      <SuccessBody>
        <SuccessContent>
          <SuccessOrderInfo>
            <OrderAddress>
              <Icon>
                <MapPin weight="fill" />
              </Icon>
              <div>
                <span>
                  Entrega em{" "}
                  <strong>
                    {orderInfo?.rua}, {orderInfo?.numero}
                  </strong>
                </span>

                <span>
                  {orderInfo?.cidade} - {orderInfo?.cidade}, {orderInfo?.uf}
                </span>
              </div>
            </OrderAddress>

            <TimeDelivery>
              <IconTimer>
                <Timer weight="fill" />
              </IconTimer>

              <div>
                <span>Previsão de entrega</span>

                <strong>20 min - 30 min</strong>
              </div>
            </TimeDelivery>

            <OrderPayment>
              <IconCash>
                <CurrencyDollar />
              </IconCash>
              <div>
                <span>Pagamento na entrega</span>

                <strong>{orderInfo?.pagamento}</strong>
              </div>
            </OrderPayment>
          </SuccessOrderInfo>
        </SuccessContent>

        <SuccessImage src={deliveryImage} alt="" />
      </SuccessBody>
    </SuccessContainer>
  );
}
