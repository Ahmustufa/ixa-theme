import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import router from "next/router";
import { Collapse, Checkbox, Slider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Panel } = Collapse;
const SidebarFiltration = (props) => {
  const [priceValue, setPriceValue] = useState([0, 1000])
  
  const onChange = (value) => {
    console.log('onChange', value)
    setPriceValue([value[0], value[1]])
  };
  console.log('onChange priceValue', priceValue)
  const sidebarFilterData = {
    category:[
      {categoryName: 'Fashion'},
      {categoryName: 'Shoes'},
      {categoryName: 'Bags'},
      {categoryName: 'Watch'},
      {categoryName: 'Flower'},
      {categoryName: 'Pets'},
      {categoryName: 'Electronics'},
      {categoryName: 'Vegetables'},
      {categoryName: 'Furniture'},
      {categoryName: 'Beauty'},
      {categoryName: 'Tools'},
      {categoryName: 'Gym'},
    ],
    brands:[
      {brandName: 'nike'},
      {brandName: 'zara'},
      {brandName: 'denim'},
      {brandName: 'madame'},
      {brandName: 'biba'},
      {brandName: 'max'},
    ],
    colors:[
      {colorName: 'yellow'},
      {colorName: 'white'},
      {colorName: 'pink'},
      {colorName: 'olive'},
      {colorName: 'navy'},
      {colorName: 'red'},
      {colorName: 'black'},
      {colorName: 'skyblue'},
      {colorName: 'green'},
      {colorName: 'gray'},
      {colorName: 'maroon'},
      {colorName: 'blue'},
    ],
    size:[
      {sizeName: 's'},
      {sizeName: 'm'},
      {sizeName: 'l'},
      {sizeName: 'xl'},
    ],

  }

  return (
    <StyledSidebar>
      <Collapse className="site-collapse-custom-collapse" defaultActiveKey={['1']} expandIconPosition={'end'}>
        <Panel className="site-collapse-custom-panel" header="CATEGORY" key="1">
          <div className='category-section'>
            {sidebarFilterData.category.map((item, index) => {
              return(
                <p key={index} className={'mb-0'}>{item.categoryName}</p>
              )
            })}
          </div>
        </Panel>
      </Collapse>
      <Collapse ghost className='mt-5' defaultActiveKey={['1']} expandIconPosition={'end'}>
        <Panel header="BRAND" key="1">
          <div className='category-section d-flex flex-column'>
            {sidebarFilterData.brands.map((item, index) => {
              return(
                <Checkbox className='ml-0 mb-1' key={index}>
                  <p className='mb-0 text-uppercase'>{item.brandName}</p>
                </Checkbox>
              )
            })}
          </div>
        </Panel>
        <Panel header="COLORS" key="2">
          <div className='category-section d-flex flex-column'>
            {sidebarFilterData.colors.map((item, index) => {
              return(
                <div className=' color-row'>
                  <Checkbox className='ml-0 mb-1' key={index} />
                  <div className='color-dot' style={{background: item.colorName}} />
                  <p className='mb-0 ml-2'>{item.colorName}</p>
                </div>
              )
            })}
          </div>
        </Panel>
        <Panel header="SIZE" key="3">
          <div className='category-section d-flex flex-column'>
            {sidebarFilterData.size.map((item, index) => {
              return(
                <Checkbox className='ml-0 mb-1' key={index}>
                  <p className='mb-0 text-uppercase'>{item.sizeName}</p>
                </Checkbox>
              )
            })}
          </div>
        </Panel>
        <Panel header="PRICE" key="4">
            <div className='d-flex justify-content-between' >
              <p className='mb-0'>{priceValue[0]}</p>
              <p className='mb-0'>{priceValue[1]}</p>
            </div>
            <div className='category-section d-flex justify-content-center'>
              <Slider         
                style={{width: '90%'}}     
                trackStyle={{background: '#f54c3b'}} 
                handleStyle={{borderColor: '#f54c3b'}} 
                range 
                min={0}
                max={1000}
                value={priceValue}
                onChange={onChange}
                // defaultValue={[0, 1000]} 
              />
            </div>
        </Panel>
      </Collapse>
    </StyledSidebar>
  );
};

export default SidebarFiltration;

const StyledSidebar = styled.div`
 .category-section{
    max-height: 170px;
    overflow-y: auto;
    overflow-x: hidden;
    p{
      color: #777777;
      font-size: 14px;
    }
    ::-webkit-scrollbar {
      width: 0.4em;
    }
    ::-webkit-scrollbar-track {
      background-color:#d7d7d7;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f54c3b;
      border-radius: 5px;
    }
  }
  .ant-collapse-header{
    background:#fafafa;
  }
  .ant-collapse-header-text{
    font-weight: 600;
  }
  .color-row{
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #777777;
  }
  .color-dot{
    width: 15px;
    height:15px;
    border-radius: 100px;  
    border: 1px solid #eee;
    margin-left: 5px;
  }
  .ant-collapse-ghost{
    border: 1px solid #d9d9d9;
  }
  .site-collapse-custom-collapse .ant-collapse-content{
    border-top: none;
  }
`;
