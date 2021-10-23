import React, {useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import { css } from "styled-components/macro"; //eslint-disable-line
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
class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };

    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }

  /*********** prettey checkbox**************** */

  preetycheckbox = survey => {
    survey.getAllQuestions().forEach(question => {
      if (question.getType() === "checkbox") {
        question.renderAs = "prettycheckbox";
      }
      question.updateCustomWidget();
    });
  };

  onUpdateQuestionCssClasses = (survey, options) => {
    var classes = options.cssClasses;

    classes.title = "sq-title";

    if (options.question.getType() === "imagepicker") {
      classes.root += " sq-root-ip";
      classes.item += " sq-item-ip";
      classes.itemChecked += " sq-itemchecked-ip";
      classes.itemInline += " sq-iteminline-ip";
      classes.label += " sq-label-ip";
      classes.itemControl += " sq-itemcontrol-ip";
      classes.image += " sq-image-ip";
      classes.itemText += " sq-itemtext-ip";
      classes.clearButton += " sq-clearbutton-ip";
      classes.column += " sq-column-ip";
    } else {
      //classes.mainRoot += " sv_qstn";
      classes.root += " sq-root";
      classes.item += " sq-item";
      classes.label += " sq-label";

      if (options.question.isRequired) {
        classes.title += " sq-title-required";
        classes.root += " sq-root-required";
      }

      if (options.question.getType() === "checkbox") {
        classes.root += " sq-root-cb";
      }
      /* if (options.question.getType() === "matrixdropdown") {
        classes.root += " sq-root-rat";
    }*/

      if (options.question.getType() === "radiogroup") {
        classes.root += " sq-root-cb";
      }
    }
  };

  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {
    let json = {
      pages: [
        {
          name: "page4",
          elements: [
            {
              type: "panel",
              name: "panel4",

              elements: [
                // {
                //   type: "checkbox",
                //   name: "question0",
                //   title:
                //     "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",
                //   renderAs: "prettycheckbox",
                //   choices: [
                //     "Privacy",
                //     "Confidentiality",
                //     "Integrity",
                //     "Availability",
                //     "Authenticity"
                //   ]
                // },

                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",

                  choices: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                }
              ]
            }
          ]
        },

        {
          name: "page4",
          elements: [
            {
              type: "panel",
              name: "panel4",

              elements: [
                {
                  type: "matrixdropdown",
                  name: "question2",
                  title:
                    "Please rank these impacts by fears. Where 1 is the impact your fear the most and 5 you fear the least. Please select numbers in front of the impact text accordingly",
                  columns: [
                    {
                      cellType: "rating",
                      " name": "level",
                      title: "Level",
                      isRequired: true,
                      rateMin: 0,
                      rateMax: 10,
                      minRateDescription: "(Most unlikely)",
                      maxRateDescription: "(Most likely)"
                    }
                    // {
                    //   name: "comments",
                    //   title: "Comments/Precision",
                    //   cellType: "text"
                    // }
                  ],
                  choices: [1],
                  cellType: "checkbox",
                  rows: [
                    "Privacy",
                    "Confidentiality",
                    "Integrity",
                    "Availability",
                    "Authenticity"
                  ]
                },
                {
                  type: "comment",
                  name: "comment2",
                  title: "Comments/Precision"
                }
              ]
            }
          ]
        },

        // {
        //   name: "page5",
        //   elements: [
        //     {
        //       type: "panel",
        //       name: "panel5",

        //       elements: [
        //         {
        //           type: "matrixdropdown",
        //           name: "question3",
        //           title:
        //             "Please rank these impacts by fears. Where 1 is the impact your fear the most and 3 you fear the least. Please select numbers in front of the impact text accordingly",
        //           columns: [
        //             {
        //               cellType: "rating",
        //               " name": "level",
        //               title: "Level",

        //               rateValues: [
        //                 {
        //                   value: "value1",
        //                   text: "1"
        //                 },
        //                 {
        //                   value: "value2",
        //                   text: "2"
        //                 },
        //                 {
        //                   value: "value3",
        //                   text: "3"
        //                 }
        //               ]
        //             },
        //             {
        //               name: "comments2",
        //               title: "Comments/Precision",
        //               cellType: "text"
        //             }
        //           ],
        //           choices: [1],
        //           cellType: "checkbox",
        //           rows: [
        //             "Safety",
        //             "Reputation & Financial Loss",
        //             "Threat Scale"
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // },

        // {
        //   name: "page6",
        //   elements: [
        //     {
        //       type: "panel",
        //       name: "panel6",
        //       elements: [
        //         {
        //           type: "multipletext",
        //           name: "pricelimit",
        //           title: "From a market point of view: ",
        //           colCount: 2,
        //           items: [
        //             {
        //               name: "region",
        //               title:
        //                 "What regions are you willing to sell the solution/products to?"
        //             },
        //             {
        //               name: "business",
        //               title:
        //                 "What type of business are you willing to sell the solutio/product to? "
        //             }
        //           ]
        //         },
        //         {
        //           type: "comment",
        //           name: "comment2",
        //           title: "Comments/Precision"
        //         }
        //       ]
        //     }
        //   ]
        // }

        // {
        //   name: "page7",
        //   title: "General Considerations",
        //   elements: [
        //     {
        //       type: "panel",
        //       name: "panel7",

        //       elements: [
        //         {
        //           type: "checkbox",
        //           name: "car",
        //           title:
        //             "🔧Why are considering an evaluation/certification of your Solution/Product?",
        //           // isRequired: true,
        //           hasOther: true,
        //           otherText: "Others",
        //           colCount: 4,
        //           // "choicesOrder": "asc",
        //           choices: [
        //             {
        //               value: "government",
        //               text: "Government bid "
        //             },
        //             {
        //               value: "customer",
        //               text: "Customer requirement"
        //             },
        //             {
        //               value: "nice",
        //               text: "Nice to have "
        //             },
        //             {
        //               value: "temperature",
        //               text: "Temperature"
        //             },
        //             {
        //               value: "improve",
        //               text: "Improve security"
        //             },
        //             {
        //               value: "marketing",
        //               text: "Marketing"
        //             },
        //             {
        //               value: "notsure",
        //               text: "I'm not sure"
        //             }
        //           ]
        //         },

        //         {
        //           name: "comment3",
        //           title: "Please comment:",
        //           type: "comment"

        //           //"startWithNewLine": false,
        //         }
        //       ]
        //     }
        //   ]
        // }

        /******************************* End of Likelihood ********************************** */
      ],
      showQuestionNumbers: "off",
      completedHtml: "<p><h4>Security Profile Results !!</h4></p>"
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
        preetycheckbox={this.preetycheckbox}
        //onUpdateQuestionCssClasses={this.onUpdateQuestionCssClasses}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div>The component after onComplete event</div>
    ) : null;
    return (
      <div>
        {surveyRender}
        {onCompleteComponent}
      </div>
    );
  }
}
// export default ({
//   return(
//     <h1>123</h1>
//     // <div>123</div>
//     // <div className="App">
//     //   <h1>SurveyJS react example</h1>
//     //   <h2>Checkbox - none of the above and select all</h2>
//     //   <SurveyComponent />
//     // </div>
    
//   );
// })

export default ({
  subheading = "Survey",
  heading = "Take Easy and do it",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  plans = null,
  primaryButtonText = "Buy Now",
  planDurations = [
    {
      text: "Month",
      switcherText: "Monthly",
    },
    {
      text: "Year",
      switcherText: "Yearly",
    }
  ]
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

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        {/* <PlanDurationSwitcher>
          {planDurations.map((planDuration, index) => (
            <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</SwitchButton>
          ))}
        </PlanDurationSwitcher> */}
        </HeaderContainer>
        <SurveyComponent />

      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    <script src="https://unpkg.com/survey-react"></script>
    </Container>
  );
};

