import React, { useState, useEffect } from 'react'
import * as Survey from 'survey-react'

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';

import { request, getCookie } from '../util';


const Container = tw(ContainerBase)`min-h-screen bg-primary-600 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;

Survey.StylesManager.applyTheme('modern')

var json = {
  title: 'American History',
  showProgressBar: 'bottom',
  showTimerPanel: 'top',
  maxTimeToFinishPage: 10,
  maxTimeToFinish: 25,
  firstPageIsStarted: true,
  startSurveyText: 'Start Quiz',
  pages: [
    {
      questions: [
        {
          type: 'html',
          html:
            "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
        }
      ]
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'civilwar',
          title: 'When was the Civil War?',
          choices: [
            '1750-1800',
            '1800-1850',
            '1850-1900',
            '1900-1950',
            'after 1950'
          ],
          correctAnswer: '1850-1900'
        }
      ]
    },
    {
      questions: [
        {
          type: 'radiogroup',
          name: 'libertyordeath',
          title: "Who said 'Give me liberty or give me death?'",
          choicesOrder: 'random',
          choices: [
            'John Hancock',
            'James Madison',
            'Patrick Henry',
            'Samuel Adams'
          ],
          correctAnswer: 'Patrick Henry'
        }
      ]
    },
    {
      maxTimeToFinish: 15,
      questions: [
        {
          type: 'radiogroup',
          name: 'magnacarta',
          title: 'What is the Magna Carta?',
          choicesOrder: 'random',
          choices: [
            'The foundation of the British parliamentary system',
            'The Great Seal of the monarchs of England',
            'The French Declaration of the Rights of Man',
            'The charter signed by the Pilgrims on the Mayflower'
          ],
          correctAnswer: 'The foundation of the British parliamentary system'
        }
      ]
    }
  ],
  completedHtml:
    '<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>'
}

const SurveyComponent = () => {
  const [survey, setSurvey] = useState({})
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    const fetchQuiz = async () => {
      const uid = getCookie('userid')
      const res = JSON.parse(await request('queryQuiz', { uid }))
      const { data = [] } = res
      setQuizData(data)
    }
    fetchQuiz().then(() => {
      const survey = new Survey.Model(json)
      survey.onComplete.add(function (sender) {
        document.querySelector('#surveyResult').textContent =
          'Result JSON:\n' + JSON.stringify(sender.data, null, 3)
      })
      setSurvey(survey)
    })
  }, [])

  return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
            <Survey.Survey model={survey} />
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>);
}

export default SurveyComponent;
