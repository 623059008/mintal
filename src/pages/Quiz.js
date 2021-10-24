import React, { useState, useEffect } from 'react'
import * as Survey from 'survey-react'
import './survey.css';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';

import { sendRequest, getCookie } from '../util';


const Container = tw(ContainerBase)`min-h-screen bg-primary-600 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;

Survey.StylesManager.applyTheme('modern');
Survey.surveyStrings.loadingSurvey = "Please wait. Your survey is loading. . .";

const Button = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const SurveyComponent = () => {
  const history = useHistory();
  const [survey, setSurvey] = useState(null);
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(-1);
  useEffect(() => {
    const fetchQuiz = async () => {
      const uid = getCookie('userid');
      if(!uid) {
        history.push('/signin');
        return;
      }
      const res = JSON.parse(await sendRequest('quiz', { uid: uid, count: 3 }))
      if(!res.success) {
        history.push('/error');
        return;
      }
      const { data = [] } = res;
      setQuizData(data)
      return data;
    }
    fetchQuiz().then((data) => {
      let json = {
        title: 'COVID-19 Mental Survey',
        showProgressBar: 'top',
        showTimerPanel: 'top',
        maxTimeToFinishPage: 120,
        maxTimeToFinish: 120*10,
        firstPageIsStarted: true,
        startSurveyText: 'Start Quiz',
        pages: [
          {
            questions: [
              {
                type: 'html',
                html: "You are about to start quiz by mintal. <br/>You have 120 seconds for every page and 20 minutes for the whole survey. <br/>Please click on <b>'Start Quiz'</b> button when you are ready."
              }
            ]
          }
        ],
        completedHtml:
          '<h5>You have completed <br />this survey.</h5>'
      }
      data && data.forEach(item => {
        json.pages.push({
          maxTimeToFinish: 120,
          questions: [
            {
              type: item.type,
              name: item.name,
              title: item.title,
              choices: JSON.parse(item.choices),
              score: JSON.parse(item.score),
            }
          ]
        });
      });
      console.log(json.pages);
      window.survey = new Survey.Model(json);
      setSurvey(window.survey);
      window.survey.onComplete.add(function(sender) {
        const answerList =  JSON.parse(data[0]["choices"]);
        const answer = sender.data || [];
        const scoreList = []
        for(let ans in answer) {
          answerList.forEach((item,ind) => {
            if(item === answer[ans]) {
              scoreList.push(ind+1);
            }
          });
        }
        let sendRecord = async (score) => {
          const uid = getCookie('userid');
          if(!uid) {
            return;
          }
          const res = JSON.parse(await sendRequest('addRecord', { uid: uid, quizscore: score }))
          if(!res.success) {
            history.push('/error');
            return;
          }
          
          setScore(score);
        }
        const sum = scoreList && scoreList.reduce((next, prev)=> next+prev) || 0;
        sendRecord(sum);
      }); 
    })
  }, []);

  return (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
            {(quizData.length>0 && survey) && <Survey.Survey model={survey} />}
            {(quizData.length === 0 || !survey) && <ReactLoading type="spin" color="#34d339" height={'20%'} width={'20%'} />}
            {(quizData.length>0 && score>=0) && <Button onClick={()=>{
              history.push(`/result?score=${score}`);
            }}><span className="text">Check Result</span></Button>}
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>);
}

export default SurveyComponent;
