'use strict'

const JWT = require ('jsonwebtoken');

const createTokenPair = async ( payload, publicKey, privateKey ) => {
    try{
        //accessToken 
        const accessToken = await JWT.sign ( payload, publicKey, { //algorithm HS256 par default
            //algorithm: 'RS256', //lv2
            expiresIn: '2 days'
        }); 
        //payload: contains shipping information transferred from this system to another system via a token
        //privateKey: not stored in the database, occurs only once during signing -> then passed to the browser
        const refreshToken = await JWT.sign( payload, privateKey, {
            //algorithm: 'RS256', //lv2
            expiresIn: '7 days'
        }); 


        //console.error(`accessToken verify::`, accessToken);
        //console.error(`publicKey verify::`, publicKey);
        JWT.verify ( accessToken, publicKey, (err, decode) => {
            if(err){
                console.error(`error verify::`, err);
            }else{
                console.log(`decode verify::`, decode);
            }
        });
        return { accessToken, refreshToken }
    }catch (error) {
        // console.error(error);
        // return error
    }
}

module.exports = {
    createTokenPair
}