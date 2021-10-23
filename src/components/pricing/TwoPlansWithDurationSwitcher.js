import React, { useState } from "react";
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
    let temp = {
      choise: [
        "No or little time",
        "A small part of the time",
        "Quite a lot of time",
        "Availability",
        "Most or all of the time"
      ],
      grade: [1, 2, 3, 4, 5]
    }

    // let shuffle_choise = (temp) => {
    //   let choice = JSON.parse(JSON.stringify(temp.choice));
    //   let grade = JSON.parse(JSON.stringify(temp.grade));

    //   let currentIndex = choice.length;
    //   let randomIndex;
    
    //   // While there remain elements to shuffle...
    //   while (currentIndex !== 0) {
    
    //     // Pick a remaining element...
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex--;
    
    //     // And swap it with the current element.
    //     [ choice[currentIndex], choice[randomIndex] ] = [
    //       choice[randomIndex], choice[currentIndex] ];
    //     // And swap it with the current element.
    //     [ grade[currentIndex], grade[randomIndex] ] = [
    //       grade[randomIndex], grade[currentIndex] ];
    //   }
    //   return {choice, grade};
    // }
 
    let questionList = {
      question1: "Whether the learning efficiency in the new environment\
         is guaranteed to be the same as that in the original environment",
      question2: "Is it because learning efficiency is affected in the new environment",
      question3: "Is the quality of sleep in the new environment the same as in the original country?",
      question4: "Will you feel like crying when you are in a new environment, or will you cry for no reason?",
      question5: "I feel depressed and depressed",
      question6: "I think the mood is the best in the morning",
      question7: "I eat as much as usual",
      question8: "I feel like crying, or will I cry",
      question9: "I can't sleep at night",
      question10: "I noticed that my weight was dropping",
      question11: "My heartbeat is faster than before",
      question12: "I'm restless, it's hard to keep calm",
      qustion13: "My mind is as clear as usual",
      question14: "I am full of expectations for the future",
      question15: "I get angry more easily than usual, or get irritated easily"
    }

    let json = {
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "panel",
              name: "panel1",
              elements: [
                {
                  type: "radiogroup",
                  name: "question0",
                  renderAs: "prettycheckbox",
                  title: questionList.question1,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question1",
                  renderAs: "prettycheckbox",
                  title: questionList.question2,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question2",
                  renderAs: "prettycheckbox",
                  title: questionList.question3,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question3",
                  renderAs: "prettycheckbox",
                  title: questionList.question4,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question4",
                  renderAs: "prettycheckbox",
                  title: questionList.question5,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question5",
                  renderAs: "prettycheckbox",
                  title: questionList.question6,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question5",
                  renderAs: "prettycheckbox",
                  title: questionList.question7,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question6",
                  renderAs: "prettycheckbox",
                  title: questionList.question6,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question7",
                  renderAs: "prettycheckbox",
                  title: questionList.question7,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question8",
                  renderAs: "prettycheckbox",
                  title: questionList.question10,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question9",
                  renderAs: "prettycheckbox",
                  title: questionList.question11,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question10",
                  renderAs: "prettycheckbox",
                  title: questionList.question11,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question11",
                  renderAs: "prettycheckbox",
                  title: questionList.question11,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question12",
                  renderAs: "prettycheckbox",
                  title: questionList.question12,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question13",
                  renderAs: "prettycheckbox",
                  title: questionList.question13,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question14",
                  renderAs: "prettycheckbox",
                  title: questionList.question14,
                  choices: temp.choise
                },
                {
                  type: "radiogroup",
                  name: "question15",
                  renderAs: "prettycheckbox",
                  title: questionList.question15,
                  choices: temp.choise
                },
              ]
            }
          ]
        },

        {
          name: "page2",
          elements: [
            {
              type: "panel",
              name: "panel2",

              elements: [
                {
                  type: "matrixdropdown",
                  name: "question2",
                  title:
                    "Please rank these impacts by your emotion right now. Where 1 is the most happy and 5 is most depression. Please select numbers in front of the impact text accordingly",
                  columns: [
                    {
                      cellType: "rating",
                      " name": "level",
                      title: "Level",
                      isRequired: true,
                      rateMin: 1,
                      rateMax: 11,
                      minRateDescription: "(Most unlikely)",
                      maxRateDescription: "(Most likely)"
                    }
                    
                  ],
                  choices: [1],
                  cellType: "checkbox",
                  rows: [
                    "What are you currently feels right now",
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

       
        /******************************* End of Likelihood ********************************** */
      ],
      showQuestionNumbers: "off",
      completedHtml: "<p><h4>Security Profile Results !!</h4></p>"
    };
    var classNames = require('classnames');
    
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

let result_list = {
  normal: "You are not currently significantly troubled by depression. It is normal that life's events, big and small, may bring some mood swings, and almost everyone experiences sadness or depression at one time or another.\
  For you at the moment, perhaps life now meets your expectations and\
   is still under your control, so you don't get a lot of indigestible depression. Perhaps you are more optimistic yourself, or you have a high tolerance for frustration, which also enables you to face life's various overwhelming events very well.\
  You have good emotional regulation ability, at least the current state is so. When something bad happens, you may feel some negative emotions in the moment, but you are able to digest them quickly or use some methods to get rid of them. For example:\
  Reasonable catharsis and relaxation: go to a big meal, go to the game to kill a game, or go to the spa, massage to relax, etc.\
  And a good and trustworthy friend to talk about it; \
  Divert your attention to do something that gives you a sense of \
   accomplishment: some people will do things they are interested in and good at.\
  ",
  mediumDepression: "You may currently be in a moderate state of depression. In the near future, you may be prone to feeling sad, upset, or somewhat inexplicably anxious. You can only feel happy when something really exciting and happy happens, but this happiness lasts much shorter than before.\
  Things that used to be fun and colorful seem to have faded lately. You have some difficulty in getting up and doing things. If you get criticized or have a little trouble at work or school. If you get criticized or have a little trouble at work or school, you are more likely to doubt yourself,\
   and sometimes you feel really powerless in reality.\
  Physically. Physically, you may experience loss of appetite, easy fatigue, insomnia, etc. Some people show a great increase in appetite and sleepiness. Whichever physical reaction is different from usual - it may indicate that your current state is a cause for concern.\
  You can think back to when you started slowly becoming this way because of what happened? Have you experienced these things before? Or were you surrounded by people who had similar experiences? How did you or those around you get by before? \
  Translated with www.DeepL.com/Translator (free version)\
  ",
  depression:"You may currently be in a moderate state of depression. In the near future, you may be prone to feeling sad, upset, or some unexplained anxiety. You can only feel pleasure if \
  something really exciting and happy happens, but the pleasure lasts much shorter than before.\
Things that used to be fun and colorful seem to have faded recently. You have some trouble getting up to do something. If you have been criticized or had a little trouble at work or school. If you are criticized or have a little trouble at work or school, you are more likely to doubt yourself, \
and sometimes you feel that reality is really powerless.\
  Physically. Physically, you may experience a lack of appetite, \
  easy fatigue, insomnia, etc. Some people show a surge in appetite and sleepiness. \
  Whichever physical reaction is different from the usual - may indicate that your current state of affairs is a cause for concern.\
  You can think back to when you began to slowly become like this, because of what happened? Have you experienced these things before? Or people around you have a similar experience? How did you or others around you get through it before?"
}


export default ({
  subheading = "Survey",
  heading = "Take Easy and do it",
  description = "Take a test to try yourself to test your emotion",
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
        </HeaderContainer>
        <SurveyComponent /> 
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <script crossorigin src="https://unpkg.com/survey-react"></script>
    </Container>
  );
};

