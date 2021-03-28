import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    "0xDBBC28027b01E9867dDd6016f0F6104606bf2A13"
);

export default instance;