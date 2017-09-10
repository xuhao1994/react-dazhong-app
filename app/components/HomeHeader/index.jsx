import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory,Link } from 'react-router'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            name:''
        }
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" 
                            placeholder="请输入关键字"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                            onKeyUp={this.handleKeyUp.bind(this)}
                            />
                    </div>
                </div>
            </div>
        )
    }
    handleChange(e){
        this.setState({
            name:e.target.value
        })
    }

    handleKeyUp(e){
        if(e.keyCode !== 13){
            return
        }
        hashHistory.push('/search/all/'+encodeURIComponent(this.state.name))
    }

}

export default HomeHeader