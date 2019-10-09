import React, { Component } from 'react'

class JobType extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>Who do you need</label>
                    <input type='text' placeholder='Plumber'/>
                    <label>What happened</label>
                    <input type='text' placeholder='Broken Door'/>
                    <input type='submit' />
                </form>

            </div>
        )
    }
}

export default JobType