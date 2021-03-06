import React, { Component } from "react"
import DayDate from "./DayDate"
// import "./day.css"
import party from "../images/party.gif"
import sloth from "../images/sloth.gif"
import sad from "../images/sad.gif"
import stress from "../images/stress.gif"
import { TextArea, Button } from 'semantic-ui-react'

export default class DayForm extends Component {
    // Set initial state


    state = {
        moodId: "",
        description: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating day object, and
        invoking the function reference passed from parent component
     */

    constructNewDay = evt => {
        evt.preventDefault()
        const days = {
            moodId: this.props.moods.find(m => m.rating === this.state.moodId).id,
            description: this.state.description,
            date: DayDate.getDate(),
            userId: JSON.parse(sessionStorage.getItem("credentials")).id
        }

        // Create the day and redirect user to day list
        this.props.addDay(days, "days").then(() => this.props.history.push("/days"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="container">
                    <label>
                        <h5 id="moodLabel">Rad</h5>
                        <input type="radio"
                            onChange={this.handleFieldChange}
                            id="moodId"
                            name="mood"
                            value="/static/media/party.cd534470.gif"
                            checked={this.state.moodId === "/static/media/party.cd534470.gif"}
                        />
                        <img src={party} alt="Rad" className="rad" />
                    </label>
                    <label>
                        <h5 id="moodLabel">Tired</h5>
                        <input type="radio"
                            onChange={this.handleFieldChange}
                            id="moodId"
                            name="mood"
                            value="/static/media/sloth.38784354.gif"
                            checked={this.state.moodId === "/static/media/sloth.38784354.gif"}
                        />
                        <img src={sloth} alt="Tired" className="tired" />
                    </label>
                    <label>
                        <h5 id="moodLabel">Sad</h5>
                        <input type="radio"
                            onChange={this.handleFieldChange}
                            id="moodId"
                            name="mood"
                            value="/static/media/sad.e49477f7.gif"
                            checked={this.state.moodId === "/static/media/sad.e49477f7.gif"}
                        />
                        <img src={sad} alt="Sad" className="sad" />
                    </label>
                    <label>
                        <h5 id="moodLabel">Stressed</h5>
                        <input type="radio"
                            onChange={this.handleFieldChange}
                            id="moodId"
                            name="mood"
                            value="/static/media/stress.078d84f6.gif"
                            checked={this.state.moodId === "/static/media/stress.078d84f6.gif"}
                        />
                        <img src={stress} alt="Stressed" className="stressed" />
                    </label>
                    <TextArea autoHeight placeholder='Why tho?' style={{ minHeight: 100 }} required
                        onChange={this.handleFieldChange}
                        id="description"
                        className="descriptionForm" />
                    <Button color="violet" compact size="huge" floated="right" icon="save outline" type="submit" onClick={this.constructNewDay} />
                </form>
            </React.Fragment>
        )
    }
}