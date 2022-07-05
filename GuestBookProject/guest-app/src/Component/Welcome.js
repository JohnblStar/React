import React, { Component } from "react";


class Welcome extends Component { //문구(텍스트)


    render() {


        return (
            <div className="Table">
                <table>
                    <tbody>
                        <tr>
                            <th className="headerZone">
                                {this.props.text}
                            </th>
                        </tr>
                        <tr className="welcomeTableHead">
                            <td>
                                <p className="welcomeTextCheck">
                                    본인의 정보가 맞으신가요?
                                </p>
                                <p className="welcomeTextHello">
                                    정확하다면 '제출하기',<br/>
                                    아니라면 '다시쓰기'를 눌러주세요!
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan="5" className="welcomeTablebody">
                                <p className="welcomeTextHello">
                                    이름: {this.props.wname}<br/><br/>
                                    전화번호: {this.props.wphone}<br/><br/>
                                    날짜: {this.props.wdate}<br/><br/>
                                    체온: {this.props.wtemp}<br/><br/>
                                    발열: {this.props.whot}<br/>
                                    기침: {this.props.wcl}<br/>
                                    증상: {this.props.wsick}
                                </p>
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr className="footerZone">
                            <td colSpan="2">
                                <div className="buttonName_2">
                                    <button type="button" className="b1">
                                        제출하기
                                    </button>
                                    <button type="button" className="b2">
                                        다시쓰기
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Welcome;