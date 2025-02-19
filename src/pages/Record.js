import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import styled from "styled-components";
import { Line } from '@antv/g2plot';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { Link, useHistory } from 'react-router-dom'
import { sendRequest, getCookie } from "../util";
import * as Survey from "survey-react";
// import "./styles.css";
import "survey-react/survey.css";
const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-6`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;


Survey.JsonObject.metaData.addProperty("itemvalue", { name: "score:number" });
Survey.matrixDropdownColumnTypes.rating = {
  properties: ["rateValues"]
};

export default ({
  subheading = "This is recent record of your test",
  heading = "It is getting better",
  description = "Normal:10-30 Medium:30-45 High:45-50",
  plans = null,

}) => {
  const [recordData, setRecordData] = useState([]);
  const history = useHistory();
  useEffect(()=>{
    const fetchRecord = async () => {
      const uid = getCookie('userid');
      if(!uid) {
        history.push('/signin');
        return;
      }

      const res = JSON.parse(await sendRequest('record', { uid: uid }));

      if(!res.success) {
        history.push('/error');
        return;
      }
      const { data = [] } = res;
      setRecordData(data);
      return data;
    }
    fetchRecord();
  }, []);

  useEffect(()=>{
    const data = JSON.parse(JSON.stringify(recordData));
    if (data && data.length > 0){
      data.forEach(item => {
        let unitedTime = String(new Date(parseInt(item.timestamp))).split(' ');
        let ylabel;
        ylabel = unitedTime[1]+unitedTime[2];
        let hourSecond = unitedTime[4].split(':');
        item.timestamp =  ylabel +' ' + hourSecond[0]+':'+hourSecond[1]
      });
      const line = new Line('container', {
        data,
        xField: 'timestamp',
        yField: 'quizscore',
        // 自定义折线颜色
        color: '#A7F3D0',
        // 更改辅助数据点大小及样式
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            stroke: '#A7F3D0',
            lineWidth: 2,
            fillOpacity: 0.6,
          },
        },
        yAxis: {
          // 格式化 y 轴标签加单位，自定义 labal 样式
          label: {
            formatter: (v) => {
              return v;
            },
            style: {
              fill: '#000',
            },
          },
        },
        // 添加label
        label: {
          fill: '#A7F3D0',
        },
        // 添加辅助文本、辅助线
        annotations: [
          {
            type: 'text',
            position: ['min', 'median'],
            content: '',
            offsetY: -4,
            style: {
              textBaseline: 'bottom',
            },
          },
          {
            type: 'line',
            start: ['min', 'median'],
            end: ['max', 'median'],
            style: {
              stroke: 'green',
              lineDash: [2, 2],
            },
          },
        ],
      });
      
      // element 添加点击事件
      line.on('element:click', (e) => {
        console.log(e);
      });
      
      // annotation 添加点击事件
      line.on('annotation:click', (e) => {
        console.log(e);
      });
      
      // axis-label 添加点击事件
      line.on('axis-label:click', (e) => {
        console.log(e);
      });
      
      line.render();
    }
  }, [recordData]);


  

  return (
    <Container>
      <Header/>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
      <div id="container" >
      </div>
      </ContentWithPaddingXl>
    </Container>
  );
};

