import React from 'react';
import API from '../api';
import {Ajax} from '../util';
import Download from '../components/download';
import './app.scss';

var App = React.createClass({

    componentDidMount : function(){
        Ajax.post(API.AJAX_INIT_APP)
            .then(function(res){
                
            })
    },

    render : function(){
        return (
            <div className="view">
                <div className="wrap">
                    <div className="head">
                        <div className="bg1"></div>
                        <div className="bg2"></div>
                        <div className="bg3"></div>
                    </div>
                    <div className="container">
                        <Download />
                    </div>
                    <div className="footer">本活动最终解释权归赛事举办方所有</div>
                </div>
            </div>
        )
    }
})

module.exports = App;