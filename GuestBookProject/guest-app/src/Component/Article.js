import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_green.css";
import "react-datepicker/dist/react-datepicker.css";
import { InputMask } from 'react-masked';


class Article extends Component{
    constructor(props){
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            date: new Date()
            // name: '',
            // phone: '',
            // datepicker: '',
            // temp: '',
            // hot: '',
            // cl: '',
            // sick: ''
        }
    }

    // handleOnClick = (e) => {
    //     if(this.props.onSubmit.name.value === ''){
    //         alert('이름 넣어');
            
    //         return false;
    //     }else{
    //         alert('완료');
    //         return true;
    //     }
    // }

    handleOnSubmit = (e) => {  //submit 작업시 발동 함수
        e.preventDefault();
        alert('onSubmit!!');
        let name = e.target.name.value;
        let phone = e.target.phone.value;
        let datepicker = e.target.datePicker.value;
        let firstTemp = e.target.bignum.value;
        let secondTemp = e.target.smlnum.value;
        let hot = e.target.hot.value;
        let cl = e.target.cl.value;
        let sick = e.target.sick.value;

        if(name === ''){
            alert('이름을 입력하세요!');
            return false;
        }else if(phone === ''){
            alert('전화번호를 입력하세요!');
            return false;
        }else if(datepicker === ''){
            alert('날짜와 시간을 달력을 선택해 입력해주세요!');
            return false;
        }else if(firstTemp === ''){
            alert('체온을 정확히 입력하셨는지 확인해주세요!');
            return false;
        }else if(secondTemp === ''){
            alert('체온을 정확히 입력하셨는지 확인해주세요!');
            return false;
        }else if(hot === ''){
            alert('발열 확인을 체크해주세요!');
            return false;
        }else if(cl === ''){
            alert('기침 확인을 체크해주세요!');
            return false;
        }else if(sick === ''){
            alert('호흡기 증상 여무를 체크해주세요!');
            return false;
        }else{
            this.props.onSubmit( //submit 작업 props
                name,
                phone,
                datepicker,
                firstTemp+"."+secondTemp,
                e.target.hot.value,
                e.target.cl.value,
                e.target.sick.value,
                'welcome'
            );
            return true;
        }
    }

    render(){

        const { date } = this.state;

        return(
            <article>
                <form name="joinForm" action="/Welcome" method="post" //회원정보 입력 form
                    onSubmit={this.handleOnSubmit} //onSubmit props에 함수 지정
                    noValidate='novalidate'
                >
                    <div className="Table">
                        <table>
                            <tbody>
                                <tr>
                                    <th colSpan="2" className="headerZone">{this.props.text}</th>
                                </tr>
                                <tr>
                                    <th className="articleTableHead">성명</th>
                                    <td>
                                        <input type="text" name="name" placeholder="홍길동"
                                        className="inputText"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTableHead">연락처</th>
                                    <td>
                                        <InputMask name="phone"mask="999-9999-9999" placeholder="010-1234-5678" className="inputText"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTableHead">일시(일자/시간)</th>
                                    <td>
                                        <Flatpickr
                                            name="datePicker"
                                            options={{minDate: "2021-01-01"}}
                                            data-enable-time
                                            value={date}
                                            onChange={date => {
                                            this.setState({ date });
                                            }}
                                            className="inputText"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTableHead">체온(℃)</th>
                                    <td>
                                        <select name="bignum" className="subText">
                                            <option value="">선택사항</option>
                                            <option value="38">38</option>
                                            <option value="37">37</option>
                                            <option value="36">36</option>
                                            <option value="35">35</option>
                                            <option value="34">34</option>
                                        </select>
                                        .
                                        <select name="smlnum" className="subText">
                                            <option value="">선택사항</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                        ℃
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTablebody">발열</th>
                                    <td>
                                        <div className="form-check">
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="hot"
                                                    value="O"
                                                    onChange = {() => onchange}
                                                    className="form-check-input"/>
                                                있음 
                                            </label>
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="hot"
                                                    value="X"
                                                    onChange={() => onchange}
                                                    className="form-check-input"/>
                                                없음
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTablebody">기침</th>
                                    <td>
                                        <div className="form-check">
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="cl"
                                                    value="O"
                                                    onChange={() => onchange}
                                                    className="form-check-input"/>
                                                있음 
                                            </label>
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="cl"
                                                    value="X"
                                                    onChange={() => onchange}
                                                    className="form-check-input"/>
                                                없음
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="articleTablebody">호흡기 증상</th>
                                    <td>
                                        <div className="form-check">
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="sick"
                                                    value="O"
                                                    onChange={() => onchange}
                                                    className="form-check-input"/>
                                                있음
                                            </label>
                                            <label className="subText">
                                                <input
                                                    type="radio"
                                                    name="sick"
                                                    value="X"
                                                    onChange={() => onchange}
                                                    className="form-check-input"/>
                                                없음
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="footerZone">
                                    <td colSpan="2">
                                        <button type="submit"
                                        // onClick={this.handleOnClick}
                                        >작성완료</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </article>
        );
    }
}

export default Article;