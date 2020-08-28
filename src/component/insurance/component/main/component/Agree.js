import React from 'react';
import { agreeCollect, agreeLookUp } from 'action/action';
import {connect} from 'react-redux';
import './Agree.css'

class Agree extends React.Component{
    render(){
        return(
            <div style={{fontFamily:"helvetica", display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                <details style={{margin:"2em",}}>
                    <summary style={{outline:'none',}}>개인(신용)정보의 수집 이용에 관한 사항</summary>
                    <iframe 
                        title="info"
                        frameborder="0"
                        srcDoc="
                                <div style='font-family:helvetica';>
                                개인(신용)정보의 수집·이용 목적
                                <p>
                                - 보험금지급·심사(보험금청구서류 접수대행 서비스 포함) 및 보험사고 조사(보험사기 조사 포함),
                                손해사정서 교부, 보험계약 유지·관리, 고객이력관리, 증빙서류보존, 보험금 지급관련 민원처리 및 분쟁대응
                                - 금융거래(보험료 및 보험금 등 출·수납을 위한 금융거래 신청, 자동이체 등 접수)관련 업무
                                - 보험금지급·심사 고객만족도 등 안내자료(모니터링 포함)발송
                                </p>

                                수집·이용할 개인(신용)정보의 내용
                                <p>
                                - 개인식별정보(성명, 주민등록번호, 외국인등록번호, 운전면허증번호, 주소, 전화번호, 전자우편주소 등),
                                계좌정보, 보험계약정보 및 보험금지급정보(사고정보 포함)
                                - 보험금사고 조사(보험사기 조사 포함) 및 손해사정업무 수행과 관련하여 취득한 개인(신용)정보
                                [경찰, 공공기관, 의료기관 등으로부터 본인의 위임을 받아 취득한 각종 조사서, 증명서, 진료기록 등에 포함된 개인(신용)정보 포함]
                                </p>

                                개인(신용)정보의 보유·이용 기간
                                <p>
                                - 수집·이용 동의일로부터 거래종료 후 5년까지
                                (단, 거래종류 후 5년이 경과한 후에는 보험금 지급, 금융사고 조사, 보험사기 방지·적발, 민원처리, 법령상
                                의무이행을 위한 경우에 한하여 보유·이용하며, 별도보관)
                                </p>

                                <p>
                                ※거래 종료일은 보험계약 만기, 해지, 취소, 철회일 또는 소멸일, 보험금 청구건 소멸시효 완성일, 채무·채권 소멸일 중
                                가장 나중에 도래한 사유를 기준으로 거래종료일을 판단함.
                                다만, 만기 등 사유발생일 이후라도 만기환급금 또는 해지환급금 등을 수령하지 않았거나 상환할 금액이 남아 있는 경우 및
                                보험금지급이 진행중이거나 수사·소송이 진행 중인 경우 제외(이하 동일)
                                </p>
                                </div>
                                "
                        />
                </details>
                <div style={{textAlign:"right"}}>
                    동의
                    <input
                        type="checkbox"
                        checked={this.props.collect}
                        onChange={e=>this.props.agreeCollect(e.target.checked)}
                    />
                </div>

                <details style={{margin:"2em",}}>
                    <summary style={{outline:'none',}}>개인(신용)정보 조회에 관한 사항</summary>
                    <iframe 
                        title="info2" 
                        frameborder="0"
                        srcDoc="
                                <div style='font-family:helvetica'>
                                개인(신용)정보 조회 목적
                                <p>- 보험금지급·심사(보험금청구서류 접수대행 서비스 포함) 및 보험사고 조사(보험사기 조사 포함)</p>

                                조회할 개인(신용)정보
                                <p>- 보험계약정보, 보험금지급 관련 정보(사고정보 포함), 질병 및 상해 관련 정보</p>

                                조회동의 유효 기간 및 조회자[개인(신용)정보를 제공받는 자]의 개인(신용)정보의 보유·이용 기간
                                <p>
                                - 수집·이용 동의일로부터 거래종료 후 5년까지
                                (단, 거래종료 후 5년이 경과한 후에는 보험금 지급, 금융사고조사, 분쟁해결, 민원처리, 법령상 의무이행을 위한 경우에 한하여 보유·이용하며, 별도 보관함)
                                </p>
                                </div>
                                "
                    />
                </details>

                <div style={{textAlign:"right"}}>
                    동의 
                    <input 
                        type="checkbox"
                        checked={this.props.lookUp}
                        onChange={e=>this.props.agreeLookUp(e.target.checked)}
                    />
                </div>

            </div>
        );
    }
}

let dispatchToProps = (dispatch) => {
    return {
        agreeCollect: collect => dispatch(agreeCollect(collect)),
        agreeLookUp: lookUp => dispatch(agreeLookUp(lookUp))
    }
}

Agree = connect(undefined, dispatchToProps)(Agree);

export default Agree;