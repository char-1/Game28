const BASE_URL="http://192.168.0.100:8081/";
export const HTTP_URL_API={
    USER_LOGIN:BASE_URL+'API/USER/Login',//登录
    USER_REGISTER:BASE_URL+'API/USER/Register',//注册
    RANKING:BASE_URL+'API/USER/UserWinRanking',//排行榜
    USER_SCORE:BASE_URL+'API/USER/scoredetail',//会员积分
    USER_MODIFY:BASE_URL+'API/USER/Edit',//信息修改
    SYSTEM_MESSAGE:BASE_URL+'API/SYSTEM/MESSAGE',//通知公告
    GAME_STATICS:BASE_URL+'API/GAME/STATICS',//投注统计
    GAME_DATALIST:BASE_URL+'API/GAME/LIST',//游戏列表
    USER_INFOMATION:BASE_URL+'API/USER/Center',//会员信息
    USER_RANKING:BASE_URL+'API/USER/Rank',//会员盈利排行榜
    GAME_ACTIVITY:BASE_URL+'API/GAME/Activity',//系统活动
    GAME_BETRATE:BASE_URL+'API/GAME/RATE',//游戏赔率
    GAME_BETINFO:BASE_URL+'API/GAMEBET/SubmitBet',//游戏投注
    GAME_BETRECORD:BASE_URL+'API/GAME/RECORD',//投注记录
    GAME_MODE:BASE_URL+'API/GAME/MODE',//游戏模式
    GMAE_CHART:BASE_URL+'API/GAME/CHART',//游戏走势图
    USER_ISSIGN:BASE_URL+'API/USER/CHECKSIGN',//校验是否签到
    USER_SIGNIN:BASE_URL+'API/USER/USERSIGN'//会员签到
};