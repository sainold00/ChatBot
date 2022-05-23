import React from 'react';
import { Component } from 'react';
import { Container, Form, Button } from "react-bootstrap"

const { Configuration, OpenAIApi } = require("openai");

//bot history
const newBotHistory = []

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            usePrompt: "The AI Response is . . . ",
            response: "Awaiting the Response . . ."
        }
    }

    onFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.userPrompt)

        //OpenAI
        const configuration = new Configuration({
            apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        openai.createCompletion("text-curie-001", {
            prompt: "",
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
            .then((response) => {
                this.setState({

                    usePrompt: `${formDataObj.userPrompt}`,
                    response: `${response.data.choices[0].text}`
                })

                const botHistory = {
                    usePrompt: `${formDataObj.userPrompt}`,
                    response: `${response.data.choices[0].text}`
                }
                console.log(botHistory)


                function addNewBotHistory() {
                    newBotHistory.push(botHistory)
                }
                addNewBotHistory();
                console.log(newBotHistory)
            });


    }



    render() {
        return (
            <div>
                <h1>Chat Bot with OpenAI</h1>
                <h3>Enter Your Prompt and Start Chatting!</h3>
                <Container>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            
                            <Form.Control
                                type="text"
                                size="lg"
                                name="userPrompt"
                                placeholder="Your Prompt Here" />
                        </Form.Group>
                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>

                    <br />
                    <br />
                    <h3>Prompt: {this.state.usePrompt}</h3>
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder={this.state.response}
                        as="textarea"
                        rows={7}
                        readOnly />
                    <br/>
                    <h3>Chat History</h3>
                    <hr />
                    <div id='promptHistorySection'>
                        {newBotHistory.reverse().map((x, i) => (
                            <React.Fragment key={i}>
                                <p>
                                    Prompt:"{x.usePrompt}"
                                </p>
                                <p>
                                    Response: "{x.response}"
                                </p>

                            </React.Fragment>
                        ))}

                    </div>

                </Container>

            </div>
        )
    }
}

export default HomePage



