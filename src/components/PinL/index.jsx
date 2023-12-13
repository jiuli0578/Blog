import React from "react"
import {nanoid} from "nanoid";
import {message} from "antd";
import {Comments} from "@icon-park/react";
import './index.css'
import person from "../../assets/images/person.png";
import windows from "../../assets/images/windows.png";
import mac from "../../assets/images/mac.png";
import chrome from "../../assets/images/chrome.png";
import edge from "../../assets/images/Microsoft Edge.png";

export default function PinL(props) {

    const {comments,setComments,ItemBac} = props

    const [messageApi, contextHolder] = message.useMessage();
    const [ImgUrl,setImgUrl] = React.useState('')
    const [QQInput,setQQInput] = React.useState('')
    const [EmailInput,setEmailInput] = React.useState('')
    const [NicknameInput,setNicknameInput] = React.useState('')
    const [TextareaInput,setTextareaInput] = React.useState('')
    const handleInputBlur = async () => {
        if (QQInput !== ''){
            setEmailInput(QQInput + 'qq.com')
            try {
                const response = await fetch(`/api1/g?b=qq&nk=${QQInput}&s=100`);
                if (!response.ok) {
                    new Error(`HTTP error! Status: ${response.status}`);
                }
                setImgUrl(response.url)
            }catch (error) {
                console.error('Error:', error.message);
            }
        }
    };
    const handleQQChange = (e) => {
        setQQInput(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    };
    const handleNicknameChange = (e) => {
        setNicknameInput(e.target.value);
    };
    const handleTextareaChange = (e) => {
        setTextareaInput(e.target.value);
    };

    // 获取用户的浏览器类型
    function getBrowser() {
        const UserAgent = navigator.userAgent.toLowerCase();
        let browser = null;
        const browserArray = {
            IE: window.ActiveXObject || "ActiveXObject" in window, // IE
            Chrome: UserAgent.indexOf('chrome') > -1 && UserAgent.indexOf('safari') > -1, // Chrome浏览器
            Firefox: UserAgent.indexOf('firefox') > -1, // 火狐浏览器
            Opera: UserAgent.indexOf('opera') > -1, // Opera浏览器
            Safari: UserAgent.indexOf('safari') > -1 && UserAgent.indexOf('chrome') === -1, // safari浏览器
            Edge: UserAgent.indexOf('edge') > -1, // Edge浏览器
            QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
            WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
        };
        for (const i in browserArray) {
            if (browserArray[i]) {
                browser = i;
            }
        }
        return browser;
    }
    // 获取用户的系统类型
    function getOperationSys() {
        let OS = '';
        const OSArray = {};
        const UserAgent = navigator.userAgent.toLowerCase();
        OSArray.Windows = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
        OSArray.Mac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC')
            || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
        OSArray.iphone = UserAgent.indexOf('iPhone') > -1;
        OSArray.ipod = UserAgent.indexOf('iPod') > -1;
        OSArray.ipad = UserAgent.indexOf('iPad') > -1;
        OSArray.Android = UserAgent.indexOf('Android') > -1;
        for (const i in OSArray) {
            if (OSArray[i]) {
                OS = i;
            }
        }
        return OS;
    }

    // 表单提交和添加评论的回调
    const handleSubmit = (e) => {
        e.preventDefault();
        if (QQInput !== '' && NicknameInput !== '' && TextareaInput !== ''){
            const date = new Date().toString()
            const commentObj ={id:nanoid(),QQ:QQInput,ImgUrl:ImgUrl,Email:EmailInput,Nickname:NicknameInput,Textarea:TextareaInput,Date:date.substring(0, date.length - 18),Browser:getBrowser(),OS:getOperationSys()}
            // console.log(commentObj.Date)
            const newComments = [commentObj,...comments]
            setComments(newComments)

            // 提交后清空表单
            setEmailInput('');
            setImgUrl('')
            e.target.reset();
        }else {
            messageApi.open({
                type: 'error',
                content: '请填写信息后再评论',
            });
        }

    }
    return (
        <div className={ItemBac ? 'comments dayMode' : 'comments nightMode'}>
            <div className="top">
                <Comments className="icon" theme="multi-color" size="20" fill={['#337ab7' ,'#2F88FF' ,'#FFF' ,'#43CCF8']} strokeWidth={3}/>评论区
            </div>
            <div className="pl">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="avatar">
                        <img src={ImgUrl ? ImgUrl : person} alt="avatar"/>
                    </div>
                    <div className="inputs">
                        <input style={{ backgroundColor: ItemBac ? '#ffffff' : '#333333', color: ItemBac ? '#000000' : '#ffffff' }}  type="text" placeholder="填写QQ获取邮箱和头像" onBlur={handleInputBlur} onChange={handleQQChange}/>
                        <input style={{ backgroundColor: ItemBac ? '#ffffff' : '#333333', color: ItemBac ? '#000000' : '#ffffff' }}  type="text" placeholder="邮箱" value={EmailInput} onChange={handleEmailChange}/>
                        <input style={{ backgroundColor: ItemBac ? '#ffffff' : '#333333', color: ItemBac ? '#000000' : '#ffffff' }}  type="text" placeholder="昵称" onChange={handleNicknameChange}/>
                    </div>
                    <div className="btn">
                        <textarea placeholder="评论内容" style={{ backgroundColor: ItemBac ? '#ffffff' : '#333333', color: ItemBac ? '#000000' : '#ffffff' }} onChange={handleTextareaChange} />
                        <button>提交评论</button>
                    </div>
                </form>
            </div>
            <div className="show">
                {
                    comments.map((commentObj) => {
                        return(
                            <div key={commentObj.id} className="showAll">
                                <div className="avatar">
                                    <img src={commentObj.ImgUrl} alt="avatar"/>
                                </div>
                                <div className="contact">
                                    <div className="nickname">
                                        <div>{commentObj.Nickname}</div>
                                        <div className="img">
                                            <img src={commentObj.OS === 'Windows' ? windows : mac} alt='os'/>
                                            <img src={commentObj.Browser === 'Chrome' ? chrome : edge} alt='browser'/>
                                        </div>
                                    </div>
                                    <div className="date">{commentObj.Date}</div>
                                    <div>{commentObj.Email}</div>
                                </div>
                                <div className="textarea" style={{ backgroundColor: ItemBac ? '#F4F6FB' : '#303030', color: ItemBac ? '#000000' : '#ffffff' }}>{commentObj.Textarea}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
