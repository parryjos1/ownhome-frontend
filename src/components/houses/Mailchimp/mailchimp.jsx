

import React, { Component } from 'react';
import './mailchimp.css';

class Mailchimp extends Component {


    render() {

        return(
            <div className="mailchimp-ctn">

                <div id="mc_embed_signup">
                    <form action="https://ourownhome.us5.list-manage.com/subscribe/post?u=c7d806e683d7346321563e81e&amp;id=0dd85e8fe6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <div>

                        <input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Enter Email address" required />
                        </div>
                        <div class="clear">
                            <input type="submit" value="Join Waitlist" name="subscribe" id="mc-embedded-subscribe" class="button" />
                        </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Mailchimp