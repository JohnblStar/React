import React, { Component } from 'react';
import Subject from './Component/Subject';
import Article from './Component/Article';
import Welcome from './Component/Welcome';
import './App.css';


class App extends Component { //메인 App 컴포넌트

  constructor(props){
    super(props);
    this.state = {
      mode:'join',
      title: '코로나19 출입명부 작성',
      join: {desc: '필요 기록사항'},
      welcome: {desc:'기록사항 확인'},
      list: [{name:'홍길동',phone:'010-1234-5678',date:'monday',temp:"36.5",hot:'X',cl:'X',sick:'X'}]
    }
  }
  
  
  render() {
    var item_max = 0; 

    console.log( 'render',this.state.list, 'mode', this.state.mode, 'list', this.state.list[item_max]);

    var _title, _desc, _Article = null;


    if(this.state.mode === 'join'){
      _title = this.state.title;
      _desc = this.state.join.desc;
      _Article = <Article
      text={_desc}
      onSubmit={(_name, _phone, _date, _temperature, _hot, _cl, _sick, _mode) => {
        this.setState({
          list:[{name:_name, phone:_phone, temp:_temperature, date:_date, hot:_hot, cl:_cl, sick:_sick}],
          mode: _mode
        }, () => console.log('callback은 ' , this.state.list[item_max])
        );
      }}
    />
    }
    if(this.state.mode === 'welcome'){
      _title = this.state.title;
      _desc = this.state.welcome.desc;
      _Article = 
        <Welcome
          text = {_desc}
          wname = {this.state.list[item_max].name}
          wphone = {this.state.list[item_max].phone}
          wdate = {this.state.list[item_max].date}
          wtemp = {this.state.list[item_max].temp}
          whot = {this.state.list[item_max].hot}
          wcl = {this.state.list[item_max].cl}
          wsick = {this.state.list[item_max].sick}
        />
    }



    return ( //메인 App 구현 상태
      <div className="App">
        <Subject title={_title} />
        {_Article}
      </div>
    );
  }
}

export default App;
