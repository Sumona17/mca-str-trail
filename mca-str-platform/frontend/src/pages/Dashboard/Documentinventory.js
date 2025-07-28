import React from 'react';
import { Row, Col, Typography, Tag } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const summaryData = [
  { label: 'Number of plans', value: '40,238' },
  { label: 'Number of Plans Missing Required Documents', value: '3,851' },
  { label: 'Number of Required Documents in Inventory', value: '320,233' },
  { label: 'Number of Total Missing Required Documents', value: '6,132' },
];

const Documentinventory = () => {
  return (
    <div style={{ padding: '0px 25px' }}>
      <Row justify="space-between"  style={{ marginBottom: 0 }}>
        <Title level={5} style={{ margin: 0 }}>Document Inventory Summary</Title>
        <FilterOutlined style={{ fontSize: 16 }} />
      </Row>

     <div style={{ marginTop: 10 }}>
  {summaryData.map((item, index) => (
    <Row key={index} justify="space-between" style={{ marginBottom: 12 ,marginTop:20}}>
      <Col span={18}>
        <Text style={{ fontWeight: 400, color: '#444A6D',fontSize:13 }}>{item.label}</Text>
      </Col>
      <Col span={6}>
        <Tag
          color="#e6f7ff"
          style={{
            borderColor: '#1890ff',
            color: '#1890ff',
            fontWeight: 400,
            borderRadius: 16,
            width: 80,
            textAlign: 'center',
            marginLeft:40,
            fontSize: 13,
          }}
        >
          {item.value}
        </Tag>
      </Col>
    </Row>
  ))}
</div>

    </div>
  );
};

export default Documentinventory;
