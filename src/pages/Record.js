import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Line } from '@antv/g2plot';
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import * as Survey from "survey-react";
// import "./styles.css";
import "survey-react/survey.css";
const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300`}
  ${props => props.active && tw`bg-primary-500 text-gray-100`}
`;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
`;



Survey.JsonObject.metaData.addProperty("itemvalue", { name: "score:number" });
Survey.matrixDropdownColumnTypes.rating = {
  properties: ["rateValues"]
};
// class SurveyComponent extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { isCompleted: false };

// //     this.onCompleteComponent = this.onCompleteComponent.bind(this);
// //   }

//   /*********** prettey checkbox**************** */

// //   preetycheckbox = survey => {
// //     survey.getAllQuestions().forEach(question => {
// //       if (question.getType() === "checkbox") {
// //         question.renderAs = "prettycheckbox";
// //       }
// //       question.updateCustomWidget();
// //     });
// //   };
//   const line = new Line('container', {
//     data,
//     padding: 'auto',
//     xField: 'Date',
//     yField: 'scales',
//     annotations: [
//       // 低于中位数颜色变化
//       {
//         type: 'regionFilter',
//         start: ['min', 'median'],
//         end: ['max', '0'],
//         color: '#F4664A',
//       },
//       {
//         type: 'text',
//         position: ['min', 'median'],
//         content: '中位数',
//         offsetY: -4,
//         style: {
//           textBaseline: 'bottom',
//         },
//       },
//       {
//         type: 'line',
//         start: ['min', 'median'],
//         end: ['max', 'median'],
//         style: {
//           stroke: '#F4664A',
//           lineDash: [2, 2],
//         },
//       },
//     ],
//   });
//   render(){
//       line.render();
//       return(<div>

//       </div>)

//   };
// //   render() {
 

 


// //     // var classNames = require('classnames');
    
// //     var surveyRender = !this.state.isCompleted ? (
      
// //       <Survey.Survey 
// //         json={json}
// //         showCompletedPage={false}
// //         onComplete={this.onCompleteComponent}
// //         preetycheckbox={this.preetycheckbox}
// //       //onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
// //       />
     
// //     ) : null;
  
// //     return (
// //       <div>
// //         {surveyRender}
// //         {onCompleteComponent}
// //       </div>
// //     );
// //   }
// }




export default ({
  subheading = "Survey",
  heading = "Take Easy and do it",
  description = "Take a test to try yourself to test your emotion",
  plans = null,

}) => {
  const defaultPlans = [
    {
      name: "Free Plan",
      durationPrices: ["$0", "$0"],
      mainFeature: "For Personal Blogs",
      features: ["30 Templates", "7 Landing Pages", "12 Internal Pages", "Basic Assistance"]
    },
    {
      name: "Pro Plan",
      durationPrices: ["$49", "$499"],
      mainFeature: "Suited for Production Websites",
      features: ["60 Templates", "8 Landing Pages", "22 Internal Pages", "Priority Assistance", "Lifetime Updates"],
      featured: true
    }
  ];
  let data=[
    {
      "Date": "2010-01",
      "scales": 1998
    },
    {
      "Date": "2010-02",
      "scales": 1850
    },
    {
      "Date": "2010-03",
      "scales": 1720
    },
    {
      "Date": "2010-04",
      "scales": 1818
    },
    {
      "Date": "2010-05",
      "scales": 1920
    },
    {
      "Date": "2010-06",
      "scales": 1802
    },
    {
      "Date": "2010-07",
      "scales": 1945
    },
    {
      "Date": "2010-08",
      "scales": 1856
    },
    {
      "Date": "2010-09",
      "scales": 2107
    },
    {
      "Date": "2010-10",
      "scales": 2140
    },
    {
      "Date": "2010-11",
      "scales": 2311
    },
    {
      "Date": "2010-12",
      "scales": 1972
    },
    {
      "Date": "2011-01",
      "scales": 1760
    },
    {
      "Date": "2011-02",
      "scales": 1824
    },
    {
      "Date": "2011-03",
      "scales": 1801
    },
    {
      "Date": "2011-04",
      "scales": 2001
    },
    {
      "Date": "2011-05",
      "scales": 1640
    },
    {
      "Date": "2011-06",
      "scales": 1502
    },
    {
      "Date": "2011-07",
      "scales": 1621
    },
    {
      "Date": "2011-08",
      "scales": 1480
    },
    {
      "Date": "2011-09",
      "scales": 1549
    },
    {
      "Date": "2011-10",
      "scales": 1390
    },
    {
      "Date": "2011-11",
      "scales": 1325
    },
    {
      "Date": "2011-12",
      "scales": 1250
    },
    {
      "Date": "2012-01",
      "scales": 1394
    },
    {
      "Date": "2012-02",
      "scales": 1406
    },
    {
      "Date": "2012-03",
      "scales": 1578
    },
    {
      "Date": "2012-04",
      "scales": 1465
    },
    {
      "Date": "2012-05",
      "scales": 1689
    },
    {
      "Date": "2012-06",
      "scales": 1755
    },
    {
      "Date": "2012-07",
      "scales": 1495
    },
    {
      "Date": "2012-08",
      "scales": 1508
    },
    {
      "Date": "2012-09",
      "scales": 1433
    },
    {
      "Date": "2012-10",
      "scales": 1344
    },
    {
      "Date": "2012-11",
      "scales": 1201
    },
    {
      "Date": "2012-12",
      "scales": 1065
    },
    {
      "Date": "2013-01",
      "scales": 1255
    },
    {
      "Date": "2013-02",
      "scales": 1429
    },
    {
      "Date": "2013-03",
      "scales": 1398
    },
    {
      "Date": "2013-04",
      "scales": 1678
    },
    {
      "Date": "2013-05",
      "scales": 1524
    },
    {
      "Date": "2013-06",
      "scales": 1688
    },
    {
      "Date": "2013-07",
      "scales": 1500
    },
    {
      "Date": "2013-08",
      "scales": 1670
    },
    {
      "Date": "2013-09",
      "scales": 1734
    },
    {
      "Date": "2013-10",
      "scales": 1699
    },
    {
      "Date": "2013-11",
      "scales": 1508
    },
    {
      "Date": "2013-12",
      "scales": 1680
    },
    {
      "Date": "2014-01",
      "scales": 1750
    },
    {
      "Date": "2014-02",
      "scales": 1602
    },
    {
      "Date": "2014-03",
      "scales": 1834
    },
    {
      "Date": "2014-04",
      "scales": 1722
    },
    {
      "Date": "2014-05",
      "scales": 1430
    },
    {
      "Date": "2014-06",
      "scales": 1280
    },
    {
      "Date": "2014-07",
      "scales": 1367
    },
    {
      "Date": "2014-08",
      "scales": 1155
    },
    {
      "Date": "2014-09",
      "scales": 1289
    },
    {
      "Date": "2014-10",
      "scales": 1104
    },
    {
      "Date": "2014-11",
      "scales": 1246
    },
    {
      "Date": "2014-12",
      "scales": 1098
    },
    {
      "Date": "2015-01",
      "scales": 1189
    },
    {
      "Date": "2015-02",
      "scales": 1276
    },
    {
      "Date": "2015-03",
      "scales": 1033
    },
    {
      "Date": "2015-04",
      "scales": 956
    },
    {
      "Date": "2015-05",
      "scales": 845
    },
    {
      "Date": "2015-06",
      "scales": 1089
    },
    {
      "Date": "2015-07",
      "scales": 944
    },
    {
      "Date": "2015-08",
      "scales": 1043
    },
    {
      "Date": "2015-09",
      "scales": 893
    },
    {
      "Date": "2015-10",
      "scales": 840
    },
    {
      "Date": "2015-11",
      "scales": 934
    },
    {
      "Date": "2015-12",
      "scales": 810
    },
    {
      "Date": "2016-01",
      "scales": 782
    },
    {
      "Date": "2016-02",
      "scales": 1089
    },
    {
      "Date": "2016-03",
      "scales": 745
    },
    {
      "Date": "2016-04",
      "scales": 680
    },
    {
      "Date": "2016-05",
      "scales": 802
    },
    {
      "Date": "2016-06",
      "scales": 697
    },
    {
      "Date": "2016-07",
      "scales": 583
    },
    {
      "Date": "2016-08",
      "scales": 456
    },
    {
      "Date": "2016-09",
      "scales": 524
    },
    {
      "Date": "2016-10",
      "scales": 398
    },
    {
      "Date": "2016-11",
      "scales": 278
    },
    {
      "Date": "2016-12",
      "scales": 195
    },
    {
      "Date": "2017-01",
      "scales": 145
    },
    {
      "Date": "2017-02",
      "scales": 207
    }
  ];
  if (!plans) plans = defaultPlans;
  const line = new Line('container', {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    annotations: [
      // 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
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
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  });

  line.render();

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        {/* <SurveyComponent />  */}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <script crossorigin src="https://unpkg.com/survey-react"></script>
    </Container>
  );
};

