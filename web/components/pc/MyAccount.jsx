/**
 * Created by cshao on 8/7/16.
 */

"use strict";

var React = require('react');
var api = require('../common/api');

var SampleList = require('./SampleList');

var MyAccount = React.createClass({
  getInitialState: function() {
    return {sampleListData: []};
  },
  componentDidMount: function() {
    $.get(api.SAMPLE_LIST, function(data) {
      this.setState({
        sampleListData: data
      });
    }.bind(this));
  },
  handleDeleteData: function(id) {
    $.ajax(api.SAMPLE_LIST+'/'+id, {
      method: 'DELETE'
    }).done(function() {
      var newSampleListData = this.state.sampleListData;
      for (var i=0; i<newSampleListData.length; i++) {
        if (newSampleListData[i].id === id) {
          newSampleListData.splice(i, 1);
          break;
        }
      }
      this.setState({
        sampleListData: newSampleListData
      });
    }.bind(this));
  },
  render: function(){
    return (
      <div>
        <h3>Sample list</h3>
        {this.state.sampleListData.length > 0 ?
          <SampleList data={this.state.sampleListData} handleDeleteData={this.handleDeleteData}/>
          :
          null
        }
      </div>
    );
  }
});

module.exports = MyAccount;