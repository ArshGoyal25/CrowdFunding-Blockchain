import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
    //get initial props function is used for server side rendering. 
    //It gets executed before render()
    //All the computation is performed first and then when returned render() can use it with this.props
    //We say static so that this function can be called without the instance of the class but from the class itself.
    //eg : CampaignIndex.getInitialProps and not const campaign = new CampaignIndex; campaign.getInitialProps
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route= {`/campaigns/${address}`}>
                        <a> View Campaign</a>
                    </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={ items } />;
    };

    render() {
        return (
            <Layout>
                <div> 
                    <h3> Open Campaigns </h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                floated="right"
                                content= "Create Campaign"
                                icon = "add circle"
                                primary
                            />
                        </a>
                    </Link>

                    {this.renderCampaigns()} 
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;