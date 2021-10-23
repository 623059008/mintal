import React, { Component } from "react";
import $ from "jquery";
import select2Init from 'select2';
import 'select2/dist/css/select2.min.css';

import * as Survey from "survey-react";


import "survey-react/modern.css";
import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
    constructor() {
        super();
        window["$"] = window["jQuery"] = $;
select2Init();

    }
    render() {
        widgets.select2(Survey);
widgets.select2tagbox(Survey);


        

        const json = {
  "elements": [
    {
      "type": "tagbox",
      "isRequired": true,
      "choicesByUrl": {
        "url": "https://restcountries.eu/rest/v2/all"
      },
      "name": "countries",
      "title": "Please select all countries you have been for the last 3 years."
    }
  ]
};
const survey = new Survey.Model(json);

        

        

        return (
            <Survey.Survey
                model={survey}
            />
        );
    }
}

export default SurveyComponent;
