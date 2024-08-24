import { Card } from 'antd';

const CardComponent = ({ Icon, CardData, CardTitle, iconBgColor }) => (
  <Card
    style={{
      width: 300,
    }}
  >
    <div className="flex justify-between items-center">
      <div className={`w-[50px] h-[50px] rounded-full flex justify-center items-center text-3xl ${iconBgColor}`}>
        {Icon}
      </div>
      <div className="px-5">
        <h3 className="text-3xl">{CardData}</h3>
        <p className="text-gray-500">{CardTitle}</p>
      </div>
    </div>   
  </Card>
);

export default CardComponent;
