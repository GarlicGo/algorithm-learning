import React from 'react';
// import './index.less';
import './index.less';

const WEEK_DEFAULT = [
  {
    content: '日',
    color: 'orange',
  },
  {
    content: '一',
  },
  {
    content: '二',
  },
  {
    content: '三',
  },
  {
    content: '四',
  },
  {
    content: '五',
  },
  {
    content: '六',
    color: 'orange',
  },
];

const WeekHeader: React.FC = () => {
  // 一行显示周一到周日，周日为第一天，占满一行平均分布
  return (
    <div className="week-header">
      {WEEK_DEFAULT.map((item, index) => (
        <div
          key={index}
          className="week-item"
          style={{
            color: item?.color,
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

const MockJuneData = [
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '1' },
  { content: '2' },
  { content: '3' },
  { content: '4' },
  { content: '5' },
  { content: '6' },
  { content: '7' },
  { content: '8' },
  { content: '9' },
  { content: '10' },
  { content: '11' },
  { content: '12' },
  { content: '13' },
  { content: '14' },
  { content: '15' },
  { content: '16' },
  { content: '17' },
  { content: '18' },
  { content: '19' },
  { content: '20' },
  { content: '21', extra: '今天', active: true },
  { content: '22', active: true },
  { content: '23', active: true },
  { content: '24', active: true },
  { content: '25', active: true },
  { content: '26', active: true },
  { content: '27', active: true },
  { content: '28', active: true },
  { content: '29', active: true },
  { content: '30', active: true },
  { content: '' },
];

const MockJulyData = [
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '1', active: true },
  { content: '2', active: true },
  { content: '3', active: true },
  { content: '4', active: true },
  { content: '5', active: true },
  { content: '6', active: true },
  { content: '7', active: true },
  { content: '8', active: true },
  { content: '9', active: true },
  { content: '10', active: true },
  { content: '11', active: true },
  { content: '12', active: true },
  { content: '13', active: true },
  { content: '14', active: true },
  { content: '15', active: true },
  { content: '16', active: true },
  { content: '17', active: true },
  { content: '18', active: true },
  { content: '19', active: true },
  { content: '20', active: true },
  { content: '21', active: true },
  { content: '22', active: true },
  { content: '23', active: true },
  { content: '24', active: true },
  { content: '25', active: true },
  { content: '26', active: true },
  { content: '27', active: true },
  { content: '28', active: true },
  { content: '29', active: true },
  { content: '30', active: true },
  { content: '31', active: true },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
  { content: '' },
];

const MonthBox = ({
  title,
  days,
}: {
  title: string;
  days: {
    content: string;
    extra?: string;
    active?: boolean;
  }[];
}) => {
  return (
    <div className="month-container">
      <div className="month-header">{title}</div>
      <div className="month-content">
        {days.map((item, index) => (
          // 这里因为数据写死在前端，所以这样使用key渲染上没有问题
          <div key={index} className="month-item">
            <div className={item?.active ? 'active' : ''}>{item.content}</div>
            <div className="month-item-extra">{item.extra}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Calendar = () => {
  return (
    <div className="calendar-container">
      <WeekHeader />
      <MonthBox title="2023年6月" days={MockJuneData} />
      <MonthBox title="2023年7月" days={MockJulyData} />
    </div>
  );
};
