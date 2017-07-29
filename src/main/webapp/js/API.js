/**
 * Created by zhou on 2017/6/13.
 */
var base = 'http://wangjingxin.top:8080';
var API = {
    base:base,
    postResume: this.base + '/api/plain/uploadResume',
    introduce: this.base + '/api/plain/getStudioIntro',
    login: this.base + '/api/plain/login',
    getNotice: this.base + '/api/member/getNotice',
    uploadNotice: this.base + '/api/admin/uploadNotice',
    deleteNotice: this.base + '/api/admin/deleteNotice',
    vote:this.base + '/api/member/vote',
    changePassword:this.base+'/api/member/changePassword',
    getDatum:this.base+'/api/member/getDatum',
    getUserInfo:this.base+'/api/member/getUserInfo',
    modifyUserInfo:this.base+'/api/member/modifyUserInfo',
    ProjectIntro:this.base+'/api/plain/getProjectIntro',
    GroupNumIntro:this.base+'/api/plain/getGroupIntro',
    activityIntro:this.base+'/api/plain/getActivity',
    uploadDatum:this.base+'/api/member/uploadDatum',
    modifyDatum:this.base+'/api/member/modifyDatum',
    deleteDatum:this.base+'/api/member/deleteDatum',
    setNewAct:this.base+'/api/admin/uploadActivity',
    changeAct:this.base+'/api/admin/modifyActivity'
}