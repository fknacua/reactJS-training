import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NewRecord from './newrecord';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Home from './home';

class Stepper extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <header>
                    I am a header
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new_record">New Record</a></li>
                        </ul>
                    </nav>
                    <br />
                </header>

                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/> 
                        <Route path="/new_record" component={NewRecord} exact/>
                        <NewRecord>
                            <Route component={({ match }) =>
                                <div>
                                    <Route path="/new_record/step_1" component={Step1} exact />
                                    <Route path="/new_record/step_2" component={Step2} exact />
                                    <Route path="/new_record/step_3" component={Step3} exact />
                                </div>
                            } />
                        </NewRecord>
                    </Switch>
                </BrowserRouter>

                <footer>
                    <br /><br />
                    <span>I am a footer</span>
                </footer>
            </div>
        )
    }
}
export default Stepper;